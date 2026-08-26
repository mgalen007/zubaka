import { c as createComponent, s as spreadAttributes, u as unescapeHTML, a as renderTemplate, m as maybeRenderHead, r as renderComponent, d as addAttribute, e as createAstro, g as defineScriptVars, f as renderSlot, F as Fragment, h as renderHead, b as renderScript } from './astro/server_BvIZ4Gm6.mjs';
import 'kleur/colors';
import './index_DPYU2bcR.mjs';
import { $ as $$Image } from './_astro_assets_8Vr8S_OQ.mjs';
import 'clsx';
/* empty css                         */

function createSvgComponent({ meta, attributes, children }) {
  const Component = createComponent((_, props) => {
    const normalizedProps = normalizeProps(attributes, props);
    return renderTemplate`<svg${spreadAttributes(normalizedProps)}>${unescapeHTML(children)}</svg>`;
  });
  Object.defineProperty(Component, "toJSON", {
    value: () => meta,
    enumerable: false
  });
  return Object.assign(Component, meta);
}
const ATTRS_TO_DROP = ["xmlns", "xmlns:xlink", "version"];
const DEFAULT_ATTRS = {};
function dropAttributes(attributes) {
  for (const attr of ATTRS_TO_DROP) {
    delete attributes[attr];
  }
  return attributes;
}
function normalizeProps(attributes, props) {
  return dropAttributes({ ...DEFAULT_ATTRS, ...attributes, ...props });
}

