import AboutSection from "@/components/shared/AboutSection";
import HeadCarousel from "@/components/shared/HeadCarousel";

export default function Home() {
  return (
    <main className="flex flex-col gap-14">
      <section>
        <HeadCarousel />
      </section>

      <section>
        <AboutSection />
      </section>
    </main>
  );
}
