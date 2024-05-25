import { PropsWithChildren } from "react";
import Navbar from "./navbar";
import ScrollToHashElement from "../scroll";
interface LayoutProps {}

const Layout = ({ children }: PropsWithChildren<LayoutProps>) => {
  return (
    <main className="w-full flex justify-center bg-secondary-50 min-h-screen">
      <ScrollToHashElement />
      <div className="flex flex-col gap-6 w-full max-w-4xl">
        <Navbar />
        {children}
      </div>
    </main>
  );
};

export default Layout;
