import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { createServer } from "vite";

const escapeHtml = (text) => text.replace(/[&<>"']/g, (character) => ({
  "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
})[character]);

const vite = await createServer({ mode: process.argv[2] || "production", server: { middlewareMode: true, hmr: false, watch: null } });

try {
  const { origin, shareImage, renderPages } = await vite.ssrLoadModule("/src/entry-prerender.tsx");
  const template = await readFile("dist/index.html", "utf8");
  const pages = renderPages();

  for (const page of pages) {
    const destination = join("dist", page.path === "/" ? "index.html" : `${page.path.slice(1)}.html`);
    const url = new URL(page.path, origin).href;
    let html = template
      .replace(/<title>[^<]+<\/title>/, () => `<title>${escapeHtml(page.title)}</title>`)
      .replace(/(<meta\s+(?:name|property)="(?:og:title|twitter:title)"\s+content=")[^"]+/g, (_, prefix) => `${prefix}${escapeHtml(page.title)}`)
      .replace(/(<meta\s+(?:name|property)="(?:description|og:description|twitter:description)"\s+content=")[^"]+/g, (_, prefix) => `${prefix}${escapeHtml(page.description)}`)
      .replace(/(<meta\s+(?:name|property)="(?:og:image|twitter:image)"\s+content=")[^"]+/g, (_, prefix) => `${prefix}${escapeHtml(shareImage)}`)
      .replace(/(<meta\s+property="og:url"\s+content=")[^"]+/, (_, prefix) => `${prefix}${escapeHtml(url)}`)
      .replace(/(<link\s+rel="canonical"\s+href=")[^"]+/, (_, prefix) => `${prefix}${escapeHtml(url)}`)
      .replace(/<noscript>.*?<\/noscript>\s*/, "<noscript><style>.portfolio-form { display: none }</style></noscript>\n    ")
      .replace('<div id="root"></div>', () => `<div id="root" data-prerendered="${page.path}">${page.markup}</div>`);
    if (!page.indexable) {
      html = html
        .replace(/(<meta name="robots" content=")[^"]+/, "$1noindex,follow")
        .replace(/\s*<link rel="canonical"[^>]*>/, "")
        .replace(/\s*<meta property="og:url"[^>]*>/, "");
    }
    if (page.schema.length) {
      const schema = JSON.stringify({ "@context": "https://schema.org", "@graph": page.schema })
        .replace(/</g, "\\u003c");
      html = html.replace("</head>", () => `  <script type="application/ld+json" data-schema-path="${page.path}">${schema}</script>\n  </head>`);
    }
    await mkdir(dirname(destination), { recursive: true });
    await writeFile(destination, html);
    console.log(`HTML: ${page.path}`);
  }

  const sitemapEntries = pages
    .filter(({ indexable }) => indexable)
    .map(({ path }) => `  <url><loc>${escapeHtml(new URL(path, origin).href)}</loc></url>`);
  await writeFile("dist/sitemap.xml", [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...sitemapEntries,
    "</urlset>",
    "",
  ].join("\n"));
} finally {
  await vite.close();
}
