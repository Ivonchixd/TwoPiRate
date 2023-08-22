import "./User.css";
export default function User(props: UserProps) {
  return <div className={`${props.className} user-user`}>
      <svg width="100%" height="100%" preserveAspectRatio="none" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M 12 14 C 14.761 14 17 11.761 17 9 C 17 6.239 14.761 4 12 4 C 9.239 4 7 6.239 7 9 C 7 11.761 9.239 14 12 14 Z M 12 14 C 7.582 14 4 16.686 4 20 M 12 14 C 16.418 14 20 16.686 20 20" stroke="#A5ACBA" strokeWidth="2" strokeLinecap="round" />
      </svg>
    </div>;
}
User.defaultProps = {
  className: ""
};
interface UserProps {
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