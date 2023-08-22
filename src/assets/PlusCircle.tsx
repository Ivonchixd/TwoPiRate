import "./PlusCircle.css";
export default function PlusCircle(props: PlusCircleProps) {
  return <div className={`${props.className} plus-circle-plus-circle`}>
      <svg width="100%" height="100%" preserveAspectRatio="none" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_594_44092)">
          <path d="M 12 9.5 H 6 M 9 12.5 V 6.5 M 0.75 9.5 C 0.75 14.056 4.444 17.75 9 17.75 C 13.556 17.75 17.25 14.056 17.25 9.5 C 17.25 4.944 13.556 1.25 9 1.25 C 4.444 1.25 0.75 4.944 0.75 9.5 Z" stroke="white" strokeWidth="1.67" strokeLinecap="round" />
        </g>
        <defs>
          <clipPath id="clip0_594_44092">
            <rect width="18" height="18" fill="white" transform="translate(0 0.5)" />
          </clipPath>
        </defs>
      </svg>
    </div>;
}
PlusCircle.defaultProps = {
  className: ""
};
interface PlusCircleProps {
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