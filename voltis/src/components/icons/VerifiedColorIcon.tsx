interface VerifiedColorIconProps {
  className?: string;
  size?: number;
}

export default function VerifiedColorIcon({
  className,
  size = 64,
}: VerifiedColorIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      id="Layer_1"
      enableBackground="new 0 0 512 512"
      height={size}
      viewBox="0 0 512 512"
      width={size}
      className={className}
    >
      <g clipRule="evenodd" fillRule="evenodd">
        <circle cx="256" cy="256" fill="#0cb0ff" r="240" />
        <path
          d="m331.223 483.959c95.681-31.556 164.75-121.653 164.776-227.899l-96.674-96.674c-.585-.714-1.213-1.405-1.881-2.07-10.7-10.641-28.001-10.593-38.642.107l-137.647 139.02-67.88-67.88c-10.688-10.688-28.049-10.7-38.749 0s-10.7 28.049 0 38.749l87.298 87.297c43.123 43.124 86.274 86.225 129.399 129.35z"
          fill="#0092d8"
        />
        <path
          d="m114.525 228.563c10.7-10.7 28.049-10.7 38.749 0l67.88 67.88 137.647-139.02c10.641-10.7 27.942-10.748 38.642-.107s10.748 27.942.107 38.642c-52.318 52.841-104.412 106.085-156.979 158.652-10.7 10.7-28.049 10.7-38.749 0l-87.298-87.297c-10.698-10.701-10.698-28.051.001-38.75z"
          fill="#fff"
        />
      </g>
    </svg>
  );
}
