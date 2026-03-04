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
                  <i>
                    For children <b>5 years old</b> by September 1st, 2026
                    (exceptions may be made with Ms. Tami).
                  </i>
                </p>
                <p>
                  The Sailors Program is a premier academic preparatory program
                  using the Houghton Mifflin Common Core Curriculum and Tara
                  West Programs. Children become confident, independent learners
                  as they develop strong reading and writing skills, with a
                  focus on guided reading, phonics, and STEAM. Christ-centered
                  lessons, daily chapel, and spiritual teachings are integral to
                  this program, which prepare children for elementary school
                  both academically and spiritually.
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
            Our Sailors Program Hours​
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
