"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Question() {
  const router = useRouter();
  const { questionNumber } = useParams();
  const number = Number(questionNumber);

  const arrayOfQuestions = [
    { question: "What is your name?" },
    { question: "How are you?" },
    { question: "What is your age?" },
  ];

  const [allVoices, setAllVoices] = useState([]);
  const [currentVoice, setCurrentVoice] = useState(null);

  // Fetching available voices
  useEffect(() => {
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      const getAllVoicesFromApi = () => {
        const voices = window.speechSynthesis.getVoices();
        setAllVoices(voices);

        // Use the first voice if available
        if (voices.length > 0) {
          setCurrentVoice(voices[0]); // Use the first available voice
        }
      };

      // Fetch voices initially
      getAllVoicesFromApi();

      // Listen for voices change (useful if voices aren't available immediately)
      if (speechSynthesis.onvoiceschanged !== undefined) {
        speechSynthesis.onvoiceschanged = getAllVoicesFromApi;
      }
    }
  }, []);

  const speakKaro = () => {
    if (window.speechSynthesis && arrayOfQuestions[number]?.question) {
      const utterInstance = new SpeechSynthesisUtterance(
        arrayOfQuestions[number].question
      );

      if (currentVoice) {
        utterInstance.voice = currentVoice; // Set the selected voice
      }

      window.speechSynthesis.speak(utterInstance);
    }
  };

  // Trigger speak when voices are available or question changes
  useEffect(() => {
    if (allVoices.length > 0) {
      speakKaro(); // Speak when voices are available
    }
  }, [allVoices, number]); // Trigger speak when voices are available or question changes

  return (
    <div className="w-screen h-screen bg-[#161D29] flex justify-center items-center text-white text-xl">
      {arrayOfQuestions[number]?.question}
    </div>
  );
}
