import AboutSection from "@/components/shared/AboutSection";
import BlogSection from "@/components/shared/BlogSection";
import CategorySection from "@/components/shared/CategorySection";
import ColorSection from "@/components/shared/ColorSection";
import DealerSection from "@/components/shared/DealerSection";
import HeadCarousel from "@/components/shared/HeadCarousel";
import ServiceSection from "@/components/shared/ServiceSection";
import { getHomepageData } from "@/lib/action";

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
        <AboutSection />
      </section>

      <section>
        <CategorySection />
      </section>

      <section>
        <ServiceSection />
      </section>

      <section>
        <ColorSection />
      </section>

      <section>
        <DealerSection />
      </section>

      <section>
        <BlogSection />
      </section>
    </main>
  );
}
