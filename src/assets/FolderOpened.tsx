import "./FolderOpened.css";
export default function FolderOpened(props: FolderOpenedProps) {
  return <div className={`${props.className} folder-opened-folder-opened-1`}>
      <svg width="100%" height="100%" preserveAspectRatio="none" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M 1.834 18.833 V 6 C 1.834 4.988 2.654 4.167 3.667 4.167 H 6.574 C 7.06 4.167 7.527 4.36 7.87 4.704 L 8.63 5.463 C 8.974 5.807 9.44 6 9.926 6 H 16.5 C 17.513 6 18.334 6.821 18.334 7.833 V 9.667 M 1.922 18.538 L 4.192 10.973 C 4.424 10.198 5.138 9.667 5.948 9.667 H 17.819 C 19.012 9.667 19.887 10.788 19.597 11.945 L 18.222 17.445 C 18.018 18.261 17.285 18.833 16.444 18.833 H 2.142 C 1.988 18.833 1.878 18.685 1.922 18.538 Z" stroke="#F9F9F9" strokeWidth="1.67" strokeLinecap="round" />
      </svg>
    </div>;
}
FolderOpened.defaultProps = {
  className: ""
};
interface FolderOpenedProps {
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