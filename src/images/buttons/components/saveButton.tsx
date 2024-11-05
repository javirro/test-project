import { IconProps } from '@/types'

const SaveButtonIcon: React.FC<IconProps> = ({ width = '100%', height = '100%', color = '#fff', ...props }) => {
  return (
    <svg width={width} height={height} viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        id="Vector"
        d="M0 2.98837C0 2.29218 0.276562 1.6245 0.768845 1.13222C1.26113 0.639935 1.92881 0.363373 2.625 0.363373H11.375C12.0712 0.363373 12.7389 0.639935 13.2312 1.13222C13.7234 1.6245 14 2.29218 14 2.98837V17.0129C14 18.0804 12.7925 18.7016 11.9245 18.0812L7 14.5637L2.0755 18.0812C1.20663 18.7025 0 18.0812 0 17.0137V2.98837Z"
        fill={color}
      />
    </svg>
  )
}

export default SaveButtonIcon
