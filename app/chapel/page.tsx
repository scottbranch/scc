'use client';
import { AnimatedSection } from '@/components/animated-section';

export default function ChapelPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Chapel Header */}
      <AnimatedSection animation="fadeInUp">
        <section className="bg-gray-700 relative text-white py-20 px-4 bg-cover bg-center bg-no-repeat">
          <div className="relative max-w-4xl mx-auto text-center">
            <div className="space-y-6">
              <h1 className="font-ovo text-4xl md:text-5xl lg:text-6xl font-light">
                CHAPEL AT SCC
              </h1>

              <blockquote className="font-zen-maru-gothic text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
                "Let the word of Christ dwell in you richly, teaching and
                admonishing one another in all wisdom, singing psalms and hymns
                and spiritual songs, with thankfulness in your hearts to God."
              </blockquote>

              <cite className="font-zen-maru-gothic text-base text-gray-200 not-italic">
                Colossians 3:16
              </cite>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Photo Showcase Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection animation="fadeInUp" delay={200}>
            <div className="text-center mb-12">
              <div className="max-w-4xl mx-auto space-y-6">
                <p className="font-zen-maru-gothic text-lg text-gray-700 leading-relaxed">
                  Surf City students and teachers gather once a week to sing
                  songs of worship, listen to stories from the Bible and hear
                  God's word. We teach the nine Fruits of the Spirit and
                  challenge our students to memorize a new bible verse each
                  month!
                </p>

                <p className="font-zen-maru-gothic text-lg text-gray-700 leading-relaxed">
                  Chapel is woven throughout our day with morning opening
                  prayer, daily scripture readings and lessons, and prayer
                  before meals.
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* Masonry Grid Layout */}
          <AnimatedSection animation="scaleIn" delay={400}>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-max">
              {/* Large image - spans 2 rows */}
              <div className="row-span-2">
                <img
                  src="/children-singing-worship-songs-in-chapel.jpg"
                  alt="Children singing worship songs"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>

              {/* Regular images */}
              <div>
                <img
                  src="/students-reading-bible-stories-together.jpg"
                  alt="Students reading Bible stories"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>

              <div>
                <img
                  src="/children-praying-before-meals.jpg"
                  alt="Children praying before meals"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>

              {/* Tall image - spans 2 rows */}
              <div className="row-span-2">
                <img
                  src="/teacher-leading-chapel-worship-time.jpg"
                  alt="Teacher leading chapel worship"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>

              <div>
                <img
                  src="/students-learning-about-fruits-of-the-spirit.jpg"
                  alt="Learning about Fruits of the Spirit"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>

              {/* Large image - spans 2 rows */}
              <div className="row-span-2">
                <img
                  src="/children-memorizing-bible-verses-in-chapel.jpg"
                  alt="Children memorizing Bible verses"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>

              <div>
                <img
                  src="/morning-prayer-circle-with-students-and-teachers.jpg"
                  alt="Morning prayer circle"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
