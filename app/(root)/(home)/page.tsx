import AboutSection from "@/components/shared/AboutSection";
import BlogSection from "@/components/shared/BlogSection";
import CategorySection from "@/components/shared/CategorySection";
import ColorSection from "@/components/shared/ColorSection";
import DealerSection from "@/components/shared/DealerSection";
import HeadCarousel from "@/components/shared/HeadCarousel";
import ServiceSection from "@/components/shared/ServiceSection";
import { getHomepageData } from "@/lib/action";

export async function generateMetadata() {
  const data = await getHomepageData();
  const seo = data.pages.nodes[0].seo;

  return {
    title: seo.title,
    description: seo.metaDesc,
    keywords: seo.metaKeywords,
    canonical: seo.canonical,
    openGraph: {
      type: seo.opengraphType,
      site_name: seo.opengraphSiteName,
      title: seo.opengraphTitle,
      description: seo.opengraphDescription,
      url: seo.opengraphUrl,
      images: [
        {
          url: seo.opengraphImage.mediaItemUrl,
          alt: seo.opengraphTitle,
        },
      ],
    },
  };
}

export default async function Home() {
  const data = await getHomepageData();

  const homepage = data.pages.nodes[0].homepage;
  const colourCategories = data.allColourCategory.nodes;
  const blogs = data.blogs.nodes;

  return (
    <main className="flex flex-col gap-14">
      <section>
        <HeadCarousel banners={homepage.banners} />
      </section>

      <section>
        <AboutSection homepageData={homepage} />
      </section>

      <section>
        <CategorySection homepageData={homepage} />
      </section>

      <section>
        <ServiceSection homepageData={homepage} />
      </section>

      <section>
        <ColorSection
          homepageData={homepage}
          colourCategories={colourCategories}
        />
      </section>

      <section>
        <DealerSection homepageData={homepage} />
      </section>

      <section>
        <BlogSection homepageData={homepage} blogs={blogs} />
      </section>
    </main>
  );
}