const Logo = createSvgComponent({"meta":{"src":"/_astro/logo-alt.vXayUnDU.svg","width":220,"height":36,"format":"svg"},"attributes":{"width":"220","height":"36","viewBox":"0 0 220 36","fill":"none"},"children":"\r\n<g clip-path=\"url(#clip0_403_257)\">\r\n<path d=\"M17.9986 5.53472L35.5997 0.349121L30.464 18.0001L35.5997 35.6012L17.9986 30.4655L0.347656 35.6012L5.53325 18.0001L0.347656 0.349121L17.9986 5.53472Z\" fill=\"white\" />\r\n</g>\r\n<path d=\"M48.9199 31V3H60.0399C61.7466 3 63.2666 3.34667 64.5999 4.04C65.9599 4.70667 67.0133 5.66667 67.7599 6.92C68.5333 8.14667 68.9199 9.62667 68.9199 11.36V11.88C68.9199 13.6133 68.5199 15.1067 67.7199 16.36C66.9466 17.6133 65.8933 18.5733 64.5599 19.24C63.2266 19.9067 61.7199 20.24 60.0399 20.24H53.2399V31H48.9199ZM53.2399 16.32H59.5999C61.1199 16.32 62.3333 15.92 63.2399 15.12C64.1466 14.32 64.5999 13.2267 64.5999 11.84V11.44C64.5999 10.0267 64.1466 8.92 63.2399 8.12C62.3333 7.32 61.1199 6.92 59.5999 6.92H53.2399V16.32Z\" fill=\"white\" />\r\n<path d=\"M81.8346 31.56C79.8613 31.56 78.1013 31.16 76.5546 30.36C75.0346 29.5333 73.8346 28.36 72.9546 26.84C72.0746 25.32 71.6346 23.52 71.6346 21.44V20.84C71.6346 18.76 72.0746 16.9733 72.9546 15.48C73.8346 13.96 75.0346 12.7867 76.5546 11.96C78.1013 11.1333 79.8613 10.72 81.8346 10.72C83.8079 10.72 85.5679 11.1333 87.1146 11.96C88.6613 12.7867 89.8746 13.96 90.7546 15.48C91.6346 16.9733 92.0746 18.76 92.0746 20.84V21.44C92.0746 23.52 91.6346 25.32 90.7546 26.84C89.8746 28.36 88.6613 29.5333 87.1146 30.36C85.5679 31.16 83.8079 31.56 81.8346 31.56ZM81.8346 27.88C83.6479 27.88 85.1146 27.3067 86.2346 26.16C87.3813 24.9867 87.9546 23.3733 87.9546 21.32V20.96C87.9546 18.9067 87.3946 17.3067 86.2746 16.16C85.1546 14.9867 83.6746 14.4 81.8346 14.4C80.0479 14.4 78.5813 14.9867 77.4346 16.16C76.3146 17.3067 75.7546 18.9067 75.7546 20.96V21.32C75.7546 23.3733 76.3146 24.9867 77.4346 26.16C78.5813 27.3067 80.0479 27.88 81.8346 27.88Z\" fill=\"white\" />\r\n<path d=\"M105.284 31.56C102.777 31.56 100.697 31 99.044 29.88C97.3907 28.76 96.3773 27.0667 96.004 24.8L99.844 23.88C100.057 24.9733 100.417 25.84 100.924 26.48C101.431 27.12 102.057 27.5733 102.804 27.84C103.577 28.1067 104.404 28.24 105.284 28.24C106.591 28.24 107.591 27.9867 108.284 27.48C109.004 26.9733 109.364 26.32 109.364 25.52C109.364 24.72 109.031 24.1333 108.364 23.76C107.697 23.3867 106.711 23.08 105.404 22.84L104.044 22.6C102.711 22.36 101.497 22.0133 100.404 21.56C99.3106 21.1067 98.444 20.48 97.804 19.68C97.164 18.88 96.844 17.8533 96.844 16.6C96.844 14.7333 97.5373 13.2933 98.924 12.28C100.311 11.24 102.151 10.72 104.444 10.72C106.657 10.72 108.471 11.2267 109.884 12.24C111.324 13.2267 112.257 14.5733 112.684 16.28L108.844 17.36C108.604 16.16 108.097 15.32 107.324 14.84C106.551 14.3333 105.591 14.08 104.444 14.08C103.324 14.08 102.444 14.2933 101.804 14.72C101.164 15.12 100.844 15.6933 100.844 16.44C100.844 17.24 101.151 17.8267 101.764 18.2C102.404 18.5733 103.257 18.8533 104.324 19.04L105.724 19.28C107.137 19.52 108.431 19.8533 109.604 20.28C110.777 20.7067 111.697 21.32 112.364 22.12C113.057 22.92 113.404 23.9867 113.404 25.32C113.404 27.2933 112.671 28.8267 111.204 29.92C109.737 31.0133 107.764 31.56 105.284 31.56Z\" fill=\"white\" />\r\n<path d=\"M118.22 31V11.28H122.34V31H118.22ZM120.3 8.6C119.5 8.6 118.82 8.34667 118.26 7.84C117.726 7.30667 117.46 6.62667 117.46 5.8C117.46 4.97333 117.726 4.30667 118.26 3.8C118.82 3.26667 119.5 3 120.3 3C121.126 3 121.806 3.26667 122.34 3.8C122.873 4.30667 123.14 4.97333 123.14 5.8C123.14 6.62667 122.873 7.30667 122.34 7.84C121.806 8.34667 121.126 8.6 120.3 8.6Z\" fill=\"white\" />\r\n<path d=\"M135.854 31C134.654 31 133.694 30.64 132.974 29.92C132.281 29.2 131.934 28.24 131.934 27.04V14.76H126.494V11.28H131.934V4.76H136.054V11.28H141.934V14.76H136.054V26.32C136.054 27.12 136.427 27.52 137.174 27.52H141.294V31H135.854Z\" fill=\"white\" />\r\n<path d=\"M146.774 31V11.28H150.894V31H146.774ZM148.854 8.6C148.054 8.6 147.374 8.34667 146.814 7.84C146.281 7.30667 146.014 6.62667 146.014 5.8C146.014 4.97333 146.281 4.30667 146.814 3.8C147.374 3.26667 148.054 3 148.854 3C149.681 3 150.361 3.26667 150.894 3.8C151.428 4.30667 151.694 4.97333 151.694 5.8C151.694 6.62667 151.428 7.30667 150.894 7.84C150.361 8.34667 149.681 8.6 148.854 8.6Z\" fill=\"white\" />\r\n<path d=\"M161.569 31L154.929 11.28H159.289L164.529 27.96H165.169L170.409 11.28H174.769L168.129 31H161.569Z\" fill=\"white\" />\r\n<path d=\"M186.326 31.36C184.833 31.36 183.5 31.0267 182.326 30.36C181.153 29.6933 180.233 28.7467 179.566 27.52C178.9 26.2933 178.566 24.8267 178.566 23.12V11.28H182.686V22.84C182.686 24.5467 183.113 25.8133 183.966 26.64C184.82 27.44 186.006 27.84 187.526 27.84C189.206 27.84 190.553 27.28 191.566 26.16C192.606 25.0133 193.126 23.3733 193.126 21.24V11.28H197.246V31H193.206V28.04H192.566C192.193 28.84 191.526 29.6 190.566 30.32C189.606 31.0133 188.193 31.36 186.326 31.36Z\" fill=\"white\" />\r\n<path d=\"M211.417 31.56C208.91 31.56 206.83 31 205.177 29.88C203.523 28.76 202.51 27.0667 202.137 24.8L205.977 23.88C206.19 24.9733 206.55 25.84 207.057 26.48C207.563 27.12 208.19 27.5733 208.937 27.84C209.71 28.1067 210.537 28.24 211.417 28.24C212.723 28.24 213.723 27.9867 214.417 27.48C215.137 26.9733 215.497 26.32 215.497 25.52C215.497 24.72 215.163 24.1333 214.497 23.76C213.83 23.3867 212.843 23.08 211.537 22.84L210.177 22.6C208.843 22.36 207.63 22.0133 206.537 21.56C205.443 21.1067 204.577 20.48 203.937 19.68C203.297 18.88 202.977 17.8533 202.977 16.6C202.977 14.7333 203.67 13.2933 205.057 12.28C206.443 11.24 208.283 10.72 210.577 10.72C212.79 10.72 214.603 11.2267 216.017 12.24C217.457 13.2267 218.39 14.5733 218.817 16.28L214.977 17.36C214.737 16.16 214.23 15.32 213.457 14.84C212.683 14.3333 211.723 14.08 210.577 14.08C209.457 14.08 208.577 14.2933 207.937 14.72C207.297 15.12 206.977 15.6933 206.977 16.44C206.977 17.24 207.283 17.8267 207.897 18.2C208.537 18.5733 209.39 18.8533 210.457 19.04L211.857 19.28C213.27 19.52 214.563 19.8533 215.737 20.28C216.91 20.7067 217.83 21.32 218.497 22.12C219.19 22.92 219.537 23.9867 219.537 25.32C219.537 27.2933 218.803 28.8267 217.337 29.92C215.87 31.0133 213.897 31.56 211.417 31.56Z\" fill=\"white\" />\r\n<defs>\r\n<clipPath id=\"clip0_403_257\">\r\n<rect width=\"36\" height=\"36\" fill=\"white\" />\r\n</clipPath>\r\n</defs>\r\n"});

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const links = [
    { name: "Land Map", href: "/map" },
    { name: "UPI Search", href: "/search" },
    { name: "Zoning Rules", href: "/services" },
    { name: "AI Assistant", href: "/ai" },
    { name: "About Us", href: "/about" }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="sm:px-5"> <div class="w-full max-w-[1240px] mx-auto"> <div class="px-[15px] bg-dark text-gray py-[55px] lg:px-[60px] sm:rounded-t-[45px]"> <div> <div class="flex flex-col lg:flex-row gap-7 items-center justify-between"> <picture> <a href="/"> ${renderComponent($$result, "Image", $$Image, { "src": Logo, "alt": "Zubaka logo" })} </a> </picture> <ul class="flex flex-col sm:flex-row gap-5"> ${links.map((link) => {
    return renderTemplate`<li class="text-center"> <a class="underline"${addAttribute(link.href, "href")}> ${link.name} </a> </li>`;
  })} </ul> </div> <div class="flex flex-col lg:flex-row mt-[66px] mb-[51px]"> <div class="flex text-center lg:text-start flex-col w-full"> <h3 class="mb-5 text-center md:text-left text-2xl text-green">About Zubaka</h3> <p class="max-w-2xl">
Zubaka helps prospective land buyers in Kigali verify a plot's real Masterplan zoning
              before dealing with informal brokers. This build runs on 17 mock parcels for demo purposes.
</p> </div> </div> </div> <div class="h-[1px] bg-gray mb-5"></div> <div class="flex flex-col lg:flex-row h-20 justify-center mt-4 text-center md:justify-between md:mt-0"> <span>Zubaka — Kigali Land Use Masterplan &amp; Zoning Protection Platform</span> </div> </div> </div> </section>`;
}, "C:/Users/HP/OneDrive/Documents/Codes/zubaka/frontend/src/components/ui/Footer.astro", void 0);

var __freeze$2 = Object.freeze;
var __defProp$2 = Object.defineProperty;
var __template$2 = (cooked, raw) => __freeze$2(__defProp$2(cooked, "raw", { value: __freeze$2(raw || cooked.slice()) }));
var _a$2;
const $$Astro$c = createAstro("https://zubaka.vercel.app");
const $$Astronav = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$Astronav;
  const { closeOnClick = false } = Astro2.props;
  return renderTemplate(_a$2 || (_a$2 = __template$2(["", " <script>(function(){", '\n["DOMContentLoaded", "astro:after-swap"].forEach((event) => {\n  document.addEventListener(event, addListeners);\n});\n\n// Function to clone and replace elements\nfunction cloneAndReplace(element) {\n  const clone = element.cloneNode(true);\n  element.parentNode.replaceChild(clone, element);\n}\n\nfunction addListeners() {\n  // Clean up existing listeners\n  const oldMenuButton = document.getElementById("astronav-menu");\n  if (oldMenuButton) {\n    cloneAndReplace(oldMenuButton);\n  }\n\n  const oldDropdownMenus = document.querySelectorAll(".astronav-dropdown");\n  oldDropdownMenus.forEach((menu) => {\n    cloneAndReplace(menu);\n  });\n\n  // Mobile nav toggle\n  const menuButton = document.getElementById("astronav-menu");\n  menuButton && menuButton.addEventListener("click", toggleMobileNav);\n\n  // Dropdown menus\n  const dropdownMenus = document.querySelectorAll(".astronav-dropdown");\n  dropdownMenus.forEach((menu) => {\n    const button = menu.querySelector("button");\n    button &&\n      button.addEventListener("click", (event) =>\n        toggleDropdownMenu(event, menu, dropdownMenus)\n      );\n\n    // Handle Submenu Dropdowns\n    const dropDownSubmenus = menu.querySelectorAll(\n      ".astronav-dropdown-submenu"\n    );\n\n    dropDownSubmenus.forEach((submenu) => {\n      const submenuButton = submenu.querySelector("button");\n      submenuButton &&\n        submenuButton.addEventListener("click", (event) => {\n          event.stopImmediatePropagation();\n          toggleSubmenuDropdown(event, submenu);\n        });\n    });\n  });\n\n  // Clicking away from dropdown will remove the dropdown class\n  document.addEventListener("click", closeAllDropdowns);\n\n  if (closeOnClick) {\n    handleCloseOnClick();\n  }\n}\n\nfunction toggleMobileNav() {\n  [...document.querySelectorAll(".astronav-toggle")].forEach((el) => {\n    el.classList.toggle("hidden");\n  });\n}\n\nfunction toggleDropdownMenu(event, menu, dropdownMenus) {\n  toggleMenu(menu);\n\n  // Close one dropdown when selecting another\n  Array.from(dropdownMenus)\n    .filter((el) => el !== menu && !menu.contains(el))\n    .forEach(closeMenu);\n\n  event.stopPropagation();\n}\n\nfunction toggleSubmenuDropdown(event, submenu) {\n  event.stopPropagation();\n  toggleMenu(submenu);\n\n  // Close sibling submenus at the same nesting level\n  const siblingSubmenus = submenu\n    .closest(".astronav-dropdown")\n    .querySelectorAll(".astronav-dropdown-submenu");\n  Array.from(siblingSubmenus)\n    .filter((el) => el !== submenu && !submenu.contains(el))\n    .forEach(closeMenu);\n}\n\nfunction closeAllDropdowns(event) {\n  const dropdownMenus = document.querySelectorAll(".dropdown-toggle");\n  const dropdownParent = document.querySelectorAll(\n    ".astronav-dropdown, .astronav-dropdown-submenu"\n  );\n  const isButtonInsideDropdown = [\n    ...document.querySelectorAll(\n      `.astronav-dropdown button, .astronav-dropdown label, .astronav-dropdown input,\n	  .astronav-dropdown-submenu button, .astronav-dropdown-submenu label, .astronav-dropdown-submenu input,\n	  #astronav-menu`\n    ),\n  ].some((button) => button.contains(event.target));\n  if (!isButtonInsideDropdown) {\n    dropdownMenus.forEach((d) => {\n      // console.log("I ran", d);\n      // if (!d.contains(event.target)) {\n      d.classList.remove("open");\n      d.removeAttribute("open");\n      d.classList.add("hidden");\n      // }\n    });\n    dropdownParent.forEach((d) => {\n      d.classList.remove("open");\n      d.removeAttribute("open");\n      d.setAttribute("aria-expanded", "false");\n    });\n  }\n}\n\nfunction toggleMenu(menu) {\n  menu.classList.toggle("open");\n  const expanded = menu.getAttribute("aria-expanded") === "true";\n  menu.setAttribute("aria-expanded", expanded ? "false" : "true");\n  menu.hasAttribute("open")\n    ? menu.removeAttribute("open")\n    : menu.setAttribute("open", "");\n\n  const dropdownToggle = menu.querySelector(".dropdown-toggle");\n  const dropdownExpanded = dropdownToggle.getAttribute("aria-expanded");\n  dropdownToggle.classList.toggle("hidden");\n  dropdownToggle.setAttribute(\n    "aria-expanded",\n    dropdownExpanded === "true" ? "false" : "true"\n  );\n}\n\nfunction closeMenu(menu) {\n  // console.log("closing", menu);\n  menu.classList.remove("open");\n  menu.removeAttribute("open");\n  menu.setAttribute("aria-expanded", "false");\n  const dropdownToggles = menu.querySelectorAll(".dropdown-toggle");\n  dropdownToggles.forEach((toggle) => {\n    toggle.classList.add("hidden");\n    toggle.setAttribute("aria-expanded", "false");\n  });\n}\n\nfunction handleCloseOnClick() {\n  const navMenuItems = document.querySelector(".astronav-items");\n  const navToggle = document.getElementById("astronav-menu");\n  const navLink = navMenuItems && navMenuItems.querySelectorAll("a");\n\n  const MenuIcons = navToggle.querySelectorAll(".astronav-toggle");\n\n  navLink &&\n    navLink.forEach((item) => {\n      item.addEventListener("click", () => {\n        navMenuItems?.classList.add("hidden");\n        MenuIcons.forEach((el) => {\n          el.classList.toggle("hidden");\n        });\n      });\n    });\n}\n})();<\/script>'], ["", " <script>(function(){", '\n["DOMContentLoaded", "astro:after-swap"].forEach((event) => {\n  document.addEventListener(event, addListeners);\n});\n\n// Function to clone and replace elements\nfunction cloneAndReplace(element) {\n  const clone = element.cloneNode(true);\n  element.parentNode.replaceChild(clone, element);\n}\n\nfunction addListeners() {\n  // Clean up existing listeners\n  const oldMenuButton = document.getElementById("astronav-menu");\n  if (oldMenuButton) {\n    cloneAndReplace(oldMenuButton);\n  }\n\n  const oldDropdownMenus = document.querySelectorAll(".astronav-dropdown");\n  oldDropdownMenus.forEach((menu) => {\n    cloneAndReplace(menu);\n  });\n\n  // Mobile nav toggle\n  const menuButton = document.getElementById("astronav-menu");\n  menuButton && menuButton.addEventListener("click", toggleMobileNav);\n\n  // Dropdown menus\n  const dropdownMenus = document.querySelectorAll(".astronav-dropdown");\n  dropdownMenus.forEach((menu) => {\n    const button = menu.querySelector("button");\n    button &&\n      button.addEventListener("click", (event) =>\n        toggleDropdownMenu(event, menu, dropdownMenus)\n      );\n\n    // Handle Submenu Dropdowns\n    const dropDownSubmenus = menu.querySelectorAll(\n      ".astronav-dropdown-submenu"\n    );\n\n    dropDownSubmenus.forEach((submenu) => {\n      const submenuButton = submenu.querySelector("button");\n      submenuButton &&\n        submenuButton.addEventListener("click", (event) => {\n          event.stopImmediatePropagation();\n          toggleSubmenuDropdown(event, submenu);\n        });\n    });\n  });\n\n  // Clicking away from dropdown will remove the dropdown class\n  document.addEventListener("click", closeAllDropdowns);\n\n  if (closeOnClick) {\n    handleCloseOnClick();\n  }\n}\n\nfunction toggleMobileNav() {\n  [...document.querySelectorAll(".astronav-toggle")].forEach((el) => {\n    el.classList.toggle("hidden");\n  });\n}\n\nfunction toggleDropdownMenu(event, menu, dropdownMenus) {\n  toggleMenu(menu);\n\n  // Close one dropdown when selecting another\n  Array.from(dropdownMenus)\n    .filter((el) => el !== menu && !menu.contains(el))\n    .forEach(closeMenu);\n\n  event.stopPropagation();\n}\n\nfunction toggleSubmenuDropdown(event, submenu) {\n  event.stopPropagation();\n  toggleMenu(submenu);\n\n  // Close sibling submenus at the same nesting level\n  const siblingSubmenus = submenu\n    .closest(".astronav-dropdown")\n    .querySelectorAll(".astronav-dropdown-submenu");\n  Array.from(siblingSubmenus)\n    .filter((el) => el !== submenu && !submenu.contains(el))\n    .forEach(closeMenu);\n}\n\nfunction closeAllDropdowns(event) {\n  const dropdownMenus = document.querySelectorAll(".dropdown-toggle");\n  const dropdownParent = document.querySelectorAll(\n    ".astronav-dropdown, .astronav-dropdown-submenu"\n  );\n  const isButtonInsideDropdown = [\n    ...document.querySelectorAll(\n      \\`.astronav-dropdown button, .astronav-dropdown label, .astronav-dropdown input,\n	  .astronav-dropdown-submenu button, .astronav-dropdown-submenu label, .astronav-dropdown-submenu input,\n	  #astronav-menu\\`\n    ),\n  ].some((button) => button.contains(event.target));\n  if (!isButtonInsideDropdown) {\n    dropdownMenus.forEach((d) => {\n      // console.log("I ran", d);\n      // if (!d.contains(event.target)) {\n      d.classList.remove("open");\n      d.removeAttribute("open");\n      d.classList.add("hidden");\n      // }\n    });\n    dropdownParent.forEach((d) => {\n      d.classList.remove("open");\n      d.removeAttribute("open");\n      d.setAttribute("aria-expanded", "false");\n    });\n  }\n}\n\nfunction toggleMenu(menu) {\n  menu.classList.toggle("open");\n  const expanded = menu.getAttribute("aria-expanded") === "true";\n  menu.setAttribute("aria-expanded", expanded ? "false" : "true");\n  menu.hasAttribute("open")\n    ? menu.removeAttribute("open")\n    : menu.setAttribute("open", "");\n\n  const dropdownToggle = menu.querySelector(".dropdown-toggle");\n  const dropdownExpanded = dropdownToggle.getAttribute("aria-expanded");\n  dropdownToggle.classList.toggle("hidden");\n  dropdownToggle.setAttribute(\n    "aria-expanded",\n    dropdownExpanded === "true" ? "false" : "true"\n  );\n}\n\nfunction closeMenu(menu) {\n  // console.log("closing", menu);\n  menu.classList.remove("open");\n  menu.removeAttribute("open");\n  menu.setAttribute("aria-expanded", "false");\n  const dropdownToggles = menu.querySelectorAll(".dropdown-toggle");\n  dropdownToggles.forEach((toggle) => {\n    toggle.classList.add("hidden");\n    toggle.setAttribute("aria-expanded", "false");\n  });\n}\n\nfunction handleCloseOnClick() {\n  const navMenuItems = document.querySelector(".astronav-items");\n  const navToggle = document.getElementById("astronav-menu");\n  const navLink = navMenuItems && navMenuItems.querySelectorAll("a");\n\n  const MenuIcons = navToggle.querySelectorAll(".astronav-toggle");\n\n  navLink &&\n    navLink.forEach((item) => {\n      item.addEventListener("click", () => {\n        navMenuItems?.classList.add("hidden");\n        MenuIcons.forEach((el) => {\n          el.classList.toggle("hidden");\n        });\n      });\n    });\n}\n})();<\/script>'])), renderSlot($$result, $$slots["default"]), defineScriptVars({ closeOnClick }));
}, "C:/Users/HP/OneDrive/Documents/Codes/zubaka/frontend/node_modules/astro-navbar/src/Astronav.astro", void 0);

