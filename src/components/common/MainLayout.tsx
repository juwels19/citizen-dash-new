import Sidebar from "@/components/navigation/Sidebar";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex min-h-screen flex-col items-center p-4">
      <div className="flex w-full">
        <div>{children}</div>
      </div>
    </main>
  );
}
