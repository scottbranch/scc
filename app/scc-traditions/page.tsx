'use client';
import { GlobalFooter } from '@/components/global-footer';

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-white">
      <style jsx>{`
        @keyframes scroll-down {
          0% {
            transform: translateY(-50%);
          }
          100% {
            transform: translateY(0%);
          }
        }

        @keyframes scroll-up {
          0% {
            transform: translateY(0%);
          }
          100% {
            transform: translateY(-50%);
          }
        }

        .animate-scroll-down {
          animation: scroll-down 20s linear infinite;
        }

        .animate-scroll-up {
          animation: scroll-up 20s linear infinite;
        }
      `}</style>

      {/* Continuous Image Carousel */}
      <section className="h-[400px] overflow-hidden mb-16">
        <div className="flex gap-4 h-full">
          {/* Column 1 - Scrolling Down */}
          <div className="flex-1 overflow-hidden">
            <div className="animate-scroll-down space-y-4">
              <img
                src="/images/new/easter.jpg"
                alt="Easter Celebration"
                className="w-full h-64 object-cover rounded-lg"
              />
              <img
                src="/images/new/halloween.jpg"
                alt="Halloween Parade"
                className="w-full h-64 object-cover rounded-lg"
              />
              <img
                src="/images/new/princess.jpg"
                alt="Dress Up Day"
                className="w-full h-64 object-cover rounded-lg"
              />
              <img
                src="/images/new/stem.jpeg"
                alt="STEM Activities"
                className="w-full h-64 object-cover rounded-lg"
              />
              {/* Duplicate for continuous scroll */}
              <img
                src="/images/new/easter.jpg"
                alt="Easter Celebration"
                className="w-full h-64 object-cover rounded-lg"
              />
              <img
                src="/images/new/halloween.jpg"
                alt="Halloween Parade"
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
          </div>

          {/* Column 2 - Scrolling Up */}
          <div className="flex-1 overflow-hidden">
            <div className="animate-scroll-up space-y-4">
              <img
                src="/images/new/easter2.jpg"
                alt="Easter Activities"
                className="w-full h-64 object-cover rounded-lg"
              />
              <img
                src="/images/new/dramatic-play.jpg"
                alt="Dramatic Play"
                className="w-full h-64 object-cover rounded-lg"
              />
              <img
                src="/images/new/playhouse-new.jpg"
                alt="Playhouse Fun"
                className="w-full h-64 object-cover rounded-lg"
              />
              <img
                src="/images/gardening.jpg"
                alt="Gardening Activities"
                className="w-full h-64 object-cover rounded-lg"
              />
              {/* Duplicate for continuous scroll */}
              <img
                src="/images/new/easter2.jpg"
                alt="Easter Activities"
                className="w-full h-64 object-cover rounded-lg"
              />
              <img
                src="/images/new/dramatic-play.jpg"
                alt="Dramatic Play"
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
          </div>

          {/* Column 3 - Scrolling Down */}
          <div className="flex-1 overflow-hidden hidden md:block">
            <div className="animate-scroll-down space-y-4">
              <img
                src="/images/artlab.jpg"
                alt="Art Lab"
                className="w-full h-64 object-cover rounded-lg"
              />
              <img
                src="/images/motorskills.jpg"
                alt="Motor Skills"
                className="w-full h-64 object-cover rounded-lg"
              />
              <img
                src="/images/playhouse.jpg"
                alt="Playhouse"
                className="w-full h-64 object-cover rounded-lg"
              />

              {/* Duplicate for continuous scroll */}
              <img
                src="/images/artlab.jpg"
                alt="Art Lab"
                className="w-full h-64 object-cover rounded-lg"
              />
              <img
                src="/images/motorskills.jpg"
                alt="Motor Skills"
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Events Hero */}
      <section className="py-16 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="space-y-6">
            <h1 className="font-ovo text-4xl md:text-5xl lg:text-6xl text-black leading-tight">
              SCC TRADITIONS
            </h1>
            <p className="font-zen-maru-gothic text-lg text-gray-700 leading-relaxed">
              Stay connected and be part of our vibrant community. Discover a
              variety of events designed to inspire and engage everyone.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            <div>
              <h2 className="font-ovo text-4xl md:text-5xl text-black mb-4">
                EVENTS
              </h2>
              <p className="font-zen-maru-gothic text-lg text-gray-700 leading-relaxed">
                Join us for these special events throughout the year.
              </p>
            </div>

            <div className="space-y-8">
              {/* Event List */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-2 h-2 bg-[#7eb5d9] rounded-full mt-2"></div>
                  <p className="font-zen-maru-gothic text-lg text-gray-700">
                    Back to School Nights
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-2 h-2 bg-[#7eb5d9] rounded-full mt-2"></div>
                  <p className="font-zen-maru-gothic text-lg text-gray-700">
                    Grandparents Day
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-2 h-2 bg-[#7eb5d9] rounded-full mt-2"></div>
                  <p className="font-zen-maru-gothic text-lg text-gray-700">
                    Santa Visits
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-2 h-2 bg-[#7eb5d9] rounded-full mt-2"></div>
                  <p className="font-zen-maru-gothic text-lg text-gray-700">
                    Gingerbread House Days
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-2 h-2 bg-[#7eb5d9] rounded-full mt-2"></div>
                  <p className="font-zen-maru-gothic text-lg text-gray-700">
                    Christmas Programs
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-2 h-2 bg-[#7eb5d9] rounded-full mt-2"></div>
                  <p className="font-zen-maru-gothic text-lg text-gray-700">
                    Halloween Costume Parades
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-2 h-2 bg-[#7eb5d9] rounded-full mt-2"></div>
                  <p className="font-zen-maru-gothic text-lg text-gray-700">
                    Community Helper Presentations
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-2 h-2 bg-[#7eb5d9] rounded-full mt-2"></div>
                  <p className="font-zen-maru-gothic text-lg text-gray-700">
                    Mother's Day Tea
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-2 h-2 bg-[#7eb5d9] rounded-full mt-2"></div>
                  <p className="font-zen-maru-gothic text-lg text-gray-700">
                    Father's Day Dads and Donuts
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-2 h-2 bg-[#7eb5d9] rounded-full mt-2"></div>
                  <p className="font-zen-maru-gothic text-lg text-gray-700">
                    Easter Egg Hunts
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-2 h-2 bg-[#7eb5d9] rounded-full mt-2"></div>
                  <p className="font-zen-maru-gothic text-lg text-gray-700">
                    Open House Nights
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-2 h-2 bg-[#7eb5d9] rounded-full mt-2"></div>
                  <p className="font-zen-maru-gothic text-lg text-gray-700">
                    Harvest Festival with Petting Zoo
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-2 h-2 bg-[#7eb5d9] rounded-full mt-2"></div>
                  <p className="font-zen-maru-gothic text-lg text-gray-700">
                    St. Patrick's Day Shenanigans
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-2 h-2 bg-[#7eb5d9] rounded-full mt-2"></div>
                  <p className="font-zen-maru-gothic text-lg text-gray-700">
                    Earth Day Butterfly Park Field Trips with Ms. Sharon
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-2 h-2 bg-[#7eb5d9] rounded-full mt-2"></div>
                  <p className="font-zen-maru-gothic text-lg text-gray-700">
                    Music and Movement and Science with Ms. Sharon
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
