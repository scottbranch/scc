'use client';

import { useState, useEffect } from 'react';
import { AnimatedSection } from '@/components/animated-section';

export default function Home() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  type LearningLabKey =
    | 'STEM'
    | 'ART LAB'
    | 'GARDENING AND SENSORY LAB'
    | 'GROSS MOTOR SKILLS STATIONS'
    | 'DRAMATIC PLAYHOUSE';

  const [activeSection, setActiveSection] = useState<LearningLabKey>('STEM');

  const learningLabsData: Record<
    LearningLabKey,
    {
      title: string;
      description: string;
      image: string;
      alt: string;
    }
  > = {
    STEM: {
      title: 'STEM',
      description:
        '(STEM CONTENT) - Experience a welcoming community that fosters spiritual growth and connection. Our programs are designed to uplift and inspire individuals of all ages.',
      image: '/images/placeholder.png',
      alt: 'Children doing STEM activities with building blocks and science experiments',
    },
    'ART LAB': {
      title: 'ART LAB',
      description:
        '(ART LAB CONTENT) - Join us for dynamic worship that resonates with your heart. Our services are crafted to create a meaningful and uplifting experience.',
      image: '/images/placeholder.png',
      alt: 'Children painting and doing art activities in colorful classroom',
    },
    'GARDENING AND SENSORY LAB': {
      title: 'GARDENING AND SENSORY LAB',
      description:
        '(GARDENING AND SENSORY LAB CONTENT) - Get involved in our outreach initiatives that make a difference in the community. Together, we strive to serve and support those in need.',
      image: '/images/placeholder.png',
      alt: 'Children gardening and exploring sensory activities outdoors',
    },
    'GROSS MOTOR SKILLS STATIONS': {
      title: 'GROSS MOTOR SKILLS STATIONS',
      description:
        '(GROSS MOTOR SKILLS STATIONS CONTENT) - Get involved in our outreach initiatives that make a difference in the community. Together, we strive to serve and support those in need.',
      image: '/images/placeholder.png',
      alt: 'Children doing physical activities and gross motor skills exercises',
    },
    'DRAMATIC PLAYHOUSE': {
      title: 'DRAMATIC PLAYHOUSE',
      description:
        '(DRAMATIC PLAYHOUSE CONTENT) - Get involved in our outreach initiatives that make a difference in the community. Together, we strive to serve and support those in need.',
      image: '/images/placeholder.png',
      alt: 'Child playing with wooden drum and colorful building blocks in classroom',
    },
  };

  return (
    <div className="min-h-screen bg-white">
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/video/placeholder-vid.mp4" type="video/mp4" />
          {/* Fallback image if video doesn't load */}
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Relume_Figma_Kit__v3.4___Community_.png-ED9Pp4zT6uGFMhgAVosweBfaF6k8Dm.jpeg"
            alt="Children learning in preschool classroom"
            className="w-full h-full object-cover"
          />
        </video>

        {/* Video Overlay */}
        <div className="absolute inset-0 video-overlay"></div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="font-ovo text-5xl md:text-6xl lg:text-7xl font-normal text-white leading-tight text-balance">
            INSTILLING A PASSION FOR LEARNING AND A LOVE FOR GOD
          </h1>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <AnimatedSection animation="fadeInUp">
          <section className="py-16 lg:py-24">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Left Content */}
              <div className="space-y-8">
                <h2 className="font-ovo text-4xl lg:text-5xl font-normal text-black leading-tight">
                  WELCOME TO SURF CITY CHRISTIAN
                </h2>

                <p className="font-zen-maru-gothic text-lg text-gray-700 leading-relaxed">
                  "Surf City Christian seeks to foster the development of the
                  whole child - social, emotional, academic and spiritual. We
                  strive to build character through the embodiment of the fruits
                  of the spirit while igniting a love for learning aimed at
                  preparing children for academic success."
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="https://www.surfcitychristian.com/_files/ugd/12d36c_f06dc94b45824784b8570cfeea0bc65d.docx?dn=new%20family%202025-2026%20Family%20Application%20.docx"
                    className="bg-[#7eb5d9] text-white px-8 py-3 rounded-md font-zen-maru-gothic font-medium hover:bg-[#6ba4c8] transition-colors"
                  >
                    New Family Application
                  </a>
                  <a
                    href="/schedule-a-tour"
                    className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-md font-zen-maru-gothic font-medium hover:border-gray-400 transition-colors"
                  >
                    Schedule a Tour
                  </a>
                </div>
              </div>

              {/* Right Image */}
              <div className="relative">
                <img
                  src="/images/placeholder.png"
                  alt="Teacher with diverse group of children celebrating with arms raised in classroom"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
            </div>
          </section>
        </AnimatedSection>
      </main>

      <AnimatedSection animation="fadeInUp">
        <section className="py-16 lg:py-24 bg-[#E5F0F7]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-ovo text-4xl lg:text-5xl font-normal text-black leading-tight text-balance">
                EXPLORE OUR ENGAGING EARLY CHILDHOOD PROGRAMS
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
              {/* Guppies Program */}
              <AnimatedSection animation="scaleIn" delay={100}>
                <div className="text-center space-y-4">
                  <div className="aspect-[4/3] overflow-hidden rounded-lg">
                    <img
                      src="/images/staff-photo-unified.png"
                      alt="Guppies program for 18 month olds"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-ovo text-xl font-normal text-black">
                    GUPPIES
                  </h3>
                  <p className="font-zen-maru-gothic text-sm text-gray-700 leading-relaxed">
                    18 month Program.
                    <br />
                    Coming soon...
                  </p>
                </div>
              </AnimatedSection>

              {/* Starfish Program */}
              <AnimatedSection animation="scaleIn" delay={200}>
                <div className="text-center space-y-4">
                  <div className="aspect-[4/3] overflow-hidden rounded-lg">
                    <img
                      src="/images/staff-photo-unified.png"
                      alt="Starfish program for 2-3 year olds"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-ovo text-xl font-normal text-black">
                    STARFISH
                  </h3>
                  <p className="font-zen-maru-gothic text-sm text-gray-700 leading-relaxed">
                    Our Starfish Program nurtures creativity in toddlers aged
                    2-3 years through play and exploration.
                  </p>
                </div>
              </AnimatedSection>

              {/* Sea Turtles Program */}
              <AnimatedSection animation="scaleIn" delay={300}>
                <div className="text-center space-y-4">
                  <div className="aspect-[4/3] overflow-hidden rounded-lg">
                    <img
                      src="/images/staff-photo-unified.png"
                      alt="Sea Turtles program for 3-4 year olds"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-ovo text-xl font-normal text-black">
                    SEA TURTLES
                  </h3>
                  <p className="font-zen-maru-gothic text-sm text-gray-700 leading-relaxed">
                    Designed for 3-4 year-olds, our Sea Turtle Program fosters
                    independence and confidence in young learners.
                  </p>
                </div>
              </AnimatedSection>

              {/* Surfers Program */}
              <AnimatedSection animation="scaleIn" delay={400}>
                <div className="text-center space-y-4">
                  <div className="aspect-[4/3] overflow-hidden rounded-lg">
                    <img
                      src="/images/staff-photo-unified.png"
                      alt="Surfers program for 4-5 year olds"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-ovo text-xl font-normal text-black">
                    SURFERS
                  </h3>
                  <p className="font-zen-maru-gothic text-sm text-gray-700 leading-relaxed">
                    The Surfers Program promotes teamwork and problem-solving
                    skills for energetic 4-5 year-olds.
                  </p>
                </div>
              </AnimatedSection>

              {/* Sailors Program */}
              <AnimatedSection animation="scaleIn" delay={500}>
                <div className="text-center space-y-4">
                  <div className="aspect-[4/3] overflow-hidden rounded-lg">
                    <img
                      src="/images/staff-photo-unified.png"
                      alt="Sailors kindergarten program"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-ovo text-xl font-normal text-black">
                    SAILORS
                  </h3>
                  <p className="font-zen-maru-gothic text-sm text-gray-700 leading-relaxed">
                    Our Kindergarten Program fosters independent, critical
                    thinkers, with a strong academic and spiritual experience.
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>
      </AnimatedSection>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection animation="slideInLeft">
          <section className="py-16 lg:py-24">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Left Content */}
              <div className="space-y-8">
                <h2 className="font-ovo text-2xl lg:text-4xl font-normal text-black leading-tight text-balance">
                  CREATING A NURTURING ENVIRONMENT FOR YOUR CHILD'S EARLY
                  DEVELOPMENT
                </h2>

                <p className="font-zen-maru-gothic text-lg text-gray-700 leading-relaxed">
                  We realize how critical these early years are and what an
                  important choice you have when choosing the best preschool
                  program for your child. We have created a facility that makes
                  our children feel as if this is their "Home away from Home"
                  and an environment where Christ-like qualities are modeled,
                  taught, and valued.
                </p>
              </div>

              {/* Right Image */}
              <div className="relative">
                <img
                  src="/images/placeholder.png"
                  alt="Children engaged in learning activities in a nurturing classroom environment"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
            </div>
          </section>
        </AnimatedSection>

        <AnimatedSection animation="slideInRight">
          <section className="py-16 lg:py-24">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Left Image */}
              <div className="relative">
                <img
                  src="/images/placeholder.png"
                  alt="Teacher reading to children in a cozy classroom circle time"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>

              {/* Right Content */}
              <div className="space-y-8">
                <h2 className="font-ovo text-2xl lg:text-4xl font-normal text-black leading-tight text-balance">
                  DISCOVER A PRESCHOOL WHERE LEARNING FEELS LIKE HOME
                </h2>

                <p className="font-zen-maru-gothic text-lg text-gray-700 leading-relaxed">
                  Here at Surf City Christian, we are more than a preschool...
                  we are truly a family. We invite you to learn about our
                  program through our website and then give us a call to
                  schedule a tour. Come take a look at our school and see why
                  our staff, our facility, and our program is the right choice
                  for your child's early learning years.
                </p>
              </div>
            </div>
          </section>
        </AnimatedSection>
      </main>

      <AnimatedSection animation="fadeIn">
        <section className="py-16 lg:py-24 bg-[#E5F0F7]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <blockquote className="space-y-8">
              <p className="font-ovo text-2xl lg:text-3xl font-normal text-black text-balance">
                "WHAT A WONDERFUL FEELING TO DROP OUR GIRLS OFF AT SCC AND KNOW
                THEY ARE SAFE, LOVED AND BEING NURTURED IN THIS WARM
                ENVIRONMENT."
              </p>
              <cite className="font-zen-maru-gothic text-lg text-gray-700 not-italic">
                The Manthorne Family
              </cite>
            </blockquote>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection animation="fadeInUp">
        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 space-y-6">
              <h2 className="font-ovo text-4xl lg:text-5xl font-normal text-black leading-tight">
                SCC STAFF
              </h2>
              <p className="font-zen-maru-gothic text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
                Here at SCC we are truly a family. We strive to encourage,
                uplift, and support one another to make the whole school thrive.
              </p>
              <a
                href="/scc-staff"
                className="bg-[#7eb5d9] text-white px-8 py-3 rounded-md font-zen-maru-gothic font-medium hover:bg-[#6ba4c8] transition-colors"
              >
                Learn More About Our Staff
              </a>
            </div>

            <AnimatedSection animation="scaleIn" delay={200}>
              <div className="columns-2 lg:columns-3 gap-4 space-y-4">
                <div className="break-inside-avoid mb-4">
                  <img
                    src="/images/staff-photo-unified.png"
                    alt="Teacher with two young children in classroom"
                    className="w-full rounded-lg"
                  />
                </div>

                <div className="break-inside-avoid mb-4">
                  <img
                    src="/images/staff-photo-unified.png"
                    alt="Teacher with two young children in classroom"
                    className="w-full rounded-lg"
                  />
                </div>

                <div className="break-inside-avoid mb-4">
                  <img
                    src="/images/staff-photo-outdoor.png"
                    alt="Blonde teacher with sunglasses outdoors with two young children"
                    className="w-full rounded-lg"
                  />
                </div>

                <div className="break-inside-avoid mb-4">
                  <img
                    src="/images/staff-photo-outdoor.png"
                    alt="Blonde teacher with sunglasses outdoors with two young children"
                    className="w-full rounded-lg"
                  />
                </div>

                <div className="break-inside-avoid mb-4">
                  <img
                    src="/images/staff-photo-outdoor.png"
                    alt="Blonde teacher with sunglasses outdoors with two young children"
                    className="w-full rounded-lg"
                  />
                </div>

                <div className="break-inside-avoid mb-4">
                  <img
                    src="/images/staff-photo-unified.png"
                    alt="Teacher with two young children in classroom"
                    className="w-full rounded-lg"
                  />
                </div>

                <div className="break-inside-avoid mb-4">
                  <img
                    src="/images/staff-photo-unified.png"
                    alt="Teacher with two young children in classroom"
                    className="w-full rounded-lg"
                  />
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </AnimatedSection>

      <div className="bg-[#E5F0F7]">
        <AnimatedSection animation="fadeInUp">
          <section className="pt-16 pb-16 bg-[#E5F0F7]">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <div className="space-y-8">
                <h2 className="font-ovo text-4xl lg:text-5xl font-normal text-black leading-tight">
                  THE SCC EXPERIENCE
                </h2>
                <p className="font-zen-maru-gothic text-lg text-gray-700 leading-relaxed">
                  The SCC experience offers students learning opportunities in
                  dramatic play, language arts, fine motor writing programs such
                  as Handwriting Without Tears, life and physical science
                  lessons and experiments, a learning garden, an introduction to
                  Spanish, math, art masters, gross motor/physical education
                  programs, music & movement, chapel and fruit of the
                  spirit...and so much more. Call us to schedule a tour and see
                  what makes SCC unique and very special.
                </p>
              </div>
            </div>
          </section>
        </AnimatedSection>

        <AnimatedSection animation="fadeInUp">
          <section className="pt-8 pb-16 bg-[#E5F0F7]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                {/* Chapel Column */}
                <AnimatedSection animation="slideInLeft" delay={100}>
                  <div className="text-center space-y-6">
                    <div className="aspect-[4/3] overflow-hidden rounded-lg">
                      <img
                        src="/images/placeholder.png"
                        alt="Children's hands playing with colorful building blocks and musical instruments"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="font-ovo text-2xl font-normal text-black">
                      CHAPEL
                    </h3>
                    <p className="font-zen-maru-gothic text-base text-gray-700 leading-relaxed">
                      SCC loves music! We are proud to bring music to the
                      classroom daily in all different forms. Through Music &
                      Movement, lessons in rhythm and beat, song and dance,
                      experiences with various instruments, and more, SCC
                      explores and celebrates music daily. Ms. Sharon is our
                      gifted Music Lady bringing sweet music to each classroom.
                      On site Music Presentations are an SCC favorite!
                    </p>
                  </div>
                </AnimatedSection>

                {/* Academic School Readiness Column */}
                <AnimatedSection animation="scaleIn" delay={200}>
                  <div className="text-center space-y-6">
                    <div className="aspect-[4/3] overflow-hidden rounded-lg">
                      <img
                        src="/images/placeholder.png"
                        alt="Young boy smiling while writing and drawing in classroom with other children"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="font-ovo text-2xl font-normal text-black">
                      ACADEMIC SCHOOL READINESS
                    </h3>
                    <p className="font-zen-maru-gothic text-base text-gray-700 leading-relaxed">
                      Exploring art in all shapes and sizes is a daily treat at
                      SCC. We strive to foster creative and artistic minds and
                      souls at SCC. Our SCC little ones love to explore the
                      world of art through painting, molding, collaging,
                      learning about famous artists and their works of art, and
                      creating their own masterpieces as well!
                    </p>
                  </div>
                </AnimatedSection>

                {/* Spanish Column */}
                <AnimatedSection animation="slideInRight" delay={300}>
                  <div className="text-center space-y-6">
                    <div className="aspect-[4/3] overflow-hidden rounded-lg">
                      <img
                        src="/images/placeholder.png"
                        alt="Children playing outdoors on grassy field during physical education activities"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="font-ovo text-2xl font-normal text-black">
                      SPANISH
                    </h3>
                    <p className="font-zen-maru-gothic text-base text-gray-700 leading-relaxed">
                      SCC prides itself on an engaging, well rounded and
                      stimulating curriculum. Each day is filled with new
                      physical education and gross motor learning opportunities.
                      In addition, we offer lessons in yoga, hand eye
                      coordination ball skills, relay races, basketball, dance
                      and more! Our gross motor program supports California
                      Common Core standards.
                    </p>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </section>
        </AnimatedSection>

        <AnimatedSection animation="fadeInUp">
          <section className="pt-8 pb-16 bg-[#E5F0F7]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                {/* Chapel Column */}
                <AnimatedSection animation="slideInLeft" delay={100}>
                  <div className="text-center space-y-6">
                    <div className="aspect-[4/3] overflow-hidden rounded-lg">
                      <img
                        src="/images/placeholder.png"
                        alt="Children's hands playing with colorful building blocks and musical instruments"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="uppercase font-ovo text-2xl font-normal text-black">
                      Music and Movement
                    </h3>
                    <p className="font-zen-maru-gothic text-base text-gray-700 leading-relaxed">
                      SCC loves music! We are proud to bring music to the
                      classroom daily in all different forms. Through Music &
                      Movement, lessons in rhythm and beat, song and dance,
                      experiences with various instruments, and more, SCC
                      explores and celebrates music daily. Ms. Sharon is our
                      gifted Music Lady bringing sweet music to each classroom.
                      On site Music Presentations are an SCC favorite!
                    </p>
                  </div>
                </AnimatedSection>

                {/* Academic School Readiness Column */}
                <AnimatedSection animation="scaleIn" delay={200}>
                  <div className="text-center space-y-6">
                    <div className="aspect-[4/3] overflow-hidden rounded-lg">
                      <img
                        src="/images/placeholder.png"
                        alt="Young boy smiling while writing and drawing in classroom with other children"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="uppercase font-ovo text-2xl font-normal text-black">
                      Family Style Meals & Food Experience Programs.
                    </h3>
                    <p className="font-zen-maru-gothic text-base text-gray-700 leading-relaxed">
                      Exploring art in all shapes and sizes is a daily treat at
                      SCC. We strive to foster creative and artistic minds and
                      souls at SCC. Our SCC little ones love to explore the
                      world of art through painting, molding, collaging,
                      learning about famous artists and their works of art, and
                      creating their own masterpieces as well!
                    </p>
                  </div>
                </AnimatedSection>

                {/* Spanish Column */}
                <AnimatedSection animation="slideInRight" delay={300}>
                  <div className="text-center space-y-6">
                    <div className="aspect-[4/3] overflow-hidden rounded-lg">
                      <img
                        src="/images/placeholder.png"
                        alt="Children playing outdoors on grassy field during physical education activities"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="font-ovo text-2xl font-normal text-black">
                      Art Masters
                    </h3>
                    <p className="font-zen-maru-gothic text-base text-gray-700 leading-relaxed">
                      SCC prides itself on an engaging, well rounded and
                      stimulating curriculum. Each day is filled with new
                      physical education and gross motor learning opportunities.
                      In addition, we offer lessons in yoga, hand eye
                      coordination ball skills, relay races, basketball, dance
                      and more! Our gross motor program supports California
                      Common Core standards.
                    </p>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </section>
        </AnimatedSection>
      </div>

      <AnimatedSection animation="fadeInUp">
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="space-y-8">
              <h2 className="font-ovo text-4xl lg:text-5xl font-normal text-black leading-tight">
                OUTDOOR LEARNING LABS
              </h2>
              <p className="font-zen-maru-gothic text-lg text-gray-700 leading-relaxed">
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
        </section>
      </AnimatedSection>

      <AnimatedSection animation="fadeInUp">
        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Left Side - Interactive Menu */}
              <AnimatedSection animation="slideInLeft">
                <div className="space-y-8">
                  {Object.entries(learningLabsData).map(([key, section]) => (
                    <div
                      key={key}
                      onClick={() => setActiveSection(key as LearningLabKey)}
                      className={`cursor-pointer border-l-4 pl-6 py-4 transition-all duration-300 ${
                        activeSection === key
                          ? 'border-[#7eb5d9] bg-gray-50'
                          : 'border-gray-200 hover:border-gray-300 hover:bg-gray-25'
                      }`}
                    >
                      <h3 className="font-ovo text-xl font-normal text-black mb-3">
                        {section.title}
                      </h3>
                    </div>
                  ))}
                </div>
              </AnimatedSection>

              {/* Right Side - Dynamic Image */}
              <AnimatedSection animation="slideInRight">
                <div className="relative">
                  <div className="aspect-[4/3] overflow-hidden rounded-lg shadow-lg">
                    <img
                      src={
                        learningLabsData[activeSection].image ||
                        '/placeholder.svg'
                      }
                      alt={learningLabsData[activeSection].alt}
                      className="w-full h-full object-cover transition-opacity duration-300"
                    />
                  </div>
                  <p className="font-zen-maru-gothic text-base text-gray-700 leading-relaxed mt-5">
                    {learningLabsData[activeSection].description}
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection animation="slideInLeft">
        <section className="py-16 lg:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Left Content */}
              <div className="space-y-8">
                <h2 className="font-ovo text-4xl lg:text-5xl font-normal text-black leading-tight">
                  SCHEDULE YOUR CAMPUS TOUR TODAY!
                </h2>

                <p className="font-zen-maru-gothic text-lg text-gray-700 leading-relaxed">
                  We are offering on campus tours for interested families.
                  Please call our office to schedule a tour of our campus, where
                  you will receive valuable information on our policies and
                  procedures, curriculum, events, programs, and meet our
                  teachers in each classroom.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-[#7eb5d9] rounded-full flex items-center justify-center mt-0.5">
                      <svg
                        className="w-3 h-3 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <p className="font-zen-maru-gothic text-base text-gray-700">
                      Learn about our programs and events firsthand.
                    </p>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-[#7eb5d9] rounded-full flex items-center justify-center mt-0.5">
                      <svg
                        className="w-3 h-3 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <p className="font-zen-maru-gothic text-base text-gray-700">
                      Get valuable insights into our educational approach.
                    </p>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-[#7eb5d9] rounded-full flex items-center justify-center mt-0.5">
                      <svg
                        className="w-3 h-3 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <p className="font-zen-maru-gothic text-base text-gray-700">
                      Meet our passionate teachers in each classroom.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Image */}
              <div className="relative">
                <img
                  src="/images/placeholder.png"
                  alt="Colorful outdoor playground with slides and climbing equipment surrounded by green grass and trees"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 mt-10">
              <a
                href="/schedule-a-tour"
                className="bg-[#7eb5d9] text-white px-8 py-3 rounded-md font-zen-maru-gothic font-medium hover:bg-[#6ba4c8] transition-colors"
              >
                Schedule a Tour
              </a>
              <a
                href="/contact"
                className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-md font-zen-maru-gothic font-medium hover:border-gray-400 transition-colors"
              >
                Contact Us
              </a>
            </div>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection animation="fadeInUp">
        <section className="py-16 lg:py-24 bg-slate-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="space-y-8">
              <h2 className="font-ovo text-4xl lg:text-5xl font-normal text-white leading-tight">
                FOLLOW OUR JOURNEY
              </h2>

              <AnimatedSection animation="scaleIn" delay={200}>
                <div className="flex justify-center space-x-6">
                  {/* Instagram Icon */}
                  <a
                    href="https://instagram.com/surfcitychristian"
                    target="_blank"
                    className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
                    aria-label="Follow us on Instagram"
                  >
                    <svg
                      className="w-6 h-6 text-slate-600"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.073-1.689-.073-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>

                  {/* Facebook Icon */}
                  <a
                    href="https://www.facebook.com/pages/Surf-City-Christian-Child-Development-Preschool/618434208183329?rf=110868548975772"
                    target="_blank"
                    className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
                    aria-label="Follow us on Facebook"
                  >
                    <svg
                      className="w-6 h-6 text-slate-600"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </a>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>
      </AnimatedSection>
    </div>
  );
}
