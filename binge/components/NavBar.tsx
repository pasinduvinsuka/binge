"use client";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { RiGolfBallFill } from "react-icons/ri";

export default function NavBar() {
  return (
    <div className=" flex flex-row justify-between pt-4 items-center px-10">
      {/* <Image src={"/binge.svg"} alt={""} width={30} height={30} /> */}
      <div className="flex flex-row items-center gap-2">
        <i>
          <RiGolfBallFill size={32} />
        </i>
        <p className="font-semibold text-2xl">binge</p>
      </div>
      <div className="flex flex-row justify-center gap-6 ">
        <Link href={""} className="text-sm">ABOUT </Link>
        <Link href={""} className="text-sm">PRICING</Link>
        <Link href={""} className="text-sm">CONTACT US</Link>
        <Link href={""} className="text-sm"></Link>
      </div>

      <div className="">
        <Link href={""} className="pr-4 text-sm">
          LOGIN
        </Link>
        <Button
          variant={"outline"}
          className="border border-gray-950 rounded-full font-semibold hover:bg-black hover:text-white text-sm"
          
        >
          REGISTER NOW
        </Button>
      </div>
    </div>
  );
}
