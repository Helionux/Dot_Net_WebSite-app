import Image from "next/image";

export default function Member() {
  return (
    <div className="flex gap-2 w-full h-[362px] flex-nowrap overflow-auto mt-24 box-border">
            <div className="w-[300px] h-full">
              <Image
                src="/image_1.png"
                alt="Members"
                width={300}
                height={362}
                className="w-full h-full rounded-3xl object-cover" 
              />
            </div>
            <div className="w-[300px] h-full">
              <Image
                src="/image_2.jpg"
                alt="Members"
                  width={300}
                height={362}
                className="w-full h-full rounded-3xl object-cover"
              />
            </div>
            <div className="w-[300px] h-[362px]">
              <Image
                src="/image_3.png"
                alt="Members"
                  width={300}
                height={362}
                className="w-full h-full rounded-3xl object-cover"
              />
            </div>
            <div className="w-[300px] h-[362px]">
              <Image
                src="/image_5.png"
                alt="Members"
                 width={300}
                height={362}
                className="w-full h-full rounded-3xl object-cover"
              />
            </div>
            <div className="w-[300px] h-[362px]">
              <Image
                src="/image_6.jpg"
                alt="Members"
                 width={300}
                height={362}
                className="w-full h-full rounded-3xl object-cover"
              />
            </div>
            <div className="w-[300px] h-[362px]">
              <Image
                src="/image_6.png"
                alt="Members"
                 width={300}
                height={362}
                className="w-full h-full rounded-3xl object-cover"
              />
            </div>
        </div>
    );
}