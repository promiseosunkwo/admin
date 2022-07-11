import "./sidebar.scss";
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import InventoryOutlinedIcon from '@mui/icons-material/InventoryOutlined';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import MonitorHeartOutlinedIcon from '@mui/icons-material/MonitorHeartOutlined';
import DisplaySettingsOutlinedIcon from '@mui/icons-material/DisplaySettingsOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/DarkModeContext";
import { useContext } from "react";
// import { useState } from "react";

const Sidebar = () => {

    const {dispatch} = useContext(DarkModeContext);

    return <div className="sidebar">

        <div className="top">
            <Link to="/" style={{textDecoration:"none"}}>
            <span className="logo">Promise Admin</span>
            </Link>
        </div>
        <hr />
        <div className="center">
            <ul>
                <p className="title">MAIN</p>
                <li>
                    <DashboardIcon className="icon" />
                    <span>Dashboard</span>
                </li>
                <p className="title">LIST</p>

                <Link to="/users" style={{textDecoration:"none"}}>

                <li>

                    <PersonOutlineOutlinedIcon className="icon" />
                    <span>Users</span>
                </li>
                </Link>
                <Link to="/products" style={{textDecoration:"none"}}>
                <li>
                    <InventoryOutlinedIcon className="icon" />
                    <span>Products</span>
                </li>
                </Link>
                <p className="title">USEFUL</p>
                <li>
                    <CreditCardOutlinedIcon className="icon" />
                    <span>Orders</span>
                </li>
                <li>
                    <LocalShippingOutlinedIcon className="icon" />
                    <span>Delivery</span>
                </li>
                <li>
                    <BarChartOutlinedIcon className="icon" />
                    <span>Stats</span>
                </li>
                <li>
                    <NotificationsOutlinedIcon className="icon" />
                    <span>Notifications</span>
                </li>
                <p className="title">SYSTEM</p>
                <li>
                    <MonitorHeartOutlinedIcon className="icon" />
                    <span>System Health</span>
                </li>
                <li>
                    <DisplaySettingsOutlinedIcon className="icon" />
                    <span>Logs</span>
                </li>
                <li>
                    <SettingsOutlinedIcon className="icon" />
                    <span>Settings</span>
                </li>
                <p className="title">USER</p>
                <li>
                    <AccountBoxOutlinedIcon className="icon" />
                    <span>Profile</span>
                </li>
                <li>
                    <LogoutIcon className="icon" />
                    <span>Logout</span>
                </li>
            </ul>
        </div>
        <div className="bottom">
            <div className="colorOption" onClick={()=>dispatch({type:"LIGHT"})}></div>
            <div className="colorOption" onClick={()=>dispatch({type:"DARK"})}></div>
        </div>
    </div>;
}


export default Sidebar;