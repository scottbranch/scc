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
      title: 'Sensory & STEM Play Lab',
      description:
        'Our sensory and STEM stations invite children to build, stack, pour, connect, and create. With rotating hands-on materials and open-ended challenges, students design structures, explore patterns, and experiment through playful problem-solving. Children strengthen fine motor skills, coordination, and early math concepts while using their imagination. This lab encourages creativity, persistence, teamwork, and confidence in a fun, engaging environment.',
      image: '/images/learning-labs/stem.jpg',
      alt: 'Children doing STEM activities with building blocks and science experiments',
    },
    'ART LAB': {
      title: 'Adventure & Sand Exploration Lab',
      description:
        'Our large climbing structure invites children to climb, slide, jump, and challenge themselves in safe, exciting ways. This space builds strength, resilience, coordination, and confidence. In our expansive sand area, children build sandcastles, dig tunnels, create roads, design landscapes, and let their imaginations run free. With sand and water tables, they scoop, pour, construct, and collaborate as they bring their ideas to life. Endless sand play encourages creativity, storytelling, cooperation, and joyful hands-on exploration.',
      image: '/images/learning-labs/sandbox.jpg',
      alt: 'Children painting and doing art activities in colorful classroom',
    },
    'GARDENING AND SENSORY LAB': {
      title: 'Nature & Garden Exploration Lab',
      description:
        'Children connect with the beauty of the outdoors through our vibrant garden and nature spaces. They plant, water, observe, and care for growing things while learning about seasons, life cycles, insects, weather, and God’s creation. This lab nurtures curiosity, responsibility, and a love for nature in a peaceful, hands-on environment. Our Nature Lab also features rich water exploration and play experiences. At our water tables, children pour, splash, scoop, and measure as they freely explore movement, flow, and volume. They enjoy ice and water play, experiencing the fun of cold, melting, splashing, and creating. We rotate a variety of engaging mediums — including sand, soil, rocks, water, ice, leaves, and other natural materials — allowing children to explore textures, build, create, and use their imagination. These open-ended experiences encourage language development, creativity, cooperation, and joyful discovery.',
      image: '/images/learning-labs/gardening.jpg',
      alt: 'Children gardening and exploring sensory activities outdoors',
    },
    'GROSS MOTOR SKILLS STATIONS': {
      title: 'Gross Motor & Movement Lab',
      description:
        'Healthy bodies support healthy minds. In our Gross Motor Lab, children ride bikes, climb, jump, hop, balance, and move with purpose. These activities build strength, coordination, and body awareness while giving children space to develop confidence and independence. Through active play, students practice taking turns, encouraging friends, and celebrating accomplishments together.',
      image: '/images/learning-labs/motorskills.jpg',
      alt: 'Children doing physical activities and gross motor skills exercises',
    },
    'DRAMATIC PLAYHOUSE': {
      title: 'Life-Size Dramatic Play Village',
      description:
        'Imagination comes to life in our beautiful, life-size dramatic play village. With rotating themes like a Pizza Shop, Starbucks Café, Trader Joe’s Market, and more, children step into real-world roles and create their own stories. They take orders, prepare food, shop, serve customers, and collaborate with friends — naturally building communication skills, social confidence, creativity, and early literacy and math understanding through play.',
      image: '/images/new/playhouse-new.jpg',
      alt: 'Child playing with wooden drum and colorful building blocks in classroom',
    },
  };

  return (
    <div className="min-h-screen bg-white">
      <section className="relative h-[60vh] sm:h-screen flex items-center justify-center overflow-hidden">
        {/* Background Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/video/scc-hero.mp4" type="video/mp4" />
          {/* Fallback image if video doesn't load */}
          {/* <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Relume_Figma_Kit__v3.4___Community_.png-ED9Pp4zT6uGFMhgAVosweBfaF6k8Dm.jpeg"
            alt="Children learning in preschool classroom"
            className="w-full h-full object-cover"
          /> */}
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
                    href="/new-family-2025-2026-Family-Application.docx"
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
                  src="/images/scc-building.jpg"
                  alt="Surf City Christian building exterior"
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

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Guppies Program */}
              <AnimatedSection animation="scaleIn" delay={100}>
                <div className="text-center space-y-4">
                  <div className="aspect-[4/3] overflow-hidden rounded-lg">
                    <img
                      src="/images/guppies.jpg"
                      alt="Guppies program for 18 month olds"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-ovo text-xl font-normal text-black">
                    GUPPIES
                  </h3>
                  <p className="font-zen-maru-gothic text-sm text-gray-700 leading-relaxed">
                    The Guppies Program is designed for our youngest learners,
                    providing a nurturing, faith-filled environment for toddlers
                    ages 18–36 months.
                  </p>
                </div>
              </AnimatedSection>

              {/* Starfish Program */}
              <AnimatedSection animation="scaleIn" delay={200}>
                <div className="text-center space-y-4">
                  <div className="aspect-[4/3] overflow-hidden rounded-lg">
                    <img
                      src="/images/starfish.jpg"
                      alt="Starfish program for 2-3 year olds"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-ovo text-xl font-normal text-black">
                    STARFISH
                  </h3>
                  <p className="font-zen-maru-gothic text-sm text-gray-700 leading-relaxed">
                    The Starfish Program supports children ages 24 months
                    through early preschool years as they transition into a more
                    structured learning environment.
                  </p>
                </div>
              </AnimatedSection>

              {/* Sea Turtles Program */}
              <AnimatedSection animation="scaleIn" delay={300}>
                <div className="text-center space-y-4">
                  <div className="aspect-[4/3] overflow-hidden rounded-lg">
                    <img
                      src="/images/seaturtles.jpg"
                      alt="Sea Turtles program for 3-4 year olds"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-ovo text-xl font-normal text-black">
                    SEA TURTLES
                  </h3>
                  <p className="font-zen-maru-gothic text-sm text-gray-700 leading-relaxed">
                    The Sea Turtles Program provides a balanced preschool
                    experience for children ages 3–4 years old, focusing on
                    social-emotional growth, early academics, and creative
                    exploration.
                  </p>
                </div>
              </AnimatedSection>

              {/* Sea Turtles Program */}
              <AnimatedSection animation="scaleIn" delay={300}>
                <div className="text-center space-y-4">
                  <div className="aspect-[4/3] overflow-hidden rounded-lg">
                    <img
                      src="/images/seaotters.jpg"
                      alt="Sea Otters program for 3-4 year olds"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-ovo text-xl font-normal text-black">
                    SEA OTTERS
                  </h3>
                  <p className="font-zen-maru-gothic text-sm text-gray-700 leading-relaxed">
                    The Sea Otters Program provides a balanced preschool
                    experience for children ages 3–4 years old, focusing on
                    social-emotional growth, early academics, and creative
                    exploration.
                  </p>
                </div>
              </AnimatedSection>

              {/* Surfers Program */}
              <AnimatedSection animation="scaleIn" delay={400}>
                <div className="text-center space-y-4">
                  <div className="aspect-[4/3] overflow-hidden rounded-lg">
                    <img
                      src="/images/surfers.jpg"
                      alt="Surfers program for 4-5 year olds"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-ovo text-xl font-normal text-black">
                    SURFERS
                  </h3>
                  <p className="font-zen-maru-gothic text-sm text-gray-700 leading-relaxed">
                    The Surfers Program is our Transitional Kindergarten
                    classroom for children who are four years old by September
                    1.
                  </p>
                </div>
              </AnimatedSection>

              {/* Sailors Program */}
              <AnimatedSection animation="scaleIn" delay={500}>
                <div className="text-center space-y-4">
                  <div className="aspect-[4/3] overflow-hidden rounded-lg">
                    <img
                      src="/images/sailors.jpg"
                      alt="Sailors kindergarten program"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-ovo text-xl font-normal text-black">
                    SAILORS
                  </h3>
                  <p className="font-zen-maru-gothic text-sm text-gray-700 leading-relaxed">
                    The Sailors Program is a TK/Kindergarten combination class
                    designed for children who are four years old by September 1
                    and ready for advanced academic and developmental
                    challenges.
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
                  src="/images/featured2.jpg"
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
                  src="/images/featured3.jpg"
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
                "You can truly feel the care, intention, and heart that goes
                into this school every day. SCC has become a second home for our
                kids, and we feel incredibly lucky to be part of this
                community."
              </p>
              <cite className="font-zen-maru-gothic text-lg text-gray-700 not-italic">
                The Evans Family
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
                    src="/images/new/staff1.jpg"
                    alt="Teacher with two young children in classroom"
                    className="w-full rounded-lg"
                  />
                </div>
                <div className="break-inside-avoid mb-4">
                  <img
                    src="/staff/staff1.jpg"
                    alt="Teacher with two young children in classroom"
                    className="w-full rounded-lg"
                  />
                </div>

                <div className="break-inside-avoid mb-4">
                  <img
                    src="/staff/staff2.jpg"
                    alt="Teacher with two young children in classroom"
                    className="w-full rounded-lg"
                  />
                </div>

                <div className="break-inside-avoid mb-4">
                  <img
                    src="/staff/staff3.jpg"
                    alt="Blonde teacher with sunglasses outdoors with two young children"
                    className="w-full rounded-lg"
                  />
                </div>

                <div className="break-inside-avoid mb-4">
                  <img
                    src="/staff/staff5.jpg"
                    alt="Blonde teacher with sunglasses outdoors with two young children"
                    className="w-full rounded-lg"
                  />
                </div>
                <div className="break-inside-avoid mb-4">
                  <img
                    src="/images/new/staff2.jpg"
                    alt="Teacher with two young children in classroom"
                    className="w-full rounded-lg"
                  />
                </div>

                <div className="break-inside-avoid mb-4">
                  <img
                    src="/staff/staff6.jpg"
                    alt="Teacher with two young children in classroom"
                    className="w-full rounded-lg"
                  />
                </div>

                <div className="break-inside-avoid mb-4">
                  <img
                    src="/staff/staff7.jpg"
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
                  At Surf City Christian Child Development Preschool, we believe
                  early childhood is a sacred season of growth. Our program
                  intentionally blends{' '}
                  <b>
                    Christian faith, strong academics, creative exploration, and
                    a nurturing community
                  </b>{' '}
                  to support the development of the whole child—spiritually,
                  socially, emotionally, and academically.
                </p>
                <p className="font-zen-maru-gothic text-lg text-gray-700 leading-relaxed">
                  What sets SCC apart is our purposeful approach to early
                  education. Children build a strong academic foundation while
                  also growing in character, confidence, and compassion. Faith
                  is naturally woven into daily experiences through chapel,
                  prayer, scripture, and the Fruit of the Spirit, helping
                  children understand God’s love in meaningful, age-appropriate
                  ways.
                </p>
                <p className="font-zen-maru-gothic text-lg text-gray-700 leading-relaxed">
                  Our classrooms are warm, engaging environments where children
                  feel known, valued, and safe. Through hands-on learning,
                  creative expression, outdoor play, and family-style meals,
                  children develop independence, resilience, and a genuine love
                  for learning. Families choose SCC because we prepare children
                  not only for their next academic step, but for a life grounded
                  in faith, curiosity, and strong values.
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
                    {/* <div className="aspect-[4/3] overflow-hidden rounded-lg">
                      <img
                        src="/images/placeholder.png"
                        alt="Children's hands playing with colorful building blocks and musical instruments"
                        className="w-full h-full object-cover"
                      />
                    </div> */}
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
                    {/* <div className="aspect-[4/3] overflow-hidden rounded-lg">
                      <img
                        src="/images/placeholder.png"
                        alt="Young boy smiling while writing and drawing in classroom with other children"
                        className="w-full h-full object-cover"
                      />
                    </div> */}
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
                    {/* <div className="aspect-[4/3] overflow-hidden rounded-lg">
                      <img
                        src="/images/placeholder.png"
                        alt="Children playing outdoors on grassy field during physical education activities"
                        className="w-full h-full object-cover"
                      />
                    </div> */}
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
                    {/* <div className="aspect-[4/3] overflow-hidden rounded-lg">
                        <img
                          src="/images/placeholder.png"
                          alt="Children's hands playing with colorful building blocks and musical instruments"
                          className="w-full h-full object-cover"
                        />
                      </div> */}
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
                    {/* <div className="aspect-[4/3] overflow-hidden rounded-lg">
                      <img
                        src="/images/placeholder.png"
                        alt="Young boy smiling while writing and drawing in classroom with other children"
                        className="w-full h-full object-cover"
                      />
                    </div> */}
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
                    {/* <div className="aspect-[4/3] overflow-hidden rounded-lg">
                      <img
                        src="/images/placeholder.png"
                        alt="Children playing outdoors on grassy field during physical education activities"
                        className="w-full h-full object-cover"
                      />
                    </div> */}
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
                At Surf City Christian Preschool, our outdoor environment is
                more than a playground — it is an extension of our classroom.
                Our Outdoor Learning Labs are thoughtfully designed stations
                where children rotate in small groups to explore, create,
                imagine, move, and connect with the world around them.
                <br />
                <br />
                Each space invites joyful discovery, meaningful play, and
                hands-on learning in a beautiful, engaging setting.
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

      <AnimatedSection animation="slideInRight">
        <section className="py-16 lg:py-24">
          <div className="grid max-w-7xl mx-auto lg:grid-cols-2 gap-12 lg:gap-16 items-start px-5">
            {/* Left Image */}
            <div className="relative">
              <img
                src="/images/headshots/tami-don.jpg"
                alt="Message from the owners"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>

            {/* Right Content */}
            <div className="space-y-8">
              <p className="font-zen-maru-gothic text-lg text-gray-700 leading-relaxed">
                <b>From the Owners – Tami & Don Hopkins</b>
                <br />
                Welcome to Surf City Christian Preschool. We are Tami and Don
                Hopkins, and for the past 20 years it has been our honor and
                calling to serve families in our community through early
                childhood education. As parents of four children ourselves,
                family has always been at the center of everything we do. Our
                faith guides our mission, and we believe in putting Christ first
                in our school, our relationships, and the way we care for every
                child and family who walks through our doors. We strive to treat
                every family we meet like part of our own. Before entering the
                preschool world, Tami spent many years as an elementary school
                teacher and brings 28 years of experience in the education
                field. Tami serves as our Director of SCC and Don proudly serves
                as a Long Beach firefighter and also oversees the financial side
                of Surf City Christian as our CFO. Together, we share a passion
                for building a place where children are loved, families are
                supported, and excellence in education and care is the standard.
              </p>

              <p className="font-zen-maru-gothic text-lg text-gray-700 leading-relaxed">
                Over the past two decades, God has created something truly
                special here at Surf City Christian. What began as a preschool
                has grown into a beautiful community of families, teachers, and
                friendships that we are incredibly grateful to be part of. Our
                staff is not just a team—they are family. Many of the
                relationships we cherish most in life were formed right here
                within the SCC community. We believe what sets Surf City
                Christian apart is the heart behind everything we do. We are
                committed to providing exceptional customer service for our
                families and delivering elite early education and care that
                nurtures the whole child—academically, socially, and
                spiritually. Our own youngest sons were raised here at the
                preschool, and watching children grow, learn, and thrive has
                been one of the greatest blessings of our lives. Surf City
                Christian truly is a magical place, and it is our hope that when
                you join our community, you will feel that same warmth, joy, and
                sense of belonging. We are deeply thankful for the last 20 years
                and excited to see where God leads us in the future. With
                gratitude,
                <br />
                <b>Tami & Don Hopkins</b>
              </p>
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
                  src="/kids-writing.jpg"
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
