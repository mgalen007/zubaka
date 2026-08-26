import 'kleur/colors';
import { v as decodeKey } from './chunks/astro/server_BvIZ4Gm6.mjs';
import 'clsx';
import 'cookie';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_tW3zO2Qo.mjs';
import 'es-module-lexer';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///C:/Users/HP/OneDrive/Documents/Codes/zubaka/frontend/","cacheDir":"file:///C:/Users/HP/OneDrive/Documents/Codes/zubaka/frontend/node_modules/.astro/","outDir":"file:///C:/Users/HP/OneDrive/Documents/Codes/zubaka/frontend/dist/","srcDir":"file:///C:/Users/HP/OneDrive/Documents/Codes/zubaka/frontend/src/","publicDir":"file:///C:/Users/HP/OneDrive/Documents/Codes/zubaka/frontend/public/","buildClientDir":"file:///C:/Users/HP/OneDrive/Documents/Codes/zubaka/frontend/dist/client/","buildServerDir":"file:///C:/Users/HP/OneDrive/Documents/Codes/zubaka/frontend/dist/server/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.BeGtUwIh.css"}],"routeData":{"route":"/404","isIndex":false,"type":"page","pattern":"^\\/404\\/?$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.BeGtUwIh.css"},{"type":"inline","content":".custom-grid[data-astro-cid-qzn24t3o]{grid-template:auto auto}\n"}],"routeData":{"route":"/about","isIndex":false,"type":"page","pattern":"^\\/about\\/?$","segments":[[{"content":"about","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about.astro","pathname":"/about","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.BeGtUwIh.css"}],"routeData":{"route":"/ai","isIndex":false,"type":"page","pattern":"^\\/ai\\/?$","segments":[[{"content":"ai","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/ai.astro","pathname":"/ai","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/map.Dgihpmma.css"},{"type":"external","src":"/_astro/about.BeGtUwIh.css"}],"routeData":{"route":"/map","isIndex":false,"type":"page","pattern":"^\\/map\\/?$","segments":[[{"content":"map","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/map.astro","pathname":"/map","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.BeGtUwIh.css"}],"routeData":{"route":"/search","isIndex":false,"type":"page","pattern":"^\\/search\\/?$","segments":[[{"content":"search","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/search.astro","pathname":"/search","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.BeGtUwIh.css"},{"type":"inline","content":".custom-grid[data-astro-cid-qzn24t3o]{grid-template:auto auto}\n"}],"routeData":{"route":"/services","isIndex":false,"type":"page","pattern":"^\\/services\\/?$","segments":[[{"content":"services","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/services.astro","pathname":"/services","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.BeGtUwIh.css"},{"type":"inline","content":".accordion__icon[data-astro-cid-kq6n5brs]:before,.accordion__icon[data-astro-cid-kq6n5brs]:after{content:\"\";position:absolute;background-color:#000;transition:opacity .3s ease}.accordion__icon[data-astro-cid-kq6n5brs]:before{width:100%;height:6px;left:0;top:calc(50% - 3px)}.accordion__icon[data-astro-cid-kq6n5brs]:after{width:6px;height:100%;left:calc(50% - 3px);top:0}.accordion__icon[data-astro-cid-kq6n5brs].collapsed:after{opacity:0}\n.custom-grid[data-astro-cid-qzn24t3o]{grid-template:auto auto}\n"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"site":"https://zubaka.vercel.app","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/HP/OneDrive/Documents/Codes/zubaka/frontend/src/pages/404.astro",{"propagation":"none","containsHead":true}],["C:/Users/HP/OneDrive/Documents/Codes/zubaka/frontend/src/pages/about.astro",{"propagation":"none","containsHead":true}],["C:/Users/HP/OneDrive/Documents/Codes/zubaka/frontend/src/pages/ai.astro",{"propagation":"none","containsHead":true}],["C:/Users/HP/OneDrive/Documents/Codes/zubaka/frontend/src/pages/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/HP/OneDrive/Documents/Codes/zubaka/frontend/src/pages/map.astro",{"propagation":"none","containsHead":true}],["C:/Users/HP/OneDrive/Documents/Codes/zubaka/frontend/src/pages/search.astro",{"propagation":"none","containsHead":true}],["C:/Users/HP/OneDrive/Documents/Codes/zubaka/frontend/src/pages/services.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000noop-actions":"_noop-actions.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/404@_@astro":"pages/404.astro.mjs","\u0000@astro-page:src/pages/about@_@astro":"pages/about.astro.mjs","\u0000@astro-page:src/pages/ai@_@astro":"pages/ai.astro.mjs","\u0000@astro-page:src/pages/map@_@astro":"pages/map.astro.mjs","\u0000@astro-page:src/pages/search@_@astro":"pages/search.astro.mjs","\u0000@astro-page:src/pages/services@_@astro":"pages/services.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_CyD4U09q.mjs","C:/Users/HP/OneDrive/Documents/Codes/zubaka/frontend/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_B7rcMV8a.mjs","C:/Users/HP/OneDrive/Documents/Codes/zubaka/frontend/src/pages/map.astro?astro&type=script&index=0&lang.ts":"_astro/map.astro_astro_type_script_index_0_lang.CL_3OeYL.js","C:/Users/HP/OneDrive/Documents/Codes/zubaka/frontend/src/pages/search.astro?astro&type=script&index=0&lang.ts":"_astro/search.astro_astro_type_script_index_0_lang.fUcL1Dtp.js","C:/Users/HP/OneDrive/Documents/Codes/zubaka/frontend/src/layouts/MainLayout.astro?astro&type=script&index=0&lang.ts":"_astro/MainLayout.astro_astro_type_script_index_0_lang.DZe-9zfI.js","C:/Users/HP/OneDrive/Documents/Codes/zubaka/frontend/src/components/ui/AccordionItem.astro?astro&type=script&index=0&lang.ts":"_astro/AccordionItem.astro_astro_type_script_index_0_lang.Dhy_0rcf.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["C:/Users/HP/OneDrive/Documents/Codes/zubaka/frontend/src/components/ui/AccordionItem.astro?astro&type=script&index=0&lang.ts","function o(){const c=document.querySelectorAll(\".accordion__item\");c.forEach(e=>{const s=e.querySelector(\".accordion__toggle\"),t=e.querySelector(\".accordion__icon\");s&&t&&s.addEventListener(\"click\",l=>(l.stopPropagation(),c.forEach(a=>{if(a!==e&&a.classList.contains(\"active\")){const r=a.querySelector(\".accordion__toggle\"),i=a.querySelector(\".accordion__icon\");r&&i&&(a.classList.remove(\"active\"),a.classList.remove(\"bg-green\"),r.setAttribute(\"aria-expanded\",\"false\"),a.style.height=\"160px\",i.classList.remove(\"rotate-180\"),i.classList.remove(\"collapsed\"))}}),e.classList.contains(\"active\")?(e.classList.remove(\"active\"),s.setAttribute(\"aria-expanded\",\"false\"),e.style.height=\"160px\",t.classList.remove(\"rotate-180\"),e.classList.remove(\"bg-green\"),t.classList.remove(\"collapsed\")):(e.classList.add(\"active\"),s.setAttribute(\"aria-expanded\",\"true\"),e.style.height=e.scrollHeight+\"px\",e.classList.add(\"bg-green\"),t.classList.add(\"rotate-180\"),t.classList.add(\"collapsed\")),l.preventDefault(),!1))}),document.addEventListener(\"click\",e=>{c.forEach(s=>{const t=s.querySelector(\".accordion__toggle\"),l=s.querySelector(\".accordion__icon\");t&&l&&!s.contains(e.target)&&(s.classList.remove(\"active\"),s.classList.remove(\"bg-green\"),t.setAttribute(\"aria-expanded\",\"false\"),s.style.height=\"160px\",l.classList.remove(\"rotate-180\"),l.classList.remove(\"collapsed\"))})})}o();document.addEventListener(\"astro:after-swap\",o);"]],"assets":["/_astro/card-pic1.LmmlwL7_.png","/_astro/card-pic2.BeQ4x_k2.png","/_astro/card-pic3.D4d3JTsx.png","/_astro/card-pic4.CPZGvqT8.png","/_astro/icon6.D4rZeUDD.svg","/_astro/icon7.Djoc5xdb.svg","/_astro/logo-alt.vXayUnDU.svg","/_astro/hero.DlnIYQeU.png","/_astro/about.BeGtUwIh.css","/404.svg","/cover.png","/favicon.svg","/Logo.svg","/blog/image1.png","/blog/image2.png","/blog/image3.png","/blog/image4.png","/blog/image5.png","/_astro/MainLayout.astro_astro_type_script_index_0_lang.DZe-9zfI.js","/_astro/map.astro_astro_type_script_index_0_lang.CL_3OeYL.js","/_astro/map.Dgihpmma.css","/_astro/search.astro_astro_type_script_index_0_lang.fUcL1Dtp.js","/_astro/zoning.B0NG-PTX.js","/fonts/grotesk/SpaceGrotesk-Medium.woff","/fonts/grotesk/SpaceGrotesk-Regular.woff"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"wW4APUSqkwmxd4t81Zsgm5nNBTFUEzYIt0Pkh9X0b88="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
