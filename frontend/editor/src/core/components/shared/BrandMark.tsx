import "@app/components/shared/BrandMark.css";

interface BrandMarkProps {
  /** Height of the mark (CSS length). */
  height?: string;
  className?: string;
}

/**
 * Official PdfPapa brand logo mark with modern green & white styling.
 */
export function BrandMark({ height = "1.8rem", className }: BrandMarkProps) {
  return (
    <svg
      className={`pdfpapa-brandmark${className ? ` ${className}` : ""}`}
      viewBox="0 0 36 40"
      style={{ height, width: "auto", display: "inline-block" }}
      role="img"
      aria-label="PdfPapa"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient
          id="pdfpapa-brand-grad"
          x1="2"
          y1="2"
          x2="34"
          y2="38"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#22c55e" />
          <stop offset="1" stopColor="#15803d" />
        </linearGradient>
      </defs>
      <path
        d="M4 2C2.89543 2 2 2.89543 2 4V36C2 37.1046 2.89543 38 4 38H32C33.1046 38 34 37.1046 34 36V12L24 2H4Z"
        fill="url(#pdfpapa-brand-grad)"
      />
      <path d="M24 2V12H34L24 2Z" fill="#86efac" />
      <path
        d="M11 13H19C22.3137 13 25 15.6863 25 19C25 22.3137 22.3137 25 19 25H15V31H11V13ZM15 17V21H18.5C19.6046 21 20.5 20.1046 20.5 19C20.5 17.8954 19.6046 17 18.5 17H15Z"
        fill="#ffffff"
      />
    </svg>
  );
}
