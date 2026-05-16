import { e as createComponent, m as maybeRenderHead, h as addAttribute, r as renderTemplate, k as renderScript, f as createAstro, l as renderComponent, n as renderHead, o as renderSlot } from '../chunks/astro/server_DrSbvRQM.mjs';
import 'clsx';
import { s as styles, a as styles$1, b as styles$2, c as styles$3, d as styles$4, e as styles$5, f as styles$6 } from '../chunks/index.95d291e9_CLpu9c3z.mjs';
export { renderers } from '../renderers.mjs';

const $$About = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(styles.aboutSection, "class")} id="acercaDe"> <div${addAttribute(styles.gridContainer, "class")}> <div${addAttribute(styles.visualSide, "class")}> <div${addAttribute(styles.experienceBadge, "class")}> <span>+2</span> <p>Años Exp.</p> </div> <div${addAttribute(styles.imageWrapper, "class")}> <img src="/imgPerfil.png" alt="Jonatan Lippo"${addAttribute(styles.profileImage, "class")}> </div> <div${addAttribute(styles.shapeDecoration, "class")}></div> </div> <div${addAttribute(styles.contentSide, "class")}> <h2${addAttribute(styles.title, "class")}>Sobre <span${addAttribute(styles.accent, "class")}>mí</span></h2> <div${addAttribute(styles.textContent, "class")}> <p>
Soy un <span>Desarrollador Frontend</span> con una fuerte inclinación hacia el diseño visual. Mi enfoque principal es transformar ideas en <span>experiencias digitales de alto rendimiento</span>.
</p> <p>
Optimizo mi flujo de trabajo integrando <span>Inteligencia Artificial</span>, lo que me permite resolver problemas complejos con mayor velocidad y garantizar un código limpio y escalable.
</p> <p>
Busco siempre el equilibrio entre la <span>estética moderna</span> y la funcionalidad técnica. Cuando no estoy frente al código, el deporte y mi familia son los que mantienen mi energía y creatividad al máximo.
</p> </div> </div> </div> </section>`;
}, "C:/Users/jonal/Documents/mi-porfolio/src/components/About.astro", void 0);

const $$HeroBanner = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="home"${addAttribute(styles$1.heroBanner, "class")}> <div${addAttribute(styles$1.container, "class")}> <div${addAttribute(styles$1.imageContainer, "class")}> <img src="/imgDev.png" alt="Jonatan Lippo - Desarrollador"${addAttribute(styles$1.heroImage, "class")}> </div> <div${addAttribute(styles$1.contentDescription, "class")}> <h1${addAttribute(styles$1.title, "class")}>Hola! Soy</h1> <p${addAttribute(styles$1.name, "class")}>Jonatan Lippo</p> <div${addAttribute(styles$1.typewriterContainer, "class")}> <p${addAttribute(styles$1.textDescription, "class")}>Desarrollador Front-end</p> </div> <div${addAttribute(styles$1.socialLinks, "class")}> <a href="https://github.com/jonalippo" target="_blank" rel="noopener noreferrer" aria-label="GitHub"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg> </a> <a href="https://linkedin.com/in/jonatan-lippo" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg> </a> </div> </div> </div> <button id="scrollBtn"${addAttribute(styles$1.arrowBtn, "class")} aria-label="Ir a sección Sobre Mí"> <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"> <path fill="var(--color-accent)" d="M12 7v8.25L15.25 12l.75.66l-4.5 4.5l-4.5-4.5l.75-.66L11 15.25V7zm-.5 15C6.26 22 2 17.75 2 12.5A9.5 9.5 0 0 1 11.5 3a9.5 9.5 0 0 1 9.5 9.5a9.5 9.5 0 0 1-9.5 9.5m0-1a8.5 8.5 0 0 0 8.5-8.5A8.5 8.5 0 0 0 11.5 4A8.5 8.5 0 0 0 3 12.5a8.5 8.5 0 0 0 8.5 8.5"></path> </svg> </button> </section> ${renderScript($$result, "C:/Users/jonal/Documents/mi-porfolio/src/components/HeroBanner.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/jonal/Documents/mi-porfolio/src/components/HeroBanner.astro", void 0);

const $$Astro$3 = createAstro();
const $$Proyects = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Proyects;
  const projects = [
    {
      title: "CV Accesorios",
      description: "Catalogo web con imagenes de accesorios para el cabello desarrollado con Astro.",
      tags: ["Astro", "Typescript", "Vercel"],
      image: "/imgDev.png",
      link: "#"
    },
    {
      title: "Gym Manager",
      description: "Aplicaion web de gestion para profesores, gimnasios y clientes, con funcionalidades de pagos y seguimiento de progreso.",
      tags: ["Astro", "React", "Typescript", "Database", "Vercel"],
      image: "/gymManager.webp",
      link: "https://dashboard-gym-eight.vercel.app/"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(styles$2.containerSection, "class")} id="proyectos"> <div${addAttribute(styles$2.header, "class")}> <h2${addAttribute(styles$2.title, "class")}>Proyectos <span${addAttribute(styles$2.accent, "class")}>Destacados</span></h2> <p${addAttribute(styles$2.textDescription, "class")}>Una selección de mis trabajos más recientes en desarrollo web.</p> </div> <div${addAttribute(styles$2.projectsGrid, "class")}> ${projects.map((project) => renderTemplate`<div${addAttribute(styles$2.projectCard, "class")} data-aos="zoom-in"> <div${addAttribute(styles$2.imageContainer, "class")}> <img${addAttribute(project.image, "src")}${addAttribute(project.title, "alt")}${addAttribute(styles$2.projectImage, "class")}> <div${addAttribute(styles$2.overlay, "class")}> <p${addAttribute(styles$2.cardDescription, "class")}>${project.description}</p> <div${addAttribute(styles$2.tags, "class")}> ${project.tags.map((tag) => renderTemplate`<span${addAttribute(styles$2.tag, "class")}>${tag}</span>`)} </div> <a${addAttribute(project.link, "href")}${addAttribute(styles$2.projectLink, "class")} target="_blank">Ver Proyecto</a> </div> </div> <div${addAttribute(styles$2.cardFooter, "class")}> <h3>${project.title}</h3> </div> </div>`)} </div> </section>`;
}, "C:/Users/jonal/Documents/mi-porfolio/src/components/Proyects.astro", void 0);

