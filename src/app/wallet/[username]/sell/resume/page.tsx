import style from './page.module.css'
import ResumeContentWrapper from './components/resumeContentWrapper/ResumeContentWrapper'

function page() {
  return (
    <main className={style.main}>
      <ResumeContentWrapper />
    </main>
  )
}

export default page
