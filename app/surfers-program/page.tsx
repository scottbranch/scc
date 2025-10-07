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

      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-ovo text-4xl lg:text-5xl font-normal text-black text-center mb-16">
            OUR TEAM
          </h2>

          {/* Team Grid */}
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 mb-20">
            {/* Mrs. Cassie */}
            <div className="text-center">
              <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-6 flex items-center justify-center">
                <svg
                  className="w-12 h-12 text-gray-500"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                </svg>
              </div>
              <h3 className="font-ovo text-2xl font-normal text-black mb-4">
                Mrs. Cassie
              </h3>
              <p className="font-zen-maru-gothic text-gray-700 leading-relaxed">
                We are absolutely blessed to have our wonderful Ms. Cassie teach
                in our Starfish Program! She has such a tender, gentle heart for
                our students, and especially loves to teach the 2- and
                3-year-olds. We are so happy to have her in the classroom again!
                We are confident that your little one will adore her! She has
                her teaching certificate in Early Childhood Education and many
                years of experience. Ms. Cassie has been at SCC since 2006 when
                the school opened and taught in many different classrooms and
                has a passion for teaching twos. Ms. Cassie is a mommy of two
                and she enjoys dining out, shopping, watching movies, and going
                on adventures with her family!
              </p>
            </div>

            {/* Mrs. Danielle */}
            <div className="text-center">
              <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-6 flex items-center justify-center">
                <svg
                  className="w-12 h-12 text-gray-500"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                </svg>
              </div>
              <h3 className="font-ovo text-2xl font-normal text-black mb-4">
                Mrs. Danielle
              </h3>
              <p className="font-zen-maru-gothic text-gray-700 leading-relaxed">
                We are excited to have our wonderful Ms. Danielle return to our
                school! Ms. Danielle has a gift with teaching young children, as
                she creates a loving and nurturing classroom for her sweet
                students. She first began teaching at SCC in 2006 and took a
                short break when she welcomed her first and second child. She
                earned a double bachelor's degree in Child Development and
                Family Life Education from California State University of Long
                Beach. She brings a passion and enthusiasm for teaching and your
                child will absolutely fall in love with her. Ms. Danielle is a
                mommy of two and enjoys family vacations and the beach.
              </p>
            </div>

            {/* Sarah Lee */}
            <div className="text-center">
              <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-6 flex items-center justify-center">
                <svg
                  className="w-12 h-12 text-gray-500"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                </svg>
              </div>
              <h3 className="font-ovo text-2xl font-normal text-black mb-4">
                Sarah Lee
              </h3>
              <p className="font-zen-maru-gothic text-gray-700 leading-relaxed">
                We are absolutely blessed to have our wonderful Ms. Cassie teach
                in our Starfish Program! She has such a tender, gentle heart for
                our students, and especially loves to teach the 2- and
                3-year-olds. We are so happy to have her in the classroom again!
                We are confident that your little one will adore her! She has
                her teaching certificate in Early Childhood Education and many
                years of experience. Ms. Cassie has been at SCC since 2006 when
                the school opened and taught in many different classrooms and
                has a passion for teaching twos. Ms. Cassie is a mommy of two
                and she enjoys dining out, shopping, watching movies, and going
                on adventures with her family!
              </p>
            </div>

            {/* Full name */}
            <div className="text-center">
              <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-6 flex items-center justify-center">
                <svg
                  className="w-12 h-12 text-gray-500"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                </svg>
              </div>
              <h3 className="font-ovo text-2xl font-normal text-black mb-4">
                Full name
              </h3>
              <p className="font-zen-maru-gothic text-gray-700 leading-relaxed">
                We are absolutely blessed to have our wonderful Ms. Cassie teach
                in our Starfish Program! She has such a tender, gentle heart for
                our students, and especially loves to teach the 2- and
                3-year-olds. We are so happy to have her in the classroom again!
                We are confident that your little one will adore her! She has
                her teaching certificate in Early Childhood Education and many
                years of experience. Ms. Cassie has been at SCC since 2006 when
                the school opened and taught in many different classrooms and
                has a passion for teaching twos. Ms. Cassie is a mommy of two
                and she enjoys dining out, shopping, watching movies, and going
                on adventures with her family!
              </p>
            </div>
          </div>

          {/* We're Hiring Section */}
          <div className="text-center py-16">
            <h2 className="font-ovo text-4xl lg:text-5xl font-normal text-black mb-8">
              WE'RE HIRING!
            </h2>
            <p className="font-zen-maru-gothic text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto mb-8">
              We are always keeping an eye out for wonderful teachers to join
              our staff to accommodate the growth and needs of families. We
              regularly interview candidates who have a minimum of 12 Early
              Childhood Education units, experience working with children, and
              have a passion for teaching. Contact our office for more
              information.
            </p>
            <a
              href="https://www.surfcitychristian.com/_files/ugd/12d36c_f06dc94b45824784b8570cfeea0bc65d.docx?dn=new%20family%202025-2026%20Family%20Application%20.docx"
              className="bg-[#7eb5d9] hover:bg-[#6ba5c9] text-white font-zen-maru-gothic px-8 py-3 rounded-md transition-colors duration-200"
            >
              Apply
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
