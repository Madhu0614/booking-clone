import Header from "@/components/Header";
import HeroSection  from "@/components/HeroSection";
import HeroText from "@/components/HeroText"; 
import Carousel from "@/components/carousel";
import Destinations from "@/components/destinations";
import Explore from "@/components/Explore";


export default function Home() {
  return (
    <html lang="en">
      <body>
        <Header />
        <HeroSection />
        <HeroText />
        <Destinations />
        
        <Explore />
        <Carousel />

       
  
      </body>
    </html>
  );
}
