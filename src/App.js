import React from 'react'

const App = () => {
  return (
    <div className="list-people">
      <BirthdayPeople />
    </div>
  )
}

const BirthdayPeople = () => {
  return <ul>
  <h2>20 birthdays today</h2><br/>
    <li><img className="image" src="https://mobirise.com/bootstrap-template/profile-template/assets/images/timothy-paul-smith-256424-1200x800.jpg" alt="person1" />
      <div className="li__text">
        <h3>name</h3>
        <p>birthdate</p>
      </div>
    </li>

  </ul>
}

export default App

