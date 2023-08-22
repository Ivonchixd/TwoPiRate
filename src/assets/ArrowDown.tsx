import "./ArrowDown.css";
export default function ArrowDown(props: ArrowDownProps) {
  return <div className={`${props.className} arrow-down-arrow-down`}>
      <svg width="100%" height="100%" preserveAspectRatio="none" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M 7 3.417 L 7 11 M 10.5 8.083 L 7.412 11.171 C 7.185 11.399 6.815 11.399 6.588 11.171 L 3.5 8.083" stroke="#5F6D7E" strokeWidth="1.33" strokeLinecap="round" />
      </svg>
    </div>;
}
ArrowDown.defaultProps = {
  className: ""
};
interface ArrowDownProps {
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