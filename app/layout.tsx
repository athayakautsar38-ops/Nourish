import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nourish — Discover Healthy Meals Around You",
  description:
    "Nourish helps you discover healthy restaurants and catering nearby. Join the waitlist and be the first to know when we launch.",
  keywords: ["healthy food", "restaurants", "catering", "nutrition", "meal discovery"],
  openGraph: {
    title: "Nourish — Discover Healthy Meals Around You",
    description: "Discover healthy restaurants and catering nearby.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
