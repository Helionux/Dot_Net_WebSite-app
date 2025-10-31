import Contributor from "./components/Contributor";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Hero } from "./components/Hero";
import Items from "./components/Items";
import Member from "./components/Member";
import Menu from "./components/Menu";
import Teams from "./components/Teams";
import Tractor from "./components/Tractor";



export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Member />
      <Items />
      <Menu />
      <Teams />
      <Contributor />
      <Tractor />
      <Footer />
    </main>
  );

}