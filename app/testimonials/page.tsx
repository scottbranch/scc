'use client';

import { AnimatedSection } from '@/components/animated-section';

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <AnimatedSection animation="fadeInUp">
        <section className="py-16 lg:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="font-zen-maru-gothic text-sm text-gray-600 mb-4">
              Hear from our families
            </p>
            <h1 className="font-ovo text-4xl lg:text-6xl font-normal text-black leading-tight text-balance mb-8">
              TESTIMONIALS
            </h1>
            <p className="font-zen-maru-gothic text-lg lg:text-xl text-gray-700 leading-relaxed text-balance">
              Discover what makes SCC so special through the voices of our
              families and staff. These heartfelt testimonials reflect the
              loving, nurturing environment we've created together.
            </p>
          </div>
        </section>
      </AnimatedSection>

      {/* Main Testimonial - Featured */}
      <AnimatedSection animation="fadeIn">
        <section className="py-16 lg:py-24 bg-[#E5F0F7]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <blockquote className="space-y-8">
              <p className="font-ovo text-2xl lg:text-3xl font-normal text-black text-balance">
                "WHAT A WONDERFUL FEELING TO DROP OUR GIRLS OFF AT SCC AND KNOW
                THEY ARE SAFE, LOVED AND BEING NURTURED IN THIS WARM
                ENVIRONMENT."
              </p>
              <cite className="font-zen-maru-gothic text-lg text-gray-700 not-italic">
                The Manthorne Family
              </cite>
            </blockquote>
          </div>
        </section>
      </AnimatedSection>

      {/* Family Testimonials Grid */}
      <AnimatedSection animation="fadeInUp">
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-ovo text-4xl lg:text-5xl font-normal text-black leading-tight mb-6">
                FAMILY TESTIMONIALS
              </h2>
              <p className="font-zen-maru-gothic text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
                Our families are the heart of SCC. Here's what they have to say
                about their experience with our programs and community.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Testimonial 1 */}
              <AnimatedSection animation="scaleIn" delay={100}>
                <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-100">
                  <blockquote className="space-y-6">
                    <p className="font-zen-maru-gothic text-gray-700 leading-relaxed">
                      "SCC has been such a blessing to our family. The teachers
                      genuinely care about each child and create an environment
                      where our daughter thrives. We love the spiritual
                      foundation they provide alongside excellent academics."
                    </p>
                    <div className="space-y-1">
                      <p className="font-zen-maru-gothic font-semibold text-black">
                        Sarah & Mike Thompson
                      </p>
                      <p className="font-zen-maru-gothic text-sm text-gray-600">
                        Starfish Program Parent
                      </p>
                    </div>
                  </blockquote>
                </div>
              </AnimatedSection>

              {/* Testimonial 2 */}
              <AnimatedSection animation="scaleIn" delay={200}>
                <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-100">
                  <blockquote className="space-y-6">
                    <p className="font-zen-maru-gothic text-gray-700 leading-relaxed">
                      "The Sea Turtle program transformed my child's confidence
                      and skills in ways we never imagined! We are so grateful
                      for the supportive environment and dedicated staff who go
                      above and beyond every day."
                    </p>
                    <div className="space-y-1">
                      <p className="font-zen-maru-gothic font-semibold text-black">
                        Emily Johnson
                      </p>
                      <p className="font-zen-maru-gothic text-sm text-gray-600">
                        Sea Turtle Program Parent
                      </p>
                    </div>
                  </blockquote>
                </div>
              </AnimatedSection>

              {/* Testimonial 3 */}
              <AnimatedSection animation="scaleIn" delay={300}>
                <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-100">
                  <blockquote className="space-y-6">
                    <p className="font-zen-maru-gothic text-gray-700 leading-relaxed">
                      "Our son has been in the Surfers program for two years and
                      we couldn't be happier. The balance of learning, play, and
                      spiritual growth is exactly what we were looking for. The
                      outdoor learning labs are amazing!"
                    </p>
                    <div className="space-y-1">
                      <p className="font-zen-maru-gothic font-semibold text-black">
                        David & Jennifer Chen
                      </p>
                      <p className="font-zen-maru-gothic text-sm text-gray-600">
                        Surfers Program Parent
                      </p>
                    </div>
                  </blockquote>
                </div>
              </AnimatedSection>

              {/* Testimonial 4 */}
              <AnimatedSection animation="scaleIn" delay={100}>
                <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-100">
                  <blockquote className="space-y-6">
                    <p className="font-zen-maru-gothic text-gray-700 leading-relaxed">
                      "The Sailors kindergarten program exceeded all our
                      expectations. Our daughter was so well-prepared for
                      elementary school, both academically and socially. The
                      chapel time was her favorite part of each day."
                    </p>
                    <div className="space-y-1">
                      <p className="font-zen-maru-gothic font-semibold text-black">
                        Lisa & Robert Martinez
                      </p>
                      <p className="font-zen-maru-gothic text-sm text-gray-600">
                        Sailors Program Parent
                      </p>
                    </div>
                  </blockquote>
                </div>
              </AnimatedSection>

              {/* Testimonial 5 */}
              <AnimatedSection animation="scaleIn" delay={200}>
                <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-100">
                  <blockquote className="space-y-6">
                    <p className="font-zen-maru-gothic text-gray-700 leading-relaxed">
                      "We toured many preschools, but SCC felt like home from
                      the moment we walked in. The teachers remember every
                      child's name and make each family feel welcome. It truly
                      is a special place."
                    </p>
                    <div className="space-y-1">
                      <p className="font-zen-maru-gothic font-semibold text-black">
                        Amanda & Chris Wilson
                      </p>
                      <p className="font-zen-maru-gothic text-sm text-gray-600">
                        New Family
                      </p>
                    </div>
                  </blockquote>
                </div>
              </AnimatedSection>

              {/* Testimonial 6 */}
              <AnimatedSection animation="scaleIn" delay={300}>
                <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-100">
                  <blockquote className="space-y-6">
                    <p className="font-zen-maru-gothic text-gray-700 leading-relaxed">
                      "The staff at SCC are incredible. They've helped our
                      daughter develop not just academically, but emotionally
                      and spiritually too. The fruits of the spirit curriculum
                      has made such a positive impact on our whole family."
                    </p>
                    <div className="space-y-1">
                      <p className="font-zen-maru-gothic font-semibold text-black">
                        Rachel & Kevin Anderson
                      </p>
                      <p className="font-zen-maru-gothic text-sm text-gray-600">
                        Multi-Program Family
                      </p>
                    </div>
                  </blockquote>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Call to Action Section */}
      <AnimatedSection animation="slideInLeft">
        <section className="py-16 lg:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Left Content */}
              <div className="space-y-8">
                <h2 className="font-ovo text-4xl lg:text-5xl font-normal text-black leading-tight">
                  SCHEDULE YOUR CAMPUS TOUR TODAY!
                </h2>

                <p className="font-zen-maru-gothic text-lg text-gray-700 leading-relaxed">
                  We are offering on campus tours for interested families.
                  Please call our office to schedule a tour of our campus, where
                  you will receive valuable information on our policies and
                  procedures, our curriculum, and our staff.
                </p>

                <div className="space-y-6">
                  {/* Feature List */}
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-0.5 bg-[#7eb5d9]">
                        <svg
                          className="w-3 h-3 text-white"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <p className="font-zen-maru-gothic text-base text-gray-700">
                        Tour our beautiful campus and outdoor learning labs.
                      </p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-[#7eb5d9] rounded-full flex items-center justify-center mt-0.5">
                        <svg
                          className="w-3 h-3 text-white"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <p className="font-zen-maru-gothic text-base text-gray-700">
                        Meet our passionate teachers in each classroom.
                      </p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-[#7eb5d9] rounded-full flex items-center justify-center mt-0.5">
                        <svg
                          className="w-3 h-3 text-white"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <p className="font-zen-maru-gothic text-base text-gray-700">
                        Learn about our curriculum and programs.
                      </p>
                    </div>
                  </div>

                  {/* Contact Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 mt-10">
                    <a
                      href="tel:+1-714-8460316"
                      className="bg-[#7eb5d9] text-white px-8 py-3 rounded-md font-zen-maru-gothic font-medium hover:bg-[#6ba4c8] transition-colors"
                    >
                      Schedule a Tour
                    </a>
                    <a
                      href="/contact"
                      className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-md font-zen-maru-gothic font-medium hover:border-gray-400 transition-colors"
                    >
                      Contact Us
                    </a>
                  </div>
                </div>
              </div>

              {/* Right Image */}
              <div className="relative">
                <img
                  src="/images/campus-playground.png"
                  alt="Colorful outdoor playground with slides and climbing equipment surrounded by green grass and trees"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>
    </div>
  );
}
