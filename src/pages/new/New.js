import "./new.scss";
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import UploadOutlinedIcon from '@mui/icons-material/UploadOutlined';

const New = ({inputs, title}) => {
    return <div className='new'>
    <Sidebar />
    <div className='newContainer'>
    <Navbar />

    <div className="top">
        <h1>{title}</h1>
    </div>

    <div className="bottom">
        <div className="left">
            <img src="/images/avatar.png" alt="user image" />
        </div>
        <div className="right">
            <form>

            <div className="userInput">
                    Upload: <label htmlFor="fileUpload"><UploadOutlinedIcon className="icon" /></label>
                    <input type="file" id="fileUpload" style={{display:"none"}}/>
                </div>

                {inputs.map((input)=>(
                     <div className="userInput" key={input.id}>
                     <label>{input.label}</label>
                     <input type={input.type} placeholder={input.placeholder} />
                 </div>
                ))}
                <button>Send</button>
            </form>
        </div>
    </div>
    </div>
</div>;
}


export default New;