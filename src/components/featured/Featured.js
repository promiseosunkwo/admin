import "./featured.scss";
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import {CircularProgressbar} from "react-circular-progressbar"; //react version issues but i used npm install <package-name> --legacy-peer-deps
import 'react-circular-progressbar/dist/styles.css'; 
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import KeyboardControlKeyOutlinedIcon from '@mui/icons-material/KeyboardControlKeyOutlined';

const Featured = () => {
    const percentage = 45;
    return <div className="featured">
        <div className="top">
            <h1 className="title">Total Revenue</h1>
            <MoreVertOutlinedIcon fontSize="small" />
        </div>
        <div className="bottom">
            <div className="featuredChart">
                <CircularProgressbar value={percentage} text={`${percentage}%`} />
            </div>
                <p className="title">Total Sales made today</p>
                <p className="amount">$420</p>
                <p className="description">Previous Transcations prosessing, last transcations not included.</p> 
                <div className="summary">
                    <div className="item">
                        <div className="itemTitle">Yesterday</div>
                            <div className="itemResult negative">
                                {/* <KeyboardControlKeyOutlinedIcon /> */}
                                <KeyboardArrowDownOutlinedIcon />
                                <div className="itemAmount">$4.5k</div>
                            </div>  
                         </div> 

                         <div className="item">
                        <div className="itemTitle">Last Week</div>
                            <div className="itemResult positive">
                                <KeyboardControlKeyOutlinedIcon />
                                {/* <KeyboardArrowDownOutlinedIcon /> */}
                                <div className="itemAmount">$9.9k</div>
                            </div>  
                         </div> 

                        <div className="item">
                        <div className="itemTitle">Last Month</div>
                            <div className="itemResult positive">
                                <KeyboardControlKeyOutlinedIcon />
                                {/* <KeyboardArrowDownOutlinedIcon /> */}
                                <div className="itemAmount">$12.3k</div>
                            </div>  
                         </div> 
                         
                    </div> 
                </div>
            </div>
}


export default Featured;