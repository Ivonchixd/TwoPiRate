import "./Exit.css";
export default function Exit(props: ExitProps) {
  return <div className={`${props.className} exit-exit`}>
      <svg width="100%" height="100%" preserveAspectRatio="none" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M 5.165 5.25 C 5.165 5.711 5.539 6.085 6 6.085 C 6.461 6.085 6.835 5.711 6.835 5.25 H 5.165 Z M 6.835 12.75 C 6.835 12.289 6.461 11.915 6 11.915 C 5.539 11.915 5.165 12.289 5.165 12.75 H 6.835 Z M 6.819 16.337 L 7.198 15.593 L 7.198 15.593 L 6.819 16.337 Z M 6.163 15.681 L 5.419 16.06 L 5.419 16.06 L 6.163 15.681 Z M 14.836 15.681 L 15.58 16.06 L 15.58 16.06 L 14.836 15.681 Z M 14.181 16.337 L 13.802 15.593 L 13.802 15.593 L 14.181 16.337 Z M 14.181 1.663 L 13.802 2.407 L 13.802 2.407 L 14.181 1.663 Z M 14.836 2.319 L 14.092 2.698 L 14.092 2.698 L 14.836 2.319 Z M 6.163 2.319 L 5.419 1.94 V 1.94 L 6.163 2.319 Z M 6.819 1.663 L 6.44 0.92 L 6.819 1.663 Z M 2.25 8.165 C 1.789 8.165 1.415 8.539 1.415 9 C 1.415 9.461 1.789 9.835 2.25 9.835 L 2.25 8.165 Z M 10.5 9.835 C 10.961 9.835 11.335 9.461 11.335 9 C 11.335 8.539 10.961 8.165 10.5 8.165 V 9.835 Z M 4.34 7.34 C 4.666 7.014 4.666 6.486 4.34 6.16 C 4.014 5.833 3.486 5.833 3.159 6.16 L 4.34 7.34 Z M 2.348 8.151 L 1.758 7.561 H 1.758 L 2.348 8.151 Z M 2.348 9.849 L 1.758 10.439 L 1.758 10.439 L 2.348 9.849 Z M 3.159 11.84 C 3.486 12.167 4.014 12.167 4.34 11.84 C 4.666 11.514 4.666 10.986 4.34 10.66 L 3.159 11.84 Z M 1.847 8.768 L 2.641 9.026 L 2.641 9.026 L 1.847 8.768 Z M 1.847 9.232 L 2.641 8.974 L 1.847 9.232 Z M 6.835 5.25 V 3.9 H 5.165 V 5.25 H 6.835 Z M 8.4 2.335 H 12.6 V 0.665 H 8.4 V 2.335 Z M 14.165 3.9 V 14.1 H 15.835 V 3.9 H 14.165 Z M 12.6 15.665 H 8.4 V 17.335 H 12.6 V 15.665 Z M 6.835 14.1 V 12.75 H 5.165 V 14.1 H 6.835 Z M 8.4 15.665 C 7.966 15.665 7.691 15.664 7.483 15.647 C 7.284 15.631 7.221 15.604 7.198 15.593 L 6.44 17.081 C 6.738 17.232 7.045 17.287 7.347 17.312 C 7.639 17.336 7.994 17.335 8.4 17.335 V 15.665 Z M 5.165 14.1 C 5.165 14.506 5.164 14.861 5.188 15.153 C 5.213 15.455 5.268 15.762 5.419 16.06 L 6.907 15.302 C 6.896 15.279 6.869 15.216 6.853 15.017 C 6.836 14.809 6.835 14.534 6.835 14.1 H 5.165 Z M 7.198 15.593 C 7.073 15.529 6.971 15.427 6.907 15.302 L 5.419 16.06 C 5.643 16.499 6 16.857 6.44 17.081 L 7.198 15.593 Z M 14.165 14.1 C 14.165 14.534 14.164 14.809 14.147 15.017 C 14.131 15.216 14.104 15.279 14.092 15.302 L 15.58 16.06 C 15.732 15.762 15.787 15.455 15.812 15.153 C 15.836 14.861 15.835 14.506 15.835 14.1 H 14.165 Z M 12.6 17.335 C 13.006 17.335 13.361 17.336 13.653 17.312 C 13.955 17.287 14.262 17.232 14.56 17.081 L 13.802 15.593 C 13.779 15.604 13.716 15.631 13.517 15.647 C 13.309 15.664 13.034 15.665 12.6 15.665 V 17.335 Z M 14.092 15.302 C 14.029 15.427 13.927 15.529 13.802 15.593 L 14.56 17.081 C 14.999 16.857 15.357 16.499 15.58 16.06 L 14.092 15.302 Z M 12.6 2.335 C 13.034 2.335 13.309 2.336 13.517 2.353 C 13.716 2.369 13.779 2.396 13.802 2.407 L 14.56 0.92 C 14.262 0.768 13.955 0.713 13.653 0.688 C 13.361 0.664 13.006 0.665 12.6 0.665 V 2.335 Z M 15.835 3.9 C 15.835 3.494 15.836 3.139 15.812 2.847 C 15.787 2.545 15.732 2.238 15.58 1.94 L 14.092 2.698 C 14.104 2.721 14.131 2.784 14.147 2.983 C 14.164 3.191 14.165 3.466 14.165 3.9 H 15.835 Z M 13.802 2.407 C 13.927 2.471 14.029 2.573 14.092 2.698 L 15.58 1.94 C 15.357 1.501 14.999 1.143 14.56 0.92 L 13.802 2.407 Z M 6.835 3.9 C 6.835 3.466 6.836 3.191 6.853 2.983 C 6.869 2.784 6.896 2.721 6.907 2.698 L 5.419 1.94 C 5.268 2.238 5.213 2.545 5.188 2.847 C 5.164 3.139 5.165 3.494 5.165 3.9 H 6.835 Z M 8.4 0.665 C 7.994 0.665 7.639 0.664 7.347 0.688 C 7.045 0.713 6.738 0.768 6.44 0.92 L 7.198 2.407 C 7.221 2.396 7.284 2.369 7.483 2.353 C 7.691 2.336 7.966 2.335 8.4 2.335 V 0.665 Z M 6.907 2.698 C 6.971 2.573 7.073 2.471 7.198 2.407 L 6.44 0.92 C 6 1.143 5.643 1.501 5.419 1.94 L 6.907 2.698 Z M 2.25 9.835 L 10.5 9.835 V 8.165 L 2.25 8.165 L 2.25 9.835 Z M 3.159 6.16 L 1.758 7.561 L 2.939 8.742 L 4.34 7.34 L 3.159 6.16 Z M 1.758 10.439 L 3.159 11.84 L 4.34 10.66 L 2.939 9.258 L 1.758 10.439 Z M 1.758 7.561 C 1.619 7.7 1.479 7.839 1.371 7.967 C 1.256 8.102 1.129 8.278 1.053 8.51 L 2.641 9.026 C 2.622 9.087 2.596 9.104 2.644 9.047 C 2.698 8.984 2.781 8.9 2.939 8.742 L 1.758 7.561 Z M 2.939 9.258 C 2.781 9.1 2.698 9.016 2.644 8.953 C 2.596 8.896 2.622 8.913 2.641 8.974 L 1.053 9.49 C 1.129 9.722 1.256 9.898 1.371 10.033 C 1.479 10.161 1.619 10.3 1.758 10.439 L 2.939 9.258 Z M 1.053 8.51 C 0.95 8.829 0.95 9.171 1.053 9.49 L 2.641 8.974 C 2.647 8.991 2.647 9.009 2.641 9.026 L 1.053 8.51 Z" fill="#F9F9F9" />
      </svg>
    </div>;
}
Exit.defaultProps = {
  className: ""
};
interface ExitProps {
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