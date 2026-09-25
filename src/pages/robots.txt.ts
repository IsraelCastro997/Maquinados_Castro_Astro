import { business } from '../data/business';
export function GET({site}:{site:URL|undefined}) {
 const ready=business.publicReady && !!business.name && !!business.address && !!business.whatsapp && !!site;
 return new Response(ready ? `User-agent: *\nAllow: /\nSitemap: ${new URL('/sitemap.xml',site).href}\n` : 'User-agent: *\nAllow: /\n', {headers:{'Content-Type':'text/plain; charset=utf-8'}});
}
