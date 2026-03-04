'use client';

import { GlobalNavigation } from '@/components/global-navigation';

export default function SeaTurtleProgramPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div className="space-y-6">
              <h2 className="font-ovo text-3xl lg:text-4xl font-normal text-black leading-tight">
                Sea Turtles Program
              </h2>

              <div className="space-y-4 font-zen-maru text-gray-700 leading-relaxed">
                <p>
                  <i>
                    For children <b>3 years old</b> by September 1st, 2026, and
                    potty trained.
                  </i>
                </p>
                <p>
                  In the Sea Turtle Program, children develop social-emotional
                  skills, explore personal responsibility, and build
                  friendships. They engage in Bible stories, prayer, and
                  learning the fruits of the spirit. Through activities like
                  journaling, coloring, and cutting, children strengthen their
                  literacy and math skills while cultivating a love for art,
                  music, and God’s Word. This year sets the stage for social,
                  emotional, and academic growth.
                </p>
              </div>

              <a
                href="https://www.surfcitychristian.com/_files/ugd/12d36c_4b7261a8f5614b52bdeeb329f0d8c281.pdf"
                className="bg-[#7eb5d9] text-white px-6 py-3 rounded-md font-zen-maru hover:bg-[#6ba5cc] transition-colors"
              >
                View our Sea Turtle Flyer
              </a>
            </div>

            {/* Right Column - Image Placeholder */}
            <div className="rounded-lg aspect-[4/3] flex items-center justify-center">
              <img src="/images/seaturtles.jpg" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-[#e5f0f7]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-ovo text-3xl lg:text-4xl font-normal text-black mb-12 uppercase">
            Our Sea Turtle Program Hours​
          </h2>

          <div className="space-y-8">
            <div>
              <h3 className="font-ovo text-xl lg:text-2xl font-normal text-black mb-2">
                Half Day
              </h3>
              <p className="font-zen-maru text-gray-700 text-lg">
                8:15am-11:45am
              </p>
            </div>

            <div>
              <h3 className="font-ovo text-xl lg:text-2xl font-normal text-black mb-2">
                Full Day
              </h3>
              <p className="font-zen-maru text-gray-700 text-lg">
                7:00am-5:30pm
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
