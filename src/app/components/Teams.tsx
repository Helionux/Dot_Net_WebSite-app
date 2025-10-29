import Image from "next/image";



export default function Teams() {
    return (
        <div className="px-2.5">
            <div className="w-full bg-[#1F143B] rounded-[44px]">
                <div className="max-w-7xl mx-auto py-20 px-8">
                    <div className="max-w-[353px]">
                        <h2 className="font-grotesk text-[36px] text-[#FFFFFF] font-bold ">Renowned experts <span className="text-[#8B6BF8]">to inspire you</span></h2>
                    </div>
                    <div className="w-full">
                        <div className="mx-auto ">
                            <div className="max-w-6xl mx-auto mt-4 grid grid-cols-4 gap-6">
                                <div className="w-[292px] h-80 bg-[#1F143B] relative">
                                    <div className=" w-full rounded-2xl mt-10 bg-[#FFFFFF] relative">
                                        <Image
                                        className="absolute -top-7 left-2 border-3 border-[#1F143B] h-15 w-15 rounded-2xl"
                                        src="/expert-5.png"
                                        alt="Hero Image"
                                        width={100}
                                        height={100}
                                        />
                                    </div>
                                    <div className=" w-full absolute top-20 left-4 right-4 ">
                                        <h1 className=" top-20 ml-2 font-['Space_Grotestk'] text-[20px] text-[#190649] font-bold">Georges FOTSO</h1>
                                        <p className="ml-2 font-['Lexend']  text-[#404040] font-light text-[14px]">Principal Solution Architect</p>
                                        <ul className=" border border-red text-[15px] px-3 list-inside list-disc">
                                            <li>15+ years of .NET experience</li>
                                            <li>Microsoft MVP for 8 years</li>
                                            <li>Author of 3 books on software architecture</li>
                                        </ul>
                                        <p className="ml-2 font-['Lexend']  text-[#404040] font-light text-[16px]">Session: &quot;Revolutionize your applications with .NET 9 and AI&quot;</p>
                                    </div>
                                </div>
                            
                            
                                
                            </div>
                            </div>
                            {/*  deuxieme div */}
                            <div className="flex flex-col flex-col-reverse bg-[url(/expert-5.png)] h-[600px] bg-cover bg-no-repeat bg-center max-w-full rounded-2xl p-[40px]">
                                <div className="   w-[560px] p-5 rounded-[18px] bg-[#FFFFFF] shadow-lg ">
                                    <div className="w-full">
                                    <h2 className="font-['Space_Grotesk'] text-black font-bold leading-none text-[34px] ">
                                        <span className="text-[#512BD4] ">
                                        
                                        Must-attend tech event </span>for the Microsoft Ecosystem in Cameroon
                                    </h2>
                                    <p className="font-['Lexend'] text-Gray font-light text-[15px] leading-none">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                        eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                    </p>
                                    </div>
                                    <div className="w-[500px] ">
                                    <div className="flex flex-wrap gap-2 mt-4">
                                        
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
                            <div className="font-['Space_Grotesk'] font-bold text-[25px] mt-10 leading-[110%] tracking-[-0.08em]">
                            <span className="text-[#FFFFFF]">Core team</span>
                            </div>
                            <div className="max-w-6xl mx-auto mt-4 grid grid-cols-4 gap-6">
                                <div className=" h-80 bg-[#1F143B] relative">
                                <div className=" h-60 rounded-2xl mt-10 bg-[#FFFFFF] relative">
                                    <Image
                                    className="absolute -top-7 left-2 border-3 border-[#1F143B] h-15 w-15 rounded-2xl"
                                    src="/expert-6.png"
                                    alt="Hero Image"
                                    width={100}
                                    height={100}
                                    />
                                </div>
                                <div className="w-[252px] h-[225px] absolute top-20 left-4 right-4 ">
                                    <h1 className=" top-20 ml-2 font-['Space_Grotestk'] text-[20px] text-[#190649] font-bold">Jaures Beinjamin Fotsing</h1>
                                    <p className="ml-2 font-['Lexend']  text-[#404040] font-light text-[14px]">Software developer</p>
                                    <div className="w-[210px] mt-2 border border-[#DDDDDD]"></div>
                                    <p className="ml-2 font-['Lexend']  text-[#404040] font-light text-[16px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                                </div>
                                </div>
                                <div className=" h-80 bg-[#1F143B] relative">
                                <div className="h-60 rounded-2xl mt-10 bg-[#FFFFFF] relative">
                                    <Image
                                    className="absolute -top-7 left-2 border-3 border-[#1F143B] h-15 w-15 rounded-2xl"
                                    src="/expert-7.png"
                                    alt="Hero Image"
                                    width={100}
                                    height={100}
                                    />
                                </div>
                                <div className="w-[252px] h-[225px] absolute top-20 left-4 right-4 ">
                                    <h1 className=" top-20 ml-2 font-['Space_Grotestk'] text-[20px] text-[#190649] font-bold">Djoufson CHE BENE</h1>
                                    <p className="ml-2 font-['Lexend']  text-[#404040] font-light text-[14px]">Software Engineer</p>
                                    <div className="w-[210px] mt-2 border border-[#DDDDDD]"></div>
                                    <p className="ml-2 font-['Lexend']  text-[#404040] font-light text-[16px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                                </div>
                                </div>
                                <div className=" h-80 bg-[#1F143B] relative">
                                <div className=" h-60 rounded-2xl mt-10 bg-[#FFFFFF] relative">
                                    <Image
                                    className="absolute -top-7 left-2 border-3 border-[#1F143B] h-15 w-15 rounded-2xl"
                                    src="/expert-8.png"
                                    alt="Hero Image"
                                    width={100}
                                    height={100}
                                    />
                                </div>
                                <div className="w-[252px] h-[225px] absolute top-20 left-4 right-4 ">
                                    <h1 className=" top-20 ml-2 font-['Space_Grotestk'] text-[20px] text-[#190649] font-bold">Yvan MEGNEMO</h1>
                                    <p className="ml-2 font-['Lexend']  text-[#404040] font-light text-[14px]">Software Engineer</p>
                                    <div className="w-[210px] mt-2 border border-[#DDDDDD]"></div>
                                    <p className="ml-2 font-['Lexend']  text-[#404040] font-light text-[16px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                                </div>
                                </div>
                                <div className=" h-80 bg-[#1F143B] relative">
                                <div className=" h-60 rounded-2xl mt-10 bg-[#FFFFFF] relative">
                                    <Image
                                    className="absolute -top-7 left-2 border-3 border-[#1F143B] h-15 w-15 rounded-2xl"
                                    src="/expert-9.png"
                                    alt="Hero Image"
                                    width={100}
                                    height={100}
                                    />
                                </div>
                                <div className="w-[252px] h-[225px] absolute top-20 left-4 right-4 ">
                                    <h1 className=" top-20 ml-2 font-['Space_Grotestk'] text-[20px] text-[#190649] font-bold">Stephane Cedric Noumbo</h1>
                                    <p className="ml-2 font-['Lexend']  text-[#404040] font-light text-[14px]">Software Engineer</p>
                                    <div className="w-[210px] mt-2 border border-[#DDDDDD]"></div>
                                    <p className="ml-2 font-['Lexend']  text-[#404040] font-light text-[16px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                                </div>
                                </div>
                            </div>
                    
                    </div>
                    
                </div>
            </div>
        </div>
    )
}