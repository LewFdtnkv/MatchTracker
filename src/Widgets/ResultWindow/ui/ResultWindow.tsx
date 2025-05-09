import type{ResultWindowProps } from '../ResultTypes';
import '../../../App/ui/App.scss'
import './ResultWindow.scss'

export default function ResultWindow({status}: ResultWindowProps) {
  return (
    <div className="result" style={{
        backgroundColor: status === 'Live' ? 'var(--green-color) ': status === 'Finished' ? 'var(--red-color)' : 'var(--orange-color)',
        width: status === 'MatchPreparing' ? '112px' : '92px'
    }}>
      {status}
    </div>
  )
}
