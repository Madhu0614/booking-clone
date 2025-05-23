import Header from "@/components/Header";
import HeroSection  from "@/components/HeroSection";
import HeroText from "@/components/HeroText"; 


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <HeroSection />
        <HeroText />

       
  
        {children}
      </body>
    </html>
  );
}
