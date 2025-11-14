"use client"

import { Button } from "@/components/ui/button";
import { ChevronDown, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOPen] = useState(false);
  const links = [
    { name: "Home", link: "/" },
    { name: "Events", link: "/event" },
    { name: "About us", link: "/about" },
    { name: "Projects", link: "/project" },
    { name: "Resource", link: "/resource" },

  ]





  return (
    <header className="max-w-7xl mx-auto px-4 lg:px-8">
      <div className="flex flex-wrap items-center justify-between w-full bg-white/95 py-3">
        {/* Logo (left) */}
        <div className="shrink-0">
          <Link href="/" className="text-lg font-bold inline-flex items-center">
            <Image src="/logo.png" alt="Logo" width={72} height={34} />
          </Link>
        </div>

        {/* Centered Navigation */}
        <nav className="hidden md:flex justify-center gap-6 text-sm font-lenx mt-3 md:mt-0 w-full md:w-auto order-3 md:order-0">
          {
            links.map((links, index) => (
              <Link href={links.link} className={`${index === 0 && "font-bold"}`} key={index}>{links.name}</Link>
            ))
          }
          
          
        </nav>

        {/* Right side (contact + language) */}
        <div className="hidden md:flex items-center space-x-3 font-grotesk">
          <Button variant="outline" size="sm" className="text-sm px-3 py-2">Contact-us</Button>
          <div className="flex items-center cursor-pointer font-space-grotesk text-sm tracking-tight">
            <span>English</span>
            <ChevronDown className="ml-1 w-4 h-4" />
          </div>
        </div>

        <div className="md:hidden">
          <button onClick={() => setIsOPen(preview =>!preview)}>{isOpen ? <X /> : <Menu />}</button>
          <div className={`${isOpen ? "block" : "hidden"} bg-white absolute top-16 flex flex-col z-10 items-center gap-3 right-2 w-full px-4 py-3`}>       
           {
            links.map((links, index) => (
              <Link href={links.link} className={`${index === 0 && "font-bold"} border rounded-[13px] shadow w-full p-1.5`} key={index}>{links.name}</Link>
            ))
          }    
          </div>
        </div>
      </div>
    </header>
  );
}
