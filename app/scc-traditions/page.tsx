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
