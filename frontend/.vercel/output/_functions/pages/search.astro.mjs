/* empty css                                 */
import { c as createComponent, r as renderComponent, a as renderTemplate, b as renderScript, m as maybeRenderHead } from '../chunks/astro/server_BvIZ4Gm6.mjs';
import 'kleur/colors';
import { $ as $$Card } from '../chunks/Card_DqsaHV8i.mjs';
import { $ as $$Section, a as $$SectionTitle } from '../chunks/Section_GejLvlJZ.mjs';
import { $ as $$MainLayout } from '../chunks/MainLayout_BsuaeoN8.mjs';
export { renderers } from '../renderers.mjs';

const $$Search = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "UPI Land Search \u2014 Zubaka", "description": "Search any Unique Parcel Identifier (UPI) in Kigali to inspect official masterplan zoning, allowed construction uses, and AI-grounded protection reports." }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Section", $$Section, {}, { "default": async ($$result3) => renderTemplate` ${maybeRenderHead()}<div class="py-6"> ${renderComponent($$result3, "SectionTitle", $$SectionTitle, { "sectionTitle": "UPI Land Search", "description": "Enter a Unique Parcel Identifier (UPI) number to fetch instant land compliance reports directly from the Kigali City Masterplan database." })} ${renderComponent($$result3, "Card", $$Card, { "isUnderline": true }, { "default": async ($$result4) => renderTemplate` <div class="p-6 sm:p-12 bg-white rounded-[45px] flex flex-col space-y-8 font-grotesk max-w-4xl mx-auto"> <!-- Search Form --> <form id="upi-search-form" class="flex flex-col sm:flex-row gap-4 items-center"> <div class="relative flex-1 w-full"> <input type="text" id="upi-search-input" placeholder="Enter UPI Number (e.g., 1/01/03/01/05/0001)..." class="w-full border-2 border-black rounded-2xl px-6 py-5 font-grotesk text-lg text-black placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-green shadow-[0px_3px_0px_#191a23]"> </div> <button type="submit" class="w-full sm:w-auto px-10 py-5 bg-green hover:bg-black text-black hover:text-white rounded-2xl border-2 border-black text-xl font-medium shadow-[0px_3px_0px_#191a23] transition-colors shrink-0">
Verify UPI
</button> </form> <!-- Sample UPIs --> <div class="flex items-center gap-3 flex-wrap"> <span class="text-xs font-semibold text-zinc-500 uppercase tracking-wider">Try Demo UPIs:</span> <div id="sample-upi-list" class="flex gap-2 flex-wrap"> <button data-upi="1/01/03/01/05/0001" class="chip-search px-3.5 py-1.5 bg-[#f3f3f3] hover:bg-green text-black text-xs rounded-xl border border-black transition-colors font-mono">
1/01/03/01/05/0001
</button> <button data-upi="1/01/03/03/02/0002" class="chip-search px-3.5 py-1.5 bg-[#f3f3f3] hover:bg-green text-black text-xs rounded-xl border border-black transition-colors font-mono">
1/01/03/03/02/0002
</button> <button data-upi="1/01/03/02/01/0004" class="chip-search px-3.5 py-1.5 bg-[#f3f3f3] hover:bg-green text-black text-xs rounded-xl border border-black transition-colors font-mono">
1/01/03/02/01/0004
</button> </div> </div> <!-- Results Container --> <div id="search-result-container" class="mt-4"> <!-- Default Prompt --> <div id="result-prompt" class="p-8 rounded-[35px] border-2 border-black bg-[#f3f3f3] text-center space-y-2"> <h3 class="text-xl font-medium text-black">Ready to Verify Plot Safety</h3> <p class="text-sm text-zinc-600">
Type a UPI number above or click one of the demo chips to query <code>GET /api/v1/land/report/&#123;upi&#125;</code>.
</p> </div> <!-- Loading Spinner --> <div id="result-loading" class="hidden p-12 text-center"> <div class="w-10 h-10 border-4 border-black border-t-green rounded-full animate-spin mx-auto mb-3"></div> <p class="text-sm font-medium text-black">Querying Kigali Land Masterplan API...</p> </div> <!-- Active Report View --> <div id="result-report" class="hidden p-8 rounded-[35px] border-2 border-black bg-[#f3f3f3] shadow-[0px_5px_0px_#191a23] space-y-6"> <div class="flex items-center justify-between"> <span id="report-zoning-badge" class="greenhead text-base font-medium">
RESIDENTIAL
</span> <span id="report-area-badge" class="bg-white border border-black px-4 py-1.5 rounded-xl text-sm font-mono text-black">
--- m²
</span> </div> <div> <h2 id="report-upi-title" class="text-4xl font-medium text-black leading-tight">
UPI-00000
</h2> <p class="text-sm text-zinc-500 mt-1">Official Kigali City Land Use Masterplan Record</p> </div> <!-- Risk Warning Card --> <div id="report-risk-card" class="p-5 rounded-2xl border-2 border-black bg-white shadow-[0px_3px_0px_#191a23]"> <h4 id="report-risk-heading" class="text-lg font-medium text-black mb-1">
Compliance Status
</h4> <p id="report-risk-body" class="text-sm text-zinc-700 leading-relaxed">
Zoning report loaded...
</p> </div> <!-- Grid: Allowed & Restricted Uses --> <div class="grid grid-cols-1 md:grid-cols-2 gap-6"> <div class="bg-white p-5 rounded-2xl border border-black"> <h4 class="text-xs font-bold uppercase tracking-wider text-black mb-3 flex items-center gap-1.5"> <span class="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
Ibyemewe Kwubakwa (Allowed Uses)
</h4> <ul id="report-allowed-ul" class="space-y-2 text-sm text-zinc-700"> <!-- Dynamic --> </ul> </div> <div class="bg-white p-5 rounded-2xl border border-black"> <h4 class="text-xs font-bold uppercase tracking-wider text-rose-600 mb-3 flex items-center gap-1.5"> <span class="w-2.5 h-2.5 rounded-full bg-rose-500"></span>
Ibibujijwe (Restricted Uses)
</h4> <ul id="report-restricted-ul" class="space-y-2 text-sm text-zinc-700"> <!-- Dynamic --> </ul> </div> </div> <!-- AI Grounded Advisory --> <div class="bg-green p-6 rounded-2xl border-2 border-black shadow-[0px_4px_0px_#191a23]"> <h4 class="text-sm font-bold uppercase tracking-wider text-black mb-2">
💡 AI Land Protection Advisory
</h4> <p id="report-ai-text" class="text-sm text-black leading-relaxed font-normal">
AI explanation text...
</p> </div> <div class="flex gap-4"> <button id="btn-print-upi-report" class="flex-1 py-4 bg-black hover:bg-green text-white hover:text-black rounded-2xl border-2 border-black text-lg font-medium transition-colors shadow-[0px_3px_0px_#191a23]">
Print Official Verification Certificate
</button> </div> </div> </div> </div> ` })} </div> ` })} ${renderScript($$result2, "C:/Users/HP/OneDrive/Documents/Codes/zubaka/frontend/src/pages/search.astro?astro&type=script&index=0&lang.ts")} ` })}`;
}, "C:/Users/HP/OneDrive/Documents/Codes/zubaka/frontend/src/pages/search.astro", void 0);

const $$file = "C:/Users/HP/OneDrive/Documents/Codes/zubaka/frontend/src/pages/search.astro";
const $$url = "/search";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Search,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
