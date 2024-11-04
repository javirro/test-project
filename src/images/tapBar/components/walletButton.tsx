import { IconProps } from '@/types'

const WalletButtonIcon: React.FC<IconProps> = ({ width = '35', height = '35', color = '#fff', ...props }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 34 34" // Cambié a un viewBox fijo de 32x32
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props} // Aplica props directamente al SVG
    >
      <path
        d="M28.4167 29H5.08333C4.19928 29 3.35143 28.6488 2.72631 28.0237C2.10119 27.3986 1.75 26.5508 1.75 25.6667V10.6667C1.75 9.78265 2.10119 8.93481 2.72631 8.30968C3.35143 7.68456 4.19928 7.33337 5.08333 7.33337H28.4167C29.3007 7.33337 30.1486 7.68456 30.7737 8.30968C31.3988 8.93481 31.75 9.78265 31.75 10.6667V25.6667C31.75 26.5508 31.3988 27.3986 30.7737 28.0237C30.1486 28.6488 29.3007 29 28.4167 29Z"
        stroke={color}
        strokeWidth="2.5"
      />
      <path
        d="M24.25 19C24.029 19 23.817 18.9122 23.6608 18.756C23.5045 18.5997 23.4167 18.3877 23.4167 18.1667C23.4167 17.9457 23.5045 17.7337 23.6608 17.5775C23.817 17.4212 24.029 17.3334 24.25 17.3334C24.471 17.3334 24.683 17.4212 24.8393 17.5775C24.9956 17.7337 25.0834 17.9457 25.0834 18.1667C25.0834 18.3877 24.9956 18.5997 24.8393 18.756C24.683 18.9122 24.471 19 24.25 19Z"
        fill={color}
        stroke="#707579"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M26.75 7.33335V5.00501C26.7499 4.49418 26.6323 3.99022 26.4064 3.53204C26.1806 3.07386 25.8524 2.67373 25.4473 2.36253C25.0422 2.05134 24.571 1.83741 24.0701 1.73728C23.5692 1.63714 23.0519 1.65347 22.5583 1.78501L4.225 6.67335C3.51509 6.86253 2.88757 7.28095 2.43998 7.86356C1.9924 8.44617 1.74984 9.16033 1.75 9.89501V10.6667"
        stroke={color}
        strokeWidth="2.5"
      />
    </svg>
  )
}

export default WalletButtonIcon
