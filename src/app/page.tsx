import  { Navbar } from "./components/Hero"
import Items from "./components/Items";
import Member from "./components/Member";
import Menu from "./components/Menu";
import Teams from "./components/Teams";



export default function Home() {
  return (
    <main>
      <Navbar />
      <Member />
      <Items />
      <Menu />
      <Teams />
    </main>
  );

}