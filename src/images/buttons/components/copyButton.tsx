import { IconProps } from '@/types'

const CopyButtonIcon: React.FC<IconProps> = ({ width = '100%', height = '100%', color = '#fff', ...props }) => {
  return (
    <svg width={width} height={height} viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        id="Vector"
        d="M16.9003 17H7.09979C6.94065 17 6.78803 16.9368 6.6755 16.8243C6.56297 16.7117 6.49976 16.5591 6.49976 16.4V6.6C6.49976 6.44087 6.56297 6.28826 6.6755 6.17574C6.78803 6.06321 6.94065 6 7.09979 6H16.9003C17.0595 6 17.2121 6.06321 17.3246 6.17574C17.4371 6.28826 17.5004 6.44087 17.5004 6.6V16.4C17.5004 16.5591 17.4371 16.7117 17.3246 16.8243C17.2121 16.9368 17.0595 17 16.9003 17Z"
        stroke={color}
        strokeOpacity="0.8"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        id="Vector_2"
        d="M12.4999 6V1.6C12.4999 1.44087 12.4366 1.28826 12.3241 1.17574C12.2116 1.06321 12.059 1 11.8998 1H2.0993C1.94016 1 1.78754 1.06321 1.67501 1.17574C1.56249 1.28826 1.49927 1.44087 1.49927 1.6V11.4C1.49927 11.5591 1.56249 11.7117 1.67501 11.8243C1.78754 11.9368 1.94016 12 2.0993 12H6.49954"
        stroke={color}
        strokeOpacity="0.8"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default CopyButtonIcon