const $$Astro$b = createAstro("https://zubaka.vercel.app");
const $$MenuIcon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$MenuIcon;
  const { class: className, ...rest } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<button id="astronav-menu" aria-label="Toggle Menu"> ${renderSlot($$result, $$slots["default"], renderTemplate` <svg fill="currentColor"${addAttribute([className], "class:list")} width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"${spreadAttributes(rest)}> <title>Toggle Menu</title> <path class="astronav-close-icon astronav-toggle hidden" fill-rule="evenodd" clip-rule="evenodd" d="M18.278 16.864a1 1 0 01-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 01-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 011.414-1.414l4.829 4.828 4.828-4.828a1 1 0 111.414 1.414l-4.828 4.829 4.828 4.828z"></path> <path class="astronav-open-icon astronav-toggle" fill-rule="evenodd" d="M4 5h16a1 1 0 010 2H4a1 1 0 110-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2z"></path> </svg> `)} </button>`;
}, "C:/Users/HP/OneDrive/Documents/Codes/zubaka/frontend/node_modules/astro-navbar/src/components/MenuIcon.astro", void 0);

const $$Astro$a = createAstro("https://zubaka.vercel.app");
const $$OpenIcon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$OpenIcon;
  const { class: className, ...rest } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<span${addAttribute(["astronav-open-icon astronav-toggle", className], "class:list")}${spreadAttributes(rest)}>${renderSlot($$result, $$slots["default"])}</span>`;
}, "C:/Users/HP/OneDrive/Documents/Codes/zubaka/frontend/node_modules/astro-navbar/src/components/OpenIcon.astro", void 0);

