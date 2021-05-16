import React from 'react';
import Item from './Item';
import { listBirthday, age } from '../miscellaneous';


const BirthdayPeople = () => {
    return <ul>
        <h2>{listBirthday.length > 1 ? `${listBirthday.length} birthdays today` : `${listBirthday.length} birthday today`} </h2><br />
        {listBirthday.map((person, index) => (<Item key={index} data={person} age={age} />))}

    </ul>
}

export default BirthdayPeople;
