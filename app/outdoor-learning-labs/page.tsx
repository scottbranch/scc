'use client';

import { AnimatedSection } from '@/components/animated-section';
import { GlobalNavigation } from '@/components/global-navigation';
import { useState } from 'react';

export default function StarFishProgramPage() {
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
    </div>
  );
}