const $$Astro$9 = createAstro("https://zubaka.vercel.app");
const $$CloseIcon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$CloseIcon;
  const { class: className, ...rest } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<span${addAttribute(["astronav-close-icon astronav-toggle hidden", className], "class:list")}${spreadAttributes(rest)}> ${renderSlot($$result, $$slots["default"])} </span>`;
}, "C:/Users/HP/OneDrive/Documents/Codes/zubaka/frontend/node_modules/astro-navbar/src/components/CloseIcon.astro", void 0);

const $$Astro$8 = createAstro("https://zubaka.vercel.app");
const $$MenuItems = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$MenuItems;
  const { class: className, ...rest } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<nav${addAttribute(["astronav-items astronav-toggle", className], "class:list")}${spreadAttributes(rest)}> ${renderSlot($$result, $$slots["default"])} </nav>`;
}, "C:/Users/HP/OneDrive/Documents/Codes/zubaka/frontend/node_modules/astro-navbar/src/components/MenuItems.astro", void 0);

const $$Astro$7 = createAstro("https://zubaka.vercel.app");
const $$Dropdown = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Dropdown;
  const { class: className, ...rest } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<menu${addAttribute(["astronav-dropdown", className], "class:list")}${spreadAttributes(rest)} aria-expanded="false">${renderSlot($$result, $$slots["default"])}</menu>`;
}, "C:/Users/HP/OneDrive/Documents/Codes/zubaka/frontend/node_modules/astro-navbar/src/components/Dropdown.astro", void 0);

const $$Astro$6 = createAstro("https://zubaka.vercel.app");
const $$DropdownSubmenu = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$DropdownSubmenu;
  const { class: className, ...rest } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(["astronav-dropdown-submenu", className], "class:list")}${spreadAttributes(rest)} aria-expanded="false"> ${renderSlot($$result, $$slots["default"])} </div>`;
}, "C:/Users/HP/OneDrive/Documents/Codes/zubaka/frontend/node_modules/astro-navbar/src/components/DropdownSubmenu.astro", void 0);

