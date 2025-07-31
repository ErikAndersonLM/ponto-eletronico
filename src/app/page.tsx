"use client";

import Webcam from "react-webcam";
import { useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link"

export default function Home() {
  const webcamRef = useRef<Webcam>(null);
  const [capturedImage, setCapturedImage] = useState<string | null>(null);

  const handleCapture = () => {
    if (webcamRef.current) {
      const imageSrc = webcamRef.current.getScreenshot();
      if (imageSrc) {
        setCapturedImage(imageSrc);
        console.log("Imagem capturada:", imageSrc);
      }
    }
  };

  return (
    <main className="min-h-screen flex bg-gray-100">
      <section className="flex-1 flex items-center justify-center p-4">
        <Card className="w-full max-w-md shadow-xl">
          <CardContent className="flex flex-col items-center justify-center gap-6 py-10">
            <div className="w-48 h-64 rounded-full bg-gray-200 overflow-hidden border border-gray-400">
              <Webcam
                ref={webcamRef}
                audio={false}
                screenshotFormat="image/jpeg"
                className="w-full h-full object-cover"
                mirrored={true}
                videoConstraints={{ facingMode: "user" }}
              />
            </div>
            <Button onClick={handleCapture} className="w-full text-lg">
              Registrar Ponto
            </Button>
            {capturedImage && (
              <img
                src={capturedImage}
                alt="Imagem capturada"
                className="mt-4 rounded-md border"
              />
            )}

          </CardContent>
        </Card>
      </section>
    </main>
  );
}
