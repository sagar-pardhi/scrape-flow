import { Logo } from "@/components/logo";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex gap-4 flex-col items-center justify-center h-screen">
      <Logo />
      {children}
    </div>
  );
}