const $$Astro$5 = createAstro("https://zubaka.vercel.app");
const $$DropdownItems = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$DropdownItems;
  const { class: className, ...rest } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(["astronav-dropdown dropdown-toggle hidden", className], "class:list")}${spreadAttributes(rest)} aria-expanded="false"> ${renderSlot($$result, $$slots["default"])} </div>`;
}, "C:/Users/HP/OneDrive/Documents/Codes/zubaka/frontend/node_modules/astro-navbar/src/components/DropdownItems.astro", void 0);

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(cooked.slice()) }));
var _a$1;
const $$Astro$4 = createAstro("https://zubaka.vercel.app");
const $$StickyHeader = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$StickyHeader;
  const {
    scrollY = 100,
    defaultClass = "",
    activeClass = "",
    class: className = "",
    ...rest
  } = Astro2.props;
  return renderTemplate(_a$1 || (_a$1 = __template$1(["", "<header", "", " data-astro-cid-itfz4qi6> ", " </header> <script>(function(){", '\n  // @ts-nocheck\n  let lastKnownScrollPosition = 0;\n  let ticking = false;\n\n  const header = document.querySelector(".astronav-sticky-header");\n\n  // Define two different scroll positions\n  const addScrollY = Math.max(scrollY, 100); // Scroll position to add active class\n  const removeScrollY = Math.max(scrollY - 50, 50); // Scroll position to remove active class\n\n  function updateAnimation(scrollPos) {\n    if (scrollPos > addScrollY) {\n      header.classList.remove(...defaultClass.split(" "));\n      header.classList.add("is-active", ...activeClass.split(" "));\n      header.setAttribute("active", "");\n    } else if (scrollPos < removeScrollY) {\n      header.classList.remove("is-active", ...activeClass.split(" "));\n      header.classList.add(...defaultClass.split(" "));\n      header.removeAttribute("active");\n    }\n  }\n\n  window.addEventListener("scroll", function () {\n    lastKnownScrollPosition = window.scrollY;\n    if (!ticking) {\n      window.requestAnimationFrame(function () {\n        updateAnimation(lastKnownScrollPosition);\n        ticking = false;\n      });\n\n      ticking = true;\n    }\n  });\n})();<\/script> '])), maybeRenderHead(), addAttribute(["astronav-sticky-header", className, defaultClass], "class:list"), spreadAttributes(rest), renderSlot($$result, $$slots["default"]), defineScriptVars({ scrollY, defaultClass, activeClass }));
}, "C:/Users/HP/OneDrive/Documents/Codes/zubaka/frontend/node_modules/astro-navbar/src/components/StickyHeader.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro$3 = createAstro("https://zubaka.vercel.app");
const $$Navbar = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Navbar;
  const menuitems = [
    { href: "/map", label: "Land Map" },
    { href: "/search", label: "UPI Search" },
    { href: "/services", label: "Zoning Rules" },
    { href: "/ai", label: "AI Assistant" },
    { href: "/about", label: "About Us" }
  ];
  const navButton = { href: "/map", label: "Verify Plot Safety" };
  return renderTemplate(_a || (_a = __template(["", '<div class="mt-20"> <nav class="w-full top-0 left-0 z-50 fixed bg-white"> <header class="flex flex-col lg:flex-row justify-between items-center my-5 px-6 md:px-32"> ', ' <div> <div class="hidden lg:flex items-center gap-4"> <a class="px-9 py-5 rounded-2xl border border-zinc-900 bg-white hover:bg-black text-black hover:text-white inline-flex"', '> <h2 class="text-center text-xl font-normal leading-7">', `</h2> </a> </div> </div> </header> </nav> </div> <script>
  // Get references to the menu icon, open/close icons, and menu items
  const menuIcon = document.getElementById('menu-icon');
  const openIcon = document.getElementById('open-icon');
  const closeIcon = document.getElementById('close-icon');
  const menuItems = document.getElementById('menu-items');
  const closeMenuItems = document.querySelectorAll('[data-close-menu="true"]');  // Select all items with the 'data-close-menu' attribute

  // Toggle the menu visibility and icon when the menu icon is clicked
  menuIcon.addEventListener('click', () => {
    menuItems.classList.toggle('hidden');  // Toggle the 'hidden' class on the menu

    // Toggle between open and close icons
    openIcon.classList.toggle('hidden');
    closeIcon.classList.toggle('hidden');
  });

  // Close the menu when any item is clicked
  closeMenuItems.forEach(item => {
    item.addEventListener('click', () => {
      menuItems.classList.add('hidden');  // Add the 'hidden' class to hide the menu
      openIcon.classList.remove('hidden');  // Show the open (hamburger) icon
      closeIcon.classList.add('hidden');  // Hide the close (X) icon
    });
  });
