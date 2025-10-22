import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ChevronDown, Menu } from "lucide-react";

export function Navbar() {
  return (
    <header className="fixed w-[1024px] top-6 z-50 border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
  <div className="w-[1240px]  mx-9 h-10 flex items-center justify-between px-6 md:px-6">
        {/* Logo (left) */}
        <div className="flex items-center flex-1">
          <Link href="/" className="text-lg font-bold inline-flex items-center">
            <Image src="/logo.png" alt="Logo" width={72} height={34} />
          </Link>
        </div>

        {/* Centered Navigation */}
        <nav className="hidden md:flex items-center justify-center space-x-6 flex-1">
          <Link href="/">Home</Link>
          <Link href="/event">Events</Link>
          <Link href="/about">About us</Link>
          <Link href="/project">Projects</Link>
          <Link href="/resource">Resources</Link>
        </nav>

        

        <div>
          <Button variant={'outline'}>Contact-us</Button>
          <Button className="ml-3.5 bg-accent text-black">English
            <ChevronDown className="ml-1"/>
          </Button>
        </div>

        {/* Avatar / actions (right) */}
        {/* <div className="flex items-center justify-end flex-1">
         
          Mobile menu trigger
          <div className="md:hidden ml-2">
            <Button variant="ghost" size="icon">
              <Menu />
            </Button>
          </div>
        </div> */}
      </div>
    </header>
  );
}