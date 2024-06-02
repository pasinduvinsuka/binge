import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";

export default function MainSection() {
  return (
    <div className="grid grid-cols-12 gap-2">
      <div className="flex flex-col justify-center items-center gap-2 col-span-12">
        <h1 className="text-center font-bold text-4xl leading-relaxed">
          Elevating Your Golf Game, One Virtual Round At A <br />
          Time, Where Tradition Meets Innovation On The <br />
          Digital Fairway
        </h1>
        <p>
          Join our global golf hub. Access exclusive courses, track progress,
          submit videos hassle-free. Elevate your game now
        </p>
        <Button
          variant={"outline"}
          className="border border-gray-950 rounded-full"
        >
          GET STARTED FOR FREE
        </Button>
      </div>
      <div className=" flex flex-col items-end justify-end col-span-10">
        <Image src={"/image 1.svg"} alt={""} width={300} height={300} />
      </div>
      <div className="col-span-12 grid grid-cols-12 pt-2">
        <div className="col-span-6"></div>
        <div className="col-span-2">
          <Image src={"/Vector 1.svg"} alt={""} width={300} height={300} />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-2 col-span-12">
        <h1 className="text-center font-bold text-4xl ">How it works</h1>
      </div>
      <div className="col-span-12 grid grid-cols-12 pt-2">
        <div className="col-span-6"></div>
        <div className="col-span-2 justify-start items-start">
          <Image src={"/Golf Path.svg"} alt={""} width={8} height={300} />
        </div>
      </div>
      <div className="col-span-12 items-center justify-center text-center pt-3 pb-4">
        <p>SIGN UP & PAY</p>
      </div>
      <div className="col-span-12 items-center justify-center text-center pt-3 pb-4">
        <h2 className="text-center font-bold text-4xl leading-relaxed capitalize">
          Start by registering securely and
          <br /> completing payment.
        </h2>
      </div>
      <div className="grid grid-cols-12 col-span-12">
        <div className=" grid grid-cols-6 col-span-5">
          <div className="col-span-3">
            <Image src={"/image 2.svg"} alt={""} width={300} height={300} />
          </div>
          <div className="col-span-3">
            <p>
              Embark on your exciting journey with us by taking the first step:
              signing up with your email and crafting a secure password to
              unlock exclusive access and benefits.
            </p>
          </div>
        </div>
        <div>
          <Image
            src={"/Golf Path1.svg"}
            alt={""}
            width={100}
            height={100}
            className="w-full h-auto"
          />
        </div>
        <div className=" grid grid-cols-6 col-span-6">
          <div className="col-span-3 pl-20 pt-20">
            <p>
              Once logged in, proceed to the payment section where you can
              confidently complete your transaction using your preferred payment
              method.
            </p>
          </div>
          <div className="col-span-3 pl-12 pt-9">
            <Image src={"/image 3.svg"} alt={""} width={300} height={300} />
          </div>
        </div>
        <div className="col-span-12 items-center justify-center text-center pt-3 pb-4">
          <p className="">CHOOSE COURSE & HANDICAP</p>
        </div>
        <div className="col-span-12 items-center justify-center text-center pt-3 pb-4">
          <h2 className="text-center font-bold text-4xl leading-relaxed capitalize">
            Select your course and tee, and provide <br /> your handicap for
            fair competition.
          </h2>
        </div>
        <span className="col-span-2"></span>
        <div className="col-span-4">
          <p className="pt-24 px-5">
            Choose your preferred course and tee to tailor your golfing
            experience. Additionally, input your handicap to ensure fair and
            competitive play among participants.
          </p>
        </div>
        <div className="col-span-1">
          <Image
            src={"/Golf Path2.svg"}
            alt={""}
            width={100}
            height={100}
            className="w-full h-auto"
          />
        </div>
        <div className="col-span-3">
          <Image
            src={"/image 4.svg"}
            alt={""}
            width={300}
            height={300}
            className="pl-10"
          />
        </div>
        <div className="col-span-12 items-center justify-center text-center pt-3 pb-4">
          <p className="">PLAY & SHARE VIDEO</p>
        </div>
        <div className="col-span-12 items-center justify-center text-center pt-3 pb-4">
          <h2 className="text-center font-bold text-4xl leading-relaxed capitalize">
            Film your nine-hole game and easily
            <br /> submit it with your score.
          </h2>
        </div>
        <div className=" grid grid-cols-6 col-span-5">
          <div className="col-span-3">
            <Image src={"/image 5.svg"} alt={""} width={300} height={300} />
          </div>
          <div className="col-span-3">
            <p>
              Enjoy your nine-hole round while recording your gameplay using any
              video device of your choice. Afterward, seamlessly upload both
              your recorded round and score to our platform through our
              user-friendly interface.
            </p>
          </div>
        </div>
        <div>
          <Image
            src={"/Golf Path1.svg"}
            alt={""}
            width={100}
            height={100}
            className="w-full h-auto"
          />
        </div>
        <div className=" grid grid-cols-6 col-span-6">
          <div className="col-span-3 pl-20 pt-20">
            <p>
              To record and share, capture your gameplay, then upload your round
              with the score on our platform.
            </p>
          </div>
          <div className="col-span-3 pl-12 pt-9">
            <Image src={"/image 6.svg"} alt={""} width={300} height={300} />
          </div>
        </div>

        <div className="col-span-12 items-center justify-center text-center pt-3 pb-4">
          <p className="">VERIFY VIDEO & SCORE</p>
        </div>
        <div className="col-span-12 items-center justify-center text-center pt-3 pb-4">
          <h2 className="text-center font-bold text-4xl leading-relaxed capitalize">
            Our system verifies video integrity and
            <br /> tracks metrics for precise scoring.
          </h2>
        </div>
        <div className=" grid grid-cols-6 col-span-5">
          <div className="col-span-3">
            <Image src={"/image 5.svg"} alt={""} width={300} height={300} />
          </div>
          <div className="col-span-3">
            <p>
              Enjoy your nine-hole round while recording your gameplay using any
              video device of your choice. Afterward, seamlessly upload both
              your recorded round and score to our platform through our
              user-friendly interface.
            </p>
          </div>
        </div>
        <div>
          <Image
            src={"/Golf Path1.svg"}
            alt={""}
            width={100}
            height={100}
            className="w-full h-auto"
          />
        </div>
        <div className=" grid grid-cols-6 col-span-6">
          <div className="col-span-3 pl-20 pt-20">
            <p>
              To record and share, capture your gameplay, then upload your round
              with the score on our platform.
            </p>
          </div>
          <div className="col-span-3 pl-12 pt-9">
            <Image src={"/image 6.svg"} alt={""} width={300} height={300} />
          </div>
        </div>
      </div>
    </div>
  );
}
