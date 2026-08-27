import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from './astro/server_BvIZ4Gm6.mjs';
import 'kleur/colors';
import { $ as $$Section, a as $$SectionTitle } from './Section_GejLvlJZ.mjs';
import { c as c1, a as c2, b as c3, $ as $$ServiceCard } from './card-pic3_DqSmSbQZ.mjs';

const $$Services = createComponent(($$result, $$props, $$slots) => {
  const cards = [
    {
      index: 1,
      titleTop: "Interactive",
      titleBottom: "Land Map",
      img: c1,
      alt: "Kigali land map",
      link: "/map"
    },
    {
      index: 2,
      titleTop: "UPI",
      titleBottom: "Search",
      img: c2,
      alt: "UPI search",
      link: "/search"
    },
    {
      index: 3,
      titleTop: "Zoning",
      titleBottom: "Rules",
      img: c3,
      alt: "Kigali zoning rules",
      link: "/services"
    }
  ];
  const description = "Everything you need to verify a plot's real zoning status before you deal with any land broker.";
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "id": "services" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="py-16 lg:py-24"> ${renderComponent($$result2, "SectionTitle", $$SectionTitle, { "sectionTitle": "Verify Before You Buy", "description": description })} <div class="grid lg:grid-cols-2 lg:grid-rows-2 gap-10"> ${cards.map((card) => renderTemplate`${renderComponent($$result2, "ServiceCard", $$ServiceCard, { "index": card.index, "titleTop": card.titleTop, "titleBottom": card.titleBottom, "img": card.img, "alt": card.alt, "link": card.link })}`)} </div> </div> ` })}`;
}, "C:/Users/HP/OneDrive/Documents/Codes/zubaka/frontend/src/components/sections/Services.astro", void 0);

export { $$Services as $ };
