import Image from "next/image";
import HomeComponent from "@/components/hero-section/home";
import FooterComponent from "@/components/footer-section/footer";
import HeaderComponent from "@/components/header-section/header";

export default function Home() {
  return (
    <div>
      <HeaderComponent/>
      <main>
        <HomeComponent/>
      </main>
      <FooterComponent/>
    </div>
  );
}
