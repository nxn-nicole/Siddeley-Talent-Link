import Link from "next/link";
import { useMessages } from "next-intl";

const font = "var(--font-geist-sans), Arial, Helvetica, sans-serif";

type FooterLink = {
  label: string;
  href: string;
};

type FooterMessages = {
  footer: {
    brandName1: string;
    brandName2: string;
    tagline: string;
    navLabel: string;
    navLinks: FooterLink[];
    contactLabel: string;
    address: string;
    email: string;
    copyrightName: string;
    copyrightSuffix: string;
    location: string;
  };
};

export default function Footer() {
  const { footer: content } = useMessages() as FooterMessages;

  return (
    <footer style={{ backgroundColor: "#0D1B2A", fontFamily: font }}>
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-12">
          {/* Brand */}
          <div className="max-w-xs">
            <Link href="/#hero" className="inline-flex items-center gap-2 mb-4">
              <span className="text-2xl font-extrabold tracking-tight" style={{ color: "#FB8C00" }}>
                {content.brandName1}
              </span>
              <span className="text-2xl font-extrabold tracking-tight text-white">
                {content.brandName2}
              </span>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed">
              {content.tagline}
            </p>
          </div>

          {/* Nav links */}
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase text-gray-500 mb-4">
              {content.navLabel}
            </p>
            <ul className="flex flex-col gap-3">
              {content.navLinks.map((link: FooterLink) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors duration-150"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase text-gray-500 mb-4">
              {content.contactLabel}
            </p>
            <ul className="flex flex-col gap-3 text-sm text-gray-400">
              <li>📍 {content.address}</li>
              <li>
                <a
                  href={`mailto:${content.email}`}
                  className="hover:text-white transition-colors duration-150"
                >
                  {content.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider + copyright */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p className="text-xs text-gray-600">
            © {new Date().getFullYear()} {content.copyrightName}. {content.copyrightSuffix}
          </p>
          <p className="text-xs text-gray-600">
            {content.location}
          </p>
        </div>
      </div>
    </footer>
  );
}
