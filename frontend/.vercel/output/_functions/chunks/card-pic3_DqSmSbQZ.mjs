import { e as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, d as addAttribute } from './astro/server_BvIZ4Gm6.mjs';
import 'kleur/colors';
import './index_DPYU2bcR.mjs';
import { $ as $$Image } from './_astro_assets_8Vr8S_OQ.mjs';
import { $ as $$Card } from './Card_BTm0t2Zq.mjs';
import { a as $$Icon } from './MainLayout_zMxjt0RD.mjs';
/* empty css                         */

const $$Astro = createAstro("https://zubaka.vercel.app");
const $$ServiceCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ServiceCard;
  const { index, titleTop, titleBottom, img, alt, link } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Card", $$Card, { "isUnderline": true, "isHoverable": true, "data-astro-cid-qzn24t3o": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div${addAttribute(`h-[300px] w-full sm:h-full lg:gap-[60px] grid custom-grid lg:grid-cols-2 lg:grid-rows-1 p-8 sm:p-[50px] rounded-[45px] transition-colors duration-300 ${index === 1 ? "bg-gray" : index === 2 ? "bg-green" : "bg-dark text-gray"}`, "class")} data-astro-cid-qzn24t3o> <h3${addAttribute(`flex flex-col col-span-2 lg:col-span-1`, "class")} data-astro-cid-qzn24t3o> <span${addAttribute(`w-[fit-content] ${index === 1 ? "greenhead" : "whitehead"}`, "class")} data-astro-cid-qzn24t3o>${titleTop}</span> <span${addAttribute(`w-[fit-content] ${index === 1 ? "greenhead" : "whitehead"}`, "class")} data-astro-cid-qzn24t3o>${titleBottom}</span> </h3> <picture class="w-full h-full row-span-1 order-1 lg:order-none lg:row-span-2 flex justify-center items-center" data-astro-cid-qzn24t3o> ${renderComponent($$result2, "Image", $$Image, { "src": img, "alt": alt, "class": "h-[100px] w-auto sm:h-auto sm:w-3/4 object-cover", "data-astro-cid-qzn24t3o": true })} </picture> <div class="flex items-end" data-astro-cid-qzn24t3o> <a${addAttribute(link, "href")} class="flex items-center gap-3.5" data-astro-cid-qzn24t3o><div${addAttribute(`w-[41px] h-[41px] rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:rotate-45 group-hover:scale-110 ${index === 1 || index === 2 ? "bg-dark text-green" : "bg-white text-black"}`, "class")} data-astro-cid-qzn24t3o> ${renderComponent($$result2, "Icon", $$Icon, { "name": "arrow-up-right", "class": "w-5 h-5", "data-astro-cid-qzn24t3o": true })} </div> <span class="hidden sm:block underline decoration-transparent underline-offset-4 transition-colors duration-200 group-hover:decoration-current" data-astro-cid-qzn24t3o>Service Info</span></a> </div> </div> ` })} `;
}, "C:/Users/HP/OneDrive/Documents/Codes/zubaka/frontend/src/components/ui/ServiceCard.astro", void 0);

const c1 = new Proxy({"src":"/_astro/card-pic1.LmmlwL7_.png","width":210,"height":170,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/HP/OneDrive/Documents/Codes/zubaka/frontend/src/assets/pics/card-pic1.png";
							}
							
							return target[name];
						}
					});

const c2 = new Proxy({"src":"/_astro/card-pic2.BeQ4x_k2.png","width":210,"height":148,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/HP/OneDrive/Documents/Codes/zubaka/frontend/src/assets/pics/card-pic2.png";
							}
							
							return target[name];
						}
					});

const c3 = new Proxy({"src":"/_astro/card-pic3.D4d3JTsx.png","width":210,"height":210,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/HP/OneDrive/Documents/Codes/zubaka/frontend/src/assets/pics/card-pic3.png";
							}
							
							return target[name];
						}
					});

export { $$ServiceCard as $, c2 as a, c3 as b, c1 as c };
