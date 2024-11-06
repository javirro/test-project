import { IconProps } from '@/types'

const ArrowDownButtonIcon: React.FC<IconProps> = ({ width = '100%', height = '100%', color = '#fff', ...props }) => {
  return (
    <svg width={width} height={height} viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        id="Vector"
        d="M6.99996 1.75V12.25M6.99996 12.25L11.9583 7.29167M6.99996 12.25L2.04163 7.29167"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default ArrowDownButtonIcon
