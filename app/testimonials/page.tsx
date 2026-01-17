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

            <div className="grid grid-cols-1 gap-10">
              {/* Testimonial 1 */}
              <AnimatedSection animation="scaleIn" delay={100}>
                <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-100">
                  <blockquote className="space-y-6">
                    <p className="font-zen-maru-gothic text-gray-700 leading-relaxed">
                      We have been part of the SCC family since July 2023 when
                      our daughter started at two years old. From the moment we
                      walked through the door to tour SCC in the fall of 2022,
                      we knew where we wanted our first and only child to begin
                      her early childhood education.
                      <br />
                      <br />
                      As two full-time working parents with one of us working in
                      local law enforcement, the decision of full-time daycare
                      was such a heavy one that put stress on our hearts and
                      minds, but we were soon put at ease. Tami has chosen the
                      most phenomenal teachers and created the warmest, most
                      welcoming and beautiful “Pottery Barn-esque” environment
                      for our babies to learn, grow and thrive. SCC is truly the
                      most magical “home away from home” for our daughter to
                      spend her childhood days. I never question the love she is
                      receiving from her teachers, even on hard mornings where
                      drop-off can be more of a struggle than usual (IYKYK). As
                      the third childcare facility we have been part of, the
                      profound care, structure and support our daughter has
                      received is unlike any other. From potty training, to
                      nap-time or behavior struggles, Tami and her team have
                      worked WITH US to help make sure our daughter has all she
                      needs to thrive, and that we are on the same page as a
                      team to support her.
                      <br />
                      <br />
                      Additionally, the activities that are offered have been
                      some of my daughter’s best experiences; dance & gymnastics
                      class with Ms. Stacy, music class with Ms. Sharon, Spanish
                      lessons with Ms. Ruby - the curriculum opportunities are
                      incredible. The loving, homey and supportive atmosphere is
                      one I wish we could bottle up as we move forward into her
                      elementary school years. We could not be more grateful for
                      our nearly three years at Surf City Christian and highly
                      recommend anyone seeking early day care for their babies
                      to come see what makes this place so very special!
                    </p>
                    <div className="space-y-1">
                      <p className="font-zen-maru-gothic font-semibold text-black">
                        - Kathryn Ancona Deuel
                      </p>
                    </div>
                  </blockquote>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="scaleIn" delay={100}>
                <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-100">
                  <blockquote className="space-y-6">
                    <p className="font-zen-maru-gothic text-gray-700 leading-relaxed">
                      "Surf City Christian Preschool is truly a special place.
                      We have had such a wonderful experience with both our son
                      and daughter here, and we are so grateful for the
                      incredible teachers and staff. The teachers are loving,
                      patient, and genuinely invested in each child, not just
                      academically, but emotionally and socially as well.
                      <br />
                      <br />
                      Our son made remarkable progress after starting SCC. After
                      just a few weeks, we saw a huge leap in his language
                      development, and he began talking so much more. It was
                      amazing to watch his confidence grow in such a nurturing
                      environment.
                      <br />
                      <br />
                      Our daughter has also grown tremendously during her time
                      at SCC. She started off very shy, and we have seen such a
                      beautiful change in her confidence and social skills. She
                      is more comfortable engaging with peers, expressing
                      herself, and participating in classroom activities, which
                      has been so meaningful for us as parents to witness.
                      <br />
                      <br />
                      What really sets SCC apart is their focus on whole child
                      education. They create an environment where children learn
                      through play, structure, creativity, and connection. The
                      special events, like gingerbread making and other seasonal
                      celebrations, make school feel joyful and memorable, not
                      just routine.
                      <br />
                      <br />
                      You can truly feel the care, intention, and heart that
                      goes into this school every day. SCC has become a second
                      home for our kids, and we feel incredibly lucky to be part
                      of this community. We could not recommend it more highly."
                    </p>
                    <div className="space-y-1">
                      <p className="font-zen-maru-gothic font-semibold text-black">
                        - The Evans Family
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
