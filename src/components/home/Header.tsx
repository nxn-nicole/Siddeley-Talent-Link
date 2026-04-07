"use client";

import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

const navLinks = [
  { label: "主页", href: "/#hero" },
  { label: "关于我们", href: "/about" },
];

const servicesDropdown = {
  label: "核心服务",
  href: "/#core-services",
  items: [
    { label: "服务流程", href: "/#process" },
    { label: "成功案例", href: "/#cases" },
  ],
};

const fontStyle = { fontFamily: "var(--font-geist-sans), Arial, Helvetica, sans-serif" };

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "shadow-lg" : ""}`}
        style={{ backgroundColor: "#0D1B2A" }}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/#hero" className="flex items-center gap-2 shrink-0" style={fontStyle}>
            <span className="text-xl font-extrabold tracking-tight" style={{ color: "#FB8C00" }}>
              Siddeley
            </span>
            <span className="text-xl font-extrabold tracking-tight text-white">Talent Link</span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            <a
              href="/#hero"
              className="px-4 py-2 text-sm font-medium text-gray-300 rounded-md transition-colors duration-150 hover:text-white hover:bg-white/10"
              style={fontStyle}
            >
              主页
            </a>

            {/* Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <a
                href={servicesDropdown.href}
                onClick={() => setDropdownOpen((v) => !v)}
                className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-gray-300 rounded-md transition-colors duration-150 hover:text-white hover:bg-white/10"
                style={fontStyle}
              >
                {servicesDropdown.label}
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`}
                />
              </a>

              {/* Dropdown panel */}
              <div
                className={`absolute top-full left-0 mt-1 w-36 rounded-xl border border-white/10 overflow-hidden shadow-xl transition-all duration-200 ${
                  dropdownOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-1 pointer-events-none"
                }`}
                style={{ backgroundColor: "#0D1B2A" }}
              >
                {servicesDropdown.items.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setDropdownOpen(false)}
                    className="block px-4 py-3 text-sm font-medium text-gray-300 hover:text-white hover:bg-white/10 transition-colors duration-150"
                    style={fontStyle}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>

            {navLinks.slice(1).map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-gray-300 rounded-md transition-colors duration-150 hover:text-white hover:bg-white/10"
                style={fontStyle}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-md text-gray-300 hover:text-white hover:bg-white/10 transition-colors duration-150"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "关闭菜单" : "打开菜单"}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* Mobile drawer overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/50 transition-opacity duration-300 md:hidden ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMenuOpen(false)}
      />

      {/* Mobile drawer */}
      <nav
        className={`fixed top-0 right-0 z-50 h-full w-64 flex flex-col pt-20 pb-8 px-6 transition-transform duration-300 ease-in-out md:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ backgroundColor: "#0D1B2A" }}
      >
        <a
          href="/#hero"
          onClick={() => setMenuOpen(false)}
          className="py-4 text-base font-medium text-gray-300 border-b border-white/10 hover:text-white transition-colors duration-150"
          style={fontStyle}
        >
          主页
        </a>

        {/* Mobile services accordion */}
        <div className="border-b border-white/10">
          <div className="flex items-center justify-between">
            <a
              href={servicesDropdown.href}
              onClick={() => setMenuOpen(false)}
              className="py-4 text-base font-medium text-gray-300 hover:text-white transition-colors duration-150"
              style={fontStyle}
            >
              {servicesDropdown.label}
            </a>
            <button
              onClick={() => setMobileServicesOpen((v) => !v)}
              className="p-2 text-gray-300 hover:text-white transition-colors duration-150"
            >
              <ChevronDown
                size={16}
                className={`transition-transform duration-200 ${mobileServicesOpen ? "rotate-180" : ""}`}
              />
            </button>
          </div>
          {mobileServicesOpen && (
            <div className="pb-2 pl-4 flex flex-col gap-1">
              {servicesDropdown.items.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => { setMenuOpen(false); setMobileServicesOpen(false); }}
                  className="py-2 text-sm font-medium text-gray-400 hover:text-white transition-colors duration-150"
                  style={fontStyle}
                >
                  {item.label}
                </a>
              ))}
            </div>
          )}
        </div>

        <a
          href="/about"
          onClick={() => setMenuOpen(false)}
          className="py-4 text-base font-medium text-gray-300 border-b border-white/10 hover:text-white transition-colors duration-150"
          style={fontStyle}
        >
          关于我们
        </a>
      </nav>
    </>
  );
}
