"use client"; // Ensure the app runs on the client side

import { useState, useEffect } from "react";

export default function Home() {
  const [text, setText] = useState(""); // To store user input
  const [voices, setVoices] = useState([]); // To store available voices
  const [selectedVoice, setSelectedVoice] = useState(null); // To track the selected voice

  const arrayOfQusetions = [
    {
      question: "What is your name?",
    },
    {
      question: "How are you?",
    },
    {
      question: "What is your age?",
    },
  ];

  // Fetch available voices when the component mounts
  useEffect(() => {
    console.log(arrayOfQusetions[0].question);
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      const fetchVoices = () => {
        const availableVoices = speechSynthesis.getVoices();
        setVoices(availableVoices);
        if (availableVoices.length > 0) {
          setSelectedVoice(availableVoices[10]); // Default to the first voice
        }
      };

      // Safari requires this inside an event
      fetchVoices();
      if (speechSynthesis.onvoiceschanged !== undefined) {
        speechSynthesis.onvoiceschanged = fetchVoices;
      }
    }
  }, []);

  const handleSpeak = () => {
    if (
      "speechSynthesis" in window &&
      arrayOfQusetions[0].question.trim() !== ""
    ) {
      const utterance = new SpeechSynthesisUtterance(
        arrayOfQusetions[0].question
      );
      if (true) {
        utterance.voice = voices[10]; // Use the selected voice
      }
      speechSynthesis.speak(utterance);
    } else {
      alert(
        "Your browser does not support Text-to-Speech or the input is empty."
      );
    }
  };
  //   setTimeout(handleSpeak(), 2000);
  useEffect(() => {
    if (voices.length > 0) {
      handleSpeak(); // This will speak the first question once voices are fetched
    }
  }, [voices]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6">
      Hello world
      {/* <h1 className="text-3xl font-bold mb-4">Text-to-Speech in Next.js</h1> */}
      {/* <textarea
        className="border border-gray-300 rounded-lg p-3 w-full max-w-lg mb-4"
        rows="5"
        placeholder="Type text here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></textarea> */}
      {/* <select
        className="border border-gray-300 rounded-lg p-2 w-full max-w-lg mb-4"
        onChange={(e) =>
          setSelectedVoice(
            voices.find((voice) => voice.name === e.target.value)
          )
        }
      >
        {voices.map((voice) => (
          <option key={voice.name} value={voice.name}>
            {voice.name} ({voice.lang})
          </option>
        ))}
      </select> */}
      {/* <button
        onClick={handleSpeak}
        className="bg-blue-500 text-white px-6 py-2 rounded-lg"
      >
        Speak
      </button> */}
    </div>
  );
}
