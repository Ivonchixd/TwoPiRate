import "./Rotate361.css";
export default function Rotate361(props: Rotate361Props) {
  return <div className={`${props.className} rotate-361-rotate-360x`}>
      <svg width="100%" height="100%" preserveAspectRatio="none" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M 18 10.5 C 18 6.358 14.642 3 10.5 3 C 8.579 3 6.827 3.722 5.5 4.91 M 4.667 3 V 5.5 C 4.667 5.96 5.04 6.333 5.5 6.333 H 8 M 3 10.5 C 3 14.642 6.358 18 10.5 18 C 12.421 18 14.173 17.278 15.5 16.09 M 16.333 18 V 15.5 C 16.333 15.04 15.96 14.667 15.5 14.667 H 13" stroke="#F9F9F9" strokeWidth="1.67" strokeLinecap="round" />
      </svg>
    </div>;
}
Rotate361.defaultProps = {
  className: ""
};
interface Rotate361Props {
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