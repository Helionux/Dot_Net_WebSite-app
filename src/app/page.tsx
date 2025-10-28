import Contributor from "./components/Contributor";
import Footer from "./components/Footer";
import  { Navbar } from "./components/Hero"
import Items from "./components/Items";
import Member from "./components/Member";
import Menu from "./components/Menu";
import Teams from "./components/Teams";
// import Tractor from "./components/Tractor";



export default function Home() {
  return (
    <main>
      <Navbar />
      <Member />
      <Items />
      <Menu />
      <Teams />
      {/* <Tractor /> */}
      <Contributor />
      <Footer />
    </main>
  );

}