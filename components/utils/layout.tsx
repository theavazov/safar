export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="wrapper">
      <main>{children}</main>
    </div>
  );
}
