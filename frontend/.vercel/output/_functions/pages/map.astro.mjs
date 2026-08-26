/* empty css                                 */
import { c as createComponent, r as renderComponent, a as renderTemplate, b as renderScript, m as maybeRenderHead } from '../chunks/astro/server_BvIZ4Gm6.mjs';
import 'kleur/colors';
import { $ as $$Card } from '../chunks/Card_DqsaHV8i.mjs';
import { $ as $$Section, a as $$SectionTitle } from '../chunks/Section_GejLvlJZ.mjs';
import { $ as $$MainLayout } from '../chunks/MainLayout_BsuaeoN8.mjs';
export { renderers } from '../renderers.mjs';

const $$Map = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "Interactive Kigali Land Map \u2014 Zubaka", "description": "View real-time PostGIS parcel geometries, viewport-aware bounding box zoning, and point-in-polygon land compliance across Kigali." }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Section", $$Section, {}, { "default": async ($$result3) => renderTemplate` ${maybeRenderHead()}<div class="py-6"> ${renderComponent($$result3, "SectionTitle", $$SectionTitle, { "sectionTitle": "Interactive Land Map", "description": "Inspect real-time GeoJSON parcel boundaries, view Kigali Masterplan zoning classifications, and click any plot to view allowed construction permissions." })} ${renderComponent($$result3, "Card", $$Card, { "isUnderline": true }, { "default": async ($$result4) => renderTemplate` <div class="p-6 sm:p-10 bg-white rounded-[45px] flex flex-col space-y-8 font-grotesk"> <!-- Map Canvas & Inspector Grid --> <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"> <!-- Map Column (7 cols) --> <div class="lg:col-span-7 flex flex-col space-y-3"> <div class="relative w-full rounded-[30px] border-2 border-black shadow-[0px_5px_0px_#191a23] overflow-hidden bg-zinc-100"> <div id="leaflet-map" class="w-full h-[540px] z-10"></div> <!-- Bounding box button --> <button id="btn-bbox-refresh" class="absolute bottom-4 left-4 z-20 px-4 py-2 bg-white hover:bg-black text-black hover:text-white border-2 border-black rounded-xl text-xs font-medium shadow-[0px_2px_0px_#191a23] transition-colors">
Refresh Viewport Bounding Box
</button> <!-- Count Badge --> <div class="absolute top-4 right-4 z-20 px-3.5 py-1.5 bg-black text-white text-xs font-mono rounded-xl border border-black">
Parcels Loaded: <span id="map-counter">0</span> </div> </div> <p class="text-xs text-zinc-500 italic">
* Click any polygon on the map or click any coordinate for point-in-polygon lookup via <code>/api/v1/parcels/point</code>.
</p> </div> <!-- Inspector Drawer Column (5 cols) --> <div class="lg:col-span-5 w-full"> <div class="rounded-[35px] border-2 border-black shadow-[0px_5px_0px_#191a23] bg-[#f3f3f3] p-6 sm:p-8 flex flex-col space-y-5"> <!-- Empty State --> <div id="inspector-empty" class="py-16 text-center flex flex-col items-center space-y-3"> <div class="w-16 h-16 rounded-2xl bg-green border-2 border-black flex items-center justify-center text-black shadow-[0px_3px_0px_#191a23]"> <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path> </svg> </div> <h3 class="text-xl font-medium text-black">Select a Parcel on the Map</h3> <p class="text-sm text-zinc-600 max-w-xs">
Click any parcel polygon to trigger <code>GET /api/v1/parcels/&#123;id&#125;/report</code> and load AI land analysis.
</p> </div> <!-- Loading State --> <div id="inspector-loading" class="hidden py-20 text-center"> <div class="w-10 h-10 border-4 border-black border-t-green rounded-full animate-spin mx-auto mb-3"></div> <p class="text-sm font-medium text-black">Fetching Land Report from FastAPI...</p> </div> <!-- Active Content --> <div id="inspector-content" class="hidden flex flex-col space-y-5"> <div class="flex items-center justify-between"> <span id="detail-badge" class="greenhead text-sm font-medium">
RESIDENTIAL
</span> <span id="detail-area" class="bg-white border border-black px-3 py-1 rounded-xl text-xs font-mono text-black">
--- m²
</span> </div> <div> <h3 id="detail-upi" class="text-3xl font-medium text-black leading-tight">
UPI-00000
</h3> <p class="text-xs text-zinc-500 mt-1">Kigali City Land Use Masterplan</p> </div> <!-- Risk Notice --> <div id="detail-risk-card" class="p-4 rounded-2xl border-2 border-black bg-white shadow-[0px_3px_0px_#191a23]"> <h4 id="detail-risk-title" class="text-base font-medium text-black mb-1">
Compliance Status
</h4> <p id="detail-risk-text" class="text-xs text-zinc-700 leading-relaxed">
Evaluation loaded...
</p> </div> <!-- Allowed Uses --> <div class="bg-white p-4 rounded-2xl border border-black"> <h4 class="text-xs font-bold uppercase tracking-wider text-black mb-2 flex items-center gap-1.5"> <span class="w-2 h-2 rounded-full bg-emerald-500"></span>
Ibyemewe Kwubakwa (Allowed Uses)
</h4> <ul id="detail-allowed-list" class="space-y-1 text-xs text-zinc-700"> <!-- Dynamic --> </ul> </div> <!-- Restricted Uses --> <div class="bg-white p-4 rounded-2xl border border-black"> <h4 class="text-xs font-bold uppercase tracking-wider text-rose-600 mb-2 flex items-center gap-1.5"> <span class="w-2 h-2 rounded-full bg-rose-500"></span>
Ibibujijwe (Restricted Uses)
</h4> <ul id="detail-restricted-list" class="space-y-1 text-xs text-zinc-700"> <!-- Dynamic --> </ul> </div> <!-- AI Protection Advisory --> <div class="bg-green p-4 rounded-2xl border-2 border-black shadow-[0px_3px_0px_#191a23]"> <h4 class="text-xs font-bold uppercase tracking-wider text-black mb-1 flex items-center gap-1">
💡 AI Land Protection Advisory
</h4> <p id="detail-ai-explanation" class="text-xs text-black leading-relaxed font-normal">
Generating explanation...
</p> </div> <button id="btn-print-report" class="w-full py-4 bg-black hover:bg-green text-white hover:text-black rounded-2xl border-2 border-black text-base font-medium transition-colors shadow-[0px_3px_0px_#191a23]">
Print Safety Report
</button> </div> </div> </div> </div> </div> ` })} </div> ` })} ${renderScript($$result2, "C:/Users/HP/OneDrive/Documents/Codes/zubaka/frontend/src/pages/map.astro?astro&type=script&index=0&lang.ts")} ` })}`;
}, "C:/Users/HP/OneDrive/Documents/Codes/zubaka/frontend/src/pages/map.astro", void 0);

const $$file = "C:/Users/HP/OneDrive/Documents/Codes/zubaka/frontend/src/pages/map.astro";
const $$url = "/map";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Map,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
