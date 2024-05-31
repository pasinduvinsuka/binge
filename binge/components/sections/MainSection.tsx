import React from "react";
import { Button } from "../ui/button";

export default function MainSection() {
  return (
    <div className="flex flex-col justify-center items-center gap-2">
      <h1 className="text-center font-bold text-4xl leading-relaxed">
        Elevating Your Golf Game, One Virtual Round At A <br />
        Time, Where Tradition Meets Innovation On The <br />
        Digital Fairway
      </h1>
      <p>
        Join our global golf hub. Access exclusive courses, track progress,
        submit videos hassle-free. Elevate your game now
      </p>
      <Button variant={"outline"} className="border border-gray-950 rounded-full">
        GET STARTED FOR FREE
      </Button>
    </div>
  );
}
