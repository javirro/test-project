import Tag from './components/Tag'
import style from './tagsContainer.module.css'

function TagsContainer({ tags }: { tags: string[] }) {
  return (
    <section className={style.main}>
      <p>Tags</p>
      <div style={{ display: 'flex', gap: '8px' }}>
        {tags.map((tag) => (
          <Tag key={tag} name={tag} />
        ))}
      </div>
    </section>
  )
}

export default TagsContainer
