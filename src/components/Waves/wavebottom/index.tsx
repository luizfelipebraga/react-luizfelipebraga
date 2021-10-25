import { ShapeFill, Wave } from "./styles";


export function WaveBottom() {
  return (
    <Wave>
      <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">

        <ShapeFill
          d="M1200 0L0 0 892.25 114.72 1200 0z">
        </ShapeFill>

        <defs>
          <linearGradient id="GradBottom" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="80%" style={{stopColor:"#282848", stopOpacity:1}} />
            <stop offset="100%" style={{stopColor:"#3f3d56", stopOpacity:1}} />
          </linearGradient>
        </defs>
      </svg>
    </Wave>
  )
}
