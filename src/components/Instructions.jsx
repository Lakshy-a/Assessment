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
import { GoDeviceCameraVideo } from "react-icons/go";
import { IoIosCheckboxOutline } from "react-icons/io";
import { IoMicOutline } from "react-icons/io5";
import { IoVolumeHighOutline } from "react-icons/io5";
import { MdOutlineScreenShare } from "react-icons/md";
import { useRouter } from "next/navigation";

const Instructions = () => {
  const [cameraAccess, setCameraAccess] = useState(true);
  const [isCameraOpen, setIsCameraOpen] = useState(false);
  const router = useRouter();

  const grantCameraAccess = () => {
    setIsCameraOpen(true);
  };

  const navigateToFirstQuestion = () => {
    router.push("/questionPage/0");
  };

  const closeGrantAccess = () => {
    setIsCameraOpen(false);
    setCameraAccess(false);
  };

  return (
    <>
      {cameraAccess ? (
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
              5. Answer the question with examples and projects you've worked
              on.
            </p>
          </div>
          <div className="bg-[#263143] rounded-xl mt-6 px-3 py-2 ">
            <span className="text-[#6C60F4] hover:text-violet-700">
              <Link href={"#"}>Click here </Link>
            </span>{" "}
            {/* <span><FaArrowUpRightFromSquare /></span> */}
            to try a mock interview with Avya, our AI interviewer, and build
            your confidence before the main interview!
          </div>
          <button
            className=" mt-6 w-full bg-[#6C60F4] py-2 rounded-lg hover:bg-[#3b2ce9]  "
            onClick={grantCameraAccess}
          >
            Start Now
          </button>
        </div>
      ) : (
        <div className="text-white pl-10 w-full mt-10 ">
          <h3 className="text-xl font-semibold">Ready to join?</h3>
          <p className=" text-gray-400 mt-2">
            Please make sure your device is properly configured.
          </p>
          <div className="flex flex-col gap-3 mt-4 text-gray-100 text-base">
            <div className="flex justify-between px-4 py-3 items-center border text-white border-gray-400 rounded-lg">
              <div className="flex items-center gap-4">
                <div className="text-xl text-gray-300 ">
                  <GoDeviceCameraVideo />
                </div>
                <div className="text-gray-300">Check Camera</div>
              </div>
              <div className="text-2xl text-gray-300 ">
                <IoIosCheckboxOutline />
              </div>
            </div>
            <div className="flex justify-between px-4 py-3 items-center border text-white border-gray-400 rounded-lg">
              <div className="flex items-center gap-4">
                <div className="text-xl text-gray-300 ">
                  <IoMicOutline />
                </div>
                <div className="text-gray-300">Check Microphone</div>
              </div>
              <div className="text-2xl text-gray-300 ">
                <IoIosCheckboxOutline />
              </div>
            </div>
            <div className="flex justify-between px-4 py-3 items-center border text-white border-gray-400 rounded-lg">
              <div className="flex items-center gap-4">
                <div className="text-xl text-gray-300 ">
                  <IoVolumeHighOutline />
                </div>
                <div className="text-gray-300">Check Speaker</div>
              </div>
              <div className="text-2xl text-gray-300 ">
                <IoIosCheckboxOutline />
              </div>
            </div>
            <div className="flex justify-between px-4 py-3 items-center border text-white border-gray-400 rounded-lg">
              <div className="flex items-center gap-4">
                <div className="text-xl text-gray-300 ">
                  <MdOutlineScreenShare />
                </div>
                <div className="text-gray-300">Enable Screen Share</div>
              </div>
              <div className="text-2xl text-gray-300 ">
                <IoIosCheckboxOutline />
              </div>
            </div>
          </div>
          <button
            className=" mt-6 w-full bg-[#6C60F4] py-2 rounded-lg hover:bg-[#3b2ce9]  "
            onClick={navigateToFirstQuestion}
          >
            Start Interview
          </button>
        </div>
      )}

      <div>
        {isCameraOpen && (
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
            </Card>
          </div>
        )}
      </div>
    </>
  );
};

export default Instructions;
