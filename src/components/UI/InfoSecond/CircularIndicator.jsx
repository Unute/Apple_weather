// src/components/CircularIndicator.jsx
import React from "react";

function clamp(n, min, max) { return Math.min(Math.max(n, min), max); }
function polarToCartesian(cx, cy, r, angleDeg) {
  const a = (angleDeg - 90) * (Math.PI / 180);
  return { x: cx + r * Math.cos(a), y: cy + r * Math.sin(a) };
}
function describeArc(cx, cy, r, startAngle, endAngle) {
  const start = polarToCartesian(cx, cy, r, endAngle);
  const end = polarToCartesian(cx, cy, r, startAngle);
  const large = endAngle - startAngle <= 180 ? 0 : 1;
  return `M ${start.x} ${start.y} A ${r} ${r} 0 ${large} 0 ${end.x} ${end.y}`;
}

export default function CircularIndicator({
  value,
  min = 950,
  max = 1050,
  size = 120,
  strokeWidth = 10,
  trackColor = "rgba(0,0,0,0.12)",
  startAngle = -120,
  endAngle = 120,
  unit = "гПа",
}) {
  const v = clamp(Number(value ?? 0), min, max);
  const t = (v - min) / (max - min);
  const angleNow = startAngle + t * (endAngle - startAngle);

  const cx = size / 2;
  const cy = size / 2;
  const r = (size - strokeWidth) / 2;

  const trackPath = describeArc(cx, cy, r, startAngle, endAngle);
  const knob = polarToCartesian(cx, cy, r, angleNow);

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      style={{ display: "block" }}
      aria-label={`Давление ${value} ${unit}`}
    >
      {/* Светлый трек */}
      <path d={trackPath} fill="none" stroke={trackColor} strokeWidth={strokeWidth} strokeLinecap="round" />

      {/* Капсула-маркер */}
      <g
        transform={`translate(${knob.x} ${knob.y}) rotate(${angleNow + 90})`}
      >
        <rect x={-9} y={-3} width={18} height={6} rx={3} fill="#fff" />
        <rect x={-9} y={-3} width={18} height={6} rx={3} fill="#fff" opacity="0.6" />
      </g>

      {/* Число */}
      <text
        x={cx}
        y={cy - size * 0.02}
        textAnchor="middle"
        dominantBaseline="middle"
        fontSize={size * 0.24}
      >
        {v}
      </text>

      {/* Единица измерения */}
      <text
        x={cx}
        y={cy + size * 0.14}
        textAnchor="middle"
        fontSize={size * 0.12}
      >
        {unit}
      </text>
    </svg>
  );
}
