import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Visualize",
  description:
    "Visualize is a portfolio generator app. All you need to do is enter your details, and visualize spins up a visually stunning portfolio for you.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
