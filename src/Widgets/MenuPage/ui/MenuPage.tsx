import { useSelector } from "react-redux";
import Card from "../../../Features/Card/ui/Card";
import './MenuPage.scss'
import type { RootState } from "../../../App/providers/StoreProvider/config/store";
import { Status } from "../../../App/providers/StoreProvider/config/Status/StatusTypes";

export default function MenuPage() {
  const cards = useSelector((state: RootState) => state.cards.cards);
  const status = useSelector((state: RootState)=>state.status.status);
  const filteredCards = cards.filter((card)=>{
    return status === Status.AllStatus || card.status === status
  })
  return (
    <div className="menuPage">
      {filteredCards.map((card, id) => (
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