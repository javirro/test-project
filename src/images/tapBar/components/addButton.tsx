import { IconProps } from '@/types'

const AddButtonIcon: React.FC<IconProps> = ({ width = '25', height = '25', color = '#fff', ...props }) => {
  return (
    <div {...props}>
      <svg width={width} height={height} viewBox="0 0 23 21" fill={color} xmlns="http://www.w3.org/2000/svg">
        <path
          d="M12 4c.55 0 1 .45 1 1v6h6c.55 0 1 .45 1 1s-.45 1-1 1h-6v6c0 .55-.45 1-1 1s-1-.45-1-1v-6H5c-.55 0-1-.45-1-1s.45-1 1-1h6V5c0-.55.45-1 1-1z"
          fill={color}
        />
      </svg>
    </div>
  )
}

export default AddButtonIcon
