import style from './tapBarChat.module.css'
import SendButtonIcon from '@/images/status/components/sendButton'

function TapBarChat() {
  return (
    <div className={style.main}>
      <div className={style.buttonsDiv}>
        <input className={style.inputText} type="text" placeholder="21 y.o. designer from San Francisco" />
        <button className={style.sendButton}>
          <SendButtonIcon width="24" height="24" color="#997312" />
        </button>
      </div>
    </div>
  )
}

export default TapBarChat
