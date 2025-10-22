'use client';

import { AnimatedSection } from '@/components/animated-section';

export default function ScheduleATourPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Schedule Tour Form Section */}
      <AnimatedSection animation="fadeInUp">
        <section className="py-16 lg:py-24">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="font-zen-maru-gothic text-sm text-gray-600 mb-4">
                Visit Us
              </p>
              <h1 className="font-ovo text-4xl lg:text-5xl font-normal text-black mb-6 text-balance">
                SCHEDULE A TOUR
              </h1>
              <p className="font-zen-maru-gothic text-lg text-gray-700 leading-relaxed">
                We would love to show you around our campus and meet your family
              </p>
            </div>

            <AnimatedSection animation="slideInLeft" delay={200}>
              <form className="space-y-6">
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
                    htmlFor="phone"
                    className="block font-zen-maru-gothic text-sm font-medium text-gray-700 mb-2"
                  >
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 bg-gray-100 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#7eb5d9] focus:border-transparent font-zen-maru-gothic"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="birthdate"
                    className="block font-zen-maru-gothic text-sm font-medium text-gray-700 mb-2"
                  >
                    Child's Birth Date
                  </label>
                  <input
                    type="date"
                    id="birthdate"
                    name="birthdate"
                    className="w-full px-4 py-3 bg-gray-100 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#7eb5d9] focus:border-transparent font-zen-maru-gothic"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="schedule-requesting"
                    className="block font-zen-maru-gothic text-sm font-medium text-gray-700 mb-2"
                  >
                    Schedule Requesting
                  </label>
                  <select
                    id="schedule-requesting"
                    name="schedule-requesting"
                    className="w-full px-4 py-3 bg-gray-100 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#7eb5d9] focus:border-transparent font-zen-maru-gothic"
                    required
                  >
                    <option value="">Select a schedule</option>
                    <option value="full-time">
                      Full Time (Monday - Friday)
                    </option>
                    <option value="part-time-mwf">
                      Part Time (Monday, Wednesday, Friday)
                    </option>
                    <option value="part-time-tth">
                      Part Time (Tuesday, Thursday)
                    </option>
                    <option value="half-day">Half Day</option>
                    <option value="other">
                      Other (please specify in comments)
                    </option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="start-date"
                    className="block font-zen-maru-gothic text-sm font-medium text-gray-700 mb-2"
                  >
                    Desired Start Date
                  </label>
                  <input
                    type="date"
                    id="start-date"
                    name="start-date"
                    className="w-full px-4 py-3 bg-gray-100 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#7eb5d9] focus:border-transparent font-zen-maru-gothic"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="potty-trained"
                    className="block font-zen-maru-gothic text-sm font-medium text-gray-700 mb-2"
                  >
                    Potty Trained
                  </label>
                  <select
                    id="potty-trained"
                    name="potty-trained"
                    className="w-full px-4 py-3 bg-gray-100 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#7eb5d9] focus:border-transparent font-zen-maru-gothic"
                    required
                  >
                    <option value="">Please select</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                    <option value="in-progress">In Progress</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="comments"
                    className="block font-zen-maru-gothic text-sm font-medium text-gray-700 mb-2"
                  >
                    Additional Comments (Optional)
                  </label>
                  <textarea
                    id="comments"
                    name="comments"
                    rows={4}
                    placeholder="Any additional information or questions..."
                    className="w-full px-4 py-3 bg-gray-100 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#7eb5d9] focus:border-transparent font-zen-maru-gothic resize-vertical"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#7eb5d9] text-white font-zen-maru-gothic font-medium py-3 px-6 rounded-md hover:bg-[#6ba4c8] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#7eb5d9] focus:ring-offset-2"
                >
                  Schedule Tour
                </button>
              </form>
            </AnimatedSection>
          </div>
        </section>
      </AnimatedSection>

      {/* Information Section */}
      <AnimatedSection animation="slideInRight">
        <section className="py-16 lg:py-24 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-ovo text-3xl lg:text-4xl font-normal text-black mb-6">
                WHAT TO EXPECT
              </h2>
              <p className="font-zen-maru-gothic text-lg text-gray-700 leading-relaxed">
                During your tour, you'll have the opportunity to see our
                classrooms, meet our teachers, and learn more about our
                Christ-centered approach to early childhood education.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              <AnimatedSection animation="scaleIn" delay={100}>
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#7eb5d9] rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-white font-zen-maru-gothic font-bold text-xl">
                      1
                    </span>
                  </div>
                  <h3 className="font-ovo text-xl lg:text-2xl font-normal text-black mb-4">
                    CAMPUS TOUR
                  </h3>
                  <p className="font-zen-maru-gothic text-gray-700 leading-relaxed">
                    Explore our safe, nurturing environment including
                    classrooms, playground, and chapel.
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="scaleIn" delay={200}>
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#7eb5d9] rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-white font-zen-maru-gothic font-bold text-xl">
                      2
                    </span>
                  </div>
                  <h3 className="font-ovo text-xl lg:text-2xl font-normal text-black mb-4">
                    MEET THE STAFF
                  </h3>
                  <p className="font-zen-maru-gothic text-gray-700 leading-relaxed">
                    Connect with our dedicated teachers and learn about their
                    passion for early childhood education.
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="scaleIn" delay={300}>
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#7eb5d9] rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-white font-zen-maru-gothic font-bold text-xl">
                      3
                    </span>
                  </div>
                  <h3 className="font-ovo text-xl lg:text-2xl font-normal text-black mb-4">
                    CURRICULUM OVERVIEW
                  </h3>
                  <p className="font-zen-maru-gothic text-gray-700 leading-relaxed">
                    Discover our age-appropriate programs and Christian-based
                    learning approach.
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="scaleIn" delay={400}>
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#7eb5d9] rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-white font-zen-maru-gothic font-bold text-xl">
                      4
                    </span>
                  </div>
                  <h3 className="font-ovo text-xl lg:text-2xl font-normal text-black mb-4">
                    Q&A SESSION
                  </h3>
                  <p className="font-zen-maru-gothic text-gray-700 leading-relaxed">
                    Ask questions about enrollment, policies, and anything else
                    you'd like to know.
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>
      </AnimatedSection>
    </div>
  );
}
