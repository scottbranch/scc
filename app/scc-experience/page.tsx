import { GlobalNavigation } from '@/components/global-navigation';

export default function SCCExperiencePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gray-700 text-white py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Column - Main Heading */}
            <div>
              <h1 className="font-ovo text-5xl lg:text-7xl font-normal leading-tight text-balance">
                THE SCC EXPERIENCE
              </h1>
            </div>

            {/* Right Column - Description */}
            <div className="space-y-6">
              <p className="font-zen-maru-gothic text-lg lg:text-xl leading-relaxed text-gray-100">
                The SCC experience offers students learning opportunities in
                dramatic play, language arts, fine motor writing programs such
                as Handwriting Without Tears, life and physical science lessons
                and experiments, a learning garden, an introduction to Spanish,
                math, art masters, gross motor/physical education programs,
                music & movement, chapel and fruit of the spirit...and so much
                more. Call us to schedule a tour and see what makes SCC unique
                and very special.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-ovo text-4xl lg:text-5xl font-normal text-black leading-tight text-balance mb-8">
            A SAFE, CLEAN, AND HEALTHY PLACE TO LEARN AND GROW
          </h2>
          <p className="font-zen-maru-gothic text-lg lg:text-xl leading-relaxed text-gray-700 max-w-3xl mx-auto">
            SCC prides itself on a safe, clean, and beautiful facility. We have
            a daily cleaning crew and toy washing program. Our health policy is
            enforced, and families are appreciative of our diligent efforts to
            keep our students healthy and safe.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Music & Science */}
            <div className="space-y-6">
              <div className="aspect-[4/3] bg-gray-300 rounded-lg flex items-center justify-center">
                <div className="w-16 h-16 bg-gray-400 rounded flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-gray-500"
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
              <div>
                <h3 className="font-ovo text-2xl font-normal text-black mb-4">
                  CHAPEL
                </h3>
                <p className="font-zen-maru-gothic text-base text-gray-700 leading-relaxed">
                  SCC loves music! We are proud to bring music to the classroom
                  daily in all different forms. Through Music & Movement,
                  lessons in rhythm and beat, song and dance, experiences with
                  various instruments, and more, SCC explores and celebrates
                  music daily. Ms. Sharon is our gifted Music Lady bringing
                  sweet music to each classroom. On site Music Presentations are
                  an SCC favorite!
                </p>
              </div>
            </div>

            {/* Visual Arts */}
            <div className="space-y-6">
              <div className="aspect-[4/3] bg-gray-300 rounded-lg flex items-center justify-center">
                <div className="w-16 h-16 bg-gray-400 rounded flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-gray-500"
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
              <div>
                <h3 className="font-ovo text-2xl font-normal text-black mb-4">
                  ACADEMIC SCHOOL READINESS
                </h3>
                <p className="font-zen-maru-gothic text-base text-gray-700 leading-relaxed">
                  Exploring art in all shapes and sizes is a daily treat at SCC.
                  We strive to foster creative and artistic minds and souls at
                  SCC. Our SCC little ones love to explore the world of art
                  through painting, molding, collaging, learning about famous
                  artists and their works of art, and creating their own
                  masterpieces as well!
                </p>
              </div>
            </div>

            {/* Gross Motor & Physical Education */}
            <div className="space-y-6">
              <div className="aspect-[4/3] bg-gray-300 rounded-lg flex items-center justify-center">
                <div className="w-16 h-16 bg-gray-400 rounded flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-gray-500"
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
              <div>
                <h3 className="font-ovo text-2xl font-normal text-black mb-4">
                  SPANISH
                </h3>
                <p className="font-zen-maru-gothic text-base text-gray-700 leading-relaxed">
                  SCC prides itself on an engaging, well rounded and stimulating
                  curriculum. Each day is filled with new physical education and
                  gross motor learning opportunities. In addition, we offer
                  lessons in yoga, hand eye coordination ball skills, relay
                  races, basketball, dance and more! Our gross motor program
                  supports California Common Core standards.
                </p>
              </div>
            </div>

            {/* Gross Motor & Physical Education */}
            <div className="space-y-6">
              <div className="aspect-[4/3] bg-gray-300 rounded-lg flex items-center justify-center">
                <div className="w-16 h-16 bg-gray-400 rounded flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-gray-500"
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
              <div>
                <h3 className="font-ovo text-2xl font-normal text-black mb-4">
                  MUSIC AND MOVEMENT
                </h3>
                <p className="font-zen-maru-gothic text-base text-gray-700 leading-relaxed">
                  SCC loves music! We are proud to bring music to the classroom
                  daily in all different forms. Through Music & Movement,
                  lessons in rhythm and beat, song and dance, experiences with
                  various instruments, and more, SCC explores and celebrates
                  music daily. Ms. Sharon is our gifted Music Lady bringing
                  sweet music to each classroom. On site Music Presentations are
                  an SCC favorite!
                </p>
              </div>
            </div>

            {/* Gross Motor & Physical Education */}
            <div className="space-y-6">
              <div className="aspect-[4/3] bg-gray-300 rounded-lg flex items-center justify-center">
                <div className="w-16 h-16 bg-gray-400 rounded flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-gray-500"
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
              <div>
                <h3 className="uppercase font-ovo text-2xl font-normal text-black">
                  FAMILY STYLE MEALS & FOOD EXPERIENCE PROGRAMS
                </h3>
                <p className="font-zen-maru-gothic text-base text-gray-700 leading-relaxed">
                  Exploring art in all shapes and sizes is a daily treat at SCC.
                  We strive to foster creative and artistic minds and souls at
                  SCC. Our SCC little ones love to explore the world of art
                  through painting, molding, collaging, learning about famous
                  artists and their works of art, and creating their own
                  masterpieces as well!
                </p>
              </div>
            </div>

            {/* Gross Motor & Physical Education */}
            <div className="space-y-6">
              <div className="aspect-[4/3] bg-gray-300 rounded-lg flex items-center justify-center">
                <div className="w-16 h-16 bg-gray-400 rounded flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-gray-500"
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
              <div>
                <h3 className="font-ovo text-2xl font-normal text-black">
                  ART MASTERS
                </h3>
                <p className="font-zen-maru-gothic text-base text-gray-700 leading-relaxed">
                  SCC prides itself on an engaging, well rounded and stimulating
                  curriculum. Each day is filled with new physical education and
                  gross motor learning opportunities. In addition, we offer
                  lessons in yoga, hand eye coordination ball skills, relay
                  races, basketball, dance and more! Our gross motor program
                  supports California Common Core standards.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
