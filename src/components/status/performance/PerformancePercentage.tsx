interface PerformancePercentageProps {
  textColor?: string
  backgroundColor?: string
  percentage?: string
}
function PerformancePercentage({ textColor = '#fff', backgroundColor = '#31D158', percentage = '+ 8,8%' }: PerformancePercentageProps) {
  return <div style={{ backgroundColor: backgroundColor, color: textColor, padding: '6px 16px 8px 16px', borderRadius: '34px' }}>{percentage}</div>
}

export default PerformancePercentage
