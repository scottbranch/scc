# Scroll Animation System

This project now includes a powerful scroll animation system that automatically fades sections into view as users scroll down the page.

## Components and Hooks

### `useScrollAnimation` Hook

Located at `/hooks/use-scroll-animation.ts`

A custom React hook that uses the Intersection Observer API to detect when elements come into view.

**Options:**

- `threshold` (default: 0.1) - How much of the element must be visible to trigger
- `rootMargin` (default: '0px 0px -50px 0px') - Margin around the root
- `delay` (default: 0) - Delay in milliseconds before animation starts
- `once` (default: true) - Whether animation should only happen once

### `AnimatedSection` Component

Located at `/components/animated-section.tsx`

A wrapper component that makes it easy to add scroll animations to any content.

**Props:**

- `children` - The content to animate
- `className` - Additional CSS classes
- `animation` - Animation type ('fadeIn', 'fadeInUp', 'slideInLeft', 'slideInRight', 'scaleIn')
- `delay` - Delay in milliseconds
- `threshold` - Intersection observer threshold
- `rootMargin` - Intersection observer root margin
- `once` - Whether to animate only once

## Usage Examples

### Basic Usage

```tsx
import { AnimatedSection } from '@/components/animated-section';

<AnimatedSection animation="fadeInUp">
  <section className="py-16">
    <h2>This will fade in from below</h2>
    <p>Content that animates on scroll</p>
  </section>
</AnimatedSection>;
```

### With Delay

```tsx
<AnimatedSection animation="scaleIn" delay={200}>
  <div className="card">
    <p>This will scale in after a 200ms delay</p>
  </div>
</AnimatedSection>
```

### Multiple Elements with Staggered Animation

```tsx
<div className="grid grid-cols-3 gap-8">
  {items.map((item, index) => (
    <AnimatedSection key={item.id} animation="slideInLeft" delay={index * 100}>
      <div className="card">{item.content}</div>
    </AnimatedSection>
  ))}
</div>
```

### Using the Hook Directly

```tsx
import { useScrollAnimation } from '@/hooks/use-scroll-animation';

function MyComponent() {
  const { elementRef, isVisible } = useScrollAnimation({
    threshold: 0.2,
    delay: 300,
  });

  return (
    <div
      ref={elementRef}
      className={`transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      Custom animated content
    </div>
  );
}
```

## Animation Types

1. **fadeIn** - Simple fade in effect
2. **fadeInUp** - Fade in while moving up from below
3. **slideInLeft** - Slide in from the left
4. **slideInRight** - Slide in from the right
5. **scaleIn** - Scale up from smaller size

## Performance Notes

- Uses Intersection Observer API for optimal performance
- Animations are hardware-accelerated using CSS transforms
- Elements are only observed until they animate (if `once=true`)
- Minimal JavaScript execution during scroll

## Browser Support

- Modern browsers with Intersection Observer support
- Graceful degradation - elements will be visible immediately if unsupported

## Customization

You can easily add new animation types by extending the `getAnimationClass()` function in `AnimatedSection` component or by using the hook directly with custom CSS classes.
