"use client";

import {NextUIProvider} from '@nextui-org/react'
import {ThemeProvider as NextThemesProvider} from "next-themes";

import { SessionProvider } from "next-auth/react";

export const AuthProvider = ({ children }) => {
  return <SessionProvider>{children}</SessionProvider>;
};



export function NextProvider({children}) {
  return (
    <NextUIProvider>
      <NextThemesProvider attribute="class" defaultTheme="dark">
        {children}
      </NextThemesProvider>
    </NextUIProvider>
  )
}