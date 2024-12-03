"use client"
import Image from "next/image";
import NavbarComponent from "@/components/Navbar";
import { MdAccessTime } from "react-icons/md";
import { FaUniversity } from "react-icons/fa";
import Link from "next/link";
import Instructions from "@/components/Instructions";
import { useEffect } from "react";

export default function Home() {

//  useEffect(
//   () => {
//     const captureMedia = async () => {
//       try {
//         const capturedStream = await navigator.mediaDevices.getUserMedia({
//           video: true,
//           audio: true
//         })
  
//         console.log("Media captured successfully");
//       } catch (error) {
//         console.log("Error", error)
//       }
//     }
//     captureMedia();
//   }, []
//  )

  return (
    <>
      <div className="sticky">
        <NavbarComponent />
      </div>
     
      <div className="flex bg-[#161D29] h-fit pt-12 px-32 scroll-none pb-8">
        <div className="w-3/5 h-fit px-6 ">
          <div className="text-2xl font-semibold text-white">Trainee Interview</div>
          <div className="bg-black w-[570px] h-[500px] mt-10 rounded-lg overflow-hidden">
             
          </div>
        </div>
        <div className="w-[570px] h-fit">
          <div className="flex justify-end gap-4">
            <div className="text-white flex border border-gray-400 rounded-md px-4 py-2 justify-center items-center gap-3">
              <span className="text-orange-600 text-lg">
                <FaUniversity />
              </span>{" "}
              <span className="text-sm">Zeko</span>
            </div>
            <div className="flex text-white border border-gray-400 rounded-md justify-center items-center gap-3 px-4 py-2">
              <span className="text-red-600 text-lg">
                <MdAccessTime />
              </span>
              <span className="text-sm">26 Minutes</span>
            </div>
          </div>
          <div>
            <Instructions />
          </div>
        </div>
      </div>
    </>
  );
}
