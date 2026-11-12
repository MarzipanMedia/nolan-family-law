'use client';
/**
 * The site's small amount of browser behaviour, ported from the prototypes' script:
 * sticky header shrink, mobile menu, back to top, "On this page" highlight, scroll reveal
 * (with the scroll "sweep" backstop), review slider, counters, topic pre-select and tracking.
 *
 * It works on data attributes, exactly as the prototypes do, so page markup stays plain HTML.
 * Renders nothing.
 */
import { useEffect } from 'react';

declare global {
  interface Window { dataLayer?: Record<string, unknown>[] }
}

function track(event: string, data: Record<string, unknown>) {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, page_path: window.location.pathname, ...data });
}

export function SiteBehaviour() {
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const $ = <T extends Element = HTMLElement>(sel: string, root: ParentNode = document) => root.querySelector<T>(sel);
    const $$ = <T extends Element = HTMLElement>(sel: string, root: ParentNode = document) => Array.from(root.querySelectorAll<T>(sel));
    const cleanups: Array<() => void> = [];
    const on = <K extends keyof WindowEventMap>(target: Window | Document | Element, type: K | string, fn: (e: any) => void, opts?: AddEventListenerOptions) => {
      target.addEventListener(type, fn, opts);
      cleanups.push(() => target.removeEventListener(type, fn, opts));
    };

    const nav = $('[data-nav]');
    const topWrap = $('[data-show-top]');
    const menuWrap = $('[data-menu-wrap]');
    const menuBtn = $('[data-action="toggleMenu"]');

    // ── Mobile menu ──
    function setMenu(open: boolean) {
      if (!menuWrap || !menuBtn) return;
      menuWrap.hidden = !open;
      menuBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
      menuBtn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    }

    // ── Enquiry form helpers ──
    function showForm() {
      const success = $('[data-form-success]'), wrap = $('[data-form-wrap]');
      if (success && wrap) { success.hidden = true; wrap.hidden = false; }
    }
    function pickTopic(value: string) {
      const topic = $<HTMLSelectElement>('form select[name="topic"]');
      if (topic && Array.from(topic.options).some((o) => o.value === value)) topic.value = value;
      showForm();
    }

    // ── Review slider (homepage, child custody) ──
    const slider = $('[data-slider]');
    let slide = 0, paused = false;
    function setSlide(i: number) {
      if (!slider) return;
      const slides = $$('[data-slide], [data-quote]', slider);
      if (!slides.length) return;
      slide = ((i % slides.length) + slides.length) % slides.length;
      slides.forEach((s, k) => s.toggleAttribute('data-active', k === slide));
      $$('[data-dot]', slider).forEach((d, k) => {
        d.toggleAttribute('data-active', k === slide);
        d.setAttribute('aria-pressed', k === slide ? 'true' : 'false');
      });
    }
    if (slider) {
      setSlide(0);
      on(slider, 'pointerenter', () => { paused = true; });
      on(slider, 'pointerleave', () => { paused = false; });
      if (!reduce) {
        const timer = window.setInterval(() => { if (!document.hidden && !paused) setSlide(slide + 1); }, 7000);
        cleanups.push(() => window.clearInterval(timer));
      }
    }

    // ── Clicks: actions and tracking ──
    on(document, 'click', (e: MouseEvent) => {
      const target = e.target as Element;
      const actionEl = target.closest<HTMLElement>('[data-action]');
      const action = actionEl?.getAttribute('data-action') ?? '';
      if (action === 'toggleMenu') setMenu(!!menuWrap?.hidden);
      else if (action === 'closeMenu') setMenu(false);
      else if (action === 'backToTop') window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' });
      else if (action === 'resetForm') showForm();
      else if (action === 'prevSlide') { paused = true; setSlide(slide - 1); }
      else if (action === 'nextSlide') { paused = true; setSlide(slide + 1); }
      else if (action === 'goToSlide') { paused = true; setSlide(Number(actionEl!.getAttribute('data-slide-index') ?? 0)); }
      else if (action === 'openFaq') {
        const d = document.getElementById(actionEl!.getAttribute('data-faq-target') ?? '') as HTMLDetailsElement | null;
        if (d) d.open = true;
      }
      const topicEl = target.closest<HTMLElement>('[data-pick-topic]');
      if (topicEl) pickTopic(topicEl.getAttribute('data-pick-topic')!);

      // Any link inside the open mobile menu closes it.
      if (menuWrap && !menuWrap.hidden && target.closest('[data-mobile-menu] a')) setMenu(false);

      // Tracking (D-38). Phone taps: call_click. Other calls to action: cta_click (D-31).
      const phone = target.closest<HTMLElement>('[data-office-phone]');
      if (phone) {
        track('call_click', {
          office: phone.getAttribute('data-office-phone'),
          click_location: phone.getAttribute('data-click-location') ?? 'body',
          cta_position: phone.getAttribute('data-cta-position') ?? '',
        });
      } else {
        const cta = target.closest<HTMLElement>('a[data-cta-position], button[data-cta-position]');
        if (cta) track('cta_click', { cta_position: cta.getAttribute('data-cta-position'), cta_target: cta.getAttribute('href') ?? '' });
      }
    });
    on(document, 'keydown', (e: KeyboardEvent) => { if (e.key === 'Escape' && menuWrap && !menuWrap.hidden) { setMenu(false); menuBtn?.focus(); } });

    // ── Scroll reveal: 55ms sibling stagger, 70ms for what is visible on load ──
    function reveal(el: HTMLElement, delay: number) {
      el.style.transitionDelay = delay ? `${delay}ms` : '';
      el.setAttribute('data-in', '');
      window.setTimeout(() => { el.style.transitionDelay = ''; }, delay + 800);
    }
    const nodes = $$('[data-reveal], [data-clip]');
    let io: IntersectionObserver | null = null;
    if (!('IntersectionObserver' in window)) nodes.forEach((n) => n.setAttribute('data-in', ''));
    else {
      io = new IntersectionObserver((entries) => {
        entries.forEach((e) => {
          const el = e.target as HTMLElement;
          if (!e.isIntersecting) { if (e.boundingClientRect.top < 0) { el.setAttribute('data-in', ''); io!.unobserve(el); } return; }
          const sibs = Array.from(el.parentElement?.children ?? []).filter((c) => c.hasAttribute('data-reveal') || c.hasAttribute('data-clip'));
          reveal(el, Math.min(Math.max(0, sibs.indexOf(el)), 5) * 55);
          io!.unobserve(el);
        });
      }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
      let k = 0;
      nodes.forEach((n) => {
        if (n.getBoundingClientRect().top < window.innerHeight * 0.92) reveal(n, Math.min(k++, 8) * 70);
        else io!.observe(n);
      });
      cleanups.push(() => io?.disconnect());
    }

    // Backstop (the "sweep"): browsers treat a fully clipped [data-clip] element as invisible,
    // so the observer never fires for it and below-the-fold images never appear on phones.
    // On every scroll and resize, reveal anything that has reached the viewport.
    let sweepQueued = false;
    function sweep() {
      if (sweepQueued) return;
      sweepQueued = true;
      requestAnimationFrame(() => {
        sweepQueued = false;
        $$('[data-reveal]:not([data-in]), [data-clip]:not([data-in])').forEach((n) => {
          if (n.getBoundingClientRect().top < window.innerHeight * 0.92) { reveal(n, 0); io?.unobserve(n); }
        });
      });
    }

    // ── Sticky header shrink, back to top, "On this page" highlight ──
    const tocSections = $$('[data-toc-section]');
    const tocLinks = $$('[data-toc-link]');
    function onScroll() {
      nav?.toggleAttribute('data-scrolled', window.scrollY > 24);
      if (topWrap) topWrap.hidden = window.scrollY <= 900;
      let current: string | null = null;
      tocSections.forEach((s) => { if (s.getBoundingClientRect().top < window.innerHeight * 0.35) current = s.id; });
      tocLinks.forEach((a) => a.toggleAttribute('data-active', a.getAttribute('data-toc-link') === current));
      sweep();
    }
    on(window, 'scroll', onScroll, { passive: true });
    on(window, 'resize', sweep, { passive: true });
    onScroll();

    // ── Counters animate once on entry; the final value is already in the markup ──
    const counters = $$('[data-counter]');
    if (counters.length && 'IntersectionObserver' in window && !reduce) {
      const cio = new IntersectionObserver((entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          cio.unobserve(e.target);
          const el = e.target as HTMLElement;
          const raw = el.getAttribute('data-count-to') ?? '';
          const target = parseFloat(raw);
          if (Number.isNaN(target)) return;
          const suffix = el.getAttribute('data-suffix') ?? '';
          const decimals = raw.includes('.') ? 1 : 0;
          const t0 = performance.now();
          const tick = (now: number) => {
            const p = Math.min(1, (now - t0) / 1100);
            el.textContent = (target * (1 - Math.pow(1 - p, 3))).toFixed(decimals) + suffix;
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        });
      }, { threshold: 0.4 });
      counters.forEach((n) => cio.observe(n));
      cleanups.push(() => cio.disconnect());
    }

    // Open a FAQ that is linked to directly, e.g. #faq-grandparents.
    function openHashTarget() {
      const el = window.location.hash ? document.getElementById(window.location.hash.slice(1)) : null;
      if (el instanceof HTMLDetailsElement) el.open = true;
    }
    on(window, 'hashchange', openHashTarget);
    openHashTarget();

    return () => cleanups.forEach((fn) => fn());
  }, []);

  return null;
}
