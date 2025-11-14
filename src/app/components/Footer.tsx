import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";



export default function Footer() {
  return (
    <footer className=" md:max-w-7xl mt-20 p-4 mx-auto md:mt-20 md:px-8 divide-y">
      <div className="flex flex-col md:flex-row md:gap-[98px]">
        <div className=" box-border">
          <figure className="w-[72px]">
          <Image src="/logo.png" width={100} height={100} alt="Logo"/>
          </figure>
          <p className="w-full font-lenx text-[#575362] text-[14px] font-light leading-[120%]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <div className="flex flex-col md:flex-row md:gap-20">
          <div className="flex flex-row gap-2 md:flex md:gap-20 mb-8 md:msb-[71px]">
            <div className="mt-7">
              <span className="font-bold font-grotesk">Navigation</span>
              <ul className="font-lenx text-[14px] text-[#575362] md:space-y-1 font-light mt-2">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/">Events</Link>
                </li>
                <li>
                  <Link href="/">About us</Link>
                </li>
                <li>
                  <Link href="/">Projects</Link>
                </li>
                <li>
                  <Link href="/">Resources</Link>
                </li>
              </ul>
            </div>
            <div className=" mt-7 order-2 md:shrink-0">
              <span className="font-bold font-grotesk">Contacts</span>
              <ul className="font-lenx text-[14px] text-[#575362] space-y-1 font-light mt-3">
                <li>
                  <Link href="#">Douala, Cameroon</Link>
                </li>
                <li>
                  <Link href="#" className=" leading-[100%] tracking-[0%] ">dotnetcameroon@outlook.com</Link>
                </li>
                <li>
                  <Link href=" ">+237 699254549, +237 653953452</Link>
                </li>
              </ul>
            </div>
            <div className=" mt-7 order-1">
              <span className="font-bold font-grotesk">Social</span>
              <ul className="font-lenx text-[14px] text-[#575362] md:space-y-1 font-light mt-2">
                <li>
                  <Link href="#">Discord</Link>
                </li>
                <li>
                  <Link href="#">WhatsApp</Link>
                </li>
                <li>
                  <Link href="#">LinkedIn</Link>
                </li>
                <li>
                  <Link href="#">Telegram</Link>
                </li>
                <li>
                  <Link href="#">GitHub</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="md:flex gap-2 grid grid-cols-2 mb-6 md:flex-col md:gap-4 items-center md:mt-7 font-grotesk">
              <Button className="bg-[#0A855F] h-[50px] md:w-[195px] font-bold font-grotesk text-[16px] leading-[160%]">Contact-us</Button>
              <Button variant={'outline'} className="h-[50px] md:w-[195px] font-bold font-grotesk text-[16px] leading-[160%]">Share event</Button>      
          </div>
          
        </div>
      </div>
      <div className="md:p-5 items-center flex-col md:flex-row justify-center flex border-[#DDDDDD] md:divide-x md:divide-black">
        <p className="text-[#575362] text-[14px] leading-[160%] px-1 order-1 md:order-first">
            Copyright © .NET Cameroun 2025
        </p>
        <p className="text-[#575362] text-[14px] leading-[160%] px-1 ">
          Designed by<span className="font-bold "> Lagence YOP</span>
        </p>
      </div>
    </footer>
  )
}
