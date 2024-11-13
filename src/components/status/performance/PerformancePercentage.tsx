interface PerformancePercentageProps {
  textColor?: string
  backgroundColor?: string
  percentage?: string
  fontSize?: string
}
function PerformancePercentage({ textColor = '#fff', backgroundColor = '#31D158', percentage = '+ 8,8%', fontSize = '18px' }: PerformancePercentageProps) {
  return <div style={{ backgroundColor: backgroundColor, color: textColor, padding: '5px 12px 5px 12px', borderRadius: '34px', fontSize }}>{percentage}</div>
}

export default PerformancePercentage
