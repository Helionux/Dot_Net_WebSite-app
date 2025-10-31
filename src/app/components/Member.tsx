import Image from "next/image";

export default function Member() {
  const memberImage: {file: string, alt:string}[] = [
    {
      file: "/image_1.png",
      alt: ""
    },
    {
      file: "/image_2.jpg",
      alt: ""
    },
    {
      file: "/image_3.png",
      alt: ""
    },
    {
      file: "/image_4.png",
      alt: ""
    },
    {
      file: "/image_5.jpg",
      alt: ""
    },
    {
      file: "/image_6.png",
      alt: ""
    },
  ]

  return (
    <div className="flex gap-2 h-[362px] flex-nowrap overflow-auto no-scrollbar mt-24 box-border">
      {
        memberImage.map(({ file, alt }, index) => {
          return (
            <div key={index} className="shrink-0 w-[300px] h-full">
              <Image
                src={file}
                alt={alt}
                width={300}
                height={362}
                className="w-full h-full rounded-3xl object-cover" 
              />
            </div>
          )
        })
      }
        </div>
    );
}