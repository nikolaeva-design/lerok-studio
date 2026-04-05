import { Footer } from "@/components/Footer";
import { FullFilmSection } from "@/components/FullFilmSection";
import { Hero } from "@/components/Hero";
import { SiteHeader } from "@/components/SiteHeader";
import { WorkSection } from "@/components/WorkSection";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <WorkSection />
        <FullFilmSection />
      </main>
      <Footer />
    </>
  );
}
