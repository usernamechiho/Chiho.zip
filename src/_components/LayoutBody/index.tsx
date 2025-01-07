export default function LayoutBody({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex justify-center overflow-y-scroll pt-20">
      <div className="px-4 w-[650px] min-w-[360px]">{children}</div>
    </div>
  );
}
