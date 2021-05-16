import { data } from './data';

const birthday = (dob) => {
    const date = new Date();

    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();

    const today = `${year}/${month + 1}/${day}`;

    console.log(dob);
    console.log(today);

    if (dob === today)
        return true;
    else
        return false;
};


export const listBirthday = data.filter(person => birthday(person.dob));;