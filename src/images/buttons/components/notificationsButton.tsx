import { IconProps } from '@/types'
import style from './notificationsButton.module.css'

const NotificationsButtonIcon: React.FC<IconProps> = ({ width = '100%', height = '100%', color = '#707579', ...props }) => {
  return (
    <div className={style.notificationButton}>
      <svg width={width} height={height} viewBox="0 0 22 30" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          id="Vector"
          d="M11.9227 0.75C9.60206 0.75 7.37646 1.67187 5.73552 3.31282C4.09458 4.95376 3.1727 7.17936 3.1727 9.5V13.91C3.17288 14.1039 3.12795 14.2952 3.04145 14.4688L0.895204 18.76C0.790362 18.9697 0.740856 19.2026 0.751389 19.4368C0.761922 19.671 0.832144 19.8985 0.955385 20.0979C1.07863 20.2973 1.25079 20.4619 1.45554 20.576C1.66028 20.6901 1.8908 20.75 2.1252 20.75H21.7202C21.9546 20.75 22.1851 20.6901 22.3899 20.576C22.5946 20.4619 22.7668 20.2973 22.89 20.0979C23.0133 19.8985 23.0835 19.671 23.094 19.4368C23.1046 19.2026 23.055 18.9697 22.9502 18.76L20.8052 14.4688C20.7183 14.2953 20.6729 14.104 20.6727 13.91V9.5C20.6727 7.17936 19.7508 4.95376 18.1099 3.31282C16.4689 1.67187 14.2433 0.75 11.9227 0.75ZM11.9227 24.5C11.1469 24.5004 10.39 24.2602 9.75648 23.8124C9.12291 23.3647 8.64381 22.7314 8.3852 22H15.4602C15.2016 2s2.7314 14.7225 23.3647 14.0889 23.8124C13.4554 24.2602 12.6985 24.5004 11.9227 24.5Z"
          fill={color}
        />
      </svg>
      <p className={style.notificationCount}>12.5k</p>
    </div>
  )
}

export default NotificationsButtonIcon
