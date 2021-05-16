import { contacts } from './contacts';

/**
 * 
 * @param dob in YYYY/MM/DD format
 * @returns true if it is the person birthday, or false if not
 */
const birthday = (dob) => {
    const date = new Date();

    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();

    const today = `${month + 1}/${day}`;
    const minusYear = 5;// to remove '2021/'

    if (dob.slice(minusYear) === today)
        return true;
    else
        return false;
};

/**
 * 
 * @param {dob} in YYYY/MM/DD format dob 
 * @returns age
 */
export function age(dob) {
    const date = new Date().getFullYear();
    const year = dob.slice(0, 4);

    return date - year;
}

//contain the list of people whose birthday is the current day
export const listBirthday = contacts.filter(person => birthday(person.dob));