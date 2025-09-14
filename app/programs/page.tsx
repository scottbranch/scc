'use client';

import { AnimatedSection } from '@/components/animated-section';

export default function StarFishProgramPage() {
  return (
    <div className="min-h-screen bg-white">
      <AnimatedSection animation="fadeInUp">
        <section className="py-16 px-6 bg-[#e5f0f7]">
          <div className="max-w-4xl mx-auto text-center pt-10">
            <h2 className="font-ovo text-3xl lg:text-4xl font-normal text-black mb-12">
              PRESCHOOL PROGRAMS OFFERED​
            </h2>

            <AnimatedSection animation="scaleIn" delay={100}>
              <div className="space-y-5">
                <h3 className="font-ovo text-2xl font-semibold text-black mb-5">
                  Star Fish and Seashell Program
                </h3>
                <div>
                  <h3 className="font-ovo text-xl font-normal text-black">
                    Half Day
                  </h3>
                  <p className="font-zen-maru text-gray-700 text-lg">
                    8am-11:30am
                  </p>
                </div>

                <div>
                  <h3 className="font-ovo text-xl font-normal text-black">
                    Full Day
                  </h3>
                  <p className="font-zen-maru text-gray-700 text-lg">
                    7:30am-5:30pm
                  </p>
                </div>
                <p className="max-w-[600px] m-auto">
                  Children must be at least 2 years old to enter this program.
                  Potty training is offered.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="scaleIn" delay={200}>
              <div className="space-y-5 mt-24">
                <h3 className="font-ovo text-2xl font-semibold text-black mb-5">
                  Sea Turtle and Sea Otter Program
                </h3>
                <div>
                  <h3 className="font-ovo text-xl font-normal text-black">
                    Half Day
                  </h3>
                  <p className="font-zen-maru text-gray-700 text-lg">
                    8:15am - 11:45am
                  </p>
                </div>

                <div>
                  <h3 className="font-ovo text-xl font-normal text-black">
                    Full Day
                  </h3>
                  <p className="font-zen-maru text-gray-700 text-lg">
                    7:30am - 5:30pm
                  </p>
                </div>
                <p className="max-w-[600px] m-auto">
                  Children must be at least 2 years old to enter this program.
                  Potty training is offered.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="scaleIn" delay={300}>
              <div className="space-y-5 mt-24">
                <h3 className="font-ovo text-2xl font-semibold text-black mb-5">
                  Surfers Program
                </h3>
                <div>
                  <h3 className="font-ovo text-xl font-normal text-black">
                    Half Day
                  </h3>
                  <p className="font-zen-maru text-gray-700 text-lg">
                    8:30am - 12:00pm
                  </p>
                </div>

                <div>
                  <h3 className="font-ovo text-xl font-normal text-black">
                    Full Day
                  </h3>
                  <p className="font-zen-maru text-gray-700 text-lg">
                    7:30am - 5:30pm
                  </p>
                </div>
                <p className="max-w-[600px] m-auto">
                  Children must be 4 years old before September 1st, 2020 and
                  potty trained. This is our Pre-K Program, and these children
                  are planning on attending Kindergarten in the Fall of 2021.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="scaleIn" delay={400}>
              <div className="space-y-5 mt-24">
                <h3 className="font-ovo text-2xl font-semibold text-black mb-5">
                  Kindergarten Sailors Program
                </h3>
                <div>
                  <p className="font-zen-maru text-gray-700 text-lg">
                    8:00am - 3:00pm{' '}
                  </p>
                </div>

                <div>
                  <h3 className="font-ovo text-xl font-normal text-black">
                    Extended Day option
                  </h3>
                  <p className="font-zen-maru text-gray-700 text-lg">
                    7:30am - 5:30pm
                  </p>
                </div>
                <p className="max-w-[600px] m-auto">
                  Children must be 5 years old before September 1st. Curriculum
                  will be based upon CA State Standards & Common Core
                  Curriculum, and taught by a qualified, loving, experienced
                  teacher. If you are interested in our SCC Kindergarten, please
                  contact our office for information about enrollment.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection animation="fadeInUp">
        <section className="py-16 lg:py-24">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="font-zen-maru-gothic text-sm text-gray-600 mb-4">
                Connect
              </p>
              <h1 className="font-ovo text-4xl lg:text-5xl font-normal text-black mb-6 text-balance">
                GET IN TOUCH
              </h1>
              <p className="font-zen-maru-gothic text-lg text-gray-700 leading-relaxed">
                To request more information, please fill out form below
              </p>
            </div>

            <AnimatedSection animation="slideInLeft" delay={200}>
              <form className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block font-zen-maru-gothic text-sm font-medium text-gray-700 mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 bg-gray-100 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#7eb5d9] focus:border-transparent font-zen-maru-gothic"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block font-zen-maru-gothic text-sm font-medium text-gray-700 mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 bg-gray-100 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#7eb5d9] focus:border-transparent font-zen-maru-gothic"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block font-zen-maru-gothic text-sm font-medium text-gray-700 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    placeholder="Share your thoughts..."
                    className="w-full px-4 py-3 bg-gray-100 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#7eb5d9] focus:border-transparent font-zen-maru-gothic resize-vertical"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#7eb5d9] text-white font-zen-maru-gothic font-medium py-3 px-6 rounded-md hover:bg-[#6ba4c8] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#7eb5d9] focus:ring-offset-2"
                >
                  Send
                </button>
              </form>
            </AnimatedSection>
          </div>
        </section>
      </AnimatedSection>
    </div>
  );
}
