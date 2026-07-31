import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router";
import Footer from "~/components/Footer";
import Header from "~/components/Header";

export default function Layout() {
  const navigate = useNavigate();
  const [isDark, setIsDark] = useState<boolean>(() => {
    // const storedTheme = localStorage.getItem("theme");
    // if (storedTheme === "dark") {
    //   return true;
    // }

    return false;
  });
  const [activeTab, setActiveTab] = useState<string>("home");
  const [isResumeOpen, setIsResumeOpen] = useState<boolean>(false);

  const clickTab = (to: string) => {
    setActiveTab(to);
    navigate(`/${to}`);
  };

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDark) {
      root.classList.add("dark");
    //   localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
    //   localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  return (
    <div className="bg-background text-on-surface antialiased min-h-screen flex flex-col pt-24 transition-colors duration-300">
      <Header
        activeTab={activeTab}
        clickTab={clickTab}
        openResume={() => setIsResumeOpen((prev) => !prev)}
        isDark={isDark}
        toggleTheme={toggleTheme}
      />
      <main className="flex-grow max-w-[1200px] mx-auto px-6 md:px-8 py-16 w-full flex flex-col gap-16 md:gap-24">
        <Outlet />
      </main>

      <Footer setActiveTab={() => {}} />
    </div>
  );
}
