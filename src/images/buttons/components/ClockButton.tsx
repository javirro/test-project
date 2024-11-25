import { IconProps } from '@/types'

const ClockButtonIcon: React.FC<IconProps> = ({ width = '100%', height = '100%', color = '#fff', ...props }) => {
  return (
    <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        id="Vector"
        d="M2.5 12C2.5 6.33914 7.08914 1.75 12.75 1.75C18.4109 1.75 23 6.33914 23 12C23 17.6609 18.4109 22.25 12.75 22.25C7.08914 22.25 2.5 17.6609 2.5 12ZM14 6C14 5.66848 13.8683 5.35054 13.6339 5.11612C13.3995 4.8817 13.0815 4.75 12.75 4.75C12.4185 4.75 12.1005 4.8817 11.8661 5.11612C11.6317 5.35054 11.5 5.66848 11.5 6V12C11.5 12.6901 12.0599 13.25 12.75 13.25H18.75C19.0815 13.25 19.3995 13.1183 19.6339 12.8839C19.8683 12.6495 20 12.3315 20 12C20 11.6685 19.8683 11.3505 19.6339 11.1161C19.3995 10.8817 19.0815 10.75 18.75 10.75H14V6Z"
        fill={color}
        stroke={color}
      />
    </svg>
  )
}

export default ClockButtonIcon
