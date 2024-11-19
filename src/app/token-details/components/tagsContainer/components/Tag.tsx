import style from './tag.module.css'

interface TagProps {
  name: string
}

function Tag({ name }: TagProps) {
  return (
    <div className={style.main}>
      <p className={style.text}>{name}</p>
    </div>
  )
}

export default Tag
