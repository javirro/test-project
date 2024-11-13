import { IconProps } from '@/types'

const ArrowDownNormalButtonIcon: React.FC<IconProps> = ({ width = '100%', height = '100%', color = '#fff', ...props }) => {
  return (
    <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M6 8L12 14L18 8" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default ArrowDownNormalButtonIcon
