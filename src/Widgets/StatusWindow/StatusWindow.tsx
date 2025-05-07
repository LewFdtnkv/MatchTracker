import { useState } from "react";
import { statuses } from './Statuses';
import { CaretUpOutlined, CaretDownOutlined } from '@ant-design/icons';
import '../../App/App.scss'
import './StatusWindow.scss'
export default function StatusWindow() {
    const [status, setStatus] = useState<statuses>(statuses.Default);
    const [active, setActive] = useState<boolean>(false);

    const getStatusValues = () => {
        return Object.values(statuses).filter(
            (value) => typeof value === 'string'
        ) as statuses[];
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
                                setStatus(statusValue);
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