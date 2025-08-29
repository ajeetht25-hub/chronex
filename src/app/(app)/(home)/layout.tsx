import ViewCanvas from "../_components/Canvas/ViewCanvas";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      {children}
      <ViewCanvas />
    </main>
  );
}
