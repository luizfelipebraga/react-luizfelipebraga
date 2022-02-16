import { Wave, ShapeFill } from './styles';

export function WaveTop() {
  return (
    <Wave>
      <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120"
        preserveAspectRatio="none">

        <ShapeFill
          d="M1200,0H0V120H281.94C572.9,116.24,602.45,3.86,602.45,3.86h0S632,116.24,923,120h277Z">
        </ShapeFill>

        <defs>
          <linearGradient id="GradTop" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{ stopColor: "#3f3d56", stopOpacity: 1 }} />
            <stop offset="70%" style={{ stopColor: "#282848", stopOpacity: 1 }} />
          </linearGradient>
        </defs>
      </svg>
    </Wave>
  )
}
