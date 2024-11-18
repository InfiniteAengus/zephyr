import { PropsWithChildren } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Sidebar from "./Sidebar";

const MainLayout = ({ children }: PropsWithChildren) => {
  return (
    <main className="h-screen flex flex-col bg-zinc-950 text-zinc-400 text-sm leading-none">
      <Header />
      <div className="flex h-full pt-[72px] pb-14 px-2 gap-4">
        <Sidebar />
        {children}
      </div>
      <Footer />
    </main>
  );
};

export default MainLayout;
