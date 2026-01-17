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
                  <b>Preschool | 3–4 Years</b>
                </p>
                <p>
                  The Sea Turtles Program provides a balanced preschool
                  experience for children ages 3–4 years old, focusing on
                  social-emotional growth, early academics, and creative
                  exploration. Children develop confidence, problem-solving
                  skills, and positive peer relationships while learning
                  biblical values such as kindness, gratitude, and
                  responsibility.
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
            <div className="bg-gray-200 rounded-lg aspect-[4/3] flex items-center justify-center">
              <div className="w-24 h-24 bg-gray-400 rounded-lg flex items-center justify-center">
                <svg
                  className="w-12 h-12 text-gray-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
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
