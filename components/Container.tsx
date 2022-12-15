import { ReactNode } from "react";

export function Container({ children }: { children: ReactNode }): JSX.Element {
  return (
    <div className="flex flex-wrap sm:flex-nowrap py-5 px-3 justify-center gap-4 bg-clip-content text-start font-sans">
      {children}
    </div>
  );
}
