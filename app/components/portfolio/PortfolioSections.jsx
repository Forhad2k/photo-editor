import Image from "next/image";
import {
  FaArrowDown,
  FaArrowRight,
  FaEnvelope,
  FaFacebook,
  FaLinkedin,
} from "react-icons/fa";
import BeforeAfter from "./BeforeAfter";
import ContactForm from "./ContactForm";
import {
  BannerGallery,
  ProductGallery,
} from "./ImageGalleries";
import { experiences, processSteps, services } from "../../data/portfolio";

const container = "mx-auto w-full max-w-[1320px] px-6 md:px-12 xl:px-0";
const eyebrow = "text-[10px] font-bold tracking-[0.15em] text-[#77796f]";
const linkArrow = "inline-flex items-center gap-2 transition hover:text-[#748d32]";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 flex h-[68px] items-center justify-between border-b border-black/10 bg-[#f6f5f0]/95 px-6 backdrop-blur-xl md:h-[78px] md:px-12 xl:px-[max(calc((100vw-1320px)/2),48px)]">
      <a href="#home" aria-label="Forhad Hossain home" className="text-2xl font-extrabold tracking-[-0.09em]">
        FH<span className="text-[#849548]">.</span>
      </a>
      <nav aria-label="Main navigation" className="flex items-center gap-3 text-[10px] text-[#65665e] sm:gap-6 sm:text-xs md:gap-10">
        <a className="transition hover:text-[#748d32]" href="#about">About</a>
        <a className="transition hover:text-[#748d32]" href="#work">Selected work</a>
        <a className="hidden transition hover:text-[#748d32] sm:inline" href="#experience">Experience</a>
      </nav>
      <a href="#contact" className={`${linkArrow} text-[10px] font-semibold sm:text-xs`}>
        Let&apos;s talk <FaArrowRight aria-hidden="true" className="text-[10px]" />
      </a>
    </header>
  );
}

