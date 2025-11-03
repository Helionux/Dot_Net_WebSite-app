import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-wrap items-center justify-between w-full bg-white/95 py-3">
        {/* Logo (left) */}
        <div className="shrink-0">
          <Link href="/" className="text-lg font-bold inline-flex items-center">
            <Image src="/logo.png" alt="Logo" width={72} height={34} />
          </Link>
        </div>

        {/* Centered Navigation */}
        <nav className="hidden md:flex justify-center gap-6 text-sm font-lenx mt-3 md:mt-0 w-full md:w-auto order-3 md:order-0">
          <Link href="/" className="font-bold hover:text-blue-600 transition">Home</Link>
          <Link href="/event" className="hover:text-blue-600 transition">Events</Link>
          <Link href="/about" className="hover:text-blue-600 transition">About us</Link>
          <Link href="/project" className="hover:text-blue-600 transition">Projects</Link>
          <Link href="/resource" className="hover:text-blue-600 transition">Resources</Link>
        </nav>

        {/* Right side (contact + language) */}
        <div className="flex items-center space-x-3 font-grotesk">
          <Button variant="outline" size="sm" className="text-sm px-3 py-2">Contact-us</Button>
          <div className="flex items-center cursor-pointer font-space-grotesk text-sm tracking-tight">
            <span>English</span>
            <ChevronDown className="ml-1 w-4 h-4" />
          </div>
        </div>
      </div>
    </header>
  );
}
