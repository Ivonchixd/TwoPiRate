import "./Line6.css";
export default function Line6(props: Line6Props) {
  return <div className={`${props.className} line-6-line-6x`}>
      <svg width="100%" height="100%" preserveAspectRatio="none" viewBox="0 0 280 2" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M 0 1 H 280" stroke="#2E3545" />
      </svg>
    </div>;
}
Line6.defaultProps = {
  className: ""
};
interface Line6Props {
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