export function Hero() {
  return (
    <section
      id="home"
      className={`${container} relative grid min-h-[calc(100svh-68px)] items-center gap-10 py-14 pb-24 md:min-h-[min(780px,calc(100svh-78px))] md:grid-cols-[1.1fr_0.9fr] md:gap-12 md:py-20 md:pb-28`}
    >
      <div className="hero-animate relative z-10">
        <p className={eyebrow}>
          <span className="mr-2 inline-block h-2 w-2 rounded-full bg-[#8ca83e] ring-4 ring-[#8ca83e]/15" />
          PHOTO EDITOR &amp; VISUAL DESIGNER
        </p>
        <h1 className="my-6 text-[clamp(3.65rem,11vw,7.25rem)] font-semibold leading-[0.91] tracking-[-0.09em]">
          The details
          <br />
          make the <span className="text-[#85887c]">image.</span>
        </h1>
        <p className="max-w-[470px] text-[15px] leading-7 text-[#66675f] md:text-base">
          Thoughtful photo editing for products and people. I help good
          photography become imagery your customers remember.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
          <a
            href="#work"
            className="inline-flex min-h-12 items-center gap-4 bg-[#20211e] px-5 text-xs font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#41433b]"
          >
            Explore my work <FaArrowDown aria-hidden="true" className="text-[10px]" />
          </a>
          <a href="#contact" className={`${linkArrow} text-xs font-semibold`}>
            Have a project in mind?
          </a>
        </div>
        <div className="mt-10 flex items-center gap-4 text-[#65665e]">
          <a href="https://www.linkedin.com/in/fahad-hassan-069493202/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="transition hover:text-[#748d32]">
            <FaLinkedin aria-hidden="true" />
          </a>
          <a href="https://www.facebook.com/farhar.hossain" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="transition hover:text-[#748d32]">
            <FaFacebook aria-hidden="true" />
          </a>
          <a href="mailto:fh594694@gmail.com" aria-label="Email" className="transition hover:text-[#748d32]">
            <FaEnvelope aria-hidden="true" />
          </a>
          <span className="h-5 w-px bg-[#deded5]" />
          <span className="text-[11px] text-[#77796f]">Photo editor · Visual storyteller</span>
        </div>
      </div>
      <div className="hero-animate relative mx-auto w-[min(82%,400px)] py-5 md:mx-0 md:ml-auto md:w-full md:max-w-[480px] md:pr-6">
        <div className="relative aspect-[0.9] overflow-hidden bg-[#e3e2d9]">
          <Image
            src="/my-photo.jpg"
            width={700}
            height={820}
            priority
            alt="Forhad Hossain, photo editor and visual designer"
            className="h-full w-full object-cover object-[center_38%]"
          />
        </div>
        <div className="absolute -right-2 bottom-14 flex min-w-32 flex-col gap-1 bg-[#d5f36a] px-4 py-3 md:-right-4 md:min-w-36 md:px-5 md:py-4">
          <span className="text-[9px] font-bold tracking-[0.13em]">BASED IN</span>
          <strong className="text-sm font-semibold">Bangladesh</strong>
        </div>
        <span aria-hidden="true" className="absolute -top-1 right-0 grid h-16 w-16 rotate-12 place-content-center rounded-full border border-[#a3a497] text-center text-[8px] font-bold leading-4 tracking-wider text-[#74766a] md:h-[78px] md:w-[78px] md:text-[9px]">
          CREATIVE<br />BY NATURE
        </span>
      </div>
      <a href="#about" className="absolute bottom-7 left-6 inline-flex items-center gap-3 text-[9px] font-semibold tracking-[0.12em] text-[#77796f] md:bottom-9 md:left-12 xl:left-0">
        SCROLL TO EXPLORE <span className="h-px w-10 bg-[#a4a599]" />
      </a>
    </section>
  );
}

export function ServiceStrip() {
  const items = ["PRODUCT RETOUCHING", "COLOR CORRECTION", "GHOST MANNEQUIN", "MODEL RETOUCHING", "JEWELRY RETOUCHING"];
  return (
    <div aria-label="Services" className="flex min-h-[74px] flex-wrap items-center justify-center gap-x-3 gap-y-2 bg-[#eaeae2] px-6 py-4 text-[8px] font-bold tracking-[0.07em] text-[#62645b] sm:gap-x-5 md:gap-x-9 md:text-[9px]">
      {items.map((item, index) => (
        <span className="flex items-center gap-3 md:gap-8" key={item}>
          {item}
          {index < items.length - 1 && <i className="h-1 w-1 rounded-full bg-[#9baa68]" />}
        </span>
      ))}
    </div>
  );
}

export function About() {
  return (
    <section id="about" className={`${container} grid gap-7 py-24 md:grid-cols-[1fr_0.8fr] md:gap-[12vw] md:py-40`}>
      <div data-reveal>
        <p className={eyebrow}>A LITTLE INTRODUCTION</p>
        <h2 className="mt-5 text-[clamp(2.7rem,7vw,4.75rem)] font-semibold leading-[1.04] tracking-[-0.07em]">
          A careful eye.
          <br />
          <span className="text-[#85887c]">A human touch.</span>
        </h2>
      </div>
      <div data-reveal className="self-end pb-1 text-sm leading-7 text-[#686960]">
        <p className="mb-4 text-lg font-semibold text-[#20211e]">Hello, I&apos;m Forhad Hossain.</p>
        <p className="mb-4">
          I&apos;m a photo editor with a passion for making images feel effortless.
          From precise color and natural shadows to detailed retouching and
          garment composites, I help e-commerce, fashion, and product photography
          look its best.
        </p>
        <p className="mb-5">
          I care about the little things: consistent batches, thoughtful
          finishing, and images that stay true to your brand. Let&apos;s make
          something people stop scrolling for.
        </p>
        <a href="#contact" className={`${linkArrow} text-xs font-semibold text-[#20211e]`}>
          More about working together <FaArrowRight aria-hidden="true" className="text-[10px]" />
        </a>
      </div>
    </section>
  );
}

function ShowcasePanel({ number, label, title, children, tinted = false }) {
  return (
    <section className={`px-6 py-10 md:px-12 md:py-14 xl:px-20 ${tinted ? "bg-[#e9e9e1]" : "bg-[#f6f5f0]"}`}>
      <div className="mx-auto mb-6 flex w-full max-w-[1320px] flex-col items-start justify-between gap-3 sm:flex-row sm:items-end">
        <div>
          <p className={eyebrow}>{number} / {label}</p>
          <h3 className="mt-2 text-2xl font-semibold tracking-[-0.055em] md:text-3xl">{title}</h3>
        </div>
        <span className="text-[9px] font-semibold tracking-[0.1em] text-[#77796f]">{label}</span>
      </div>
      <div className="mx-auto w-full max-w-[1320px]">{children}</div>
    </section>
  );
}

export function Work() {
  return (
    <section id="work" className="bg-[#eeeee8] pt-20 md:pt-24">
      <div className={`${container} flex flex-col items-start justify-between gap-5 pb-10 md:flex-row md:items-end md:pb-16`}>
        <div data-reveal>
          <p className={eyebrow}>A SELECTION OF MY WORK</p>
          <h2 className="mt-4 text-[clamp(2.65rem,7vw,4.5rem)] font-semibold leading-tight tracking-[-0.075em]">
            Made to be <span className="text-[#85887c]">noticed.</span>
          </h2>
        </div>
        <p className="max-w-[350px] text-[13px] leading-6 text-[#6e6f67]" data-reveal>
          A closer look at the craft: considered product imagery, rich color,
          and before-and-after edits made with care.
        </p>
      </div>
      <div className="grid gap-px bg-[#deded5]">
        <ShowcasePanel number="01" label="E-COMMERCE" title="Product imagery">
          <ProductGallery />
        </ShowcasePanel>
        <ShowcasePanel number="02" label="WEB & RETAIL" title="Web banner design" tinted>
          <BannerGallery />
        </ShowcasePanel>
      </div>
      <div className={`${container} flex flex-col items-start justify-between gap-4 py-20 md:flex-row md:items-end md:pt-28`}>
        <div data-reveal>
          <p className={eyebrow}>BEFORE / AFTER</p>
          <h3 className="mt-4 text-[clamp(2.65rem,7vw,4.5rem)] font-semibold leading-tight tracking-[-0.075em]">
            The finishing <span className="text-[#85887c]">touch.</span>
          </h3>
        </div>
        <p className="max-w-sm text-[13px] leading-6 text-[#6e6f67]">Drag across each image or use your arrow keys to see the transformation.</p>
      </div>
      <div className="border-t border-[#d8d9d0]">
        {services.map((service, index) => (
          <section className="border-b border-[#d8d9d0] py-8 md:py-11" key={service.title}>
            <div className={`${container} mb-6 flex flex-col items-start justify-between gap-4 md:flex-row md:items-center`}>
              <div className="flex items-center gap-4" data-reveal>
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-[#d1d2c9] text-[11px] text-[#74766c]">
                  0{index + 1}
                </span>
                <div>
                  <p className={eyebrow}>{service.label}</p>
                  <h3 className="mt-1 text-2xl font-semibold tracking-[-0.05em]">{service.title}</h3>
                </div>
              </div>
              <p className="max-w-sm text-xs leading-6 text-[#6e6f67]">{service.description}</p>
            </div>
            <div className={`${container} grid gap-3 sm:grid-cols-2 md:grid-cols-3 md:gap-4`}>
              {service.examples.map((example) => (
                <article className="min-w-0 overflow-hidden bg-[#f7f6f1]" key={example.title} data-reveal>
                  <BeforeAfter beforeImage={example.before} afterImage={example.after} title={example.title} />
                  <h4 className="px-4 pt-3 text-xs font-semibold">{example.title}</h4>
                  <p className="px-4 pb-4 pt-1 text-[8px] font-bold tracking-[0.1em] text-[#84857c]">
                    BEFORE <span className="px-1 text-[#849548]">→</span> AFTER
                  </p>
                </article>
              ))}
            </div>
          </section>
        ))}
      </div>
    </section>
  );
}

export function Process() {
  return (
    <section className={`${container} py-24 md:py-36`}>
      <div data-reveal className="mb-10 max-w-[790px] md:mb-14">
        <p className={eyebrow}>SIMPLE FROM START TO FINISH</p>
        <h2 className="mt-5 text-[clamp(2.5rem,6.5vw,4.2rem)] font-semibold leading-[1.04] tracking-[-0.07em]">
          Good work starts with <span className="text-[#85887c]">a good conversation.</span>
        </h2>
      </div>
      <div className="grid border-t border-[#deded5] md:grid-cols-3">
        {processSteps.map((step, index) => (
          <article key={step.number} data-reveal className={`min-h-44 py-6 md:pr-7 ${index > 0 ? "md:border-l md:border-[#deded5] md:pl-7" : ""} ${index < 2 ? "border-b border-[#deded5] md:border-b-0" : ""}`}>
            <span className="text-[10px] font-bold tracking-wider text-[#83857b]">{step.number}</span>
            <h3 className="mb-2 mt-5 text-lg font-semibold tracking-[-0.04em]">{step.title}</h3>
            <p className="max-w-[285px] text-xs leading-6 text-[#6e6f67]">{step.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export function Experience() {
  return (
    <section id="experience" className="bg-[#eaeae2] py-20 md:py-32">
      <div className={`${container} grid gap-10 md:grid-cols-[0.75fr_1.25fr] md:gap-[10vw]`}>
        <div data-reveal>
          <p className={eyebrow}>THE JOURNEY SO FAR</p>
          <h2 className="mb-7 mt-5 text-[clamp(2.7rem,7vw,4.4rem)] font-semibold leading-[1.04] tracking-[-0.07em]">
            Experience<br /><span className="text-[#85887c]">that shows.</span>
          </h2>
          <a href="/cv.pdf" download className="inline-flex min-h-12 items-center gap-4 border border-[#bfc0b6] px-5 text-xs font-semibold transition hover:bg-[#d5f36a]">
            Download CV <FaArrowRight aria-hidden="true" className="text-[10px]" />
          </a>
        </div>
        <div className="border-t border-[#d2d3ca]">
          {experiences.map((experience, index) => (
            <article key={experience.company} data-reveal className="border-b border-[#d2d3ca] py-6">
              <div className="flex items-center justify-between gap-4 text-[10px] text-[#77796f]">
                <span className="font-bold">0{index + 1}</span>
                <p className="m-0 flex flex-wrap items-center justify-end gap-2 text-right">
                  {experience.duration}<i className="h-1 w-1 rounded-full bg-[#929485]" />{experience.location}
                </p>
              </div>
              <h3 className="mb-3 mt-4 text-xl font-semibold tracking-[-0.045em]">
                {experience.role} <span className="text-[#77796f]">@ {experience.company}</span>
              </h3>
              <ul className="m-0 grid list-disc gap-1.5 pl-4 text-[11px] leading-5 text-[#66675f]">
                {experience.tasks.map((task) => <li key={task}>{task}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <section id="contact" className={`${container} grid gap-10 py-24 md:grid-cols-[1.1fr_0.75fr] md:gap-[10vw] md:py-40`}>
      <div data-reveal>
        <p className={eyebrow}>HAVE SOMETHING IN MIND?</p>
        <h2 className="mt-5 text-[clamp(3rem,8vw,4.9rem)] font-semibold leading-[1.04] tracking-[-0.07em]">
          Let&apos;s make it <span className="text-[#85887c]">look amazing.</span>
        </h2>
        <a href="mailto:fh594694@gmail.com" className="mt-8 inline-flex items-center gap-3 border-b border-[#b4b5aa] pb-2 text-base font-medium transition hover:text-[#748d32]">
          fh594694@gmail.com <FaArrowRight aria-hidden="true" className="text-xs text-[#748d32]" />
        </a>
      </div>
      <div data-reveal className="self-end">
        <p className="mb-4 text-xs text-[#6e6f67]">Tell me a little about your project and I&apos;ll be in touch.</p>
        <ContactForm />
      </div>
    </section>
  );
}

export function SiteFooter() {
  return (
    <footer className="flex min-h-20 flex-wrap items-center justify-between gap-x-4 gap-y-2 border-t border-[#deded5] px-6 py-4 text-[10px] text-[#77796f] md:px-12 xl:px-[max(calc((100vw-1320px)/2),48px)]">
      <a href="#home" aria-label="Back to top" className="text-2xl font-extrabold tracking-[-0.09em] text-[#20211e]">
        FH<span className="text-[#849548]">.</span>
      </a>
      <p className="order-1 m-0 w-full md:order-none md:w-auto">Independent creative. Thoughtful edits. Good people.</p>
      <span>&copy; {new Date().getFullYear()} Forhad Hossain</span>
    </footer>
  );
}
