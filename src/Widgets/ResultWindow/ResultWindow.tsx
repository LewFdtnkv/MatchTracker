import { useState } from "react"
import { results } from './ResultTypes';
import '../../App/App.scss'
import './ResultWindow.scss'
export default function ResultWindow() {
  const [result] = useState<results>(results.Live)
  return (
    <div className="result" style={{
        backgroundColor: result === results.Live ? 'var(--green-color) ': result === results.Finished ? 'var(--red-color)' : 'var(--orange-color)',
        width: result === results.MatchPreparing ? '112px' : '92px'
    }}>
      {result}
    </div>
  )
}
