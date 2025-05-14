import Button from "../../../Shared/Button/ui/Button";
import RefreshWindow from "../../../Shared/RefreshWindow/ui/RefreshWindow";
import StatusWindow from "../../StatusWindow/ui/StatusWindow";
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