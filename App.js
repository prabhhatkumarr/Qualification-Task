import React, { useEffect, useState } from "react"
// import './App.css'
export default function App() {

  const [userData, setUserData] = useState({});
  const [userName, setUserName] = useState('');

  function setDetails() {
    console.log(userData);
    setUserName(userData?.name?.title + "" + userData?.name?.first + "" + userData?.name?.last);
  }

  useEffect(() => {
    // async function fetchData() {
    //   let tempUserData = await fetchUser("https://randomuser.me/api/")

    async function fetchData() {
      const response = await fetch("https://randomuser.me/api/");
      // const data = await response.json()
      setUserData(response);
    }
    fetchData();
  }, []);
  useEffect(setDetails, [userData]);
  return (
    <div>
      <h1> Fetching all our Data </h1>
      <h2>{userName}</h2>
      {/* <div className='item-container'>
          {users.map((user) => (
            <div className='card'>
              {user.results[0].gender}
            </div>
          ))}
        </div> */}
    </div>
  )

}
  // getUsers().then((data) => console.log(data));






