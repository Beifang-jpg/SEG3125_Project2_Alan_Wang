import { Link } from 'react-router-dom';
import { useState } from "react";

const Toronto_one = () => {
    return ( 
        <div className="Toronto_one">
            <Link to={`/Contect`}>
            <h3>Email:3125Studio_Toronto_one_En@gmail.com</h3>
            <h3>邮箱:3125Studio_Toronto_one_CH@gmail.com</h3>

            <h3>Call Us in English: 778-789-456</h3>
            <h3>中文客服: 887-321-654</h3>
            </Link>
        </div>
     );
}
 
export default Toronto_one;