import "./ArrowRight.css";
export default function ArrowRight(props: ArrowRightProps) {
  return <div className={`${props.className} arrow-right-arrow-right`}>
      <svg width="100%" height="100%" preserveAspectRatio="none" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M 3.334 8 H 12 M 8.667 4 L 12.195 7.529 C 12.456 7.789 12.456 8.211 12.195 8.471 L 8.667 12" stroke="#A5ACBA" strokeWidth="1.67" strokeLinecap="round" />
      </svg>
    </div>;
}
ArrowRight.defaultProps = {
  className: ""
};
interface ArrowRightProps {
  className: string;
}

/**
 * This component was generated from Figma with FireJet.
 * Learn more at https://www.firejet.io
 *
 * README:
 * The output code may look slightly different when copied to your codebase. To fix this:
 * 1. Include the necessary fonts. The required fonts are imported from public/index.html
 * 2. Include the global styles. They can be found in App.css
 *
 * Note: Step 2 is not required for tailwind.css output
 */