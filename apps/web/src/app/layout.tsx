import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import { headers } from 'next/headers'
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import { Topbar } from "@/components/topbar";
import { cookieToInitialState } from 'wagmi'
import { getConfig } from '../wagmi'
import { Providers } from '../components/providers'

const fontSans = FontSans({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: 'Create Wagmi',
  description: 'Generated by create-wagmi',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const initialState = cookieToInitialState(
  //   getConfig(),
  //   headers().get('cookie'),
  // )
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Topbar />
          <Providers>{children}</Providers>
        </ThemeProvider>
      </body>
    </html>
  );
}
