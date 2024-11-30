import style from './selectPercentageButton.module.css'

interface selectPercentageButtonProps {
  percentage: string
}

function SelectPercentageButton({ percentage }: selectPercentageButtonProps) {
  return <button className={style.button}>{percentage}</button>
}

export default SelectPercentageButton
