import './CommandCard.scss';
import '../../../App/ui/App.scss';
import type { CommandCardProps } from '../../../Entities/CommandCard/index';


export default function CommandCard({ team }: CommandCardProps) {
  return (
    <div className="game-statistics">
        <ul className="game-statistics__card">
            {team.players.map((player, i)=>{
              return <li className='game-statistics__card-user' key={i}><div className='game-statistics__card-user-name'><img src="src\Shared\assets\png\user.png" alt="" />{player}</div><span className='game-statistics__card-user-kills'>Убийств:</span> <span>{team.kills[i]}</span></li>  
            })}
        </ul>
        <ul className="game-statistics__row">
            <li className="game-statistics__row-statistic"><span className='game-statistics__row-statistic-title'>Points:</span>{team.points}</li>
            <li className="game-statistics__row-statistic"><span className='game-statistics__row-statistic-title'>Место:</span>{team.place}</li>
            <li className="game-statistics__row-statistic"><span className='game-statistics__row-statistic-title'>Всего убийств:</span>{team.totalKills}</li>
        </ul>
    </div>
  );
}