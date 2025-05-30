import Header from "@/components/Header";
import HeroSection  from "@/components/HeroSection";
import HeroText from "@/components/HeroText"; 
import Carousel from "@/components/carousel";
import Destinations from "@/components/destinations";
import Explore from "@/components/Explore";
import Deals from "@/components/Deals";
import Footer from "@/components/Footer";


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
        <Deals />
        <Footer/>
       
  
      </body>
    </html>
  );
}
