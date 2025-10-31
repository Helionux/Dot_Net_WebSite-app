import Image from "next/image";



export default function Footer() {
  return (
    <footer className="max-w-7xl mx-auto mt-20 px-2.5">
      <div className="grid grid-cols-2">
        <div>
          <Image src="/logo.png" width={100} height={100} alt="Logo" />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <div className="grid grid-cols-4">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <div className="border-t border-[#DDDDDD]">
        <p>
            Copyright © .NET Cameroun 2025 | Designed by<span className="font-bold "> Lagence YOP</span>
        </p>
      </div>
    </footer>
  )
}
