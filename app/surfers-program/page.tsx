import { GlobalNavigation } from '@/components/global-navigation';

export default function StarFishProgramPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Header */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-ovo text-2xl lg:text-6xl font-normal text-black leading-tight">
            SURFERS
            <br />
            PROGRAM
          </h1>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div className="space-y-6">
              <h2 className="font-ovo text-3xl lg:text-4xl font-normal text-black leading-tight">
                JOIN OUR SURFERS PROGRAM
              </h2>

              <div className="space-y-4 font-zen-maru text-gray-700 leading-relaxed">
                <p>
                  <b>
                    Children must be 4 before September 1st and potty trained to
                    enter this program.
                  </b>
                </p>

                <p>
                  Children in this program are planning on attending
                  Kindergarten in the Fall of 2023. Our SCC Surfers spend this
                  foundational year exploring the world of letter and number
                  mastery, Alpha Friends Phonics Program, Bible words and Bible
                  law memorization, word families, sight words, Scholastic
                  Reading Program, and Journal Writing Program. This is the year
                  reading and writing takes off, good choices are the "norm",
                  the seeds of the Holy Spirit are planted, and we see
                  transformations happen before our eyes. SCC Surfers leave this
                  program thoroughly prepared academically, emotionally,
                  socially, and spiritually for the next step to elementary
                  school.
                </p>
              </div>

              <a
                href="https://www.surfcitychristian.com/_files/ugd/12d36c_02788327221040a89f807f72042283e7.pdf"
                className="bg-[#7eb5d9] text-white px-6 py-3 rounded-md font-zen-maru hover:bg-[#6ba5cc] transition-colors"
              >
                View our Pre-K Flyer
              </a>
            </div>

            {/* Right Column - Image Placeholder */}
            <div className="bg-gray-200 rounded-lg aspect-[4/3] flex items-center justify-center">
              <div className="w-24 h-24 bg-gray-400 rounded-lg flex items-center justify-center">
                <svg
                  className="w-12 h-12 text-gray-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
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
              <p className="font-zen-maru text-gray-700 text-lg">8:30am-12pm</p>
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

      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <blockquote className="font-ovo text-2xl lg:text-3xl font-normal text-black leading-relaxed mb-8">
            "THE STAR FISH PROGRAM TRANSFORMED MY CHILD'S CONFIDENCE AND SKILLS
            IN WAYS WE NEVER IMAGINED! WE ARE SO GRATEFUL FOR THE SUPPORTIVE
            ENVIRONMENT AND DEDICATED STAFF."
          </blockquote>

          <div className="space-y-1">
            <p className="font-zen-maru text-lg font-semibold text-black">
              Emily Johnson
            </p>
            <p className="font-zen-maru text-gray-600">Parent, Local School</p>
          </div>
        </div>
      </section>
    </div>
  );
}
