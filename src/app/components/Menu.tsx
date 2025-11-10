


export default function Menu() {

    const Menus = [
        {
            title: "1. Keynote",
            description: "Doriane Mangamtcheuth Analyste M365 | Power Platform | Microsoft Dynamics 365",
            date: "09:00 AM - 09:30 AM",
            color: "#512BD4",
            type: "Keynote"
        },
        {
            title: "2. Keynote",
            description: "Doriane Mangamtcheuth Analyste M365 | Power Platform | Microsoft Dynamics 365",
            date: "09:30 AM - 10:00 AM",
            color: "#0A855F",
            type: "Conference"
        },
        {
            title: "3. Copilot: prise en main de copilot sur Microsoft 365",
            description: "Doriane Mangamtcheuth Analyste M365 | Power Platform | Microsoft Dynamics 365",
            date: "10:00 AM - 10:30 AM",
            color: "#E1A325",
            type: "Conference"
        },
        {
            title: "4. Sponsor Time - ITIA",
            description: "Doriane Mangamtcheuth Analyste M365 | Power Platform | Microsoft Dynamics 365",
            date: "10:30 AM - 10:45 AM",
            color: "#512BD4",
            type: "Sponsor Time"
        },
        {
            title: "5. Deploy .NET Aspire app to Kubernetes using Azure DevOps pipelines",
            description: "Doriane Mangamtcheuth Analyste M365 | Power Platform | Microsoft Dynamics 365",
            date: "10:45 AM - 11:15 AM",
            color: "#E1A325",
            type: "Conference"
        }
    ]

    const spliter = (text: string): { pt1: string, pt2: string } => {
        const list = text.split(' ')
        if (list.length > 1) return { pt1: list[0], pt2: list.slice(1, list.length).join(' ') }
        if (list.length == 7) return { pt1: text.slice(0, 3), pt2: text.slice(3, list.length) }
        return { pt1: text.slice(0, 4), pt2: text.slice(4, text.length)}
        
    }


    return (
        <div className="w-full mt-16">
            <div className="mx-auto p-4 lg:ml-[calc((100%-80rem)/2)] lg:pl-8 space-y-6"> 
                <div className="max-w-md p-0">
                        <h1 className="font-grotesk text-[34px] md:text-[44px] leading-[110%] -tracking-[8%] text-[#1F143B] font-bold">An immersive day in 
                            the world of .NET
                        </h1>
                </div>
                <div className=" flex flex-nowrap gap-6 overflow-auto box-border no-scrollbar">

                    {
                        Menus.map((menu, idx) => (
                            <div key={idx} className={`w-[230px] md:w-[270px] shrink-0 font-grotesk ${( idx + 1) % 2 == 0 ? "mt-4" : " "} `}>
                                <div className="max-w-sm h-[230px] md:h-[250px] rounded-2xl p-6" style={{backgroundColor:menu.color}}>
                                    <p className="w-full h-full justify-center items-center flex font-bold text-[34px] text-[#FFFFFF] ">
                                    {spliter(menu.type).pt1}
                                    <span className=" text-[#ffffffa4]">
                                        {spliter(menu.type).pt2}
                                    </span>
                                    </p>
                                </div>
                                <h4 className="font-bold text-[20px] leading-[110%] mt-4">{menu.title}</h4>
                                <p className="font-[Lexend] text-[#575362] font-light text-[16px] leading-[140%] tracking-normal mt-2">
                                    {menu.description}
                                </p>
                                <span className=" text-[#575362] font-lenx font-light">{menu.date}</span>
                            </div>
                        ))
                    }
                    
              
                
                </div>
            </div>
        </div>
    )
}