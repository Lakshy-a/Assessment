"use client";

import { useParams, useRouter } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { useTimer } from "react-timer-hook";
import { CiStopwatch } from "react-icons/ci";

export default function AnswerQuestion() {
  const getExpiryTimestamp = () => {
    const currentTime = new Date();
    currentTime.setSeconds(currentTime.getSeconds() + 60); // Timer expires in 60 seconds
    return currentTime;
  };

  const [isPermission, setIsPermission] = useState(null); // Track permission state
  const videoReference = useRef(null);

  // Timer hook
  const { seconds, minutes, start, isRunning } = useTimer({
    expiryTimestamp: getExpiryTimestamp(),
    onExpire: () => console.warn("onExpire called"),
  });

  const router = useRouter();
  const { questionNumber } = useParams();
  const number = Number(questionNumber);

  const arrayOfQuestions = [
    { question: "What is your name?" },
    { question: "How are you?" },
    { question: "What is your age?" },
  ];

  // Request video and audio permissions
  const askPermissions = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true,
      });

      if (videoReference.current) {
        videoReference.current.srcObject = stream;
      }

      setIsPermission(true);
    } catch (error) {
      console.error("Error accessing media devices:", error);
      setIsPermission(false);
    }
  };

  // Start timer and ask for permissions
  useEffect(() => {
    if (!isRunning) {
      start(); // Start the timer immediately on render
    }
    askPermissions(); // Request permission on mount
  }, [isRunning, start]);

  return (
    <>
      <div className="w-screen h-screen bg-[#161D29] flex flex-col justify-center items-center gap-4">
        <div className="text-white">
          {number}/{arrayOfQuestions.length}
        </div>
        <p className="text-white">{arrayOfQuestions[number - 1].question}</p>
        <div className="text-white flex gap-2">
          <div>Timer: </div>
          <div className="text-orange-700 flex gap-1 items-center bg-orange-100 px-3 py-1 rounded-lg">
            <span className="text-lg">
              <CiStopwatch />
            </span>
            <span>{minutes}</span>:<span>{seconds}</span>
          </div>
        </div>
        {isPermission === null ? (
          <div className="text-white">Waiting for permission...</div>
        ) : isPermission === false ? (
          <div className="text-white">
            Permission denied. Please enable video and audio.
          </div>
        ) : (
          <div className="bg-black w-fit flex justify-start mt-10 rounded-lg overflow-hidden">
            <video
              ref={videoReference}
              autoPlay
              playsInline
              muted
              className="w-[300px] rounded-lg"
            />
          </div>
        )}
        <button className="px-4 py-2 bg-[#6C60F4] rounded-lg text-white font-semibold hover:bg-[#3b2ce9]">Save & Next</button>
      </div>
    </>
  );
}