const $$Astro$2 = createAstro();
const $$Skills = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Skills;
  const skillData = [
    {
      title: "Lenguajes",
      skills: [
        { name: "HTML", src: "/Html.png" },
        { name: "CSS3", src: "/Css3.png" },
        { name: "JavaScript", src: "/Javascript.png" }
      ],
      delay: "100"
    },
    {
      title: "Librer\xEDas & Frameworks",
      skills: [
        { name: "React", src: "/React.png" },
        { name: "Astro", src: "/Astro.png" },
        { name: "React Native", src: "/Reactnative.png" }
      ],
      delay: "200"
    },
    {
      title: "Utilidades",
      skills: [
        { name: "Sass", src: "/Sass.png" },
        { name: "Tailwind CSS", src: "/Tailwindcss.png" },
        { name: "TypeScript", src: "/Typescript.png" }
      ],
      delay: "300"
    },
    {
      title: "Versiones & Git",
      skills: [
        { name: "Git", src: "/Git.png" },
        { name: "Github", src: "/GitHub.png" }
      ],
      delay: "400"
    },
    {
      title: "Herramientas",
      skills: [
        { name: "VS Code", src: "/Vscode.png" },
        { name: "Figma", src: "/Figma.png" },
        { name: "WordPress", src: "/Wordpress.png" }
      ],
      delay: "500"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(styles$3.skillsSection, "class")} id="habilidades"> <div${addAttribute(styles$3.headerArea, "class")}> <h2${addAttribute(styles$3.sectionTitle, "class")}>Habilidades <span${addAttribute(styles$3.accent, "class")}>&</span> Herramientas</h2> <p${addAttribute(styles$3.text, "class")}>Tecnologías que domino para construir soluciones digitales de alto rendimiento.</p> </div> <div${addAttribute(styles$3.bentoGrid, "class")}> ${skillData.map((group) => renderTemplate`<div${addAttribute(styles$3.cardSkill, "class")} data-aos="fade-up"${addAttribute(group.delay, "data-aos-delay")}> <div${addAttribute(styles$3.cardGlass, "class")}></div> <h3${addAttribute(styles$3.titleCard, "class")}>${group.title}</h3> <div${addAttribute(styles$3.skillsContainer, "class")}> ${group.skills.map((skill) => renderTemplate`<div${addAttribute(styles$3.skillItem, "class")}> <div${addAttribute(styles$3.iconBox, "class")}> <img${addAttribute(skill.src, "src")}${addAttribute(skill.name, "alt")} loading="lazy"> </div> <span>${skill.name}</span> </div>`)} </div> </div>`)} </div> </section> ${renderScript($$result, "C:/Users/jonal/Documents/mi-porfolio/src/components/Skills.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/jonal/Documents/mi-porfolio/src/components/Skills.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer${addAttribute(styles$4.footer, "class")}> <div${addAttribute(styles$4.container, "class")}> <div${addAttribute(styles$4.brand, "class")}> <span${addAttribute(styles$4.logo, "class")}>&lt; Jonatan Lippo /&gt;</span> <p${addAttribute(styles$4.tagline, "class")}>Construyendo el futuro de la web, línea a línea.</p> </div> <div${addAttribute(styles$4.socialLinks, "class")}> <a href="https://github.com/jonalippo" target="_blank" rel="noopener noreferrer" aria-label="GitHub"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg> </a> <a href="https://linkedin.com/in/jonatan-lippo" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg> </a> </div> <nav${addAttribute(styles$4.navLinks, "class")}> <a href="#inicio">Inicio</a> <a href="#proyectos">Proyectos</a> <a href="#habilidades">Habilidades</a> <a href="#contacto">Contacto</a> </nav> </div> </footer>`;
}, "C:/Users/jonal/Documents/mi-porfolio/src/components/Footer.astro", void 0);

const $$Astro$1 = createAstro();
const $$NameReload = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$NameReload;
  const {
    apertura = "<",
    cierre = ">",
    name = "Jonatan Lippo",
    expander = "onClick={reload}"
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(styles$5.nameReload, "class")} onclick="window.location.reload()"> <div${addAttribute(styles$5.etiquetaApertura, "class")}>${apertura}</div> <div${addAttribute(styles$5.titleName, "class")}>${name}</div> <div${addAttribute(styles$5.expander, "class")}>${expander}</div> <div${addAttribute(styles$5.slash, "class")}>/</div> <div${addAttribute(styles$5.etiquetaCierre, "class")}>${cierre}</div> </div>`;
}, "C:/Users/jonal/Documents/mi-porfolio/src/components/NameReload.astro", void 0);

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header${addAttribute(styles$6.header, "class")}> ${renderComponent($$result, "NameReload", $$NameReload, {})} <button id="menu-toggle"${addAttribute(styles$6.menuToggle, "class")}> <span${addAttribute(styles$6.hamburger, "class")}></span> </button> <nav id="nav-menu"${addAttribute(styles$6.nav, "class")}> <button id="menu-close"${addAttribute(styles$6.menuClose, "class")}>&times;</button> <a href="#home" class="nav__link">Inicio</a> <a href="#acercaDe" class="nav__link">Acerca de</a> <a href="#habilidades" class="nav__link">Habilidades</a> <a href="#proyectos" class="nav__link">Proyectos</a> <a href="#contacto" class="nav__link">Contacto</a> </nav> </header> ${renderScript($$result, "C:/Users/jonal/Documents/mi-porfolio/src/components/Header.astro?astro&type=script&index=0&lang.ts")} `;
}, "C:/Users/jonal/Documents/mi-porfolio/src/components/Header.astro", void 0);

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const {
    title = "Jonatan Lippo | Portfolio",
    lang = "es",
    description = "Mi porfolio hecho con Astro"
  } = Astro2.props;
  return renderTemplate`<html${addAttribute(lang, "lang")}> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><title>${title}</title><meta name="description"${addAttribute(description, "content")}><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}>${renderHead()}</head> <body> ${renderComponent($$result, "Header", $$Header, {})} <main> ${renderSlot($$result, $$slots["default"])} </main> ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "C:/Users/jonal/Documents/mi-porfolio/src/layouts/Layout.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "HeroBanner", $$HeroBanner, {})} ${renderComponent($$result2, "About", $$About, {})} ${renderComponent($$result2, "Skills", $$Skills, {})} ${renderComponent($$result2, "Proyects", $$Proyects, {})} ` })}`;
}, "C:/Users/jonal/Documents/mi-porfolio/src/pages/index.astro", void 0);

const $$file = "C:/Users/jonal/Documents/mi-porfolio/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
