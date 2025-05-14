import { useDispatch } from 'react-redux'
import '../../../App/ui/App.scss'
import './Button.scss'
import { FetchData } from '../../../App/providers/StoreProvider/index'
import type { AppDispatch } from '../../../App/providers/StoreProvider/index'
export default function Button() {
  const dispatch = useDispatch<AppDispatch>()
  const handleAddNewCard = () => dispatch(FetchData());

  return (
    <button className="button" onClick={handleAddNewCard}>
        Обновить <img src="src\Shared\assets\svg\Refresh.svg" alt="" />
    </button>
  )
}
