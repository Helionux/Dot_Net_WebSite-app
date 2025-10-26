
import Link from "next/link";
import Image from "next/image"; 

export default function Footer() {
  return (
     <footer className="max-w-7xl mx-auto mt-3">
      <div className="w-[1,240px] h-[252px] t-[5793px] l-[100px] ">
        <div className="flex justify-between w-[1,206.87px] h-[146px] t-[5793px] l-[133,13px]">
          <div className="flex flex-col w-[300px] h-[90px] gap-2 opacity-100">
            <Link href="/">
              <Image
                src="/logo.png"
                alt="logo du site"
                width={72}
                height={34}
                className="opacity-100"
              />
            </Link>
            <p className="font-[Lexend] font-light text-[14px] leading-[120%] text-[#575362]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="flex flex-row w-[808px] h-[146px] gap-20 opacity-100">
            <div className="flex flex-col w-[83px] h-[146px] gap-2">
              <span className="mt-5 font-bold">
                Navigation
              </span>
              <div className="flex flex-col w-[68px] h-[114px] gap-2">
                <span className="font-[Lexend] font-light text-[14px] leading-[120%] text-[#575362]">
                 <Link href="/" className=" no-underline text-[#575362]">
                  Home
                 </Link>
                </span>
                <span className="font-[Lexend] font-light text-[14px] leading-[120%] text-[#575362]">
                  Events
                </span>
                <span className="font-[Lexend] font-light text-[14px] leading-[120%] text-[#575362]">
                  About us
                </span>
                <span className="font-[Lexend] font-light text-[14px] leading-[120%] text-[#575362]">
                  Projects
                </span>
                <span className="font-[Lexend] font-light text-[14px] leading-[120%] text-[#575362]">
                  Resources
                </span>
              </div>
            </div>
            <div className="flex flex-col w-[220px] h-[94px] gap-2 ">
              <span className="mt-5 font-bold">
                Contacts
              </span>
              <div className="flex flex-col gap-2 w-[220px] h-[62px]">
                <span className="font-[Lexend] font-light text-[14px] leading-[120%] text-[#575362]">
                  Douala, Cameroon
                </span>
                <span className="font-[Lexend] font-light text-[14px] leading-[120%] text-[#575362]">
                  dotnetcameroon@outlook.com
                </span>
                <span className="font-[Lexend] font-light text-[14px] leading-[120%] text-[#575362]">
                  +237 699254549, +237 653953452
                </span>
              </div>
            </div>
            <div className="flex flex-col w-[70px] h-[146px] gap-2 ">
              <span className="mt-5 font-bold">
                Social
              </span>
              <div className="flex flex-col gap-2 w-[70px] h-[114px]">
                <span className="font-[Lexend] font-light text-[14px] leading-[120%] text-[#575362]">
                  Discord
                </span>
                <span className="font-[Lexend] font-light text-[14px] leading-[120%] text-[#575362]">
                  WhatsApp
                </span>
                <span className="font-[Lexend] font-light text-[14px] leading-[120%] text-[#575362]">
                  LinkedIn
                </span>
                <span className="font-[Lexend] font-light text-[14px] leading-[120%] text-[#575362]">
                  Telegramme
                </span>
                <span className="font-[Lexend] font-light text-[14px] leading-[120%] text-[#575362]">
                  GitHub
                </span>
              </div>
            </div>
            <div className="flex flex-col w-[195px] h-[108px] gap-4 mt-5">
              <button className="w-[190px] h-[50px] rounded-[13px] bg-[#0A855F] border-[#0A855F] border-12p">
                <span className="text-[#FFFFFF] font-5 text-[16px] font-['Space_Grotesk'] ">
                  Subscribe to event
                </span>
              </button>
              <button className="w-[190px] h-[50px] rounded-[13px] border bg-[#FFFFFF] border-[#DDDDDD]">
                <span className="font-bold text-[14px]">Share event</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[1,240px] t-[6010px] l-[100px] border border-[#DDDDDD]"></div>
      <div
        className="flex justify-center items-center mt-2 mb-10 t-[6035px] l-[470px]
      font-[Lexend] font-light text-[14px] leading-[120%] text-[#575362"
      >
        <p>
            Copyright © .NET Cameroun 2025 | Designed by<span className="font-bold "> Lagence YOP</span>
        </p>
      </div>
    </footer>
  )
}
