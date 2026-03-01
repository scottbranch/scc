'use client';

import { AnimatedSection } from '@/components/animated-section';
import { GlobalNavigation } from '@/components/global-navigation';

export default function StarFishProgramPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div className="space-y-6">
              <h2 className="font-ovo text-3xl lg:text-4xl font-normal text-black leading-tight">
                Starfish Program
              </h2>

              <div className="space-y-4 font-zen-maru text-gray-700 leading-relaxed">
                <p>
                  <b>Young Preschool | 24 Months – 3+ Years</b>
                </p>

                <p>
                  The Starfish Program supports children ages 24 months through
                  early preschool years as they transition into a more
                  structured learning environment. Children are encouraged to
                  explore, build independence, and develop early academic and
                  social skills while learning kindness, cooperation, and
                  respect rooted in Christian values.
                </p>
              </div>

              {/* <a
                href="https://www.surfcitychristian.com/_files/ugd/12d36c_aca7c3bdc590455f946c2905891dbe57.pdf"
                className="bg-[#7eb5d9] text-white px-6 py-3 rounded-md font-zen-maru hover:bg-[#6ba5cc] transition-colors"
              >
                View our Starfish Flyer
              </a> */}
            </div>

            {/* Right Column - Image Placeholder */}

            <div className="rounded-lg aspect-[4/3] flex items-center justify-center">
              <img src="/images/starfish.jpg" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-[#e5f0f7]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-ovo text-3xl lg:text-4xl font-normal text-black mb-12">
            OUR STARFISH PROGRAM HOURS
          </h2>

          <div className="space-y-8">
            <div>
              <h3 className="font-ovo text-xl lg:text-2xl font-normal text-black mb-2">
                Half Day
              </h3>
              <p className="font-zen-maru text-gray-700 text-lg">8am-11:30am</p>
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

      {/* Hero Section */}
      {/* <AnimatedSection animation="fadeInUp">
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-ovo uppercase text-4xl lg:text-6xl font-normal text-black leading-tight text-balance mb-8">
              Meet our 2-3 year old teachers
            </h1>
            <p className="font-zen-maru-gothic text-lg lg:text-xl text-gray-700 leading-relaxed text-balance">
              Our Starfish Program nurtures creativity in toddlers aged 2-3
              years through play and exploration. Meet the dedicated teachers
              who make learning an adventure for our youngest learners,
              fostering growth, curiosity, and joy in every child they teach.
            </p>
          </div>
        </section>
      </AnimatedSection> */}
    </div>
  );
}
