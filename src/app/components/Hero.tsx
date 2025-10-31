import { Button } from "@/components/ui/button";

export function Hero() {
  return (
       <section className=" max-w-7xl mx-auto lg:px-8">
        <div className="mt-16  grid grid-cols-2 items-center">
          {/* Right */}
          <div className="w-full">
            <span className="border rounded-3xl p-1 font-light font-lenx ">Must-attend tech event for the Microsoft Ecosystem in Cameroon</span>
            <h1 className="font-grotesk font-bold text-[40px]  mt-2 ">
              .NET Community Conference 2025 | 8th edition
            </h1>
            <p className="font-light font-lenx">
              Join hundreds of passionate developers for a day dedicated to the .NET ecosystem. Share your experiences and let&apos;s build the future of development together.
            </p>

            
            <div className="flex  mt-[35px]">
              <div className="pr-4 ">
                <span className="text-[18px] leading-[160%] tracking-normal text-[#512BD4] font-bold">100 places</span>
                <p className="font-lenx font-light text-[14px] leading-[120%]">Available</p>
              </div>
              <div className="border-l-2 px-4">
                <span className="text-[18px] leading-[160%] tracking-normal text-[#512BD4] font-bold  ">Black coffee</span>
                <p className="font-lenx font-light text-[14px] tracking-normal leading-[120%]">Location</p>
              </div>
              <div className=" border-l-2 px-4">
                <span className="text-[18px] leading-[160%] tracking-normal text-[#512BD4] font-bold">+12</span>
                <p className="font-lenx font-light text-[14px] leading-[120%]">Speakers</p>
              </div>
            </div>

            {/* Button */}
            <div className="gap-3 flex">
              <Button className="mt-8 bg-[#0A855F] text-white hover:bg-[#4219b8] px-6 py-3.5 w-[195px] h-[54px] rounded-[13px] font-grotesk font-bold text-[13px] leading-[160%] tracking-normal text-center ">
                Subscribe to event
              </Button>
              <Button className="mt-8 bg-[#FFFFFF] text-black hover:bg-[#FFFFFF] border border-[#DDDDDD] px-6 py-3.5 w-[140px] h-[54px] rounded-[13px] font-grotesk font-bold text-[13px] gap-2.5 leading-[160%] tracking-normal text-center ">
                Share event
              </Button>
            </div>
          </div>
          {/* Left */}
          <div className=" flex justify-end">
            <div>
              <div className="">
                <div className="bg-[#512BD4] w-[120px] h-[31px] rounded-[12px] px-5 py-2.5  border-2 borer-[4px] border-[#FFFFFF] border-[4px]text-[16px] leanding-[160%] text-white tracking-[-4%] font-grotesk font-bold  items-center justify-center rotate-4 flex">
                  Time left
                </div>
              </div>

              <div className="bg-[#E1A325] w-[340px] h-[65px] rounded-[12px] p-5 flex items-center ">
                <h1 className="text-[30px] font-grotesk font-bold leading-[110%] tracking-[-8%] text-center align-center text-[#2D2006]">2 Days : <span className="font-light text-[30px] leading-[160%]  tracking-[-1.55%]"> 12 min : 33 s</span></h1>
              </div>

              <div className="flex justify-end ">
                <div className="bg-[#0A855F] w-[226px] h-[31px] text-white z-12 rounded-[12px] border-2 border-white text-[16px] leading-[160%]tracking-normal items-center text-center justify-center -rotate-6 font-grotesk">Date <span className="font-bold">November 12, 2025</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}

