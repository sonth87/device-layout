/**
 * Caustic shimmer fragment shader.
 * Produces a subtle time-driven light caustic pattern (alpha ≈ 0.05–0.12).
 * Blended on top of the CSS glass layer with mix-blend-mode: overlay.
 */
export const shimmerFrag = /* glsl */ `
  precision mediump float;

  uniform float u_time;
  uniform vec2  u_resolution;

  void main() {
    vec2 uv = gl_FragCoord.xy / u_resolution;

    // Two overlapping sine waves for organic caustic feel
    float wave1 = sin(uv.x * 6.283 + u_time * 0.8) * 0.5 + 0.5;
    float wave2 = sin(uv.y * 4.712 - u_time * 0.5) * 0.5 + 0.5;
    float wave3 = sin((uv.x + uv.y) * 5.0 + u_time * 0.3) * 0.5 + 0.5;

    float caustic = wave1 * wave2 * wave3;

    // Edge vignette: fade out near the border so the shimmer doesn't bleed
    vec2 dist = abs(uv - 0.5) * 2.0;
    float vignette = 1.0 - smoothstep(0.7, 1.0, max(dist.x, dist.y));

    float alpha = caustic * vignette * 0.1;
    gl_FragColor = vec4(1.0, 1.0, 1.0, alpha);
  }
`;
