import "./FolderOpened1.css";
export default function FolderOpened1(props: FolderOpened1Props) {
  return <div className={`${props.className} folder-opened-1-folder-opened`}>
      <svg width="100%" height="100%" preserveAspectRatio="none" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M 1.334 13.833 V 4.5 C 1.334 3.764 1.93 3.167 2.667 3.167 H 4.781 C 5.135 3.167 5.474 3.307 5.724 3.557 L 6.276 4.11 C 6.526 4.36 6.865 4.5 7.219 4.5 H 12 C 12.737 4.5 13.334 5.097 13.334 5.833 V 7.167 M 1.398 13.619 L 3.048 8.117 C 3.218 7.553 3.737 7.167 4.326 7.167 H 12.959 C 13.827 7.167 14.463 7.982 14.253 8.823 L 13.253 12.824 C 13.104 13.417 12.571 13.833 11.959 13.833 H 1.558 C 1.446 13.833 1.366 13.726 1.398 13.619 Z" stroke="#437EF7" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </div>;
}
FolderOpened1.defaultProps = {
  className: ""
};
interface FolderOpened1Props {
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