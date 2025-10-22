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
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Content */}
            <div className="space-y-6">
              <h1 className="font-ovo text-4xl md:text-5xl lg:text-6xl text-black leading-tight">
                SCC TRADITIONS
              </h1>
              <p className="font-zen-maru-gothic text-lg text-gray-700 leading-relaxed">
                Stay connected and be part of our vibrant community. Discover a
                variety of events designed to inspire and engage everyone.
              </p>
            </div>

            {/* Right Infinite Carousel */}
            <div className="grid grid-cols-2 gap-4 h-96 overflow-hidden">
              {/* Left Column - Moving Down */}
              <div className="relative">
                <div className="animate-scroll-down space-y-4">
                  {/* First set of images */}
                  <div className="aspect-[4/3] bg-gray-200 rounded-lg overflow-hidden">
                    <img
                      src="/school-event-celebration.jpg"
                      alt="School event celebration"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
                    <img
                      src="/family-fun-day-activities.jpg"
                      alt="Family fun day activities"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="aspect-[3/4] bg-gray-200 rounded-lg overflow-hidden">
                    <img
                      src="/holiday-performance-show.jpg"
                      alt="Holiday performance show"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Duplicate set for seamless loop */}
                  <div className="aspect-[4/3] bg-gray-200 rounded-lg overflow-hidden">
                    <img
                      src="/school-event-celebration.jpg"
                      alt="School event celebration"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
                    <img
                      src="/family-fun-day-activities.jpg"
                      alt="Family fun day activities"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="aspect-[3/4] bg-gray-200 rounded-lg overflow-hidden">
                    <img
                      src="/holiday-performance-show.jpg"
                      alt="Holiday performance show"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Right Column - Moving Up */}
              <div className="relative">
                <div className="animate-scroll-up space-y-4">
                  {/* First set of images */}
                  <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
                    <img
                      src="/outdoor-field-day-games.jpg"
                      alt="Outdoor field day games"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="aspect-[4/3] bg-gray-200 rounded-lg overflow-hidden">
                    <img
                      src="/parent-teacher-conference.png"
                      alt="Parent teacher conference"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="aspect-[3/4] bg-gray-200 rounded-lg overflow-hidden">
                    <img
                      src="/graduation-ceremony.png"
                      alt="Graduation ceremony celebration"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
                    <img
                      src="/community-fundraising-event.jpg"
                      alt="Community fundraising event"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Duplicate set for seamless loop */}
                  <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
                    <img
                      src="/outdoor-field-day-games.jpg"
                      alt="Outdoor field day games"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="aspect-[4/3] bg-gray-200 rounded-lg overflow-hidden">
                    <img
                      src="/parent-teacher-conference.png"
                      alt="Parent teacher conference"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="aspect-[3/4] bg-gray-200 rounded-lg overflow-hidden">
                    <img
                      src="/graduation-ceremony.png"
                      alt="Graduation ceremony celebration"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
                    <img
                      src="/community-fundraising-event.jpg"
                      alt="Community fundraising event"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
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
                Join us for these special events throughout the year. From
                educational workshops to fun family activities, there's
                something for everyone in our community.
              </p>
            </div>

            <div className="space-y-8">
              {/* Event 1 */}
              <div className="flex gap-6 items-start border-b border-gray-200 pb-8">
                <div className="flex-1">
                  <h3 className="font-ovo text-2xl text-black mb-2">
                    SPRING FAMILY FUN DAY
                  </h3>
                  <p className="font-zen-maru-gothic text-gray-600 mb-2">
                    School Playground
                  </p>
                  <p className="font-zen-maru-gothic text-gray-700 leading-relaxed">
                    Join us for a day of outdoor activities, games, and
                    community bonding. Enjoy face painting, bounce houses, and
                    delicious food while connecting with other families.
                  </p>
                </div>
              </div>

              {/* Event 2 */}
              <div className="flex gap-6 items-start border-b border-gray-200 pb-8">
                <div className="flex-1">
                  <h3 className="font-ovo text-2xl text-black mb-2">
                    PARENT EDUCATION WORKSHOP
                  </h3>
                  <p className="font-zen-maru-gothic text-gray-600 mb-2">
                    Main Classroom
                  </p>
                  <p className="font-zen-maru-gothic text-gray-700 leading-relaxed">
                    Learn effective parenting strategies and child development
                    insights from our experienced educators. Light refreshments
                    will be provided during this informative session.
                  </p>
                </div>
              </div>

              {/* Event 3 */}
              <div className="flex gap-6 items-start">
                <div className="flex-1">
                  <h3 className="font-ovo text-2xl text-black mb-2">
                    EASTER CELEBRATION
                  </h3>
                  <p className="font-zen-maru-gothic text-gray-600 mb-2">
                    Chapel & Courtyard
                  </p>
                  <p className="font-zen-maru-gothic text-gray-700 leading-relaxed">
                    Celebrate Easter with our school community through special
                    chapel service, egg hunt activities, and festive crafts. A
                    wonderful opportunity for spiritual reflection and family
                    joy.
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
