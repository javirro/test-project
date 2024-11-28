import style from './keyboard.module.css'
import BackSpaceButtonIcon from '@/images/buttons/components/backspaceButton'

function Keyboard() {
  const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9']

  return (
    <section className={style.main}>
      {numbers.map((number) => (
        <button className={style.button}>{number}</button>
      ))}
      <div style={{ width: '100%', display: 'flex', gap: '12px', justifyContent: 'end' }}>
        <button className={style.button}>0</button>
        <button className={style.button}>
          <BackSpaceButtonIcon width="36" height="36" color="#997312" />
        </button>
      </div>
    </section>
  )
}

export default Keyboard
