import Image from "next/image";
import Link from "next/link";
import { footerLinks } from "@/app/constants"; // Import footer links

const Footer = () => {
  return (
    <footer className="bg-[#CAD8C0] py-8">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-5 gap-8">
        <div>
          <Link href="/" className="flex items-center gap-2">
            <Image src="/images/completenav.png" alt="ServizCAMP Logo" width={100} height={100} className="w-[23px]" />
            <Image src="/images/ServizCAMP.png" alt="ServizCAMP Logo" width={100} height={100} />
          </Link>
          <div className="mt-3 text-gray-700 space-y-1">
            <p className="flex items-center gap-2">📧 help@servizcamp</p>
            <p className="flex items-center gap-2">📞 +1 234 456 678 89</p>
          </div>
        </div>
        {footerLinks.map((section) => (
          <div key={section.title}>
            <h4 className="font-semibold text-gray-900 mb-2">{section.title}</h4>
            <ul className="space-y-1 text-gray-700">
              {section.items.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-green-600 transition">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Newsletter */}
        <div>
          <h4 className="font-semibold text-gray-900 mb-2">Newsletter</h4>
          <p className="text-gray-700">Stay up to date</p>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t mt-6 pt-4 text-center text-gray-700 text-sm">
        Copyright {new Date().getFullYear()} ufiry.com. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

