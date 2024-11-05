import { IconProps } from "@/types";

const StatisticsButtonIcon: React.FC<IconProps> = ({
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
          d="M11 1.00268e-07C11.5046 -0.000159579 11.9906 0.190406 12.3605 0.533497C12.7305 0.876588 12.9572 1.34684 12.995 1.85L13 2V18H7V2C6.99984 1.49542 7.19041 1.00943 7.5335 0.639452C7.87659 0.269471 8.34684 0.0428434 8.85 0.00500021L9 1.00268e-07H11ZM18 5C18.5304 5 19.0391 5.21071 19.4142 5.58579C19.7893 5.96086 20 6.46957 20 7V16C20 16.5304 19.7893 17.0391 19.4142 17.4142C19.0391 17.7893 18.5304 18 18 18H15V5H18ZM5 8V18H2C1.46957 18 0.960859 17.7893 0.585786 17.4142C0.210714 17.0391 0 16.5304 0 16V10C0 9.46957 0.210714 8.96086 0.585786 8.58579C0.960859 8.21071 1.46957 8 2 8H5Z"
          fill={color}
        />
      </svg>
    </div>
  );
};

export default StatisticsButtonIcon;
