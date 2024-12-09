import { IconProps } from '@/types'

const SendButtonIcon: React.FC<IconProps> = ({ width = '100%', height = '100%', color = '#fff', ...props }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 15 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        id="Vector"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.07687 4.17142C0.991134 4.18992 0.912938 4.23378 0.852435 4.29728C0.791931 4.36079 0.751913 4.44101 0.737575 4.52755C0.723236 4.61408 0.73524 4.70293 0.772027 4.78255C0.808814 4.86218 0.868686 4.92891 0.943872 4.97408L4.74546 7.25783L8.37379 4.71742C8.42086 4.68448 8.47396 4.66113 8.53006 4.64871C8.58615 4.63629 8.64415 4.63505 8.70073 4.64504C8.7573 4.65503 8.81136 4.67607 8.85981 4.70696C8.90825 4.73784 8.95014 4.77797 8.98308 4.82504C9.01602 4.87211 9.03937 4.92521 9.05178 4.98131C9.0642 5.03741 9.06545 5.0954 9.05546 5.15198C9.04546 5.20855 9.02442 5.26261 8.99354 5.31106C8.96265 5.3595 8.92253 5.40139 8.87546 5.43433L5.24712 7.97475L6.09296 12.3282C6.1096 12.4144 6.15183 12.4936 6.21413 12.5556C6.27643 12.6175 6.35593 12.6592 6.44228 12.6753C6.52863 12.6914 6.61782 12.6812 6.69826 12.6459C6.7787 12.6106 6.84666 12.5519 6.89329 12.4775L13.2954 2.29833C13.3413 2.22545 13.3647 2.14062 13.3626 2.05448C13.3606 1.96835 13.3331 1.88475 13.2837 1.81416C13.2343 1.74357 13.1651 1.68915 13.0849 1.6577C13.0047 1.62626 12.917 1.6192 12.8328 1.63742L1.07687 4.17142Z"
        fill={color}
      />
    </svg>
  )
}

export default SendButtonIcon
