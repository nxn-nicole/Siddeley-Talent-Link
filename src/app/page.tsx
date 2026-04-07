import HeroSection from "@/components/home/HeroSection";
import CoreServices from "@/components/home/CoreServices";
import OurTeam from "@/components/home/OurTeam";
import ServiceProcess from "@/components/home/ServiceProcess";
import SuccessCases from "@/components/home/SuccessCases";

export default function Home() {
  return (
    <>
      <HeroSection />
      <CoreServices />
      <OurTeam />
      <ServiceProcess />
      <SuccessCases />
    </>
  );
}
