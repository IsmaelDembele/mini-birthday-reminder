import React from 'react';
import Item from './Item';
import { listBirthday } from '../miscellaneous';


const BirthdayPeople = () => {
    return <ul>
        <h2>20 birthdays today</h2><br />
        {listBirthday.map(person => (<Item data={person} />))}

    </ul>
}

export default BirthdayPeople;
