import React from "react";

interface CottageColorIconProps {
  size?: number;
  className?: string;
}

export const CottageColorIcon: React.FC<CottageColorIconProps> = ({
  size = 24,
  className = "",
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      id="Flat"
      height={size}
      viewBox="0 0 64 64"
      width={size}
      className={className}
    >
      <path
        d="m52.639 22.032a6 6 0 1 0 -7.4 3.7 8 8 0 1 0 7.4-3.7z"
        fill="#8cff96"
      />
      <path
        d="m60 30a8 8 0 0 0 -7.361-7.968 5.938 5.938 0 0 0 -.52-5.151 5.993 5.993 0 0 0 -8.255 8.213 5.909 5.909 0 0 0 1.375.642 8 8 0 1 0 14.761 4.264z"
        fill="#78ef82"
      />
      <path d="m11 18h6v17h-6z" fill="#a6665a" />
      <path d="m13 20h4v15h-4z" fill="#96554b" />
      <path d="m32 10-23 35.321v12.679h46v-12.679z" fill="#ffecb4" />
      <path
        d="m55 48.988v-3.667l-23-35.321-23 35.321v3.666l23-35.322z"
        fill="#fadb94"
      />
      <path d="m2 58h60v4h-60z" fill="#8cff96" />
      <path d="m5 60h57v2h-57z" fill="#78ef82" />
      <circle cx="32" cy="28" fill="#ffdc64" r="4" />
      <path
        d="m32 33a5 5 0 1 1 5-5 5.006 5.006 0 0 1 -5 5zm0-8a3 3 0 1 0 3 3 3 3 0 0 0 -3-3z"
        fill="#f5faff"
      />
      <path d="m16 44h5v8h-5z" fill="#f5faff" />
      <path d="m22 53h-7v-10h7zm-5-2h3v-6h-3z" fill="#fadb94" />
      <path d="m26 44h6v13h-6z" fill="#f5faff" />
      <path d="m32 44h6v13h-6z" fill="#f5faff" />
      <path
        d="m39 43h-14v15h14zm-12 2h4v11h-4zm10 11h-4v-11h4z"
        fill="#fadb94"
      />
      <path d="m43 44h5v8h-5z" fill="#f5faff" />
      <path d="m49 53h-7v-10h7zm-5-2h3v-6h-3z" fill="#fadb94" />
      <path
        d="m32 2-27.955 42.931a2.183 2.183 0 0 0 .638 3.02 2.183 2.183 0 0 0 3.02-.638l24.297-37.313 24.3 37.313a2.183 2.183 0 0 0 3.02.638 2.183 2.183 0 0 0 .638-3.02z"
        fill="#b67769"
      />
      <path
        d="m33.326 4.036-27.281 41.895a2.177 2.177 0 0 0 -.009 2.359 2.17 2.17 0 0 0 1.664-.977l24.3-37.313 24.3 37.313a2.183 2.183 0 0 0 3.658-2.382z"
        fill="#a6665a"
      />
      <path
        d="m16.07 54.163a2.993 2.993 0 1 0 -4.942-2.982 3.919 3.919 0 0 0 -4.991 2.833c-.046-.002-.09-.014-.137-.014a4 4 0 0 0 -4 4h17a3.989 3.989 0 0 0 -2.93-3.837z"
        fill="#8cff96"
      />
      <path
        d="m4.141 58h14.859a3.989 3.989 0 0 0 -2.93-3.837 2.968 2.968 0 0 0 .172-4.139c-.082-.006-.159-.024-.242-.024a2.99 2.99 0 0 0 -2.872 2.181 3.919 3.919 0 0 0 -4.991 2.833c-.046-.002-.09-.014-.137-.014a3.991 3.991 0 0 0 -3.859 3z"
        fill="#78ef82"
      />
    </svg>
  );
};

export default CottageColorIcon;
