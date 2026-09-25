import { business } from '../data/business';
export function GET({site}:{site:URL|undefined}) {
 const ready=business.publicReady && !!business.name && !!business.address && !!business.whatsapp && !!site;
 const url=ready ? `<url><loc>${new URL('/',site).href.replace(/&/g,'&amp;')}</loc></url>` : '';
 return new Response(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${url}</urlset>`,{headers:{'Content-Type':'application/xml; charset=utf-8'}});
}
