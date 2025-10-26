import Image from "next/image";
import Link from "next/link";

export default function Contributor() {
  return (
    <div className=" max-w-7xl mx-auto mt-10 mb-[100px]">
      <div className="items-center w-full justify-between z-10 bg-white/95 px-4">
        <div className="w-full mb-12">
          <h2 className="text-[44px] font-grotesk">Contributors</h2>
          <p className="font-lenx text-[15px] leading-[140%] font-light">
            Thank you to everyone who makes this event possible.
          </p>
        </div>
        <div
          className="  justify-center mt-5 grid
                 grid-cols-4 divide-x text-justify gap-2 mb-2"
        >
          <div className="px-4">
            <div className="">
              <Image
                className=""
                src="/logo_1.png"
                alt="Hero Image"
                width={40}
                height={40}
              />
              <p className="font-grotesk">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do . </p>
              <Link href="/" className="underline font-bold">See more</Link>
            </div>
          </div>
          <div className="px-4">
            <div className="">
              <Image
                className=""
                src="/logo_2.png"
                alt="Hero Image"
                width={115}
                height={31}
              />
              <p className="font-grotesk">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do . </p>
              <Link href="/" className="underline font-bold">See more</Link>
            </div>
          </div>
          <div className="px-4">
            <div className="">
              <Image
                className=""
                src="/logo_3.png"
                alt="Hero Image"
                width={39}
                height={40}
              />
              <p className="font-grotesk">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do . </p>
              <Link href="/" className="underline font-bold">See more</Link>
            </div>
          </div>
          <div className="px-4">
            <div className="">
              <Image
                className=""
                src="/logo_4.png"
                alt="Hero Image"
                width={168}
                height={40}
              />
              <p className="font-grotesk">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do . </p>
              <Link href="/" className="underline font-bold">See more</Link>
            </div>
          </div>
</div>
          <div className="max-w-6xl mx-auto border border-[#DDDDDD] opacity-100 rotate-0"></div>

          <div className=" justify-center mt-4 grid
                 grid-cols-4 divide-x text-justify gap-2">
            <div className="px-4">
            <div className="">
              <Image
                className=""
                src="/logo_5.png"
                alt="Hero Image"
                width={135}
                height={15}
              />
              <p className="font-grotesk">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do . </p>
              <Link href="/" className="underline font-bold">See more</Link>
            </div>
          </div>
          <div className="px-4">
            <div className="">
              <Image
                className=""
                src="/logo_6.png"
                alt="Hero Image"
                width={63}
                height={40}
              />
              <p className="font-grotesk">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do . </p>
              <Link href="/" className="underline font-bold">See more</Link>
            </div>
          </div>
          <div className="px-4">
            <div className="">
              <Image
                className=""
                src="/logo_7.png"
                alt="Hero Image"
                width={43}
                height={40}
              />
              <p className="font-grotesk">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do . </p>
              <Link href="/" className="underline font-bold">See more</Link>
            </div>
          </div>
          <div className="px-4">
            <div className="">
              <Image
                className=""
                src="/logo_2.png"
                alt="Hero Image"
                width={115}
                height={31}
              />
              <p className="font-grotesk">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do . </p>
              <Link href="/" className="underline font-bold">See more</Link>
            </div>
          </div>
          </div>
      </div>
    </div>
  );
}