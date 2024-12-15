import useUser from '@/hooks/useUser'
import style from './tapBarChat.module.css'
import SendButtonIcon from '@/images/status/components/sendButton'
import { useState } from 'react'
import { addComment } from '@/dataFetching/projects/manageLikeAndComments'
import { usePathname } from 'next/navigation'
import { revalidateComments } from '@/dataFetching/revalidatePath/revaliteCreateUser'

function TapBarChat() {
  const pathname = usePathname()
  const tokenAddress = pathname.split('/')[2]
  const [comment, setComment] = useState<string>('')
  const { user, token } = useUser()
  const handleComment = (e: React.ChangeEvent<HTMLInputElement>) => {
    setComment(e.target.value)
  }

  const addCommentHandler = async () => {
    try {
      await addComment(tokenAddress, user?.username as string, comment, token as string, user?.telegramId as number)
      revalidateComments(tokenAddress)
      setComment('')
    } catch (error) {
      console.error('Error managing like project: ', error)
    }
  }
  return (
    <div className={style.main}>
      <div className={style.buttonsDiv}>
        <input className={style.inputText} type="text" placeholder="21 y.o. designer from San Francisco" onChange={handleComment} />
        <button className={style.sendButton} onClick={addCommentHandler}>
          <SendButtonIcon width="24" height="24" color="#997312" />
        </button>
      </div>
    </div>
  )
}

export default TapBarChat
