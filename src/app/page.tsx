import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MarqueeQuotes from "@/components/MarqueeQuotes";
import StoryWall from "@/components/StoryWall";
import WhySOFI from "@/components/WhySOFI";
import { GlobalMap } from "@/components/GlobalMap";
import ImpactMetrics from "@/components/ImpactMetrics";
import FeaturedStories from "@/components/FeaturedStories";
import Founder from "@/components/Founder";
import ShareStory from "@/components/ShareStory";
import Socials from "@/components/Socials";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <MarqueeQuotes />
      <StoryWall />
      <WhySOFI />
      <GlobalMap />
      <ImpactMetrics />
      <FeaturedStories />
      <Founder />
      <ShareStory />
      <Socials />
      <Newsletter />
      <Footer />
    </main>
  );
}
