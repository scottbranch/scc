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
                Surfers Program
              </h2>

              <div className="space-y-4 font-zen-maru text-gray-700 leading-relaxed">
                <p>
                  <b>
                    Transitional Kindergarten (TK) | 4 Years Old Before
                    September 1
                  </b>
                </p>

                <p>
                  The Surfers Program is our Transitional Kindergarten classroom
                  for children who are four years old by September 1. This
                  program focuses on academic, social, and emotional readiness
                  for kindergarten, combining structured learning with hands-on
                  experiences while reinforcing Christian character, leadership,
                  and responsibility.
                </p>
              </div>
            </div>

            {/* Right Column - Image Placeholder */}
            <div className="rounded-lg aspect-[4/3] flex items-center justify-center">
              <img src="/images/surfers.jpg" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-[#e5f0f7]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-ovo text-3xl lg:text-4xl font-normal text-black mb-12 uppercase">
            Our Surfers Program Hours​
          </h2>

          <div className="space-y-8">
            <div>
              <h3 className="font-ovo text-xl lg:text-2xl font-normal text-black mb-2">
                Half Day
              </h3>
              <p className="font-zen-maru text-gray-700 text-lg">
                8:30am-1:00pm (bring lunch and lunch with friends)
              </p>
            </div>

            <div>
              <h3 className="font-ovo text-xl lg:text-2xl font-normal text-black mb-2">
                Full Day
              </h3>
              <p className="font-zen-maru text-gray-700 text-lg">
                7:30am-5:30pm
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
