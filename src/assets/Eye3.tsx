import "./Eye3.css";
export default function Eye3(props: Eye3Props) {
  return <div className={`${props.className} eye-3-eye`}>
      <svg width="100%" height="100%" preserveAspectRatio="none" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M 2.424 11.477 C 2.14 10.857 2.14 10.143 2.424 9.524 C 3.742 6.657 6.639 4.667 10 4.667 C 13.362 4.667 16.258 6.657 17.576 9.524 C 17.861 10.143 17.861 10.857 17.576 11.477 C 16.258 14.343 13.362 16.333 10 16.333 C 6.639 16.333 3.742 14.343 2.424 11.477 Z" stroke="#A5ACBA" strokeWidth="1.67" />
        <path d="M 12.5 10.5 C 12.5 11.881 11.381 13 10 13 C 8.619 13 7.5 11.881 7.5 10.5 C 7.5 9.119 8.619 8 10 8 C 11.381 8 12.5 9.119 12.5 10.5 Z" stroke="#A5ACBA" strokeWidth="1.67" />
      </svg>
    </div>;
}
Eye3.defaultProps = {
  className: ""
};
interface Eye3Props {
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