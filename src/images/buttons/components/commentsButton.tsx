import { IconProps } from '@/types'

const CommentsButtonIcon: React.FC<IconProps> = ({ width = '100%', height = '100%', color = '#fff', ...props }) => {
  return (
    <svg width={width} height={height} viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        id="Vector"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.25 3.5C0.25 2.77065 0.539731 2.07118 1.05546 1.55546C1.57118 1.03973 2.27065 0.75 3 0.75H17C17.7293 0.75 18.4288 1.03973 18.9445 1.55546C19.4603 2.07118 19.75 2.77065 19.75 3.5V13.5C19.75 14.2293 19.4603 14.9288 18.9445 15.4445C18.4288 15.9603 17.7293 16.25 17 16.25H5.961C5.581 16.25 5.222 16.423 4.985 16.72L2.655 19.633C1.857 20.629 0.25 20.066 0.25 18.79V3.5Z"
        fill={color}
      />
    </svg>
  )
}

export default CommentsButtonIcon
