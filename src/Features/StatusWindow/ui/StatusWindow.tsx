import { useState } from "react";
import { CaretUpOutlined, CaretDownOutlined } from '@ant-design/icons';
import '../../../App/ui/App.scss'
import './StatusWindow.scss'
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../../../App/providers/StoreProvider/index";
import { StatusEnum } from "../../model/index";
import { handleChangeStatus }from '../../model/index'

export default function StatusWindow() {
    const status = useSelector((state: RootState)=>state.status.status);
    const dispatch = useDispatch();
    const [active, setActive] = useState<boolean>(false);

    const getStatusValues = () => {
        return Object.values(StatusEnum).filter(
            (value) => typeof value === 'string'
        ) as StatusEnum[];
    };
    
    const toggleStatus = (newStatus: StatusEnum) => {
        dispatch(handleChangeStatus(newStatus));
    };

    return (
        <div>
            <div className="status__container">
                <div className="status__container-status">{status}</div>
                {!active ? (
                    <CaretDownOutlined 
                        className="status__container-arrow" 
                        onClick={() => setActive(prev => !prev)}
                    />
                ) : (
                    <CaretUpOutlined 
                        className="status__container-arrow" 
                        onClick={() => setActive(prev => !prev)}
                    />
                )}
            </div>
            
            {active && (
                <ul className="change__status">
                    {getStatusValues().map((statusValue) => (
                        <li 
                            key={statusValue}
                            className="change__status-status"
                            onClick={() => {
                                toggleStatus(statusValue);
                                setActive(false);
                            }}
                        >
                            {statusValue}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}