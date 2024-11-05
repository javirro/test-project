import { IconProps } from '@/types'

const PauseButtonIcon: React.FC<IconProps> = ({ width = '100%', height = '100%', color = '#707579', ...props }) => {
  return (
    <div {...props} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%' }}>
      <svg width={width} height={height} viewBox="11 11 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M17 11C17.2652 11 17.5196 11.1054 17.7071 11.2929C17.8946 11.4804 18 11.7348 18 12V28C18 28.2652 17.8946 28.5196 17.7071 28.7071C17.5196 28.8946 17.2652 29 17 29H15C14.7348 29 14.4804 28.8946 14.2929 28.7071C14.1054 28.5196 14 28.2652 14 28V12C14 11.7348 14.1054 11.4804 14.2929 11.2929C14.4804 11.1054 14.7348 11 15 11H17ZM25 11C25.2652 11 25.5196 11.1054 25.7071 11.2929C25.8946 11.4804 26 11.7348 26 12V28C26 28.2652 25.8946 28.5196 25.7071 28.7071C25.5196 28.8946 25.2652 29 25 29H23C22.7348 29 22.4804 28.8946 22.2929 28.7071C22.1054 28.5196 22 28.2652 22 28V12C22 11.7348 22.1054 11.4804 22.2929 11.2929C22.4804 11.1054 22.7348 11 23 11H25Z"
          fill={color}
        />
      </svg>
    </div>
  )
}

export default PauseButtonIcon
