"use client"
import React, { useState, useRef, useEffect } from "react";

const MediaRecorderComponent = () => {
  const [isRecordingOnOn, setisRecordingOn] = useState(false);
  const [recordedData, setrecordedData] = useState([]);
  const [isPermission, setisPermission] = useState(null); // Track permission state
  const mediaRecorderReference = useRef(null);
  const videoReference = useRef(null);

  const askPermissions = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true,
      });

      if (videoReference.current) {
        videoReference.current.srcObject = stream;
      }

      setisPermission(true);
    } catch (error) {
      console.error("Error accessing media devices:", error);
      setisPermission(false);
    }
  };

  const recordingStart = async () => {
    if (isPermission === null) {
      await askPermissions();
    }

    if (isPermission) {
      try {
        const stream = videoReference.current.srcObject;
        const mediaRecorder = new MediaRecorder(stream);
        mediaRecorderReference.current = mediaRecorder;

        mediaRecorder.ondataavailable = (event) => {
          if (event.data.size > 0) {
            setrecordedData((prev) => [...prev, event.data]);
          }
        };

        mediaRecorder.start();
        setisRecordingOn(true);
      } catch (error) {
        console.error("Error starting recording:", error);
      }
    }
  };

  const recordingStop = () => {
    if (mediaRecorderReference.current) {
      mediaRecorderReference.current.stop();
    }

    if (videoReference.current.srcObject) {
      const tracks = videoReference.current.srcObject.getTracks();
      tracks.forEach((track) => track.stop());
    }

    setisRecordingOn(false);
  };

  const recordingDownload = () => {
    const blob = new Blob(recordedData, { type: "video/webm" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "recording.webm";
    a.click();
    URL.revokeObjectURL(url);
  };

  useEffect(() => {
    askPermissions();
    console.log("Hello")
  }, []);

  return (
    <div className="p-4">
      <div>
        <video
          ref={videoReference}
          autoPlay
          playsInline
          muted
          className="w-full max-w-md border rounded-lg"
        />
      </div>
      <div className="mt-4">
        {isPermission === null ? (
          <div>
            <p className="text-white mt-2">
              Please grant permissions to use audio/video.
            </p>
          </div>
        ) : isPermission === false ? (
          <p className="text-red-500">
            Permissions were denied. Please allow access to audio and video
            devices.
          </p>
        ) : (
          <>
            {!isRecordingOn ? (
              <button
                onClick={recordingStart}
                className="px-4 py-2 bg-green-500 text-white rounded-lg"
              >
                Start Recording
              </button>
            ) : (
              <button
                onClick={recordingStop}
                className="px-4 py-2 bg-red-500 text-white rounded-lg"
              >
                Stop Recording
              </button>
            )}
            {recordedData.length > 0 && (
              <button
                onClick={recordingDownload}
                className="ml-4 px-4 py-2 bg-blue-500 text-white rounded-lg"
              >
                Download Recording
              </button>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default MediaRecorderComponent;
