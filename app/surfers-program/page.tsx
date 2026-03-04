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
                  <i>
                    For children <b>4 years old</b> by September 1st, 2026, and
                    potty trained.
                  </i>
                </p>

                <p>
                  The Surfers Program prepares children for Kindergarten by
                  mastering letters, numbers, and early literacy skills through
                  Alpha Friends Phonics and Tara West Literacy. Children also
                  learn Bible verses, word families, and journal writing. Daily
                  chapel and spiritual teachings provide a strong foundation in
                  faith. This year focuses on developing positive choices,
                  academic readiness, and spiritual growth in a loving,
                  Christ-centered environment.
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
                8:30am-1:00pm (bring lunch from home)
              </p>
            </div>

            <div>
              <h3 className="font-ovo text-xl lg:text-2xl font-normal text-black mb-2">
                Full Day
              </h3>
              <p className="font-zen-maru text-gray-700 text-lg">
                7:00am-5:30pm
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
