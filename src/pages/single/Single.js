import "./single.scss";
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import Chart from '../../components/chart/Chart';
import ListTable from "../../components/table/Table";

const Single = () => {
    return <div className="single">
        <Sidebar />
        <div className='listContainer'>
        <Navbar />
        <div className="top">
            <div className="left">
            <div className="editButton">Edit</div>
                <h1 className="title">User Information</h1>
                <div className="item">
                    <img className="itemImg" src="/images/promise.jpg" alt="image" />
                    <div className="details">
                        <h1 className="itemTitle">Promise Osunkwo</h1>
                    <div className="itemDetail">
                        <span className="itemKey">Email:</span>
                        <span className="itemValue">promiseosunkwo@gmail.com</span>
                    </div>

                    <div className="itemDetail">
                        <span className="itemKey">Phone:</span>
                        <span className="itemValue">+234803356871</span>
                    </div>

                    <div className="itemDetail">
                        <span className="itemKey">Address:</span>
                        <span className="itemValue">Edenwu Street, New Haven</span>
                    </div>

                    <div className="itemDetail">
                        <span className="itemKey">Country:</span>
                        <span className="itemValue">Nigeria</span>
                    </div>
                    
                    </div>
                </div>
            </div>
            <div className="right">
                <Chart aspect={3 / 1} title="User Spending (Last 6 months)"/>
            </div>
        </div>
        <div className="bottom">
        <h1 className="title">Last Transactions</h1>
        <ListTable />
        </div>
        </div>
    </div>;
}

export default Single;