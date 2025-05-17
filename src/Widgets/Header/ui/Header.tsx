import Button from "../../../Shared/Button/index";
import RefreshWindow from "../../../Shared/RefreshWindow/index";
import StatusWindow from "../../../Features/StatusWindow/index";
import './Header.scss';

export default function Header() {
    return (
        <header className="header">
            <div className="header-leftPart">
                <img 
                    src="src\Shared\assets\png\MatchTracker.png" 
                    alt="MatchTracker Logo" 
                    className="header-leftPart-img"
                />
                <div className="header-leftPart-status">
                    <StatusWindow />
                </div>
            </div>

            <div className="header-rightPart">
                <RefreshWindow />
                <Button />
            </div>
        </header>
    );
}