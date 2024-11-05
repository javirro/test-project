import { IconProps } from "@/types";

const CloseButtonIcon: React.FC<IconProps> = ({
  width = "24",
  height = "24",
  color = "#fff",
  ...props
}) => {
  return (
    <div {...props}>
      <svg
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M36.8544 33.8544L32.0004 29.0004L36.8544 24.1464C36.9474 24.0522 36.9996 23.9252 36.9996 23.7929C36.9996 23.6606 36.9474 23.5335 36.8544 23.4394L34.5614 21.1464C34.4676 21.0527 34.3405 21 34.2079 21C34.0753 21 33.9482 21.0527 33.8544 21.1464L29.0004 26.0004L24.1464 21.1464C24.0526 21.0527 23.9255 21 23.7929 21C23.6603 21 23.5332 21.0527 23.4394 21.1464L21.1464 23.4394C21.0527 23.5332 21 23.6603 21 23.7929C21 23.9255 21.0527 24.0526 21.1464 24.1464L26.0004 29.0004L21.1464 33.8544C21.0527 33.9482 21 34.0753 21 34.2079C21 34.3405 21.0527 34.4676 21.1464 34.5614L23.4394 36.8544C23.5332 36.9481 23.6603 37.0008 23.7929 37.0008C23.9255 37.0008 24.0526 36.9481 24.1464 36.8544L29.0004 32.0004L33.8544 36.8544C33.9482 36.9481 34.0753 37.0008 34.2079 37.0008C34.3405 37.0008 34.4676 36.9481 34.5614 36.8544L36.8544 34.5614C36.9481 34.4676 37.0008 34.3405 37.0008 34.2079C37.0008 34.0753 36.9481 33.9482 36.8544 33.8544Z"
          fill={color}
        />
      </svg>
    </div>
  );
};

export default CloseButtonIcon;
