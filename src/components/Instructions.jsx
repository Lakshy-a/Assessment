"use client";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { BsExclamationCircle } from "react-icons/bs";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

const Instructions = () => {
  const [cameraAccess, setCameraAccess] = useState(false);

  const grantCameraAccess = () => {
    setCameraAccess(true);
  };

  const closeGrantAccess = () => {
    setCameraAccess(false);
  };

  return (
    <>
      <div className="text-white pl-10 w-full mt-10 ">
        <h3 className="text-xl font-semibold">Instructions</h3>
        <div className="flex flex-col gap-3 mt-4 text-gray-100 text-base">
          <p>1. Ensure stable internet and choose a clean, quiet location.</p>
          <p>
            2. Permission for access of camera, microphone, entire screen
            sharing is required.
          </p>
          <p>3. Be in professional attire and avoid distractions.</p>
          <p>
            4. Give a detailed response, providing as much information as you
            can.
          </p>
          <p>
            5. Answer the question with examples and projects you've worked on.
          </p>
        </div>
        <div className="bg-[#263143] rounded-xl mt-6 px-3 py-2 ">
          <span className="text-[#6C60F4] hover:text-violet-700">
            <Link href={"#"}>Click here </Link>
          </span>{" "}
          {/* <span><FaArrowUpRightFromSquare /></span> */}
          to try a mock interview with Avya, our AI interviewer, and build your
          confidence before the main interview!
        </div>
        <button
          className=" mt-6 w-full bg-[#6C60F4] py-2 rounded-lg hover:bg-[#3b2ce9]  "
          onClick={grantCameraAccess}
        >
          Start Now
        </button>
      </div>

      <div>
        {cameraAccess && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <Card className="w-[450px] pb-8 relative bg-[#161D29] flex flex-col gap-4 items-center py-10 px-4 border-0">
              <div className="text-[#FACEA8] text-8xl font-medium">
                <BsExclamationCircle />
              </div>
              <div className="mt-6 text-gray-300 text-3xl font-semibold">
                Grant Camera Access
              </div>
              <div className=" text-gray-300 text-lg font-medium text-center">
                Grant Camera access to attempt the interview
              </div>
              <button
                className="bg-blue-500 text-white px-8 py-2 rounded-md"
                onClick={closeGrantAccess}
              >
                Grant Access
              </button>
              {/* <div
                className="absolute top-4 text-sm  right-4 cursor-pointer text-gray-600"
              >
                X
              </div>
              <CardHeader className="flex flex-col gap-4 mt-4">
                <CardTitle className="text-center font-semibold">
                  Are you ready to start working towards your career goals!
                </CardTitle>
                <div className="flex items-center bg-blue-500 px-2 py-2 rounded-lg cursor-pointer hover:bg-blue-700">
                  <div>
                    <Image src={google} alt="google" width={80} />
                  </div>
                  <div className="text-start pl-8 text-white font-bold w-full text-sm">
                    Login with Google
                  </div>
                </div>
                <div className="">
                  <hr />
                  <div className="w-full text-xs text-center text-gray-400">
                    OR
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <form>
                  <div className="grid w-full items-center gap-4 mt-">
                    <div className="flex flex-col space-y-1.5">
                      <Label htmlFor="name" className="font-semibold">
                        Email
                      </Label>
                      <Input
                        id="name"
                        placeholder="eg: abkiran@gmail.com"
                        className="border border-gray-400 font-medium text-gray-400"
                      />
                    </div>
                    <div className="flex flex-col space-y-1.5">
                      <button className="bg-[#6C60F4] text-white font-semibold py-2 rounded-lg hover:bg-[#3b2ce9]">
                        Continue
                      </button>
                    </div>
                  </div>
                </form>
              </CardContent>
              <div className="w-full px-8 text-center flex text-xs">
                <p>
                  By going forward, you're agreeing to MyWays Terms of{" "}
                  <span className="text-blue-500">
                    Use and Privacy Policies
                  </span>
                </p>
              </div> */}
            </Card>
          </div>
        )}
      </div>
    </>
  );
};

export default Instructions;
