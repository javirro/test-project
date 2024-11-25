import { IconProps } from '@/types'

const DollarButtonIcon: React.FC<IconProps> = ({ width = '100%', height = '100%', color = '#fff', ...props }) => {
  return (
    <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        id="Vector"
        d="M16.4039 7.154C15.4549 6.205 13.7849 5.546 12.2499 5.504M12.2499 5.504C10.4239 5.455 8.78895 6.282 8.78895 8.538C8.78895 12.692 16.4039 10.615 16.4039 14.769C16.4039 17.139 14.3769 18.157 12.2499 18.08M12.2499 5.504V3M8.09595 16.154C8.98895 17.344 10.6479 18.022 12.2499 18.08M12.2499 18.08V21"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default DollarButtonIcon
