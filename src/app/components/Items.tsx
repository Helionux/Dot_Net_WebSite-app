import { BookOpenText, HandFist, RefreshCcw, UserRound } from "lucide-react"



export default function Items() { 
    return (
        <div  className=" max-w-7xl mx-auto mt-20">
            <div className=" items-center  w-full justify-between z-10 bg-white/95 px-8">

                <div className="w-[528px] mb-12 ">
                    
                    <h2 className="text-[44px] font-bold font-grotesk">Why come, <span className="text-[#512BD4] font-bold text-[44px] ">why now?</span></h2>
                    <p className="font-lenx text-[16px] leading-[140%] font-light">Much more than a conference, it is a learning experience, a chance to 
                    share and discover opportunities that can transform your career.</p>
                </div>

                <div className=" mt-5 grid
                 grid-cols-4 divide-x text-justify gap-6 *:pr-6">
                    <div>
                        <div className="text-[#512BD4] ">
                            <HandFist />
                            <h2 className="font-bold font-grotesk text-[20px] leading-[110%] mt-3">Boost your career</h2>
                        </div>
                        <p>Relevant content: real-life feedback, best practices, career coaching, resume or LinkedIn profile reviews.</p>
                    </div>
                    <div>
                        <BookOpenText />
                        <h2 className="font-bold font-grotesk text-[20px] leading-[110%] mt-3">Learn by doing</h2>
                        <p>Guided workshops and labs allow you to code, test, and experiment. </p>
                    </div>
                    <div>
                        <UserRound />
                        <h2 className="font-bold font-grotesk text-[20px] leading-[110%] mt-3">Meet the ecosystem</h2>
                        <p>The perfect opportunity to expand your network, exchange ideas, and find new collaborators or professional opportunities.</p>
                    </div>
                    <div>
                        <RefreshCcw />
                        <h2 className="font-bold font-grotesk text-[20px] leading-[110%] mt-3">Stay up to date</h2>
                        <p>Experts and practitioners reveal the latest developments in .NET, C#, Azure, AI, DevOps, security, and modern architecture.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}