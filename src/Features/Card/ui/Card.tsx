import './Card.scss';
import '../../../App/ui/App.scss';
import { DownOutlined, UpOutlined } from '@ant-design/icons';
import ResultWindow from '../../../Widgets/ResultWindow/ui/ResultWindow';
import CommandCard from '../../../Entities/CommandCard/ui/CommandCard';
import { useDispatch } from 'react-redux';
import { handleChangeActive } from '../../../App/providers/StoreProvider/config/CardList/CardList';
import type { CardProps } from '../CardTypes';



export default function Card({ status, score, active, teams, index }: CardProps) {
  const dispatch = useDispatch();

  const toggleActive = () => {
    dispatch(handleChangeActive({ cardIndex: index }));
  };

  return (
    <div className="content">
      <div className="content__container">
        <div className="content__container-leftCommand">
          <img src="src/Shared/crown.png" alt="Crown" />
          {teams.length > 0 && (
            <span>{teams[0].name}</span> 
          )}
        </div>
        
        <div className="content__container-score">
          {score}
          <ResultWindow status={status} />
        </div>
        
        <div className="content__container-rightCommand">
          {teams.length > 1 && (
            <>
              <span>{teams[1].name}</span> 
              <img src="src/Shared/crown.png" alt="Crown" />
            </>
          )}
          {status !== 'MatchPreparing' ? !active
            ? <DownOutlined onClick={toggleActive} /> 
            : <UpOutlined onClick={toggleActive}/>: <img src='src\Shared\Refresh.svg'/>
          }
        </div>
      </div>
      
      {active && (
        <div className='content__card'>
          {teams.map((team, id) => (
            <CommandCard 
              key={id} 
              team={team}
            />
          ))}
        </div>
      )}
    </div>
  );
}