<\/script>`])), maybeRenderHead(), renderComponent($$result, "Astronav", $$Astronav, {}, { "default": ($$result2) => renderTemplate` <div class="flex w-full lg:w-auto items-center justify-between"> <a href="/" class="flex items-center space-x-3 rtl:space-x-reverse"> <img src="/Logo.svg" class="h-8" alt="Logo"> </a> <div class="block lg:hidden"> <div id="menu-icon" class="w-8 h-8 text-black cursor-pointer"> <!-- Open (hamburger) icon --> <svg id="open-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" class="w-8 h-8"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path> </svg> <!-- Close (X) icon --> <svg id="close-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" class="w-8 h-8 hidden"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path> </svg> </div> </div> </div> <nav class="hidden w-full lg:w-auto mt-2 lg:flex lg:mt-0" id="menu-items"> <ul class="font-medium flex flex-col p-4 lg:p-0 mt-4 border rounded-lg lg:flex-row lg:space-x-8 lg:mt-0 lg:border-0"> ${menuitems.map((item) => renderTemplate`<li> <a${addAttribute(item.href, "href")} class="mobile-nav-link block py-2 px-3 text-black rounded lg:bg-transparent lg:p-0" data-close-menu="true"> ${item.label} </a> </li>`)} <div class="lg:hidden flex items-center justify-center mt-3 gap-4"> <a class="mobile-nav-link px-9 py-5 rounded-2xl border border-zinc-900 bg-white hover:bg-black text-black hover:text-white inline-flex"${addAttribute(navButton.href, "href")} data-close-menu="true"> <h2 class="text-center text-xl font-normal leading-7">${navButton.label}</h2> </a> </div> </ul> </nav> ` }), addAttribute(navButton.href, "href"), navButton.label);
}, "C:/Users/HP/OneDrive/Documents/Codes/zubaka/frontend/src/components/ui/Navbar.astro", void 0);

const title = "Zubaka";
const image = {"src":"/cover.png","alt":"Zubaka — Kigali Land Use Masterplan & Zoning Protection Platform"};
const siteData = {
  title,
  image,
};

function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "")
    .replace(/--+/g, "-")
    .replace(/^-+/, "")
    .replace(/-+$/, "");
}

function jsonLDGenerator({ type, post, url }) {
  if (type === "post") {
    return `<script type="application/ld+json">
      {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "${url}"
        },
        "headline": "${post.title}",
        "description": "${post.description}",
        "image": "${post.image.src}",
        "author": {
          "@type": "Person",
          "name": "${post.author}",
          "url": "/author/${slugify(post.author)}"
        },
        "datePublished": "${post.date}"
      }
    </script>`;
  }
  return `<script type="application/ld+json">
      {
      "@context": "https://schema.org/",
      "@type": "WebSite",
      "name": "${siteData.title}",
      "url": "${"https://zubaka.vercel.app"}"
      }
    </script>`;
}

const $$Astro$2 = createAstro("https://zubaka.vercel.app");
const $$Seo = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Seo;
  const {
    title,
    description,
    url = Astro2.url,
    image,
    frontmatter,
    robots
  } = Astro2.props;
  const jsonLD = jsonLDGenerator({
    type: frontmatter ? "post" : "website",
    post: frontmatter,
    url
  });
  return renderTemplate`<!-- SEO --><link rel="canonical"${addAttribute(url, "href")}><!-- Open Graph --><meta property="og:site_name" content="Site Name"><meta property="og:title"${addAttribute(title, "content")}><meta property="og:description"${addAttribute(description, "content")}><meta property="og:url"${addAttribute(url, "content")}><meta property="og:image"${addAttribute(image?.src || siteData.image.src, "content")}><meta property="og:image:url"${addAttribute(image?.src || siteData.image.src, "content")}><meta property="og:image:secure_url"${addAttribute(image?.src || siteData.image.src, "content")}><meta property="og:image:type" content="image/jpeg"><meta property="og:image:width" content="1200"><meta property="og:image:height" content="600"><meta property="og:image:alt"${addAttribute(image?.alt || siteData.image.alt, "content")}><!-- Twitter --><meta name="twitter:title"${addAttribute(title, "content")}><meta name="twitter:description"${addAttribute(description, "content")}><meta name="twitter:card" content="summary_large_image"><meta name="twitter:image"${addAttribute(image?.src || siteData.image.src, "content")}><meta name="twitter:image:alt"${addAttribute(title, "content")}><!-- Using environment domain --><meta name="twitter:domain"${addAttribute("https://zubaka.vercel.app", "content")}>${robots && renderTemplate`<meta name="robots" content="noindex, nofollow">`}<!-- JSON LD -->${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(jsonLD)}` })}`;
}, "C:/Users/HP/OneDrive/Documents/Codes/zubaka/frontend/src/components/seo/Seo.astro", void 0);

