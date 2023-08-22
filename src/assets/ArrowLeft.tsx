import "./ArrowLeft.css";
export default function ArrowLeft(props: ArrowLeftProps) {
  return <div className={`${props.className} arrow-left-arrow-left`}>
      <svg width="100%" height="100%" preserveAspectRatio="none" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M 12.667 8 H 4 M 7.333 4 L 3.805 7.529 C 3.544 7.789 3.544 8.211 3.805 8.471 L 7.333 12" stroke="#A5ACBA" strokeWidth="1.67" strokeLinecap="round" />
      </svg>
    </div>;
}
ArrowLeft.defaultProps = {
  className: ""
};
interface ArrowLeftProps {
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