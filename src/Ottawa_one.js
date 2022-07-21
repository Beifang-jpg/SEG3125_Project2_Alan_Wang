import { Link } from 'react-router-dom';
import { useState } from "react";

const Ottawa_one = () => {
    return ( 
        <div className="Ottawa_one">
            <Link to={`/Contect`}>
            
            <h3>Email:3125Studio_Ottawa_one_En@gmail.com</h3>
            <h3>邮箱:3125Studio_Ottawa_one_CH@gmail.com</h3>

            <h3>Call Us in English: 604-555-756</h3>
            <h3>中文客服: 604-545-889</h3>
            </Link>
        </div>
     );
}
 
export default Ottawa_one;