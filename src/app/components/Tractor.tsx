import Image from "next/image"

export default function About() {
    return (
      <div className="px-2.5">
            <div className="max-w-7xl max-auto">
                <div className=" p-8">
                    <div className="max-w-[403px]">
                        <h1 className="text-[44px] font-bold ">They were there <span className="text-[#512BD4]"> last year.</span></h1>
                    </div>
                    <div className=" mt-6 grid grid-cols-4 gap-6">
                        <p>
                            &quot;An incredible experience! The workshops on .NET 8 and applied AI really helped me improve my skills. Well done to the team for the flawless organization.&quot;
                        </p>
                        <p>
                            &quot;It was my first time participating and I loved it. I got to meet experts I already follow online and ask them all my questions. I&apos;m leaving feeling super motivated!&quot;
                        </p>
                        <p>
                            &quot;The sessions on Azure and hybrid cloud were very practical and applicable to our projects. I highly recommend this conference to anyone who wants to advance in the Microsoft ecosystem.&quot;
                        </p>
                        <p>
                            &quot;I loved how kind and helpful the instructors were. Even as a beginner, I felt included and encouraged.&quot;
                        </p>
                    </div>
                </div>
                <div className="grid grid-cols-4 gap-3 ">
                    <Image src="/image_3.png" width={100} height={100} alt="Teams" className="w-full h-full object-cover rounded-[18px]"/>
                    <Image src="/image_8.jpg" width={100} height={100} alt="Teams" className="w-full h-full object-cover rounded-[18px]"/>
                    <Image src="/image_1.png" width={100} height={100} alt="Teams" className="w-full h-full object-cover rounded-[18px]"/>
                    <Image src="/image_7.jpg" width={100} height={100} alt="Teams" className="w-full h-full object-cover rounded-[18px]"/>
                </div>
                <div className="grid grid-cols-3 gap-3 mt-3 h-[280x]">
                    <Image src="/image_9.jpg" width={100} height={100} alt="Teams" className="w-full object-cover rounded-[18px]"/>
                    <Image src="/image_5.jpg" width={100} height={100} alt="Teams" className="w-full h-full object-cover rounded-[18px]"/>
                    <Image src="/image_6.png" width={100} height={100} alt="Teams" className=" w-full h-full object-cover rounded-[18px]"/>
                </div>
            </div>
            
      </div>
  )
}