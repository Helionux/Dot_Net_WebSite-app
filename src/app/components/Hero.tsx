import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';


export default function Hero() {
    return (
            <section className="flex flex-col items-center text-sm bg-cover bg-center bg-no-repeat">
    
    <nav className="z-50 flex items-center justify-between w-full py-4 px-6 md:px-16 lg:px-24 xl:px-32 backdrop-blur text-slate-800 text-sm">
                <div>
                    <Image
                        src="/logo.png"
                        alt="Logo DotNet"
                        width={72}
                        height={34}
                    />
       </div>

        <div className="hidden md:flex items-center gap-8 transition duration-500">
            <Link href="/" className="hover:text-slate-500 transition">
                Home
            </Link>
            <Link href="/event" className="hover:text-slate-500 transition">
                Events
            </Link>
            <Link href="/about" className="hover:text-slate-500 transition">
                About us
            </Link>
            <Link href="/project" className="hover:text-slate-500 transition">
                Projects
            </Link>
            <Link href="/resource" className="hover:text-slate-500 transition">
                Resources
            </Link>
        </div>

        <div className="hidden md:block space-x-3">
            <Button variant="outline">
                Contact-us
            </Button>    
            </div>
            <div className='flex'>
                    English
                <ChevronDown />
            </div>
        <button id="open-menu" className="md:hidden active:scale-90 transition">
            {/* <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-menu-icon lucide-menu"><path d="M4 5h16"/><path d="M4 12h16"/><path d="M4 19h16"/></svg> */}
        </button>
    </nav>
    <div id="mobile-navLinks" className="fixed inset-0 z-100 bg-white/60 text-slate-800 backdrop-blur flex flex-col items-center justify-center text-lg gap-8 md:hidden transition-transform duration-300 -translate-x-full">
        <Link href="/">
            Home
        </Link>
        <Link href="/products">
            Products
        </Link>
        <Link href="/stories">
            Stories
        </Link>
        <Link href="/pricing">
            Pricing
        </Link>
        <button id="close-menu" className="active:ring-3 active:ring-white aspect-square size-10 p-1 items-center justify-center bg-slate-100 hover:bg-slate-200 transition text-black rounded-md flex">
            {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-x-icon lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg> */}
        </button>
    </div>
    

</section>

    );
}


