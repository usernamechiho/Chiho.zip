export default function LayoutBody({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex justify-center overflow-y-scroll pt-20">
      <div className="w-2/6">{children}</div>
    </div>
  );
}
