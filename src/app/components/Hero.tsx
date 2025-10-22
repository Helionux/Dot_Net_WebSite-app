import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function Hero() {

    return (
        <section className="flex flex-col items-center text-sm bg-cover bg-center bg-no-repeat">
    
            <nav className="z-50 top-65 flex items-center justify-between w-full py-4 px-6 md:px-16 lg:px-24 xl:px-32 backdrop-blur text-slate-800 text-sm">
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
                    <Button variant="ghost">
                        English
                        <ChevronDown />
                    </Button>
                </div>
            
                <button id="open-menu" className="md:hidden active:scale-90 transition">
                
                </button>
            </nav>

            
{/* 
            <section>
                <div className="flex flex-wrap items-center justify-center p-1.5 rounded-full border border-slate-600 text-white text-xs">
                    <div className="flex items-center"> */}
                        {/* <Image className="size-7 rounded-full border-3 border-white"
                            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=50" alt="userImage1" />
                        <Image className="size-7 rounded-full border-3 border-white -translate-x-2"
                            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=50" alt="userImage2" />
                        <Image className="size-7 rounded-full border-3 border-white -translate-x-4"
                            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=50&h=50&auto=format&fit=crop"
                            alt="userImage3" /> */}
                    {/* </div>
                    <p className="-translate-x-2">Join community of 1m+ founders </p>
                </div>
                <span>Must-attend tech event for the Microsft Ecosystem in Cameroon</span>
                <h1>.NET Community Conference 2025|8th edition</h1>
                <p>Join hundreds of passionate developers for a day dedicated to the .NET ecosytem. Share your experiences and let&apos build the future of development together.</p>
            </section> */}






<section className="flex flex-col max-md:gap-20 md:flex-row pb-20 items-center justify-between mt-20 px-4 md:px-16 lg:px-24 xl:px-32">
    <div className="flex flex-col items-center md:items-start">
        <div className="flex flex-wrap items-center top-1 justify-center p-2 rounded-full border border-[#DDDDDD] text-black text-xs">
                        <p className="text-xs">Must-attend tech event for the Microsft Ecosystem in Cameroon</p>
        </div>
        <h1 className="text-center md:text-left text-2xl font-[Space Grotesk] leading-[110%] md:text-6xl md:leading-[84px] font-bold text-[#1F143B]">
            .NET Community Conference 2025|8th edition
        </h1>
        <p className="text-center md:text-left text-sm text-slate-200 max-w-lg mt-2">
            Unlock smarter workflows with AI tools designed to boost productivity, simplify tasks and help you do more with less effort.
        </p>
        <div className="flex items-center gap-4 mt-8 text-sm">
            <button className="bg-white hover:bg-slate-200 text-black active:scale-95 rounded-md px-7 h-11">
                Get started
            </button>
            <button className="flex items-center gap-2 border border-slate-600 active:scale-95 hover:bg-white/10 transition text-white rounded-md px-6 h-11">
                
            </button>
        </div>
    </div>
    <Image src="/logo.png" width={350} height={200} alt="hero" className="max-w-xs sm:max-w-sm lg:max-w-md transition-all duration-300" />
</section>




        </section>
    )
} 