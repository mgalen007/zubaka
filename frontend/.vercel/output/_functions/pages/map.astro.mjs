/* empty css                                 */
import { c as createComponent, r as renderComponent, a as renderTemplate, b as renderScript, m as maybeRenderHead } from '../chunks/astro/server_BvIZ4Gm6.mjs';
import 'kleur/colors';
import { $ as $$Card } from '../chunks/Card_BTm0t2Zq.mjs';
import { $ as $$Section, a as $$SectionTitle } from '../chunks/Section_GejLvlJZ.mjs';
import { $ as $$MainLayout, a as $$Icon } from '../chunks/MainLayout_zMxjt0RD.mjs';
export { renderers } from '../renderers.mjs';

const $$Map = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "Interactive Kigali Land Map \u2014 Zubaka", "description": "Browse real plots of land across Kigali on a map, and check each one's official zoning before you buy." }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Section", $$Section, {}, { "default": async ($$result3) => renderTemplate` ${maybeRenderHead()}<div class="py-6"> ${renderComponent($$result3, "SectionTitle", $$SectionTitle, { "sectionTitle": "Interactive Land Map", "description": "Browse plots on the map, see their official Kigali Masterplan zoning, and check what's allowed to be built there before you pay anyone." })} ${renderComponent($$result3, "Card", $$Card, { "isUnderline": true }, { "default": async ($$result4) => renderTemplate` <div class="p-6 sm:p-10 bg-white rounded-[45px] flex flex-col space-y-8 font-grotesk"> <!-- Map Canvas & Inspector Grid --> <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"> <!-- Map Column (7 cols) --> <div class="lg:col-span-7 flex flex-col space-y-3"> <div class="relative w-full rounded-[30px] border-2 border-black shadow-[0px_5px_0px_#191a23] overflow-hidden bg-zinc-100"> <div id="leaflet-map" class="w-full h-[540px] z-10"></div> <!-- Tile loading indicator --> <div id="map-tile-loading" class="hidden absolute top-4 left-4 z-20 px-3 py-1.5 bg-white text-black text-xs rounded-xl border border-black shadow-[0px_2px_0px_#191a23]">
Loading map...
</div> <!-- Refresh area button --> <button id="btn-bbox-refresh" class="absolute bottom-4 left-4 z-20 px-4 py-2 bg-white hover:bg-black text-black hover:text-white border-2 border-black rounded-xl text-xs font-medium shadow-[0px_2px_0px_#191a23] transition-all duration-200 transform hover:scale-105">
Refresh This Area
</button> <!-- Status Badge --> <div class="absolute top-4 right-4 z-20 px-3.5 py-1.5 bg-black text-white text-xs rounded-xl border border-black"> <span id="map-counter">Loading plots...</span> </div> </div> <!-- Fetch error banner --> <div id="map-error-banner" class="hidden p-3 rounded-xl border-2 border-black bg-rose-100 text-xs text-black flex items-center justify-between gap-3"> <span>Couldn't load plots right now — check your connection and try again.</span> <button id="btn-map-error-retry" class="shrink-0 px-3 py-1.5 bg-black text-white rounded-lg text-xs font-medium hover:bg-rose-600 transition-all duration-200 transform hover:scale-105">
Retry
</button> </div> <p class="text-xs text-zinc-500 italic">
* Click anywhere on the map to check that spot, or click a plot outline for its full report.
</p> </div> <!-- Inspector Drawer Column (5 cols) --> <div class="lg:col-span-5 w-full"> <div class="rounded-[35px] border-2 border-black shadow-[0px_5px_0px_#191a23] bg-[#f3f3f3] p-6 sm:p-8 flex flex-col space-y-5"> <!-- Empty State --> <div id="inspector-empty" class="py-16 text-center flex flex-col items-center space-y-3"> <div class="w-16 h-16 rounded-2xl bg-green border-2 border-black flex items-center justify-center text-black shadow-[0px_3px_0px_#191a23]"> ${renderComponent($$result4, "Icon", $$Icon, { "name": "map-pin", "class": "w-8 h-8" })} </div> <h3 class="text-xl font-medium text-black">Select a Plot on the Map</h3> <p class="text-sm text-zinc-600 max-w-xs">
Click any plot outline to see its zoning, allowed uses, and a plain-language safety report.
</p> </div> <!-- Loading State --> <div id="inspector-loading" class="hidden py-20 text-center"> <div class="w-10 h-10 border-4 border-black border-t-green rounded-full animate-spin mx-auto mb-3"></div> <p class="text-sm font-medium text-black">Checking this plot...</p> </div> <!-- Error State --> <div id="inspector-error" class="hidden py-16 text-center flex flex-col items-center space-y-3"> <div class="w-16 h-16 rounded-2xl bg-rose-100 border-2 border-black flex items-center justify-center text-black shadow-[0px_3px_0px_#191a23]"> ${renderComponent($$result4, "Icon", $$Icon, { "name": "warning-circle", "class": "w-8 h-8" })} </div> <h3 class="text-xl font-medium text-black">No Report Available</h3> <p id="inspector-error-text" class="text-sm text-zinc-600 max-w-xs">
We couldn't find a report for that spot. Try clicking directly on a plot outline.
</p> </div> <!-- Active Content --> <div id="inspector-content" class="hidden flex flex-col space-y-5"> <div class="flex items-center justify-between"> <span id="detail-badge" class="greenhead text-sm font-medium">
RESIDENTIAL
</span> <span id="detail-area" class="bg-white border border-black px-3 py-1 rounded-xl text-xs font-mono text-black">
--- m²
</span> </div> <div> <h3 id="detail-upi" class="text-3xl font-medium text-black leading-tight">
UPI-00000
</h3> <p class="text-xs text-zinc-500 mt-1">Kigali City Land Use Masterplan</p> </div> <!-- Risk Notice --> <div id="detail-risk-card" class="p-4 rounded-2xl border-2 border-black bg-white shadow-[0px_3px_0px_#191a23]"> <h4 class="text-base font-medium text-black mb-1 flex items-center gap-1.5"> ${renderComponent($$result4, "Icon", $$Icon, { "name": "warning", "id": "detail-risk-icon-warning", "class": "w-4 h-4 hidden shrink-0" })} ${renderComponent($$result4, "Icon", $$Icon, { "name": "check-circle", "id": "detail-risk-icon-ok", "class": "w-4 h-4 shrink-0" })} <span id="detail-risk-title">Compliance Status</span> </h4> <p id="detail-risk-text" class="text-xs text-zinc-700 leading-relaxed">
Evaluation loaded...
</p> </div> <!-- Allowed Uses --> <div class="bg-white p-4 rounded-2xl border border-black"> <h4 class="text-xs font-bold uppercase tracking-wider text-black mb-2 flex items-center gap-1.5"> <span class="w-2 h-2 rounded-full bg-emerald-500"></span>
Ibyemewe Kwubakwa (Allowed Uses)
</h4> <ul id="detail-allowed-list" class="space-y-1 text-xs text-zinc-700"> <!-- Dynamic --> </ul> </div> <!-- Restricted Uses --> <div class="bg-white p-4 rounded-2xl border border-black"> <h4 class="text-xs font-bold uppercase tracking-wider text-rose-600 mb-2 flex items-center gap-1.5"> <span class="w-2 h-2 rounded-full bg-rose-500"></span>
Ibibujijwe (Restricted Uses)
</h4> <ul id="detail-restricted-list" class="space-y-1 text-xs text-zinc-700"> <!-- Dynamic --> </ul> </div> <!-- AI Protection Advisory --> <div class="bg-green p-4 rounded-2xl border-2 border-black shadow-[0px_3px_0px_#191a23]"> <h4 class="text-xs font-bold uppercase tracking-wider text-black mb-1 flex items-center gap-1.5"> ${renderComponent($$result4, "Icon", $$Icon, { "name": "lightbulb", "class": "w-3.5 h-3.5" })}
AI Land Protection Advisory
</h4> <p id="detail-ai-explanation" class="text-xs text-black leading-relaxed font-normal">
Generating explanation...
</p> </div> <button id="btn-print-report" class="w-full py-4 bg-black hover:bg-green text-white hover:text-black rounded-2xl border-2 border-black text-base font-medium transition-all duration-200 transform hover:scale-105 shadow-[0px_3px_0px_#191a23]">
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
