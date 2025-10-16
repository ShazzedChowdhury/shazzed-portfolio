"use client";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "./ui/sheet";
import { Menu } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href) => {
    const section = document.querySelector(href);
    section?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <nav
      className={`fixed w-full z-50 transition-colors duration-500 ${
        scrolled ? "bg-white/10 shadow-lg backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold cursor-pointer">MyPortfolio</div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-4">
          {links.map((link) => (
            <Button
              key={link.name}
              variant="ghost"
              size="sm"
              onClick={() => scrollToSection(link.href)}
            >
              {link.name}
            </Button>
          ))}
        </div>
        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost">
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-64">
              <SheetHeader>
                <div className="text-xl font-bold mb-4">Menu</div>
              </SheetHeader>
              <div className="flex flex-col space-y-4 mt-4">
                {links.map((link) => (
                  <Button
                    key={link.name}
                    variant="ghost"
                    onClick={() => {
                      scrollToSection(link.href);
                    }}
                  >
                    {link.name}
                  </Button>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
