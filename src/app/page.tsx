import AboutBento from "@/components/Home/AboutBento";
import HomeExplorer from "@/components/Home/HomeExplorer";
import Partners from "@/components/Partners/Partners";
import Planner from "@/components/Planner/Planner";
import Testimonials from "@/components/Testimonials/Testimonials";

export default function HomePage() {
  return (
    <>
      <HomeExplorer />
      <AboutBento />
      <Testimonials />
      <Planner />
      <Partners />
    </>
  );
}
