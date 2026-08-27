/* empty css                                 */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../chunks/astro/server_BvIZ4Gm6.mjs';
import 'kleur/colors';
import { $ as $$MainLayout, a as $$Icon } from '../chunks/MainLayout_zMxjt0RD.mjs';
import { $ as $$Card } from '../chunks/Card_BTm0t2Zq.mjs';
import { c as c1, a as c2, b as c3, $ as $$ServiceCard } from '../chunks/card-pic3_DqSmSbQZ.mjs';
export { renderers } from '../renderers.mjs';

const c4 = new Proxy({"src":"/_astro/card-pic4.CPZGvqT8.png","width":210,"height":194,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/HP/OneDrive/Documents/Codes/zubaka/frontend/src/assets/pics/card-pic4.png";
							}
							
							return target[name];
						}
					});

const $$Services = createComponent(($$result, $$props, $$slots) => {
  const masterplanServices = [
    {
      index: 1,
      titleTop: "Single Family",
      titleBottom: "Residential (R1)",
      img: c1,
      alt: "R1 Zoning",
      description: "R1 zoning permits low-density single-family housing up to 2 stories. Ideal for private home buyers seeking suburban residential living without commercial disruption.",
      benefits: ["Permitted for 1-2 story family homes", "Low demolition risk", "Home office allowed", "Garden & green space permitted"],
      cta: "View R1 Parcels",
      link: "/map"
    },
    {
      index: 2,
      titleTop: "Medium Density",
      titleBottom: "Residential (R2)",
      img: c2,
      alt: "R2 Zoning",
      description: "R2 zoning accommodates duplexes, townhouses, and low-rise apartments. Height restrictions and parking setbacks must comply with Kigali urban planning rules.",
      benefits: ["Townhouses & low-rise apartments", "Moderate density growth", "Local neighborhood kiosks", "Kigali height compliance"],
      cta: "View R2 Parcels",
      link: "/map"
    },
    {
      index: 3,
      titleTop: "Commercial Center",
      titleBottom: "Zone (C1)",
      img: c3,
      alt: "C1 Zoning",
      description: "C1 zone accommodates retail stores, offices, banks, and mixed-use commercial developments. Pure single-story standalone residential homes are restricted.",
      benefits: ["Retail & Office building permitted", "High commercial value", "Mixed-use upper floor housing", "Urban center access"],
      cta: "Inspect Commercial Plots",
      link: "/search"
    },
    {
      index: 1,
      titleTop: "Demolition Risk",
      titleBottom: "Wetlands (E)",
      img: c4,
      alt: "Demolition Protection",
      description: "CRITICAL HAZARD: Plots situated inside environmental buffer zones or wetlands face immediate municipal demolition under Rwandan environmental laws.",
      benefits: ["CRITICAL DEMOLITION WARNING", "Zero permanent construction allowed", "Ecotourism & green space only", "Prevents financial ruin"],
      cta: "Verify High-Risk UPIs",
      link: "/search"
    }
  ];
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "Kigali Land Masterplan Zoning Rules | Zubaka", "description": "Explore official Kigali City Masterplan land zoning classifications, allowed construction rules, and demolition risk protections." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="py-16 px-4 mx-auto max-w-screen-xl lg:py-24 lg:px-6 font-grotesk"> <div class="text-center mb-16"> <h1 class="mb-4 text-5xl font-medium leading-none tracking-tight md:text-6xl">Kigali Zoning Rules</h1> <p class="text-xl font-normal leading-7 mx-auto max-w-3xl">
Understand official land classification rules in Kigali before making payments to informal land brokers. Every plot in Kigali belongs to a specific Masterplan category.
</p> </div> <div class="space-y-24"> ${masterplanServices.map((service) => renderTemplate`<div class="service-item"> <div class="mb-12"> ${renderComponent($$result2, "ServiceCard", $$ServiceCard, { "index": service.index, "titleTop": service.titleTop, "titleBottom": service.titleBottom, "img": service.img, "alt": service.alt, "link": service.link })} </div> <div class="grid md:grid-cols-2 gap-10 px-4"> <div> <h3 class="text-2xl font-medium mb-4">Masterplan Guidelines</h3> <p class="mb-6">${service.description}</p> <a${addAttribute(service.link, "href")} class="group inline-flex items-center px-8 py-4 bg-green text-dark rounded-2xl hover:bg-dark hover:text-white transition-all duration-200 transform hover:scale-105 font-medium border border-black"> ${service.cta} ${renderComponent($$result2, "Icon", $$Icon, { "name": "arrow-right", "class": "ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" })} </a> </div> <div class="bg-gray rounded-2xl p-8 border border-black shadow-[0px_3px_0px_#191a23]"> <h3 class="text-2xl font-medium mb-4">Permitted Rights & Rules</h3> <ul class="space-y-4"> ${service.benefits.map((benefit) => renderTemplate`<li class="group flex items-start transition-transform duration-200 hover:translate-x-1"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "check-circle", "class": "mr-2 w-5 h-5 mt-1 text-green shrink-0 transition-transform duration-200 group-hover:scale-110" })} <span>${benefit}</span> </li>`)} </ul> </div> </div> </div>`)} </div> <div class="mt-24 text-center"> ${renderComponent($$result2, "Card", $$Card, { "isUnderline": true }, { "default": ($$result3) => renderTemplate` <div class="p-10 md:p-16 bg-white rounded-[45px]"> <h2 class="text-3xl md:text-4xl font-medium mb-6">Need to verify a specific plot?</h2> <p class="mb-10 text-xl max-w-2xl mx-auto">
Look up any plot on the map or by its UPI number, or ask our AI assistant for plain-language Kinyarwanda explanations before paying informal land brokers.
</p> <div class="flex justify-center gap-4 flex-wrap"> <a href="/search" class="inline-flex items-center px-10 py-5 bg-dark text-white rounded-2xl hover:bg-green hover:text-dark transition-all duration-200 transform hover:scale-105 font-medium text-xl border border-black">
Verify UPI Number
</a> <a href="/map" class="inline-flex items-center px-10 py-5 bg-green text-black rounded-2xl hover:bg-dark hover:text-white transition-all duration-200 transform hover:scale-105 font-medium text-xl border border-black">
Open Land Map
</a> </div> </div> ` })} </div> </div> ` })}`;
}, "C:/Users/HP/OneDrive/Documents/Codes/zubaka/frontend/src/pages/services.astro", void 0);

const $$file = "C:/Users/HP/OneDrive/Documents/Codes/zubaka/frontend/src/pages/services.astro";
const $$url = "/services";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Services,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
