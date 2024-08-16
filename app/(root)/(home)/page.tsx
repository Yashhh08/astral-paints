import AboutSection from "@/components/shared/AboutSection";
import CategorySection from "@/components/shared/CategorySection";
import HeadCarousel from "@/components/shared/HeadCarousel";
import ServiceSection from "@/components/shared/ServiceSection";

export default function Home() {
  return (
    <main className="flex flex-col gap-14">
      <section>
        <HeadCarousel />
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

      <section className="h-screen"></section>
    </main>
  );
}
