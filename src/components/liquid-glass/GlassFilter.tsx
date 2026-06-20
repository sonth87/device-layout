'use client';

/**
 * Singleton SVG filter definitions for the liquid glass effect.
 * Rendered once at the desktop root — all glass elements reference #lg-distort.
 */
export function GlassFilter() {
  return (
    <svg
      aria-hidden
      style={{ position: 'absolute', width: 0, height: 0, overflow: 'hidden' }}
    >
      <defs>
        <filter
          id="lg-distort"
          x="-20%"
          y="-20%"
          width="140%"
          height="140%"
          colorInterpolationFilters="sRGB"
        >
          {/* Step 1: Blur SourceAlpha to get slope for the edges */}
          <feGaussianBlur in="SourceAlpha" stdDeviation="5" result="edge_blur" />
          
          {/* Step 2: Specular lighting to get shiny glass bezel highlight */}
          <feSpecularLighting
            in="edge_blur"
            surfaceScale="5"
            specularConstant="1.8"
            specularExponent="45"
            lightingColor="#ffffff"
            result="specular"
          >
            <feDistantLight azimuth={225} elevation={60} />
          </feSpecularLighting>
          
          {/* Step 3: Composite highlight to only show on the edges (exclude flat center) */}
          <feComposite in="specular" in2="SourceAlpha" operator="in" result="specular_masked" />
          
          {/* Step 4: Generate noise displacement map for refraction */}
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.015"
            numOctaves={2}
            seed={5}
            result="noise"
          />
          
          {/* Step 5: Displace backdrop (SourceGraphic) with the noise */}
          <feDisplacementMap
            in="SourceGraphic"
            in2="noise"
            scale={28}
            xChannelSelector="R"
            yChannelSelector="G"
            result="refracted"
          />
          
          {/* Step 6: Saturate the refracted backdrop to make it vibrant liquid */}
          <feColorMatrix
            in="refracted"
            type="saturate"
            values="2.2"
            result="refracted_saturated"
          />
          
          {/* Step 7: Blend specular highlight on top of refracted backdrop */}
          <feBlend
            in="specular_masked"
            in2="refracted_saturated"
            mode="screen"
          />
        </filter>
      </defs>
    </svg>
  );
}

