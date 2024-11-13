import { IconProps } from '@/types'

const ArrowLeftButtonIcon: React.FC<IconProps> = ({ width = '100%', height = '100%', color = '#fff', ...props }) => {
  return (
    <svg width={width} height={height} viewBox="8 8 12 18" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path id="Vector" d="M17.5 8L10 15.5L17.5 23" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default ArrowLeftButtonIcon
