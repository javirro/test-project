import { IconProps } from '@/types'

const HeartButtonIcon: React.FC<IconProps> = ({ width = '20', height = '20', color = '#fff', ...props }) => {
  return (
    <svg width={width} height={height} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        id="Vector"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 3.942C13.1712 2.85682 14.7083 2.2527 16.305 2.25C18.031 2.25 19.679 2.96 20.885 4.21C22.0851 5.461 22.7536 7.12845 22.75 8.862C22.7536 10.5955 22.0851 12.263 20.885 13.514C20.089 14.339 19.294 15.184 18.495 16.032C16.871 17.756 15.23 19.499 13.525 21.14L13.522 21.144C13.0987 21.5449 12.5342 21.7625 11.9513 21.7496C11.3684 21.7367 10.8142 21.4943 10.409 21.075L3.11399 13.514C0.628994 10.937 0.628994 6.787 3.11399 4.211C4.2626 3.00741 5.83888 2.3044 7.50182 2.25406C9.16477 2.20372 10.7807 2.81009 12 3.942Z"
        fill={color}
      />
    </svg>
  )
}

export default HeartButtonIcon
