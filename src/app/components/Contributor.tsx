import Image from "next/image";
import Link from "next/link";

export default function Contributor() {
  return (
    <div className=" max-w-7xl mx-auto px-10 mt-10 mb-[100px]">
      <div className="items-center w-full justify-between z-10 bg-white/95 ">
        <div className="">
          <h2 className="text-[44px] font-black font-grotesk">Contributors</h2>
          <p className="font-lenx text-[15px] font-light">
            Thank you to everyone who makes this event possible.
          </p>
        </div>

        <div className="space-y-3 divide-y mt-6 "> 

          <div className="justify-center  grid grid-cols-4 divide-x pb-3 *:pr-4">
            <div className="">
                <Image
                  className=""
                  src="/logo_1.png"
                  alt="Hero Image"
                  width={40}
                  height={40}
                />
                <p className="font-lenx font-light mt-2.5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do. </p>
                <Link href="/" className="underline font-bold">See more</Link>
            </div>
            <div className=" border pl-4">
              <div>
                <Image
                  className=""
                  src="/logo_2.png"
                  alt="Hero Image"
                  width={115}
                  height={31}
                />
                <p className="font-lenx font-light mt-2.5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do. </p>
                <Link href="/" className="underline font-bold">See more</Link>
              </div>
            </div>
            <div className=" pl-4">
              <div>
                <Image
                  className=""
                  src="/logo_3.png"
                  alt="Hero Image"
                  width={39}
                  height={40}
                />
                <p className="font-lenx font-light mt-2.5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do. </p>
                <Link href="/" className="underline font-bold">See more</Link>
              </div>
            </div>
            <div className="pl-4">
              <div>
                <Image
                  className=""
                  src="/logo_4.png"
                  alt="Hero Image"
                  width={168}
                  height={40}
                />
                <p className="font-lenx font-light mt-2.5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do. </p>
                <Link href="/" className="underline font-bold">See more</Link>
              </div>
            </div>
          </div>

          <div className=" justify-center grid grid-cols-4 divide-x *:pr-4">  
            <div className="border">
                <Image
                  className=""
                  src="/logo_5.png"
                  alt="Hero Image"
                  width={135}
                  height={15}
                />
                <p className="font-lenx font-light mt-2.5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do. </p>
                <Link href="/" className="underline font-bold font-grotesk">See more</Link>
            </div>
            <div className=" border pl-4">
              <div className="">
                <Image
                  src="/logo_6.png"
                  alt="Hero Image"
                  width={63}
                  height={40}
                />
                <p className="font-lenx font-light mt-2.5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do. </p>
                <Link href="/" className="underline font-bold">See more</Link>
              </div>
            </div>
            <div className=" border pl-4">
              <div className="">
                <Image
                  src="/logo_7.png"
                  alt="Hero Image"
                  width={43}
                  height={40}
                />
                <p className="font-lenx font-light tracking-[0%]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do. </p>
                <Link href="/" className="underline font-bold">See more</Link>
              </div>
            </div>
            <div className="pl-4 border">
              <div className="">
                <Image
                  src="/logo_2.png"
                  alt="Hero Image"
                  width={115}
                  height={31}
                />
                <p className="font-lenx font-light ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do. </p>
                <Link href="/" className="underline font-bold">See more</Link>
              </div>
            </div>
            </div>
          </div>

      </div>
    </div>
  );
}