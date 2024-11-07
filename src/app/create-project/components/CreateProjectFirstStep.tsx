import { useState } from 'react'
import style from './CreateProjectFirstStep.module.css'

function CreateProjectFirstStep() {
  const [projectName, setProjectName] = useState('')

  return (
    <form style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%', gap: 16 }}>
      <section style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%', gap: 16 }}>
        <p className={style.text}>Icono del proyecto</p>
        <div style={{ display: 'flex', gap: 16, flexDirection: 'column', alignItems: 'center' }}>
          <div className={style.imageDiv}>TG</div>
          <button className={style.uploadImageButton}>Subir imagen</button>
        </div>
      </section>
    </form>
  )
}

export default CreateProjectFirstStep
