import { HTMLAttributes } from "react";

export default function Layout({
  className,
  children,
}: {
  className?: HTMLAttributes<HTMLDivElement>[`className`];
  children: React.ReactNode;
}) {
  return (
    <div className={className} style={{ height: "100dvh" }}>
      <div className="w-screen h-full max-w-[360px] m-auto">{children}</div>
    </div>
  );
}
