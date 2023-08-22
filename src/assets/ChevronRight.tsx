import "./ChevronRight.css";
export default function ChevronRight(props: ChevronRightProps) {
  return <div className={`${props.className} chevron-right-chevron-right`}>
      <svg width="100%" height="100%" preserveAspectRatio="none" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M 8.334 5 L 12.744 9.411 C 13.07 9.736 13.07 10.264 12.744 10.589 L 8.334 15" stroke="#2E3545" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </div>;
}
ChevronRight.defaultProps = {
  className: ""
};
interface ChevronRightProps {
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