import Image from "next/image";



export default function Teams() {
    const Members = [
        {
            image: '/expert-1.png',
            name: "Jean-Marc ONANA",
            alt: "Jean-Marc ONANA",
            role: "Principal Solution Architect",
            details: [
                '15+ years of .NET experience',
                'Microsoft MVP for 8 years',
                'Author of 3 books on software architecture'
            ],
            desc: "Session: &quot;Revolutionize your applications with .NET 9 and AI&quot;"
        },
        {
            image: '/expert-2.png',
            name: "Thomas NKUISSI",
            alt: "Thomas NKUISSI",
            role: "Principal Solution Architect",
            details: [
                '15+ years of .NET experience',
                'Microsoft MVP for 8 years',
                'Author of 3 books on software architecture'
            ],
            desc: "Session: &quot;Revolutionize your applications with .NET 9 and AI&quot;"
        },
        {
            image: '/expert-4.png',
            name: "Paul MBARGA",
            role: "Principal Solution Architect",
            alt: "Paul MBARGA",
            details: [
                '15+ years of .NET experience',
                'Microsoft MVP for 8 years',
                'Author of 3 books on software architecture'
            ],
            desc: "Session: &quot;Revolutionize your applications with .NET 9 and AI&quot;"
        },
        {
            image: '/expert-3.png',
            name: "Georges FOTSO",
            role: "Principal Solution Architect",
            alt: "Georges FOTSO",
            details: [
                '15+ years of .NET experience',
                'Microsoft MVP for 8 years',
                'Author of 3 books on software architecture'
            ],
            desc: "Session: &quot;Revolutionize your applications with .NET 9 and AI&quot;"
        },
        {
            image: '/expert-3.png',
            name: "Paul MBARGA",
            role: "Principal Solution Architect",
            alt: "Paul MBARGA",
            details: [
                '15+ years of .NET experience',
                'Microsoft MVP for 8 years',
                'Author of 3 books on software architecture'
            ],
            desc: "Session: &quot;Revolutionize your applications with .NET 9 and AI&quot;"
        },
        {
            image: '/expert-1.png',
            name: "Jean-Marc ONANA",
            role: "Principal Solution Architect",
            alt: "Jean-Marc ONANA",
            details: [
                '15+ years of .NET experience',
                'Microsoft MVP for 8 years',
                'Author of 3 books on software architecture'
            ],
            desc: "Session: &quot;Revolutionize your applications with .NET 9 and AI&quot;"
        },
        {
            image: '/expert-2.png',
            name: "Thomas NKUISSI",
            role: "Principal Solution Architect",
            alt: "Thomas NKUISSI",
            details: [
                '15+ years of .NET experience',
                'Microsoft MVP for 8 years',
                'Author of 3 books on software architecture'
            ],
            desc: "Session: &quot;Revolutionize your applications with .NET 9 and AI&quot;"
        },
        {
            image: '/expert-5.png',
            name: "Thomas NKUISSI",
            role: "Principal Solution Architect",
            alt: "Thomas NKUISSI",
            details: [
                '15+ years of .NET experience',
                'Microsoft MVP for 8 years',
                'Author of 3 books on software architecture'
            ],
            desc: "Session: &quot;Revolutionize your applications with .NET 9 and AI&quot;"
        }
    ]


    return (
        <div className="md:px-2.5 mt-20">
            <div className="w-full bg-[#1F143B] md:mx-auto p-4 md:py-20 md:px-8 md:rounded-[44px] md:space-y-11">
                    <div className="max-w-[353px]">
                        <h2 className="font-grotesk text-[36px] text-[#FFFFFF] font-bold ">Renowned experts <span className="text-[#8B6BF8]">to inspire you</span></h2>
                    </div>
                    <div className=" mt-25">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-2 gap-y-20 md:gap-6 md:gap-y-20">
                        {
                            Members.map((member, idx) => (
                                <div key={idx} className=" ">
                                <div className="flex flex-col bg-[#FFFFFF] rounded-[13px] shadow-lg ">
                                    <div className=" rounded-2xl pl-2 md:pl-5 -mt-[50px]">
                                        <Image
                                        className=" w-[100px] h-[100px] object-cover border-5 border-[#1F143B] rounded-2xl"
                                        src={member.image}
                                        alt={member.alt}
                                        width={100}
                                        height={100}
                                        />
                                    </div>
                                    <div className="p-3">
                                            <h4 className=" font-['Space_Grotestk'] text-[20px] text-[#190649] font-bold">{member.name}</h4>
                                            <p className="font-['Lexend']  text-[#404040] font-light text-[14px] border-b border-[#1F143B] pb-3">{member.role}</p>
                                            <ul className=" text-[16px] font-lenx text-[#404040] font-light p-3 list-disc">
                                                {
                                                    member.details && member.details.map((data, idx) => (
                                                        <li key={idx}>{data}</li>
                                                    ))
                                                } 
                                        </ul>
                                        <p className="md:ml-2 font-['Lexend'] border-t border-[#1F143B] pt-3 text-[#404040] font-light text-[16px]">Session: &quot;Revolutionize your applications with .NET 9 and AI&quot;</p>
                                    </div>
                                </div>
                                
                            </div>
                            ))
                           }   
                            
                    </div>
                    <div className="w-full items-center gap-2 flex flex-col mt-4 md:hidden">
                        <button className="bg-white w-full p-7 rounded-[13px] font-grotesk font-bold text-[16px] leading-[160%]">See all speakers</button>
                        <button className="bg-[#0A855F] w-full p-7 rounded-[13px] text-white font-grotesk font-bold text-[16px] leading-[160%]">Become a speakers</button>
                    </div>
                    {/*  deuxieme div */}
                    
                        <div className="flex md:flex-col-reverse bg-[url(/expert-5.png)] h-[600px] bg-cover bg-no-repeat bg-center items-end md:max-w-full mt-20 rounded-2xl p-2 md:p-10">
                                <div className=" w-[386px]  md:w-[560px] p-5 rounded-[18px] bg-[#FFFFFF] shadow-lg items-end  ">
                                    <div className="md:w-full max-w-full">
                                    <h2 className="font-['Space_Grotesk'] text-black font-bold leading-[100%] text-[28px] md:text-[34px] ">
                                        <span className="text-[#512BD4] ">
                                        Must-attend tech event </span>for the Microsoft Ecosystem in Cameroon
                                    </h2>
                                    <p className="font-['Lexend'] text-[#575362] text-Gray font-light text-[15px] leading-none">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                        eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                    </p>
                                    </div>
                                    <div className="md:w-[500px] ">
                                    <div className="flex flex-wrap gap-2 text-[#575362] mt-4 ">
                                        
                                        <span className="text-[14px] font-['Lexend'] border p-2.5 rounded-[13px] font-light">
                                            Subscribe to event
                                        </span>
                                        <span className="text-[14px] font-['Lexend'] border p-2.5 rounded-[13px] font-light">
                                            Subscribe
                                        </span>
                                        
                                        <span className="text-[14px] font-['Lexend'] border p-2.5 rounded-[13px] font-light">
                                            Subscribe to event
                                        </span>
                                        
                                        <span className="text-[14px] font-['Lexend'] border p-2.5 rounded-[13px] font-light">
                                            Subscribe
                                        </span>

                                        <span className="text-[14px] font-['Lexend'] border p-2.5 rounded-[13px] font-light">
                                            Subscribe to event
                                        </span>
                                        <span className="text-[14px] font-['Lexend'] border p-2.5 rounded-[13px] font-light">
                                            Subscribe
                                        </span>
                                        <span className="text-[14px] font-['Lexend'] border p-2.5 rounded-[13px] font-light">
                                            Subscribe to event
                                        </span>
                                        <span className="text-[14px] font-['Lexend'] border p-2.5 rounded-[13px] font-light">
                                            Subscribe to event
                                        </span>
                                        
                                    </div>
                                    </div>
                                </div>
                        </div>
                        
                            {/* derniere div */}
                            <div className=" mt-10">
                        <h1 className="text-[#FFFFFF] font-bold font-['Space_Grotesk'] text-[28px] md:text-[44px]">Core team</h1>
                  
                        <div className=" mt-25 grid grid-cols-2 md:grid-cols-4 gap-x-3 gap-y-20 md:gap-x-10 md:gap-y-20">
                            <div className=" ">
                                <div className="flex flex-col bg-[#FFFFFF] rounded-[13px] shadow-lg ">
                                    <div className=" rounded-2xl pl-5 -mt-[50px]">
                                        <Image
                                        className=" w-[100px] h-[100px] object-cover border-5 border-[#1F143B] rounded-2xl"
                                        src="/expert-6.png"
                                        alt="Hero Image"
                                        width={100}
                                        height={100}
                                        />
                                    </div>
                                    <div className="p-5">
                                        <div className="pb-4 border-b border-[#1F143B]">
                                            <h4 className=" font-['Space_Grotestk'] text-[20px] text-[#190649] font-bold">Jean-Marc ONANA</h4>
                                            <span>Software developer</span>
                                        </div>

                                        <p className="font-['Lexend']  text-[#404040] font-light text-[14px]  pt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                                    </div>
                                </div>
                                
                            </div>
                            <div className=" ">
                                <div className="flex flex-col bg-[#FFFFFF] rounded-[13px] shadow-lg ">
                                    <div className=" rounded-2xl pl-5 -mt-[50px]">
                                        <Image
                                        className=" w-[100px] h-[100px] object-cover border-5 border-[#1F143B] rounded-2xl"
                                        src="/expert-7.png"
                                        alt="Hero Image"
                                        width={100}
                                        height={100}
                                        />
                                    </div>
                                    <div className="p-5">
                                        <div className="pb-4 border-b border-[#1F143B]">
                                            <h4 className=" font-['Space_Grotestk'] text-[20px] text-[#190649] font-bold">Djoufson CHE BENE</h4>
                                            <span>Software developer</span>
                                        </div>

                                        <p className="font-['Lexend']  text-[#404040] font-light text-[14px]  pt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                                    </div>
                                </div>
                                
                            </div>
                            <div className=" ">
                                <div className="flex flex-col bg-[#FFFFFF] rounded-[13px] shadow-lg ">
                                    <div className=" rounded-2xl pl-5 -mt-[50px]">
                                        <Image
                                        className=" w-[100px] h-[100px] object-cover border-5 border-[#1F143B] rounded-2xl"
                                        src="/expert-8.png"
                                        alt="Hero Image"
                                        width={100}
                                        height={100}
                                        />
                                    </div>
                                    <div className="p-5">
                                        <div className="pb-4 border-b border-[#1F143B]">
                                            <h4 className=" font-['Space_Grotestk'] text-[20px] text-[#190649] font-bold">Yvan MEGNEMO</h4>
                                            <span>Software developer</span>
                                        </div>

                                        <p className="font-['Lexend']  text-[#404040] font-light text-[14px]  pt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                                    </div>
                                </div>
                                
                            </div>
                            <div className=" ">
                                <div className="flex flex-col bg-[#FFFFFF] rounded-[13px] shadow-lg ">
                                    <div className=" rounded-2xl pl-5 -mt-[50px]">
                                        <Image
                                        className=" w-[100px] h-[100px] object-cover border-5 border-[#1F143B] rounded-2xl"
                                        src="/expert-9.png"
                                        alt="Hero Image"
                                        width={100}
                                        height={100}
                                        />
                                    </div>
                                    <div className="p-5">
                                        <div className="pb-4 border-b border-[#1F143B]">
                                            <h4 className=" font-['Space_Grotestk'] text-[20px] text-[#190649] font-bold">Stéphane Cédric Noumbo</h4>
                                            <span>Software developer</span>
                                        </div>

                                        <p className="font-['Lexend']  text-[#404040] font-light text-[14px]  pt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                            </div>          
                    </div>
            </div>
        </div>
    )
}