'use client';

import { AnimatedSection } from '@/components/animated-section';

export default function SccStaffPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection animation="fadeInUp">
          <section className="py-16 lg:py-24">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="font-ovo text-5xl lg:text-6xl font-normal text-black leading-tight text-balance mb-8">
                SCC STAFF
              </h1>
              <p className="font-zen-maru-gothic text-lg lg:text-xl text-gray-700 leading-relaxed text-balance">
                Scc staff is highly qualified, experienced, loving, and
                educated. Each staff member is thoroughly background checked and
                has come to Scc with wonderful personal and professional
                references. When parents tour our school and ask what makes Scc
                so special, the answer is simple and one word...teachers!
                Educating, inspiring, loving, and caring for our Scc students is
                a blessing and a privilege.
              </p>
            </div>
          </section>
        </AnimatedSection>
      </main>

      <AnimatedSection animation="fadeInUp">
        <section className="py-16 lg:py-24 bg-slate-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <p className="font-zen-maru-gothic text-lg lg:text-xl text-white leading-relaxed text-balance max-w-4xl mx-auto">
                Here at SCC we are truly a family. We strive to encourage,
                uplift, and support one another to make the whole school thrive.
              </p>
            </div>

            {/* Staff Photo Gallery - Masonry Grid */}
            <AnimatedSection animation="scaleIn" delay={200}>
              <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
                <div className="break-inside-avoid">
                  <img
                    src="/images/staff-photo-unified.png"
                    alt="SCC staff member with children"
                    className="w-full h-auto rounded-lg object-cover"
                  />
                </div>
                <div className="break-inside-avoid">
                  <img
                    src="/images/staff-photo-outdoor.png"
                    alt="SCC staff member with children outdoors"
                    className="w-full h-auto rounded-lg object-cover"
                  />
                </div>
                <div className="break-inside-avoid">
                  <img
                    src="/images/welcome-children.png"
                    alt="SCC staff with children in classroom"
                    className="w-full h-auto rounded-lg object-cover"
                  />
                </div>
                <div className="break-inside-avoid">
                  <img
                    src="/images/nurturing-environment.png"
                    alt="SCC staff creating nurturing environment"
                    className="w-full h-auto rounded-lg object-cover"
                  />
                </div>
                <div className="break-inside-avoid">
                  <img
                    src="/images/discover-preschool.png"
                    alt="SCC staff with children learning"
                    className="w-full h-auto rounded-lg object-cover"
                  />
                </div>
                <div className="break-inside-avoid">
                  <img
                    src="/images/staff-photo-outdoor.png"
                    alt="SCC staff member with children outdoors"
                    className="w-full h-auto rounded-lg object-cover"
                  />
                </div>
                <div className="break-inside-avoid">
                  <img
                    src="/images/staff-photo-unified.png"
                    alt="SCC staff member with children"
                    className="w-full h-auto rounded-lg object-cover"
                  />
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </AnimatedSection>
    </div>
  );
}
