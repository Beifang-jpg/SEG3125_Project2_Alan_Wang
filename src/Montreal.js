import { Link } from 'react-router-dom';
import { useState } from "react";

const Montreal = () => {
    return ( 
        <div className="Montreal">
            <Link to={`/Contect`}>
            <h1>Montreal Studios / 蒙特利尔的门店</h1>
            <h2>Click this back to contect/点击返回上一步</h2>


            <h3>Email:3125Studio_Montreal_En@gmail.com</h3>
            <h3>邮箱:3125Studio_Montreal_CH@gmail.com</h3>

            <h3>Call Us in English: 777-564-123</h3>
            <h3>中文客服: 777-566-999</h3>

            <h2>Studio1 / 一号工作室</h2>

            </Link>
        </div>
     );
}
 
export default Montreal;