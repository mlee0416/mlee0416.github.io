import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import authentication_img from "../../../public/static/authentication.jpg";
import admin from "../../../public/static/admin.png";
import settings from "../../../public/static/settings.png";
import login from "../../../public/static/login.png";
import Image from "next/image";

const IMAGES = [authentication_img, login, admin, settings];
export function AuthCarousel() {
  return (
    <Carousel className="ml-7 laptop:ml-10 w-10/12">
      <CarouselContent>
        {Array.from({ length: 3 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <Image
                    src={IMAGES[index]}
                    alt="auth"
                    width={500}
                    height={400}
                    className="rounded-lg"
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
