import PlatformCard from "@/components/PlatformCard";
import PlatformSection from "@/components/PlatformSection";
import SectionDescription from "@/components/SectionDescription";
import SectionSlogan from "@/components/SectionSlogan";

export default function Home() {
  return (
    <main className="container mx-auto flex flex-col items-center">
       <SectionSlogan/>
       
       <SectionDescription/>

       <PlatformSection />

       <PlatformCard />
    </main>
  );
}