const $$Astro$1 = createAstro("https://zubaka.vercel.app");
const $$MainHead = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$MainHead;
  const { title, description, image, frontmatter, robots } = Astro2.props;
  return renderTemplate`<head><meta charset="utf-8"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><!-- iOS 
  <link rel="apple-touch-icon" sizes="256x256" href="/path/to/your/icon.png" />
  --><meta name="viewport" content="width=device-width"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title><meta name="description"${addAttribute(description, "content")}>${renderComponent($$result, "Seo", $$Seo, { "title": title, "description": description, "url": Astro2.url.toString(), "image": image, "frontmatter": frontmatter, "robots": robots })}<!-- Preconnect fonts, images... -->${renderHead()}</head>`;
}, "C:/Users/HP/OneDrive/Documents/Codes/zubaka/frontend/src/layouts/MainHead.astro", void 0);

const $$Astro = createAstro("https://zubaka.vercel.app");
const $$MainLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$MainLayout;
  const { ...props } = Astro2.props;
  return renderTemplate`<html lang="en" data-astro-cid-ouamjn2i> ${renderComponent($$result, "MainHead", $$MainHead, { ...props, "data-astro-cid-ouamjn2i": true })}${renderScript($$result, "C:/Users/HP/OneDrive/Documents/Codes/zubaka/frontend/src/layouts/MainLayout.astro?astro&type=script&index=0&lang.ts")}${maybeRenderHead()}<body class="bg-white font-grotesk" data-astro-cid-ouamjn2i> <main data-astro-cid-ouamjn2i> ${renderComponent($$result, "Navbar", $$Navbar, { "data-astro-cid-ouamjn2i": true })} ${renderSlot($$result, $$slots["default"])} ${renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-ouamjn2i": true })} </main> </body></html>`;
}, "C:/Users/HP/OneDrive/Documents/Codes/zubaka/frontend/src/layouts/MainLayout.astro", void 0);

export { $$MainLayout as $, createSvgComponent as c };
