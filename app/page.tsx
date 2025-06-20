import Image from "next/image";
import Banner from "./components/banner";
import OurTeam from "./components/ourTeam";
import About from "./components/about";
import Gallery from "./components/gallery";

export default function Home() {
  return (
    <div>
      <Banner />
      <About />
      <Gallery />
    </div>
  );
}
