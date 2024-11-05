import { IconProps } from '@/types'

const AddButtonIcon: React.FC<IconProps> = ({ width = '18', height = '18', color = '#fff', ...props }) => {
  return (
    <div {...props}>
      <svg
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M22.1666 15.1667H15.1666V22.1667H12.8333V15.1667H5.83331V12.8334H12.8333V5.83337H15.1666V12.8334H22.1666V15.1667Z" fill={color} />
      </svg>
    </div>
  )
}

export default AddButtonIcon
