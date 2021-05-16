import { contacts } from './contacts';


const birthday = (dob) => {
    const date = new Date();

    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();

    const today = `${month + 1}/${day}`;
    const minusYear = 5;// to remove '2021/'

    // console.log(dob);
    // console.log(today);

    if (dob.slice(minusYear) === today)
        return true;
    else
        return false;
};


export const listBirthday = contacts.filter(person => birthday(person.dob));