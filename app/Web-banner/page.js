import { BannerGallery } from "../components/portfolio/ImageGalleries";

export const metadata = {
  title: "Web Banner Design | Forhad Hossain",
  description: "Selected web banner design work by Forhad Hossain.",
};

export default function WebBannerPage() {
  return (
    <main className="min-h-screen bg-[#f6f5f0] px-6 py-16 text-[#20211e] md:px-12 md:py-24">
      <section className="mx-auto w-full max-w-5xl">
        <p className="text-[10px] font-bold tracking-[0.15em] text-[#77796f]">
          SELECTED WORK / WEB & RETAIL
        </p>
        <h1 className="mb-4 mt-4 text-4xl font-semibold tracking-[-0.06em] md:text-6xl">
          Web banner design
        </h1>
        <p className="mb-10 max-w-xl text-sm leading-7 text-[#6e6f67]">
          A selection of banner concepts for digital campaigns and storefronts.
          Choose a thumbnail to preview each design.
        </p>
        <BannerGallery />
      </section>
    </main>
  );
}
