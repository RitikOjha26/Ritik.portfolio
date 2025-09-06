import * as React from "react"
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem
} from "@/components/ui/carousel"

interface ExpData {
  title: string;
  description: string[];
  image: any;
}

interface ExpCarouselProps {
  data: ExpData[];
}

export function ExpCarousel({ data }: ExpCarouselProps) {

  return (
    <Carousel className="w-full max-w-4xl ">
      <CarouselContent className="max-h-[70vh]">
        {data.map((item, index) => (
          <CarouselItem key={index}>
            <div >
              <Card className="bg-[#0f0f16]">
                <CardContent className="p-0 flex aspect-square items-center justify-center">
                  <div className="exp-container h-full">
                    <div className="exp-modal bg-[#0f0f16]">
                      <div className="exp-modal__heading">
                        <div className="exp-modal__image">
                          <Image
                            src={item.image}
                            alt="Company-Logo"
                          />
                        </div>
                        <div className="exp-modal__title">
                          {/* <h2 className="label-1 font-extralight">{item.title}</h2> */}
                        </div>
                      </div>
                      <div className="exp-modal__description">

                        <ul className='points'>
                          {item.description.map((desc, i) => {
                            const isLast = i === item.description.length - 1;
                            return <li className='point' key={i}><div className={`point__content label-3 ${isLast ? 'technologies tech' : ''}`}>{desc}</div></li>
                          })}
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      {/* <CarouselPrevious />
      <CarouselNext /> */}
    </Carousel>
  )
}