import { useEffect } from "react";
import { siteContent } from "@/data/siteContent";

type SeoHeadProps = {
  title: string;
  description: string;
  canonicalPath?: string;
  indexable?: boolean;
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

const setCanonical = (href: string | undefined) => {
  let tag = document.head.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
  if (!href) {
    tag?.remove();
    return;
  }
  if (!tag) {
    tag = document.createElement("link");
    tag.setAttribute("rel", "canonical");
    document.head.appendChild(tag);
  }
  tag.setAttribute("href", href);
};

export const SeoHead = ({
  title,
  description,
  canonicalPath = "/",
  indexable = true,
}: SeoHeadProps) => {
  useEffect(() => {
    const { siteUrl, ogImagePath } = siteContent.seo;
    const canonicalUrl = indexable ? new URL(canonicalPath, siteUrl).href : undefined;
    const ogImageUrl = new URL(ogImagePath, siteUrl).href;

    document.documentElement.lang = "pt-BR";
    document.title = title;

    setMeta("name", "description", description);
    setMeta("name", "robots", indexable ? "index,follow,max-image-preview:large" : "noindex,follow");
    setMeta("property", "og:title", title);
    setMeta("property", "og:description", description);
    setMeta("property", "og:type", "website");
    if (canonicalUrl) setMeta("property", "og:url", canonicalUrl);
    else document.head.querySelector('meta[property="og:url"]')?.remove();
    setMeta("property", "og:site_name", siteContent.brand.name);
    setMeta("property", "og:locale", "pt_BR");
    setMeta("property", "og:image", ogImageUrl);
    setMeta("property", "og:image:width", "1200");
    setMeta("property", "og:image:height", "630");
    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:title", title);
    setMeta("name", "twitter:description", description);
    setMeta("name", "twitter:image", ogImageUrl);
    setCanonical(canonicalUrl);
    const schema = document.head.querySelector<HTMLScriptElement>("script[data-schema-path]");
    if (schema && (!indexable || schema.dataset.schemaPath !== canonicalPath)) schema.remove();
  }, [canonicalPath, description, indexable, title]);

  return null;
};
