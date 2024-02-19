"use client"
import { Inter } from "next/font/google";
import "./globals.css";
import { Provider } from "react-redux";
import { persistor, store } from "@/store";
import { PersistGate } from "redux-persist/integration/react";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider store={store}>
          <PersistGate persistor={persistor}>
            <Toaster />
            {children}
          </PersistGate>
        </Provider>
      </body>
    </html>
  );
}
