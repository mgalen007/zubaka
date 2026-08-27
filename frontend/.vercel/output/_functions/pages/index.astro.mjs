/* empty css                                 */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, e as createAstro, d as addAttribute, b as renderScript } from '../chunks/astro/server_BvIZ4Gm6.mjs';
import 'kleur/colors';
import { $ as $$Card } from '../chunks/Card_BTm0t2Zq.mjs';
import { $ as $$Section, a as $$SectionTitle } from '../chunks/Section_GejLvlJZ.mjs';
import '../chunks/index_DPYU2bcR.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_8Vr8S_OQ.mjs';
import 'clsx';
/* empty css                                 */
import { $ as $$Services } from '../chunks/Services_DYhVFg5M.mjs';
import { $ as $$MainLayout } from '../chunks/MainLayout_zMxjt0RD.mjs';
export { renderers } from '../renderers.mjs';

const $$Contact = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "id": "contact" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="py-16 lg:py-24 relative"> ${renderComponent($$result2, "SectionTitle", $$SectionTitle, { "sectionTitle": "Report a Suspicious Broker", "description": "Think someone tried to sell you land under false zoning claims? Let us know." })} ${renderComponent($$result2, "Card", $$Card, { "isUnderline": true }, { "default": ($$result3) => renderTemplate` <div class="bg-[#F3F3F3] rounded-[45px] p-[60px] flex flex-col items-center text-center gap-6"> <p class="max-w-xl">
Zubaka is currently a demo built on 17 mock Kigali parcels — there's no live reporting
          line yet. In a production version, this section would let you flag a broker or plot
          directly to the Rwanda Land Authority.
</p> </div> ` })} </div> ` })}`;
}, "C:/Users/HP/OneDrive/Documents/Codes/zubaka/frontend/src/components/sections/Contact.astro", void 0);

const HeroIlust = new Proxy({"src":"/_astro/hero.DlnIYQeU.png","width":2048,"height":1760,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/HP/OneDrive/Documents/Codes/zubaka/frontend/src/assets/pics/hero.png";
							}
							
							return target[name];
						}
					});

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "id": "home" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="relative flex flex-col-reverse items-center md:flex-row pb-16 lg:pb-24" id="hero"> <div class="row items-center py-5 md:w-6/12 md:pb-20 md:pt-10"> <div class="text-left space-y-3"> <h1 class="text-4xl font-medium leading-none md:text-6xl text-center md:text-left">Know your plot <br> before you pay <br> a single franc</h1> <p class="mt-6 mb-8 text-lg font-normal leading-7 sm:mb-12 text-center md:text-left md:pr-12">Zubaka checks any Kigali parcel against the real Masterplan zoning data — so informal brokers can't sell you land that's actually zoned for wetlands, industry, or is at risk of demolition.</p> <div class="w-full justify-center md:justify-start items-center inline-flex gap-4 flex-wrap"> <a href="/map" class="px-8 py-5 bg-green hover:bg-black rounded-2xl text-center text-black hover:text-white border border-black text-xl font-normal leading-7 transition-all duration-200 transform hover:scale-105">Open Land Map
</a> <a href="/search" class="px-8 py-5 bg-white hover:bg-black rounded-2xl text-center text-black hover:text-white border border-black text-xl font-normal leading-7 transition-all duration-200 transform hover:scale-105">Search by UPI
</a> </div> </div> </div> <div class="flex items-center py-5 md:w-6/12 md:pb-20 md:pt-10"> ${renderComponent($$result2, "Image", $$Image, { "src": HeroIlust, "alt": "Illustration of a map showing land parcels", "loading": "eager" })} </div> </div> ` })}`;
}, "C:/Users/HP/OneDrive/Documents/Codes/zubaka/frontend/src/components/sections/Hero.astro", void 0);

