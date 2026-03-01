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
                Sailors Program
              </h2>

              <div className="space-y-4 font-zen-maru text-gray-700 leading-relaxed">
                <p>
                  <b>
                    TK / Kindergarten Combo | 4 Years Old Before September 1
                  </b>
                </p>
                <p>
                  The Sailors Program is a TK/Kindergarten combination class
                  designed for children who are four years old by September 1
                  and ready for advanced academic and developmental challenges.
                  This program emphasizes kindergarten readiness, independence,
                  and leadership while encouraging children to grow spiritually,
                  academically, and socially in a Christ-centered environment.
                </p>
              </div>

              <a
                href="https://www.surfcitychristian.com/_files/ugd/12d36c_3c9ad74aeb0046d389b1df78254ce650.pdf"
                className="bg-[#7eb5d9] text-white px-6 py-3 rounded-md font-zen-maru hover:bg-[#6ba5cc] transition-colors"
              >
                View our Kindergarten Flyer
              </a>
            </div>

            {/* Right Column - Image Placeholder */}
            <div className="rounded-lg aspect-[4/3] flex items-center justify-center">
              <img src="/images/sailors.jpg" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-[#e5f0f7]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-ovo text-3xl lg:text-4xl font-normal text-black mb-12 uppercase">
            Our Sailor Program Hours​
          </h2>

          <div className="space-y-8">
            <div>
              <h3 className="font-ovo text-xl lg:text-2xl font-normal text-black mb-2">
                School Day
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
