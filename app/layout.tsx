import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";


import { Toaster } from "@/components/ui/sonner"


const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Fawad Ahmad",
  description:
    "Welcome to my personal portfolio! I am a passionate software developer with expertise in web development, mobile and app development. Explore my projects, skills, and experience to see how I can contribute to your next project.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} bg-(--bg-primary-color) antialiased  `}
      >
        {children}

        <Toaster richColors position="top-right"/>
      </body>
    </html>
  );
}
