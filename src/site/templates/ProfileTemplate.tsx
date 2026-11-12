/**
 * The team profile template. Launch-critical (D-17): profiles earn about a third of the
 * site's Google clicks. Each keeps its exact URL, the person's name in the title, and Person
 * schema with the same @id used wherever that person appears on the site.
 */
import { abs, url, type City, type RouteKey } from '@/config/routes';
import { offices } from '@/config/offices';
import { personBySlug } from '@/config/people';
import { graph, breadcrumbNode, personNode, officeNode, officeId } from '@/lib/schema';
import { PageHero, Breadcrumb, Body } from '@/components/InnerPage';
import { CtaBand } from '@/components/CtaBand';
import type { Imported } from '@/site/imported';

export const profileMeta = (p: Imported) => ({ title: p.seoTitle, description: p.description });

export function profileSchema(key: RouteKey, p: Imported) {
  const known = personBySlug(p.slug);
  const image = p.image ? { image: abs('home').replace(/\/$/, '') + p.image } : {};
  const person: Record<string, unknown> = known
    ? { ...personNode(known), ...image }
    : { '@type': 'Person', '@id': abs(key, 'person'), name: p.title, ...(p.jobTitle ? { jobTitle: p.jobTitle } : {}), url: abs(key), worksFor: { '@type': 'LegalService', name: 'Nolan Family Law & Mediation', url: abs('home') }, ...image };
  return graph(
    { '@type': 'ProfilePage', '@id': abs(key, 'webpage'), url: abs(key), name: p.seoTitle, inLanguage: 'en-AU', dateModified: p.modified.slice(0, 10), mainEntity: { '@id': person['@id'] }, breadcrumb: { '@id': abs(key, 'breadcrumb') } },
    breadcrumbNode(key, ['home', { key: 'team', name: 'Our people' }, { key, name: p.title }]),
    person,
    ...(known ? [officeNode(known.office)] : []),
  );
}

export function ProfileTemplate({ routeKey, profile, city }: { routeKey: RouteKey; profile: Imported; city: City }) {
  const known = personBySlug(profile.slug);
  const office = offices[known?.office ?? city ?? 'sydney'];
  const role = known?.jobTitle ?? profile.jobTitle;
  const portrait = profile.image && (
    <div data-clip="true" style={{ position: 'relative', overflow: 'hidden', borderRadius: '3px', aspectRatio: '4 / 4.4', maxHeight: '520px', maxWidth: '460px', justifySelf: 'end', width: '100%', background: 'linear-gradient(180deg, #DCE9F0 0%, #E8E4DC 100%)' }}>
      <img data-hero-img="true" src={profile.image} alt={`${profile.title}${role ? `, ${role}` : ''}, Nolan Family Law & Mediation`} fetchPriority="high" decoding="async" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }} />
    </div>
  );
  return (
    <>
      <PageHero eyebrow="Our people" title={profile.title} lede={role} aside={portrait || undefined} />
      <Breadcrumb trail={[{ key: 'home' }, { key: 'team', name: 'Our people' }, { key: routeKey, name: profile.title }]} />
      <Body>
        <div className="prose" dangerouslySetInnerHTML={{ __html: profile.html }} />
        <p style={{ marginTop: '48px', fontSize: '16px' }}>
          <a href={url('team')} style={{ fontWeight: 600 }}>← Meet the rest of our people</a>
        </p>
      </Body>
      <CtaBand office={office.key} />
    </>
  );
}
