import './Card.scss'
import '../../App/App.scss'
import {DownOutlined, UpOutlined} from '@ant-design/icons';
import ResultWindow from '../../Widgets/ResultWindow/ResultWindow'
import { useState } from 'react';
import CommandCard from '../../Entities/CommandCard/CommandCard';
export default function Card() {
  const [active, setActive] = useState<boolean>(false)
  return (
    <div className="content">
        <div className="content__container">
        <div className="content__container-leftCommand">
            <img src="src\Shared\crown.png" alt="" />
            Command №1
        </div>
        <div className="content__container-score">
            2:1
            <ResultWindow/>
        </div>
        <div className="content__container-rightCommand">
            Command №2
            <img src="src\Shared\crown.png" alt="" />
            {!active ? <DownOutlined onClick={()=>setActive(p=>!p)}/> : <UpOutlined onClick={()=>setActive(p=>!p)}/>}
        </div>
        
        </div>
        {active && 
        (<div className='content__card'>
            <CommandCard/>
            <CommandCard/></div>
        )}
    </div>
    
  )
}
