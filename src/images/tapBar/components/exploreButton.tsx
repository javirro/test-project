import React from 'react'
import { IconProps } from '@/types'

const ExploreButtonIcon: React.FC<IconProps> = ({ width = '35', height = '35', color = '#fff', ...props }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 41 41"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props} // Aplica los props directamente al SVG
    >
      <path
        id="Vector"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.66669 20.5C5.66669 16.6322 7.20314 12.9229 9.93805 10.188C12.673 7.45308 16.3823 5.91663 20.25 5.91663C24.1178 5.91663 27.8271 7.45308 30.562 10.188C33.2969 12.9229 34.8334 16.6322 34.8334 20.5C34.8334 24.3677 33.2969 28.077 30.562 30.8119C27.8271 33.5468 24.1178 35.0833 20.25 35.0833C16.3823 35.0833 12.673 33.5468 9.93805 30.8119C7.20314 28.077 5.66669 24.3677 5.66669 20.5ZM18.3334 16.015C16.7775 17.2946 15.7378 19.0945 15.4067 21.0816L14.3117 27.6633C14.06 29.1816 15.8267 30.2016 17.015 29.2233L22.1667 24.985C23.7226 23.7053 24.7623 21.9054 25.0934 19.9183L26.1867 13.3366C26.44 11.8183 24.6734 10.7983 23.485 11.7766L18.3334 16.015Z"
        fill={color}
      />
      <path
        id="Vector_2"
        d="M17.75 20.5C17.75 19.837 18.0134 19.2011 18.4822 18.7322C18.9511 18.2634 19.587 18 20.25 18C20.913 18 21.5489 18.2634 22.0178 18.7322C22.4866 19.2011 22.75 19.837 22.75 20.5C22.75 21.163 22.4866 21.7989 22.0178 22.2678C21.5489 22.7366 20.913 23 20.25 23C19.587 23 18.9511 22.7366 18.4822 22.2678C18.0134 21.7989 17.75 21.163 17.75 20.5Z"
        fill={color}
      />
    </svg>
  )
}

export default ExploreButtonIcon
