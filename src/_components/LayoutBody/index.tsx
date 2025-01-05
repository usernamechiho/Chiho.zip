export default function LayoutBody({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="pt-11 h-screen flex justify-center">{children}</div>;
}
