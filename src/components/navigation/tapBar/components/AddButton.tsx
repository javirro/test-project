'use client' // Esta línea indica que este es un componente de cliente.

import './addButton.css'

interface SquareButtonProps {
  onPress: () => void
  size?: number
}

const AddButton: React.FC<SquareButtonProps> = ({ onPress, size = 50 }) => {
  const handleClick = () => {
    onPress()
  }

  return (
    <div style={{ position: 'relative', width: size + 15, height: size }}>
      <div className="under-square-button" />
      <button className="square-button" onClick={handleClick}>
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
          <path d="M22.1666 15.1667H15.1666V22.1667H12.8333V15.1667H5.83325V12.8333H12.8333V5.83333H15.1666V12.8333H22.1666V15.1667Z" fill="#997312" />
        </svg>
      </button>
    </div>
  )
}

export default AddButton
