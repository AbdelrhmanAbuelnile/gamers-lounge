"use client"
import { ClerkProvider } from '@clerk/nextjs'
import "./globals.css";
import Header from "./_components/Header";
import Footer from "./_components/Footer";
import { CartProvider } from "./_context/CartContext"
import { Analytics } from "@vercel/analytics/react"
import { Suspense } from "react";

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <CartProvider>
          <html lang="en">
            <head>
              <title>Gamers Lounge</title>
              <link rel="icon" href="/favicon.ico" />
            </head>
            <body>
              <Header />
                {children}
              <Footer />
              <Analytics />
            </body>
          </html>
      </CartProvider>
    </ClerkProvider>
  );
}
