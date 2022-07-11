import "./navbar.scss";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import NightlightOutlinedIcon from '@mui/icons-material/NightlightOutlined';
import FullscreenExitOutlinedIcon from '@mui/icons-material/FullscreenExitOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';
import { useContext } from "react";
import { DarkModeContext } from "../../context/DarkModeContext";

const Navbar = () => {

    const {dispatch} = useContext(DarkModeContext);

    return <div className="navbar">
        <div className="wrapper">
            <div className="search">
                <input type="text" placeholder="search..." />
                <SearchOutlinedIcon />
            </div>
            <div className="items">
                <div className="item">
                    <LanguageOutlinedIcon className="icon"/> <span>Language</span>
                </div>
                <div className="item">
                    <NightlightOutlinedIcon className="icon" onClick={()=>dispatch({type:"TOGGLE"})} />
                </div>
                <div className="item">
                    <FullscreenExitOutlinedIcon className="icon"/>
                </div>
                <div className="item">
                    <NotificationsOutlinedIcon className="icon"/>
                    <div className="counter">1</div>
                </div>
                <div className="item">
                    <ChatBubbleOutlineOutlinedIcon className="icon"/>
                    <div className="counter">3</div>
                </div>
                <div className="item">
                    <ListOutlinedIcon className="icon"/>
                </div>
                <div className="item">
                    <img src="/images/promise.jpg" className="avatar" alt="Image" />
                </div>
            </div>
        </div>

    </div>;
}


export default Navbar;