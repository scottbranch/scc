'use client';

import { AnimatedSection } from '@/components/animated-section';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Contact Form Section */}
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

      <AnimatedSection animation="slideInRight">
        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
              {/* Contact Information */}
              <div>
                <h2 className="font-ovo text-3xl lg:text-4xl font-normal text-black mb-12">
                  ADDITIONAL INFO
                </h2>

                <div className="space-y-8">
                  {/* Location */}
                  <AnimatedSection animation="scaleIn" delay={100}>
                    <div className="flex items-start gap-4">
                      <Mail className="w-6 h-6 text-gray-600 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-ovo text-lg font-medium text-black mb-2">
                          LOCATION
                        </h3>
                        <p className="font-zen-maru-gothic text-gray-700 leading-relaxed">
                          5452 Heil Avenue
                          <br />
                          Huntington Beach, CA 92649
                        </p>
                      </div>
                    </div>
                  </AnimatedSection>

                  {/* Phone */}
                  <AnimatedSection animation="scaleIn" delay={200}>
                    <div className="flex items-start gap-4">
                      <Phone className="w-6 h-6 text-gray-600 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-ovo text-lg font-medium text-black mb-2">
                          PHONE
                        </h3>
                        <p className="font-zen-maru-gothic text-gray-700 leading-relaxed">
                          (714) 846 - 0316
                        </p>
                      </div>
                    </div>
                  </AnimatedSection>

                  {/* Email */}
                  <AnimatedSection animation="scaleIn" delay={300}>
                    <div className="flex items-start gap-4">
                      <MapPin className="w-6 h-6 text-gray-600 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-ovo text-lg font-medium text-black mb-2">
                          EMAIL
                        </h3>
                        <p className="font-zen-maru-gothic text-gray-700 leading-relaxed">
                          office@surfcitychristian.com
                        </p>
                      </div>
                    </div>
                  </AnimatedSection>
                </div>
              </div>

              {/* Map */}
              <AnimatedSection animation="scaleIn" delay={200}>
                <div className="bg-gray-200 rounded-lg h-96 lg:h-full overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3317.8567834567834!2d-117.99999999999999!3d33.69999999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dd2838d1234567%3A0x1234567890abcdef!2s5452%20Heil%20Ave%2C%20Huntington%20Beach%2C%20CA%2092649!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Surf City Christian Academy Location"
                  />
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Leadership Team Section */}
      <AnimatedSection animation="fadeInUp">
        <section className="py-16 lg:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
              {/* Owners */}
              <AnimatedSection animation="scaleIn" delay={100}>
                <div className="text-center">
                  <Mail className="w-8 h-8 text-gray-600 mx-auto mb-6" />
                  <h3 className="font-ovo text-xl lg:text-2xl font-normal text-black mb-4">
                    OWNERS
                  </h3>
                  <p className="font-zen-maru-gothic text-gray-700 leading-relaxed">
                    Don & Tami Hopkins
                  </p>
                </div>
              </AnimatedSection>

              {/* Director */}
              <AnimatedSection animation="scaleIn" delay={200}>
                <div className="text-center">
                  <Phone className="w-8 h-8 text-gray-600 mx-auto mb-6" />
                  <h3 className="font-ovo text-xl lg:text-2xl font-normal text-black mb-4">
                    DIRECTOR
                  </h3>
                  <p className="font-zen-maru-gothic text-gray-700 leading-relaxed">
                    Tami Hopkins
                  </p>
                </div>
              </AnimatedSection>

              {/* Assistant Director */}
              <AnimatedSection animation="scaleIn" delay={300}>
                <div className="text-center">
                  <MapPin className="w-8 h-8 text-gray-600 mx-auto mb-6" />
                  <h3 className="font-ovo text-xl lg:text-2xl font-normal text-black mb-4">
                    ASSISTANT DIRECTOR
                  </h3>
                  <p className="font-zen-maru-gothic text-gray-700 leading-relaxed">
                    Cassie Giannicchi
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
