import React from 'react';
import "./widget.scss";
import ArrowUpwardOutlinedIcon from '@mui/icons-material/ArrowUpwardOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import CurrencyExchangeOutlinedIcon from '@mui/icons-material/CurrencyExchangeOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import LocalAtmOutlinedIcon from '@mui/icons-material/LocalAtmOutlined';

const Widget = ({type}) => {

     let data;

     //for design temporary
     const amount = 150
     const percentage = 20

     if (type === "USERS") {
        data = {
            title : "USERS",
            isMoney : false,
            link : "see all users",
            icon : <AccountCircleOutlinedIcon className='icon' style={{color:"crimson", backgroundColor:"rgba(255, 0, 0, 0.267)"}} />,
         };
     }else if (type === "EARNINGS") {
        data = {
            title : "EARNINGS",
           isMoney : true,
           link : "see all earnings",
           icon : <CurrencyExchangeOutlinedIcon className='icon' style={{color:"rgb(150, 83, 213)", backgroundColor:"rgba(150, 83, 213, 0.267)"}} />,
        };
    }
        else if (type === "ORDERS") {
            data = {
                title : "ORDERS",
               isMoney : false,
               link : "see all orders",
               icon : <ShoppingCartOutlinedIcon className='icon' style={{color:"goldenrod", backgroundColor:"rgba(218, 165, 32, 0.267)"}} />,
            };
         
     } 
     else if (type === "BALANCE") {
        data = {
            title : "BALANCE",
           isMoney : true ,
           link : "see all balance",
           icon : <LocalAtmOutlinedIcon className='icon' style={{color:"green", backgroundColor:"rgba(0, 128, 0, 0.267)"}} />,
        };
     
 }
     
     else {
        return false;
     }
    return <div className="widget">
            <div className='left'>
                <span className='title'>{data.title}</span>
                <span className='counter'>{data.isMoney && "$"} {amount}</span>
                <span className='link'>{data.link}</span>
            </div>
            <div className='right'>
                <div className='percentage positive'><ArrowUpwardOutlinedIcon />{percentage}%</div>
                {data.icon}
            </div>
            
    </div>;
}


export default Widget;