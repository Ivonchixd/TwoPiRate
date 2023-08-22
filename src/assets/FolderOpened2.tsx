import "./FolderOpened2.css";
export default function FolderOpened2(props: FolderOpened2Props) {
  return <div className={`${props.className} folder-opened-2-folder-opened`}>
      <svg width="100%" height="100%" preserveAspectRatio="none" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M 1.333 13.833 V 4.5 C 1.333 3.764 1.93 3.167 2.666 3.167 H 4.781 C 5.134 3.167 5.473 3.307 5.724 3.557 L 6.276 4.11 C 6.526 4.36 6.865 4.5 7.219 4.5 H 12 C 12.736 4.5 13.333 5.097 13.333 5.833 V 7.167 M 1.397 13.619 L 3.048 8.117 C 3.217 7.553 3.736 7.167 4.325 7.167 H 12.959 C 13.826 7.167 14.463 7.982 14.252 8.823 L 13.252 12.824 C 13.104 13.417 12.571 13.833 11.959 13.833 H 1.557 C 1.445 13.833 1.365 13.726 1.397 13.619 Z" stroke="#437EF7" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </div>;
}
FolderOpened2.defaultProps = {
  className: ""
};
interface FolderOpened2Props {
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