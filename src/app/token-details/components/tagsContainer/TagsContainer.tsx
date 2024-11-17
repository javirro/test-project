import Tag from './components/Tag'
import style from './tagsContainer.module.css'

function TagsContainer() {
  return (
    <section className={style.main}>
      <p>Tags</p>
      <div style={{ display: 'flex', gap: '8px' }}>
        <Tag name="Altcoin" />
        <Tag name="Memecoin" />
      </div>
    </section>
  )
}

export default TagsContainer
