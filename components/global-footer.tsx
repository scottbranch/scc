import Image from 'next/image';
import Link from 'next/link';

function GlobalFooter() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Logo and Brand */}
        <div className="flex flex-col items-center mb-8">
          <div className="flex items-center gap-4 mb-6">
            <Image
              src="/images/scc-logo.png"
              alt="Surf City Christian Logo"
              width={300}
              height={80}
              className="object-contain"
            />
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap justify-center gap-8 mb-8">
            <Link
              href="/scc-staff"
              className="font-zen-maru-gothic text-gray-700 hover:text-[#7eb5d9] transition-colors"
            >
              SCC Staff
            </Link>
            <Link
              href="/programs"
              className="font-zen-maru-gothic text-gray-700 hover:text-[#7eb5d9] transition-colors"
            >
              Programs
            </Link>
            <Link
              href="/scc-experience"
              className="font-zen-maru-gothic text-gray-700 hover:text-[#7eb5d9] transition-colors"
            >
              SCC Experience
            </Link>
            <Link
              href="/chapel"
              className="font-zen-maru-gothic text-gray-700 hover:text-[#7eb5d9] transition-colors"
            >
              Chapel
            </Link>
            <Link
              href="/events"
              className="font-zen-maru-gothic text-gray-700 hover:text-[#7eb5d9] transition-colors"
            >
              Events
            </Link>
            <Link
              href="/contact"
              className="font-zen-maru-gothic text-gray-700 hover:text-[#7eb5d9] transition-colors"
            >
              Contact Us
            </Link>
          </nav>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 mb-6"></div>

        {/* Copyright */}
        <div className="text-center">
          <p className="font-zen-maru-gothic text-sm text-gray-600">
            © 2025 Surf City Christian. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default GlobalFooter;
export { GlobalFooter };
