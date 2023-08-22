import "./Home5.css";
export default function Home5(props: Home5Props) {
  return <div className={`${props.className} home-5-home-5x`}>
      <svg width="100%" height="100%" preserveAspectRatio="none" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M 6 14.111 V 9.444 C 6 9.076 6.298 8.777 6.667 8.777 H 9.333 C 9.701 8.777 10 9.076 10 9.444 V 14.111 M 2.667 12.777 V 7.738 C 2.667 6.938 3.026 6.18 3.645 5.674 L 7.156 2.801 C 7.647 2.4 8.353 2.4 8.844 2.801 L 12.355 5.674 C 12.974 6.18 13.333 6.938 13.333 7.738 V 12.777 C 13.333 13.514 12.736 14.111 12 14.111 H 10.667 H 5.333 H 4 C 3.263 14.111 2.667 13.514 2.667 12.777 Z" stroke="#5F6D7E" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </div>;
}
Home5.defaultProps = {
  className: ""
};
interface Home5Props {
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