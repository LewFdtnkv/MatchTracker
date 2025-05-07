import './CommandCard.scss';
import '../../App/App.scss';
import type{ User } from './UserTypes';
import { useState } from 'react';
import type { matchStats } from './UserTypes';
export default function CommandCard() {
  const [users] = useState<User[]>([
    {name: 'User1',
    kills: 4
    },
    {name: 'User2',
        kills: 4
    },
    {name: 'User3',
        kills: 4
    }
  ]);
  const [statistics, setStatistics] = useState<matchStats>(
    {
      points: '+50',
      place: 7,
      totalKills: users.reduce((acc, user)=> acc + user.kills, 0)
    }
  )
  return (
    <div className="game-statistics">
        <ul className="game-statistics__card">
            {users.map((user, i)=>{
              return <li className='game-statistics__card-user' key={i}><div className='game-statistics__card-user-name'><img src="src\Shared\user.png" alt="" />{user.name}</div><span className='game-statistics__card-user-kills'>Убийств:</span> <span>{user.kills}</span></li>  
            })}
        </ul>
        <ul className="game-statistics__row">
            <li className="game-statistics__row-statistic"><span className='game-statistics__row-statistic-title'>Points:</span>{statistics.points}</li>
            <li className="game-statistics__row-statistic"><span className='game-statistics__row-statistic-title'>Место:</span>{statistics.place}</li>
            <li className="game-statistics__row-statistic"><span className='game-statistics__row-statistic-title'>Всего убийств:</span>{statistics.totalKills}</li>
        </ul>
    </div>
  );
}