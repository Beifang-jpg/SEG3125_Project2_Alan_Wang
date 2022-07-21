import { Link } from 'react-router-dom';
import { useState } from "react";
const Toronto_two = () => {
    return ( 
        <div className="Toronto_two">
            <Link to={`/Contect`}>
            <h3>Email:3125Studio_Toronto_two_En@gmail.com</h3>
            <h3>邮箱:3125Studio_Toronto_two_CH@gmail.com</h3>

            <h3>Call Us in English: 777-456-756</h3>
            <h3>中文客服: 777-453-889</h3>
            </Link>
        </div>
     );
}
 
export default Toronto_two;