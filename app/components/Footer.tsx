import { Leaf } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#F8FAFC] border-t border-[#E2E8F0] py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Logo */}
        <div className="flex items-center gap-2 font-semibold text-[#0F172A] text-base">
          <div className="w-6 h-6 rounded-md bg-[#4F8EF7] flex items-center justify-center">
            <Leaf className="w-3.5 h-3.5 text-white" strokeWidth={2.5} />
          </div>
          Nourish
        </div>

        <p className="text-sm text-[#94A3B8]">
          © {year} Nourish. All rights reserved.
        </p>

        <div className="flex items-center gap-5">
          {["Privacy", "Terms", "Contact"].map((link) => (
            <a
              key={link}
              href="#"
              className="text-sm text-[#64748B] hover:text-[#0F172A] transition-colors"
            >
              {link}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