const $$Astro = createAstro("https://zubaka.vercel.app");
const $$AccordionItem = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$AccordionItem;
  const { index, title, description } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div id="accordion__item" class="accordion__item group h-[160px] bg-[#F3F3F3] overflow-hidden w-full transition-all duration-500 mb-[30px] rounded-[45px] border border-dark shadow-[0px_5px_0px_#191a23]" data-astro-cid-kq6n5brs> <button class="accordion__toggle group w-full h-[160px] flex items-center justify-between p-[60px] cursor-pointer transition-colors duration-200 hover:bg-black/5"${addAttribute(`${title} accordion__item menu button`, "id")} aria-expanded="false"${addAttribute(`${title} accordion__item menu content`, "aria-controls")} data-astro-cid-kq6n5brs> <div class="flex items-center gap-[25px]" data-astro-cid-kq6n5brs> <span class="hidden sm:block sm:text-6xl" data-astro-cid-kq6n5brs>0${index}</span> ${title} </div> <div class="bg-gray w-[58px] h-[58px] flex justify-center items-center rounded-full border border-dark transition-transform duration-300 group-hover:scale-110" data-astro-cid-kq6n5brs> <div class="accordion__icon h-10 w-10 transition-transform duration-300 flex justify-center items-center relative" aria-hidden="true" data-astro-cid-kq6n5brs></div> </div> </button> <div${addAttribute(`${title} accordion__item menu content`, "id")}${addAttribute(`${title} accordion__item menu button `, "aria-labelledby")} class="accordion__content px-[60px]" data-astro-cid-kq6n5brs> <div class="w-full h-[2px] bg-black" data-astro-cid-kq6n5brs></div> <p class="prose mb-4 mt-1 max-w-full pt-5 pb-[60px] transition-[height]" data-astro-cid-kq6n5brs> ${description} </p> </div> </div>  ${renderScript($$result, "C:/Users/HP/OneDrive/Documents/Codes/zubaka/frontend/src/components/ui/AccordionItem.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/HP/OneDrive/Documents/Codes/zubaka/frontend/src/components/ui/AccordionItem.astro", void 0);

const $$Accordion = createComponent(($$result, $$props, $$slots) => {
  const content = [
    {
      index: 1,
      title: "Find the plot",
      description: "Locate the parcel on the interactive map, or search directly by its Unique Parcel Identifier (UPI) \u2014 the same identifier used in official Kigali Masterplan records."
    },
    {
      index: 2,
      title: "See the real zoning",
      description: "Zubaka looks up the plot's actual boundary on the official map and matches it against the Kigali Masterplan's zoning categories \u2014 residential, commercial, mixed-use, or restricted/wetland \u2014 not whatever a broker tells you."
    },
    {
      index: 3,
      title: "Know what's allowed before you pay",
      description: "Get a plain-language report of what construction is permitted and what's restricted on that exact plot, plus an AI-generated explanation, so you can verify a broker's claims before any money changes hands."
    }
  ];
  return renderTemplate`${content.map((item) => {
    return renderTemplate`${renderComponent($$result, "AccordionItem", $$AccordionItem, { "index": item.index, "title": item.title, "description": item.description })}`;
  })}`;
}, "C:/Users/HP/OneDrive/Documents/Codes/zubaka/frontend/src/components/ui/Accordion.astro", void 0);

const $$Process = createComponent(($$result, $$props, $$slots) => {
  const description = "How Zubaka protects you from buying land under false pretenses";
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "id": "process" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="py-16 lg:py-24"> ${renderComponent($$result2, "SectionTitle", $$SectionTitle, { "sectionTitle": "How Zubaka Works", "description": description })} ${renderComponent($$result2, "Accordion", $$Accordion, {})} </div> ` })}`;
}, "C:/Users/HP/OneDrive/Documents/Codes/zubaka/frontend/src/components/sections/Process.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "Zubaka \u2014 Kigali Land Use Masterplan & Zoning Protection Platform", "description": "Protecting prospective homebuyers in urban Rwanda from informal land broker fraud, hidden wetland violations, and municipal demolition risks." }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, {})} ${renderComponent($$result2, "Services", $$Services, {})} ${renderComponent($$result2, "Process", $$Process, {})} ${renderComponent($$result2, "Contact", $$Contact, {})} ` })}`;
}, "C:/Users/HP/OneDrive/Documents/Codes/zubaka/frontend/src/pages/index.astro", void 0);

const $$file = "C:/Users/HP/OneDrive/Documents/Codes/zubaka/frontend/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
