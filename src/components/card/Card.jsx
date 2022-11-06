import React from 'react'
import './card.scss'
import users from '../../data/users.json'
import { color } from '@mui/system';


const data = users.data.users;
const totalPayment = (data.reduce((a, v) => a + v.payment, 0)).toLocaleString()

const Card = () => {
    return (
        <div>
            <div class="card">
                <img src="" alt="" />
                <div class="ctn">
                    <p>ยอดชำระทั้งหมด <span id="span-0">{totalPayment}</span> บาท</p>
                </div>
            </div>
        </div>
    )
}

export default Card