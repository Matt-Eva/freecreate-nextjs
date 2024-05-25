export default function LibraryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      Library
      {children}
    </section>
  );
}
