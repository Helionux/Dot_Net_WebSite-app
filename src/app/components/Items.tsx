import { BookOpenText, HandFist, RefreshCcw, UserRound } from "lucide-react"



export default function Items() { 

    const Item = [
        {
            icon: <HandFist className="text-[#512BD4]"/>,
            title: "Boost your career",
            description:"Relevant content: real-life feedback, best practices, career coaching, resume or LinkedIn profile reviews." 
        },
        {
            icon: <BookOpenText />,
            title: "Learn by doing",
            description: "Guided workshops and labs allow you to code, test, and experiment."
        },
        {
            icon: <UserRound />,
            title: "Meet the ecosystem",
            description: "The perfect opportunity to expand your network, exchange ideas, and find new collaborators or professional opportunities."
        },
        {
            icon: <RefreshCcw />,
            title: "Stay up to date",
            description: "Experts and practitioners reveal the latest developments in .NET, C#, Azure, AI, DevOps, security, and modern architecture."
        }

    ]



    return (
        <div  className=" max-w-7xl mx-auto mt-20">
            <div className=" items-center  w-full justify-between z-10 bg-white/95 px-8">

                <div className="w-[398px] md:w-[528px] mb-12 ">
                    
                    <h2 className="text-[34px] md:text-[44px] font-bold font-grotesk">Why come, <span className="text-[#512BD4]">why now?</span></h2>
                    <p className="font-lenx text-[16px] leading-[140%] font-light">Much more than a conference, it is a learning experience, a chance to 
                    share and discover opportunities that can transform your career.</p>
                </div>

                <div className="md:mt-5 grid grid-cols-2 mx-auto md:grid-cols-4 divide-x divide-y gap-6 md:*:pr-6">
                    
                    {
                        Item.map((el, idx) => (
                                
                        <div key={idx}>
                            {el.icon}
                            <h2 className={`font-bold font-grotesk text-[20px] mt-3 ${idx == 0 && 'text-[#512BD4]'}`}>{el.title} </h2>
                            <p className="text-[16px] leading-[140%] font-lenx font-light text-[#404040]">{el.description}</p>
                        </div>
                   
                        ))
               }
                </div>
            </div>
        </div>
    )
}