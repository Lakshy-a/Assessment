"use client";

import React, { useState, useRef } from "react";

const MediaRecorderComponent = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [recordedChunks, setRecordedChunks] = useState([]);
  const mediaRecorderRef = useRef(null);
  const videoRef = useRef(null);

  const startRecording = async () => {
    try {
      // Request user permissions for video and audio
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true,
      });

      // Set the video preview
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }

      // Initialize the MediaRecorder
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;

      // Handle the data available event
      mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          setRecordedChunks((prev) => [...prev, event.data]);
        }
      };

      // Start recording
      mediaRecorder.start();
      setIsRecording(true);
    } catch (error) {
      console.error("Error accessing media devices:", error);
    }
  };

  const stopRecording = () => {
    // Stop the MediaRecorder
    if (mediaRecorderRef.current) {
      mediaRecorderRef.current.stop();
    }

    // Stop all tracks of the stream
    if (videoRef.current.srcObject) {
      const tracks = videoRef.current.srcObject.getTracks();
      tracks.forEach((track) => track.stop());
    }

    setIsRecording(false);
  };

  const downloadRecording = () => {
    // Create a Blob from recorded chunks
    const blob = new Blob(recordedChunks, { type: "video/webm" });
    const url = URL.createObjectURL(blob);

    // Trigger a download
    const a = document.createElement("a");
    a.href = url;
    a.download = "recording.webm";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="p-4">
      <div>
        <video
          ref={videoRef}
          autoPlay
          playsInline
          muted
          className="w-full max-w-md border rounded-lg"
        />
      </div>
      <div className="mt-4">
        {!isRecording ? (
          <button
            onClick={startRecording}
            className="px-4 py-2 bg-green-500 text-white rounded-lg"
          >
            Start Recording
          </button>
        ) : (
          <button
            onClick={stopRecording}
            className="px-4 py-2 bg-red-500 text-white rounded-lg"
          >
            Stop Recording
          </button>
        )}
        {recordedChunks.length > 0 && (
          <button
            onClick={downloadRecording}
            className="ml-4 px-4 py-2 bg-blue-500 text-white rounded-lg"
          >
            Download Recording
          </button>
        )}
      </div>
    </div>
  );
};

export default MediaRecorderComponent;
