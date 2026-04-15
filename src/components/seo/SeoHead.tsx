import { useEffect } from "react";

type SeoHeadProps = {
  title: string;
  description: string;
  siteUrl: string;
  canonicalPath: string;
  ogImagePath: string;
  instagram: string;
  brandName: string;
  serviceDescription: string;
  areaServed: string;
  addressLocality: string;
  addressRegion: string;
  addressCountry: string;
};

const trimTrailingSlash = (value: string) => value.replace(/\/+$/, "");

const toAbsoluteUrl = (origin: string, path: string) => {
  try {
    return new URL(path, `${origin}/`).toString();
  } catch {
    return path;
  }
};

const setMeta = (attribute: "name" | "property", key: string, content: string) => {
  let tag = document.head.querySelector(`meta[${attribute}="${key}"]`) as HTMLMetaElement | null;
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute(attribute, key);
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
};

const setCanonical = (href: string) => {
  let tag = document.head.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
  if (!tag) {
    tag = document.createElement("link");
    tag.setAttribute("rel", "canonical");
    document.head.appendChild(tag);
  }
  tag.setAttribute("href", href);
};

const setJsonLd = (id: string, schema: Record<string, unknown>) => {
  let tag = document.head.querySelector(`script[data-seo-id="${id}"]`) as HTMLScriptElement | null;
  if (!tag) {
    tag = document.createElement("script");
    tag.type = "application/ld+json";
    tag.setAttribute("data-seo-id", id);
    document.head.appendChild(tag);
  }
  tag.text = JSON.stringify(schema);
};

export const SeoHead = ({
  title,
  description,
  siteUrl,
  canonicalPath,
  ogImagePath,
  instagram,
  brandName,
  serviceDescription,
  areaServed,
  addressLocality,
  addressRegion,
  addressCountry,
}: SeoHeadProps) => {
  useEffect(() => {
    const runtimeOrigin = typeof window !== "undefined" ? window.location.origin : "";
    const normalizedOrigin = trimTrailingSlash(siteUrl || runtimeOrigin);
    const canonicalUrl = toAbsoluteUrl(normalizedOrigin, canonicalPath);
    const ogImageUrl = toAbsoluteUrl(normalizedOrigin, ogImagePath);

    document.documentElement.lang = "pt-BR";
    document.title = title;

    setMeta("name", "description", description);
    setMeta("name", "robots", "index,follow,max-image-preview:large");
    setMeta("property", "og:title", title);
    setMeta("property", "og:description", description);
    setMeta("property", "og:type", "website");
    setMeta("property", "og:url", canonicalUrl);
    setMeta("property", "og:site_name", brandName);
    setMeta("property", "og:locale", "pt_BR");
    setMeta("property", "og:image", ogImageUrl);
    setCanonical(canonicalUrl);

    setJsonLd("website", {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: brandName,
      url: canonicalUrl,
      sameAs: [instagram],
    });

    setJsonLd("professional-service", {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      name: brandName,
      url: canonicalUrl,
      description: serviceDescription,
      areaServed,
      address: {
        "@type": "PostalAddress",
        addressLocality,
        addressRegion,
        addressCountry,
      },
      sameAs: [instagram],
    });
  }, [
    addressCountry,
    addressLocality,
    addressRegion,
    areaServed,
    brandName,
    canonicalPath,
    description,
    instagram,
    ogImagePath,
    serviceDescription,
    siteUrl,
    title,
  ]);

  return null;
};
