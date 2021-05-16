import React from 'react'
import { age } from '../miscellaneous';

const Item = (props) => {
    const { url, name, dob } = props.data;
    return (
        <li>
            <img className="image" src={url} alt="profile" />
            <div className="li__text">
                <h3>{name}</h3>
                <p>{age(dob)}</p>
            </div>
        </li>
    )
}

export default Item;
