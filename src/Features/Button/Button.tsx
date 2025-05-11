import { useDispatch } from 'react-redux'
import '../../App/ui/App.scss'
import './Button.scss'
import { FetchData } from '../../App/providers/StoreProvider/config/extraReducer/FetchData'
import type { AppDispatch } from '../../App/providers/StoreProvider/config/store'
export default function Button() {
  const dispatch = useDispatch<AppDispatch>()
  const handleAddNewCard = () => dispatch(FetchData());

  return (
    <button className="button" onClick={handleAddNewCard}>
        Обновить <img src="./src\Shared\Refresh.svg" alt="" />
    </button>
  )
}
