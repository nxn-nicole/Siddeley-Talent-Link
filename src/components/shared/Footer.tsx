const font = "var(--font-geist-sans), Arial, Helvetica, sans-serif";

const navLinks = [
  { label: "主页", href: "/#hero" },
  { label: "核心服务", href: "/#core-services" },
  { label: "服务流程", href: "/#process" },
  { label: "成功案例", href: "/#cases" },
  { label: "关于我们", href: "/about" },
];

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#0D1B2A", fontFamily: font }}>
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-12">
          {/* Brand */}
          <div className="max-w-xs">
            <a href="/#hero" className="inline-flex items-center gap-2 mb-4">
              <span className="text-2xl font-extrabold tracking-tight" style={{ color: "#FB8C00" }}>
                Siddeley
              </span>
              <span className="text-2xl font-extrabold tracking-tight text-white">
                Talent Link
              </span>
            </a>
            <p className="text-sm text-gray-400 leading-relaxed">
              扎根墨尔本 Docklands，专为华人、留学生及东亚社群提供一站式澳洲职业发展服务。
            </p>
          </div>

          {/* Nav links */}
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase text-gray-500 mb-4">
              导航
            </p>
            <ul className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors duration-150"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase text-gray-500 mb-4">
              联系我们
            </p>
            <ul className="flex flex-col gap-3 text-sm text-gray-400">
              <li>📍 Docklands, Melbourne VIC 3008</li>
              <li>
                <a href="mailto:info@siddeleytalentlink.com.au" className="hover:text-white transition-colors duration-150">
                  info@siddeleytalentlink.com.au
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider + copyright */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p className="text-xs text-gray-600">
            © {new Date().getFullYear()} Siddeley Talent Link. All rights reserved.
          </p>
          <p className="text-xs text-gray-600">
            Melbourne, Australia
          </p>
        </div>
      </div>
    </footer>
  );
}
