import Image from "next/image"

export default function About() {

    const Images1 = [
        {
            img: '/image_3.png',
            alt: "Member-1" 
        },
        {
            img: '/image_8.jpg',
            alt: "Member-1"
        },
        {
            img: '/image_1.png',
            alt: "Member-1"
        },
        {
            img: '/image_7.jpg',
            alt: "Member-1"
        }

    ]

    const Images2 = [
        {
            img: '/image_9.jpg',
            alt: "Member-1"
        },
        {
            img: '/image_5.jpg',
            alt: "Member-1"
        },
        {
            img: '/image_6.png',
            alt: "Member-1"
        }
    ]


    return (
      <div className="px-2.5 mt-10">
            <div className=" mx-auto">
                <div className=" p-3">
                    <div className="md:max-w-[403px]">
                        <h1 className="text-[44px] font-bold leading-[110%] -tracking-[8%] font-grotesk ">They were there <span className="text-[#512BD4]"> last year.</span></h1>
                    </div>
                    <div className="w-full md:max-w-7xl text-[16px] mt-6 flex divide-x md:grid md:grid-cols-4 flex-row gap-6 font-lenx font-light md:flex-nowrap overflow-auto box-border no-scrollbar">
                        <div className=" w-full shrink-0 p-3">
                            <p>
                                &quot;An incredible experience! The workshops on .NET 8 and applied AI really helped me improve my skills. Well done to the team for the flawless organization.&quot;
                            </p>
                            <span className="font-bold">Jean-Paul M. – Backend developer</span>
                        </div>
                        <div className=" w-full shrink-0 h-40 p-3">
                            <p>
                            &quot;It was my first time participating and I loved it. I got to meet experts I already follow online and ask them all my questions. I&apos;m leaving feeling super motivated!&quot;
                            </p>
                            <span className="font-bold">
                                Nathalie K. – Computer science student
                            </span>
                        </div>
                        <div className=" w-full shrink-0 h-40 p-3">
                            <p>
                                &quot;The sessions on Azure and hybrid cloud were very practical and applicable to our projects. I highly recommend this conference to anyone who wants to advance in the Microsoft ecosystem.&quot;
                            </p>
                            <span className="font-bold">Hervé B. – Freelance .NET</span>
                        </div>
                        <div className=" w-full shrink-0 h-40 p-3">
                            <p>
                                &quot;I loved how kind and helpful the instructors were. Even as a beginner, I felt included and encouraged.&quot;
                            </p>
                            <span className="font-bold">Stephanie E. – Junior Developer</span>
                        </div>
                    </div>
                </div>
                <div className="w-[1000px] overflow-auto no-scrollbar box-border border">
                    <div className="flex flex-row md:grid md:grid-cols-4 gap-3 mt-10 md:flex-nowrap overflow-auto box-border no-scrollbar">
                    {
                        Images1.map((img, idx) => (
                            <figure key={idx}>
                        <Image src={img.img} width={100} height={100} alt={img.alt} className="w-full h-full object-cover rounded-[18px]"/>
                    </figure>
                        ))
                    }
                    </div>
                    <div className="grid grid-cols-3 gap-3 mt-3 h-[280x]">
                        {
                            Images2.map((img, idx) => (
                                <figure key={idx}>
                            <Image src={img.img} width={100} height={100} alt={img.alt} className="w-full h-full object-cover rounded-[18px]"/>
                        </figure>
                            ))
                        }
                    </div>
                </div>
                
            </div>
            
      </div>
  )
}