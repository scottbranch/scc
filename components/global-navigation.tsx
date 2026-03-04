'use client';
import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function GlobalNavigation() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const router = useRouter();

  return (
    <nav className="top-nav w-full bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 sm:py-2">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Brand */}
          <div className="flex items-center space-x-4">
            <a href="/" className="w-[250px] h-[71px] relative">
              <Image
                src="/images/scc-logo.png"
                alt="Surf City Christian Logo"
                width={324}
                height={92}
                className="object-contain"
              />
            </a>
          </div>

          {/* Navigation Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {/* <div
              className="relative group"
              onMouseEnter={() => setOpenDropdown('staff')}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <a
                href="/scc-staff"
                className="flex items-center space-x-1 text-gray-700 hover:text-gray-900 transition-colors font-medium pb-2"
              >
                <span>SCC Staff</span>
                <ChevronDown className="w-4 h-4" />
              </a>
              {openDropdown === 'staff' && (
                <div className="absolute top-full left-0 w-60 bg-white border border-gray-200 rounded-md shadow-lg z-50 group-hover:block hidden">
                  <a
                    href="/meet-the-starfish-teachers"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Meet the 2-3 year old teachers
                  </a>
                  <a
                    href="/meet-the-seaturtle-teachers"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Meet the 3-4 year old teachers
                  </a>
                  <a
                    href="/meet-the-surfer-teachers"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Meet the Pre-K teachers
                  </a>
                </div>
              )}
            </div> */}

            <div
              className="relative group"
              onMouseEnter={() => setOpenDropdown('programs')}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <a
                href="/programs"
                className="flex items-center space-x-1 text-gray-700 hover:text-gray-900 transition-colors font-medium pb-2"
              >
                <span>Programs</span>
                <ChevronDown className="w-4 h-4" />
              </a>
              {openDropdown === 'programs' && (
                <div className="absolute top-full left-0 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-50 group-hover:block hidden overflow-hidden">
                  <a
                    href="/guppies-program"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Guppies
                  </a>
                  <a
                    href="/star-fish-program"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Starfish
                  </a>
                  <a
                    href="/sea-turtle-program"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Sea Turtles
                  </a>
                  <a
                    href="/sea-otters-program"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Sea Otters
                  </a>
                  <a
                    href="/surfers-program"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Surfers
                  </a>
                  <a
                    href="/sailors-program"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Sailors
                  </a>
                  {/* <a
                    href="/sailors-program"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Kindergarten - Sailors program
                  </a> */}
                </div>
              )}
            </div>

            <div
              className="relative group"
              onMouseEnter={() => setOpenDropdown('about')}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <a
                href="#"
                className="flex items-center space-x-1 text-gray-700 hover:text-gray-900 transition-colors font-medium pb-2"
              >
                <span>About</span>
                <ChevronDown className="w-4 h-4" />
              </a>
              {openDropdown === 'about' && (
                <div className="absolute top-full left-0 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-50 group-hover:block hidden overflow-hidden">
                  <a
                    href="/scc-experience"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    SCC Experience
                  </a>
                  <a
                    href="/scc-staff"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    SCC Staff
                  </a>
                  <a
                    href="/outdoor-learning-labs"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Outdoor Learning Labs
                  </a>
                  <a
                    href="/scc-traditions"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    SCC Traditions
                  </a>
                  <a
                    href="/testimonials"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Testimonials
                  </a>
                  {/* <a
                    href="/sailors-program"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Kindergarten - Sailors program
                  </a> */}
                </div>
              )}
            </div>

            {/* Regular Navigation Links */}
            {/* <a
              href="/chapel"
              className="text-gray-700 hover:text-gray-900 transition-colors font-medium pb-2"
            >
              Chapel
            </a> */}
            <a
              href="/contact"
              className="text-gray-700 hover:text-gray-900 transition-colors font-medium pb-2"
            >
              Contact Us
            </a>

            <a
              href="/schedule-a-tour"
              className="border border-gray-300 text-gray-700 px-8 py-2 rounded-md font-zen-maru-gothic font-medium hover:border-gray-400 transition-colors mr-4"
            >
              Schedule a Tour
            </a>

            {/* Apply Button */}
            <a
              href="/new-family-2025-2026-Family-Application.docx"
              className="bg-[#7eb5d9] text-white px-8 py-2 rounded-md font-zen-maru-gothic font-medium hover:bg-[#6ba4c8] transition-colors"
            >
              <span>Apply</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={
                    mobileMenuOpen
                      ? 'M6 18L18 6M6 6l12 12'
                      : 'M4 6h16M4 12h16M4 18h16'
                  }
                />
              </svg>
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
            <div className="px-4 py-4 space-y-4">
              {/* Mobile Programs Dropdown */}
              <div className="space-y-2">
                <button
                  onClick={() =>
                    setOpenDropdown(
                      openDropdown === 'mobile-programs'
                        ? null
                        : 'mobile-programs',
                    )
                  }
                  className="flex items-center justify-between w-full text-left text-gray-700 hover:text-gray-900 transition-colors font-medium py-2"
                >
                  <span>Programs</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      openDropdown === 'mobile-programs' ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openDropdown === 'mobile-programs' && (
                  <div className="ml-4 space-y-2 border-l-2 border-gray-200 pl-4">
                    <a
                      href="/guppies-program"
                      className="block text-sm text-gray-600 hover:text-gray-900 py-1"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Guppies
                    </a>
                    <a
                      href="/star-fish-program"
                      className="block text-sm text-gray-600 hover:text-gray-900 py-1"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Starfish
                    </a>
                    <a
                      href="/sea-turtle-program"
                      className="block text-sm text-gray-600 hover:text-gray-900 py-1"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Sea Turtles
                    </a>
                    <a
                      href="/sea-otters-program"
                      className="block text-sm text-gray-600 hover:text-gray-900 py-1"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Sea Otters
                    </a>
                    <a
                      href="/surfers-program"
                      className="block text-sm text-gray-600 hover:text-gray-900 py-1"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Surfers
                    </a>
                    <a
                      href="/sailors-program"
                      className="block text-sm text-gray-600 hover:text-gray-900 py-1"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Sailors
                    </a>
                  </div>
                )}
              </div>

              {/* Mobile About Dropdown */}
              <div className="space-y-2">
                <button
                  onClick={() =>
                    setOpenDropdown(
                      openDropdown === 'mobile-about' ? null : 'mobile-about',
                    )
                  }
                  className="flex items-center justify-between w-full text-left text-gray-700 hover:text-gray-900 transition-colors font-medium py-2"
                >
                  <span>About</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      openDropdown === 'mobile-about' ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openDropdown === 'mobile-about' && (
                  <div className="ml-4 space-y-2 border-l-2 border-gray-200 pl-4">
                    <a
                      href="/scc-experience"
                      className="block text-sm text-gray-600 hover:text-gray-900 py-1"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      SCC Experience
                    </a>
                    <a
                      href="/scc-staff"
                      className="block text-sm text-gray-600 hover:text-gray-900 py-1"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      SCC Staff
                    </a>
                    <a
                      href="/outdoor-learning-labs"
                      className="block text-sm text-gray-600 hover:text-gray-900 py-1"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Outdoor Learning Labs
                    </a>
                    <a
                      href="/scc-traditions"
                      className="block text-sm text-gray-600 hover:text-gray-900 py-1"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      SCC Traditions
                    </a>
                    <a
                      href="/testimonials"
                      className="block text-sm text-gray-600 hover:text-gray-900 py-1"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Testimonials
                    </a>
                  </div>
                )}
              </div>

              {/* Mobile Regular Links */}
              <a
                href="/contact"
                className="block text-gray-700 hover:text-gray-900 transition-colors font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact Us
              </a>

              {/* Mobile Apply Button */}
              <div className="pt-4 border-t border-gray-200">
                <Button
                  onClick={() => router.push('/schedule-a-tour')}
                  className="w-full bg-white border text-gray-700 px-6 font-medium mb-3 hover:bg-gray-100"
                >
                  Schedule a Tour
                </Button>
                <Button
                  onClick={() =>
                    window.open(
                      '/new-family-2025-2026-Family-Application.docx',
                      '_blank',
                    )
                  }
                  className="w-full bg-[#7eb5d9] hover:bg-[#6ba3c7] text-white px-6 font-medium"
                >
                  Apply
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export { GlobalNavigation };
