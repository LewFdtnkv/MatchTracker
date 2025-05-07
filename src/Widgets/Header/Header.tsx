import Button from "../../Features/Button/Button";
import RefreshWindow from "../RefreshWindow/RefreshWindow";
import StatusWindow from "../StatusWindow/StatusWindow";
import './Header.scss';

export default function Header() {
    return (
        <header className="header">
            <div className="header-leftPart">
                <img 
                    src="src/Shared/MatchTracker.png" 
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