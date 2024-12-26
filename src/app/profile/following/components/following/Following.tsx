import style from './following.module.css'

const mockData = [
  {
    image: '/project_image.png',
    username: '@mercyCh',
    followers: '13',
  },
  {
    image: '/project_image.png',
    username: '@mercyCh',
    followers: '13',
  },
  {
    image: '/project_image.png',
    username: '@mercyCh',
    followers: '13',
  },
  {
    image: '/project_image.png',
    username: '@mercyCh',
    followers: '13',
  },
  {
    image: '/project_image.png',
    username: '@mercyCh',
    followers: '13',
  },
]

function Following() {
  return (
    <section className={style.main}>
      <div className={style.sortSection}>
        <p className={style.sortText}>Sort by</p>
        <button className={style.buttonSort}>
          <img src="/sortButton.svg" alt="sort-button" />
        </button>
      </div>
      <div className={style.followingSection}>
        {mockData.map((user) => (
          <div className={style.followingUser} key={user.username}>
            <img className={style.followingImage} src={user.image} alt="user-profile img" />
            <div className={style.followingInfo}>
              <p className={style.followingUsername}>{user.username}</p>
              <p className={style.followingAmount}>{user.followers} followers</p>
            </div>
            <button className={style.unfollowButton}>Unfollow</button>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Following
