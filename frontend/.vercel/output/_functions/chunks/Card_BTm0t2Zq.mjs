import { e as createAstro, c as createComponent, m as maybeRenderHead, d as addAttribute, f as renderSlot, a as renderTemplate } from './astro/server_BvIZ4Gm6.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro("https://zubaka.vercel.app");
const $$Card = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Card;
  const { isUnderline, isHoverable } = Astro2.props;
  return renderTemplate`${isUnderline ? renderTemplate`${maybeRenderHead()}<div${addAttribute(`group rounded-[45px] border border-dark shadow-[0px_5px_0px_#191a23] ${isHoverable ? "transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0px_8px_0px_#191a23]" : ""}`, "class")}>${renderSlot($$result, $$slots["default"])}</div>` : renderTemplate`<div class="rounded-[45px]">${renderSlot($$result, $$slots["default"])}</div>`}`;
}, "C:/Users/HP/OneDrive/Documents/Codes/zubaka/frontend/src/components/ui/Card.astro", void 0);

export { $$Card as $ };
