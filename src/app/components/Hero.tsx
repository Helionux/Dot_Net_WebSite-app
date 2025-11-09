"use client"

import { Button } from '@/components/ui/button';
import { useState, useEffect, useCallback, useMemo } from 'react';

interface TimeRemaining {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export function Hero() {
  
  const targetDate = useMemo(() =>  new Date("2025-11-12T00:00:00").getTime(), [])
  const calculateTimeRemaining = useCallback((): TimeRemaining => {
    const now = new Date().getTime();
    const distance = targetDate - now;
    
    if (distance <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }
   
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    return { days, hours, minutes, seconds };
  }, [targetDate]);

  const [timeLeft, setTimeLeft] = useState<TimeRemaining>(calculateTimeRemaining());


  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeRemaining());
    }, 1000);

    return () => clearInterval(timer);
  }, [calculateTimeRemaining]);




  return (
       <section className="max-w-7xl mx-auto lg:px-8 px-3">
        <div className="mt-11 lg:mt-16  grid grid-cols-1 lg:grid-cols-2 items-center gap-y-6">
          {/* Right */}
          <div className="w-full col-span-1 order-2 lg:order-1">
            <span className="border text-[12px] rounded-3xl p-1 font-light font-lenx ">Must-attend tech event for the Microsoft Ecosystem in Cameroon</span>
            <h1 className="font-grotesk font-bold text-[40px]  mt-2 ">
              .NET Community Conference 2025 | 8th edition
            </h1>
            <p className="font-light font-lenx">
              Join hundreds of passionate developers for a day dedicated to the .NET ecosystem. Share your experiences and let&apos;s build the future of development together.
            </p>

            
            <div className="grid grid-cols-3 lg:flex items-center w-full mt-[35px] lg:*:px-4">
              <div className="lg:pr-4 ">
                <span className="text-[18px] leading-[160%] tracking-normal text-[#512BD4] font-bold">100 places</span>
                <p className="font-lenx font-light text-[14px] leading-[120%]">Available</p>
              </div>
              <div className="border-l-2 ">
                <span className="text-[18px] leading-[160%] tracking-normal text-[#512BD4] font-bold  ">Black coffee</span>
                <p className="font-lenx font-light text-[14px] tracking-normal leading-[120%]">Location</p>
              </div>
              <div className=" border-l-2 ">
                <span className="text-[18px] leading-[160%] tracking-normal text-[#512BD4] font-bold">+12</span>
                <p className="font-lenx font-light text-[14px] leading-[120%]">Speakers</p>
              </div>
            </div>

            {/* Button */}
            <div className=" w-full lg:flex flex-col">
              <Button className="mt-8 bg-[#0A855F] text-white hover:bg-[#4219b8] px-6 py-3.5 lg:w-[195px] w-full h-[54px] rounded-[13px] font-grotesk font-bold text-[16px] leading-[160%] tracking-normal text-center ">
                Subscribe to event
              </Button>
              <Button className="mt-8 bg-[#FFFFFF] text-black hover:bg-[#FFFFFF] border border-[#DDDDDD] px-6 py-3.5 lg:w-[140px] w-full h-[54px] rounded-[13px] font-grotesk font-bold text-[16px] leading-[160%] tracking-normal text-center ">
                Share event
              </Button>
            </div>
          </div>
        
          {/* Left */}
          <div className="order-1 lg:order-2 col-span-1 flex justify-end ">
            <div className="w-full lg:w-fit flex flex-col ">
                <div className="bg-[#512BD4] w-[120px] h-[31px] rounded-[12px] px-5 py-2.5  border-2 borer-[4px] border-[#FFFFFF] text-[16px] leanding-[160%] text-white tracking-[-4%] font-grotesk font-bold  items-center justify-center rotate-4 flex">
                  Time left
                </div>
            

              <div className="bg-[#E1A325] w-full rounded-[12px] py-5 px-5.5 flex ">
                <h1 className="text-[38px] lg:text-[44px] font-grotesk font-bold leading-[110%] tracking-[-8%] text-center align-center text-[#2D2006]">{timeLeft.days} Days : <span className="font-light  leading-[160%]  tracking-[-1.55%]">{timeLeft.minutes} min : {timeLeft.seconds} s</span></h1>
              </div>

              <div className="flex justify-end ">
                <div className="bg-[#0A855F] w-[226px] font- h-[31px] text-white z-12 rounded-[12px] border-2 border-white text-[16px] leading-[160%]tracking-normal items-center text-center justify-center -rotate-6 font-grotesk">Date <span className="font-bold">November 12, 2025</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}

