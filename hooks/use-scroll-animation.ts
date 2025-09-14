import { useEffect, useRef, useState } from 'react';

interface ScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  delay?: number;
  once?: boolean;
}

export const useScrollAnimation = (options: ScrollAnimationOptions = {}) => {
  const {
    threshold = 0.1,
    rootMargin = '0px 0px -50px 0px',
    delay = 0,
    once = true,
  } = options;

  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
            if (once) {
              setHasAnimated(true);
            }
          }, delay);
        } else if (!once && !hasAnimated) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [threshold, rootMargin, delay, once, hasAnimated]);

  return {
    elementRef,
    isVisible: once ? isVisible || hasAnimated : isVisible,
  };
};

// Preset animation classes
export const fadeInUp = (isVisible: boolean, delay: number = 0) => {
  return `transition-all duration-1000 ease-out ${
    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
  } ${delay ? `delay-${delay}` : ''}`;
};

export const fadeIn = (isVisible: boolean, delay: number = 0) => {
  return `transition-all duration-1000 ease-out ${
    isVisible ? 'opacity-100' : 'opacity-0'
  } ${delay ? `delay-${delay}` : ''}`;
};

export const slideInLeft = (isVisible: boolean, delay: number = 0) => {
  return `transition-all duration-1000 ease-out ${
    isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
  } ${delay ? `delay-${delay}` : ''}`;
};

export const slideInRight = (isVisible: boolean, delay: number = 0) => {
  return `transition-all duration-1000 ease-out ${
    isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
  } ${delay ? `delay-${delay}` : ''}`;
};

export const scaleIn = (isVisible: boolean, delay: number = 0) => {
  return `transition-all duration-1000 ease-out ${
    isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
  } ${delay ? `delay-${delay}` : ''}`;
};
