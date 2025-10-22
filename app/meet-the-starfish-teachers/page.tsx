'use client';

import { AnimatedSection } from '@/components/animated-section';

export default function MeetTheStarfishTeachers() {
  return (
    <div className="min-h-screen bg-white">
      <main className="pt-16">
        {/* Hero Section */}
        <AnimatedSection animation="fadeInUp">
          <section className="py-16">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h1 className="font-ovo uppercase text-4xl lg:text-6xl font-normal text-black leading-tight text-balance mb-8">
                Meet our 2-3 year old teachers
              </h1>
              <p className="font-zen-maru-gothic text-lg lg:text-xl text-gray-700 leading-relaxed text-balance">
                Our Starfish Program nurtures creativity in toddlers aged 2-3
                years through play and exploration. Meet the dedicated teachers
                who make learning an adventure for our youngest learners,
                fostering growth, curiosity, and joy in every child they teach.
              </p>
            </div>
          </section>
        </AnimatedSection>

        {/* Our Team Section */}
        <AnimatedSection animation="fadeInUp">
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
                    We are absolutely blessed to have our wonderful Ms. Cassie
                    teach in our Starfish Program! She has such a tender, gentle
                    heart for our students, and especially loves to teach the 2-
                    and 3-year-olds. We are so happy to have her in the
                    classroom again! We are confident that your little one will
                    adore her! She has her teaching certificate in Early
                    Childhood Education and many years of experience. Ms. Cassie
                    has been at SCC since 2006 when the school opened and taught
                    in many different classrooms and has a passion for teaching
                    twos. Ms. Cassie is a mommy of two and she enjoys dining
                    out, shopping, watching movies, and going on adventures with
                    her family!
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
                    We are excited to have our wonderful Ms. Danielle return to
                    our school! Ms. Danielle has a gift with teaching young
                    children, as she creates a loving and nurturing classroom
                    for her sweet students. She first began teaching at SCC in
                    2006 and took a short break when she welcomed her first and
                    second child. She earned a double bachelor's degree in Child
                    Development and Family Life Education from California State
                    University of Long Beach. She brings a passion and
                    enthusiasm for teaching and your child will absolutely fall
                    in love with her. Ms. Danielle is a mommy of two and enjoys
                    family vacations and the beach.
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
                    We are absolutely blessed to have our wonderful Ms. Cassie
                    teach in our Starfish Program! She has such a tender, gentle
                    heart for our students, and especially loves to teach the 2-
                    and 3-year-olds. We are so happy to have her in the
                    classroom again! We are confident that your little one will
                    adore her! She has her teaching certificate in Early
                    Childhood Education and many years of experience. Ms. Cassie
                    has been at SCC since 2006 when the school opened and taught
                    in many different classrooms and has a passion for teaching
                    twos. Ms. Cassie is a mommy of two and she enjoys dining
                    out, shopping, watching movies, and going on adventures with
                    her family!
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
                    We are absolutely blessed to have our wonderful Ms. Cassie
                    teach in our Starfish Program! She has such a tender, gentle
                    heart for our students, and especially loves to teach the 2-
                    and 3-year-olds. We are so happy to have her in the
                    classroom again! We are confident that your little one will
                    adore her! She has her teaching certificate in Early
                    Childhood Education and many years of experience. Ms. Cassie
                    has been at SCC since 2006 when the school opened and taught
                    in many different classrooms and has a passion for teaching
                    twos. Ms. Cassie is a mommy of two and she enjoys dining
                    out, shopping, watching movies, and going on adventures with
                    her family!
                  </p>
                </div>
              </div>

              <h2 className="font-ovo text-4xl lg:text-5xl font-normal text-black text-center mb-16">
                Meet our Seashell Teacher
              </h2>

              <div className="grid md:grid-cols-1 gap-12 lg:gap-16 mb-20">
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
                    We are absolutely blessed to have our wonderful Ms. Cassie
                    teach in our Starfish Program! She has such a tender, gentle
                    heart for our students, and especially loves to teach the 2-
                    and 3-year-olds. We are so happy to have her in the
                    classroom again! We are confident that your little one will
                    adore her! She has her teaching certificate in Early
                    Childhood Education and many years of experience. Ms. Cassie
                    has been at SCC since 2006 when the school opened and taught
                    in many different classrooms and has a passion for teaching
                    twos. Ms. Cassie is a mommy of two and she enjoys dining
                    out, shopping, watching movies, and going on adventures with
                    her family!
                  </p>
                </div>
              </div>

              {/* We're Hiring Section */}
              <div className="text-center py-16">
                <h2 className="font-ovo text-4xl lg:text-5xl font-normal text-black mb-8">
                  WE'RE HIRING!
                </h2>
                <p className="font-zen-maru-gothic text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto mb-8">
                  We are always keeping an eye out for wonderful teachers to
                  join our staff to accommodate the growth and needs of
                  families. We regularly interview candidates who have a minimum
                  of 12 Early Childhood Education units, experience working with
                  children, and have a passion for teaching. Contact our office
                  for more information.
                </p>
                <a
                  href="/new-family-2025-2026-Family-Application.docx"
                  className="bg-[#7eb5d9] hover:bg-[#6ba5c9] text-white font-zen-maru-gothic px-8 py-3 rounded-md transition-colors duration-200"
                >
                  Apply
                </a>
              </div>
            </div>
          </section>
        </AnimatedSection>
      </main>
    </div>
  );
}
