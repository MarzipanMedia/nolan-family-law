/**
 * An image, served as AVIF with a WebP fallback at more than one width when it has
 * responsive copies (made by tools/make-responsive-image.mjs), or as a single file otherwise.
 */
import type { CSSProperties } from 'react';

/** A single file, e.g. a WebP converted from a prototype. */
export interface SingleImage { src: string; width: number; height: number }
/** Responsive copies at public/images/<name>-<w>.avif and .webp. */
export interface ResponsiveImage { name: string; widths: number[]; width: number; height: number }
export type ImageAsset = SingleImage | ResponsiveImage;

interface Props {
  img: ImageAsset;
  alt: string;
  /** The rendered width, for choosing a file, e.g. "(max-width: 600px) 92vw, 500px". */
  sizes?: string;
  style?: CSSProperties;
  priority?: boolean;
  [dataAttr: `data-${string}`]: string | undefined;
}

const set = (i: ResponsiveImage, ext: string) => i.widths.map((w) => `/images/${i.name}-${w}.${ext} ${w}w`).join(', ');

export function Picture({ img, alt, sizes, style, priority, ...rest }: Props) {
  const loading = priority ? undefined : ('lazy' as const);
  const fetchPriority = priority ? ('high' as const) : undefined;
  if ('src' in img) {
    return <img src={img.src} width={img.width} height={img.height} alt={alt} loading={loading} fetchPriority={fetchPriority} decoding="async" style={style} {...rest} />;
  }
  return (
    <picture>
      <source type="image/avif" srcSet={set(img, 'avif')} sizes={sizes} />
      <source type="image/webp" srcSet={set(img, 'webp')} sizes={sizes} />
      <img src={`/images/${img.name}-${img.width}.webp`} width={img.width} height={img.height} alt={alt} loading={loading} fetchPriority={fetchPriority} decoding="async" style={style} {...rest} />
    </picture>
  );
}
