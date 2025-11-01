import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";



export default function Footer() {
  return (
    <footer className="w-full mx-auto mt-20 px-2.5">
      <div className="flex gap-[98.87px] justify-center">
        <div className="border">
          <Image src="/logo.png" width={100} height={100} alt="Logo"/>
          <p className="font-lenx font-light leading-[120%]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <div className="flex gap-20 mb-[70px]">
          <div className=" mt-7">
            <span className="font-bold font-grotesk">Navigation</span>
            <ul className="font-lenx text-[14px] space-y-2 font-light mt-4">
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
          <div className="border shrink-0 mt-7">
            <span className="font-bold font-grotesk">Contacts</span>
            <ul className="font-lenx text-[14px] space-y-2 font-light mt-4">
              <li>
                <Link href=" ">Douala, Cameroon</Link>
              </li>
              <li>
                <Link href=" ">dotnetcameroon@outlook.com</Link>
              </li>
              <li>
                <Link href=" ">+237 699254549, +237 653953452</Link>
              </li>
            </ul>
          </div>
          <div className=" mt-7">
            <span className="font-bold font-grotesk">Social</span>
            <ul className="font-lenx text-[14px] space-y-2 font-light mt-4">
              <li>
                <Link href="">Discord</Link>
              </li>
              <li>
                <Link href="">WhatsApp</Link>
              </li>
              <li>
                <Link href="">LinkedIn</Link>
              </li>
              <li>
                <Link href="">Telegram</Link>
              </li>
              <li>
                <Link href="">GitHub</Link>
              </li>
            </ul>
          </div>
          <div>
            <div className="flex flex-col gap-4 items-center  font-grotesk">
              <Button className="bg-[#0A855F] w-[195px] h-[50px] font-bold font-grotesk text-[16px] leading-[160%]">Contact-us</Button>
              <Button variant={'outline'} className="w-[195px] h-[50px] font-bold font-grotesk text-[16px] leading-[160%]">Share event</Button>      
          </div>
          </div>
        </div>
      </div>
      <div className="border-t p-5 items-center justify-center flex border-[#DDDDDD]">
        <p>
            Copyright © .NET Cameroun 2025 | Designed by<span className="font-bold "> Lagence YOP</span>
        </p>
      </div>
    </footer>
  )
}
