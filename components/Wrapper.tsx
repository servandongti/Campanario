import React, { ReactNode } from "react";

export const Wrapper = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex min-h-screen flex-col justify-center py-2">
      <main className="flex w-full flex-1 flex-col justify-center text-center">
        {children}
      </main>
    </div>
  )
}
