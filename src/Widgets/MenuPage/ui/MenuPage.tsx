import { useSelector } from "react-redux";
import Card from "../../../Features/Card/index";
import './MenuPage.scss'
import type { RootState } from "../../../App/providers/StoreProvider/index";
import { StatusEnum } from "../../../Features/model/index";

export default function MenuPage() {
  const cards = useSelector((state: RootState) => state.cards.cards);
  const status = useSelector((state: RootState)=>state.status.status);
  const filteredCards = cards.filter((card)=>{
    return status === StatusEnum.AllStatus || card.status.toString() === status.toString();
  })
  return (
    <div className="menuPage">
      {filteredCards.map((card, id: number) => (
         <Card 
          key={id}
          index={id}
          status={card.status}
          score={card.score}
          active={card.active}
          teams={card.teams}
        />
      ))}
    </div>
  )
}