'use client';

import { useEffect, useState, useRef } from 'react';

export function useLiquidGlass() {
  const elementRef = useRef<HTMLDivElement | null>(null);
  const [maps, setMaps] = useState<{
    filterId: string;
    displacementUrl: string;
    specularUrl: string;
    width: number;
    height: number;
  } | null>(null);

  useEffect(() => {
    const el = elementRef.current;
    if (!el) return;

    // Generate a unique ID for this filter once on mount
    const filterId = 'lg-distort-' + Math.random().toString(36).substring(2, 9);

    const update = () => {
      const width = el.clientWidth;
      const height = el.clientHeight;
      if (width === 0 || height === 0) return;

      const style = window.getComputedStyle(el);
      const borderRadius = parseFloat(style.borderRadius) || 14;

      // Bezel width is normally 24px, but scaled down for very small widgets
      const bezelWidth = Math.min(24, Math.min(width, height) / 4);

      const canvasD = document.createElement('canvas');
      canvasD.width = width;
      canvasD.height = height;
      const ctxD = canvasD.getContext('2d')!;

      const canvasS = document.createElement('canvas');
      canvasS.width = width;
      canvasS.height = height;
      const ctxS = canvasS.getContext('2d')!;

      const imgD = ctxD.createImageData(width, height);
      const imgS = ctxS.createImageData(width, height);

      const dataD = imgD.data;
      const dataS = imgS.data;

      const r = borderRadius;
      const B = bezelWidth;
      const lx = -0.707;
      const ly = -0.707;

      for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
          const idx = (y * width + x) * 4;

          // 1. Compute Unified Signed Distance Field (SDF) of rounded rectangle
          const px = x - width / 2;
          const py = y - height / 2;
          
          const qx = Math.abs(px) - (width / 2 - r);
          const qy = Math.abs(py) - (height / 2 - r);
          
          const mx = Math.max(qx, 0);
          const my = Math.max(qy, 0);
          const extDist = Math.sqrt(mx * mx + my * my);
          const intDist = Math.min(Math.max(qx, qy), 0);
          
          const sdf = extDist + intDist - r;

          if (sdf > 0) {
            // Outside the rounded rectangle boundary: no displacement, transparent specular
            dataD[idx] = 128;
            dataD[idx + 1] = 128;
            dataD[idx + 2] = 0;
            dataD[idx + 3] = 0;

            dataS[idx] = 0;
            dataS[idx + 1] = 0;
            dataS[idx + 2] = 0;
            dataS[idx + 3] = 0;
          } else {
            // Inside the shape boundary
            const d = -sdf; // distance to border
            const u = Math.min(d / B, 1.0); // normalized distance on bezel [0, 1]

            // 2. Analytical gradient of SDF (normal vector pointing outwards)
            let gx = 0;
            let gy = 0;
            if (qx > 0 && qy > 0) {
              const extDist2 = Math.sqrt(qx * qx + qy * qy);
              if (extDist2 > 0) {
                gx = (px >= 0 ? 1 : -1) * (qx / extDist2);
                gy = (py >= 0 ? 1 : -1) * (qy / extDist2);
              }
            } else if (qx > qy) {
              gx = px >= 0 ? 1 : -1;
              gy = 0;
            } else {
              gx = 0;
              gy = py >= 0 ? 1 : -1;
            }

            // 3. Displacement map calculation
            // Bends light inwards (opposite of gradient) and peaks in center of bezel
            const displacementMag = Math.sin(u * Math.PI);
            const dx = -gx * displacementMag;
            const dy = -gy * displacementMag;

            dataD[idx] = Math.round(128 + 127 * dx);
            dataD[idx + 1] = Math.round(128 + 127 * dy);
            dataD[idx + 2] = 0;
            dataD[idx + 3] = 255;

            // 4. Specular highlight calculation (simulating light coming from top-left)
            const dp = -(gx * lx + gy * ly);
            const directionalHighlight = Math.max(0, dp);
            
            // Faded highlight towards flat center of glass
            const specularVal = (0.2 + 0.8 * directionalHighlight) * (1 - u);

            dataS[idx] = 255;
            dataS[idx + 1] = 255;
            dataS[idx + 2] = 255;
            dataS[idx + 3] = Math.round(255 * specularVal);
          }
        }
      }

      ctxD.putImageData(imgD, 0, 0);
      ctxS.putImageData(imgS, 0, 0);

      setMaps({
        filterId,
        displacementUrl: canvasD.toDataURL(),
        specularUrl: canvasS.toDataURL(),
        width,
        height,
      });
    };

    update();

    const observer = new ResizeObserver(() => {
      update();
    });
    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return { elementRef, maps };
}
