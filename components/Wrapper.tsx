import React, { ReactNode } from "react";

export const Wrapper = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex min-h-screen flex-col justify-center">
      <main className="flex w-full flex-1 flex-col justify-center text-center mt-11">
        {children}
      </main>
    </div>
  )
}
