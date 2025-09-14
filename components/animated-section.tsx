import React from 'react';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  animation?:
    | 'fadeIn'
    | 'fadeInUp'
    | 'slideInLeft'
    | 'slideInRight'
    | 'scaleIn';
  delay?: number;
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
}

export const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  className = '',
  animation = 'fadeInUp',
  delay = 0,
  threshold = 0.1,
  rootMargin = '0px 0px -50px 0px',
  once = true,
}) => {
  const { elementRef, isVisible } = useScrollAnimation({
    threshold,
    rootMargin,
    delay,
    once,
  });

  const getAnimationClass = () => {
    const baseTransition = 'transition-all duration-1000 ease-out';
    const delayClass = delay > 0 ? `delay-${delay}` : '';

    switch (animation) {
      case 'fadeIn':
        return `${baseTransition} ${delayClass} ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`;
      case 'fadeInUp':
        return `${baseTransition} ${delayClass} ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`;
      case 'slideInLeft':
        return `${baseTransition} ${delayClass} ${
          isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
        }`;
      case 'slideInRight':
        return `${baseTransition} ${delayClass} ${
          isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
        }`;
      case 'scaleIn':
        return `${baseTransition} ${delayClass} ${
          isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`;
      default:
        return `${baseTransition} ${delayClass} ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`;
    }
  };

  return (
    <div
      ref={elementRef as React.RefObject<HTMLDivElement>}
      className={`${getAnimationClass()} ${className}`}
    >
      {children}
    </div>
  );
};
