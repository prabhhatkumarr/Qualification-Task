import React, { Component } from "react";
import './App2.css'
import moment from 'moment';
import Map from './Map.js'
// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
// import './Map.css'

// function Map() {
//     return (
//         <MapContainer center={[51.505, -0.09]} zoom={13}>
//             <TileLayer
//                 attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//                 url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//             />
//             <Marker position={[51.505, -0.09]}>
//                 <Popup>
//                     A pretty CSS3 popup. <br /> Easily customizable.
//                 </Popup>
//             </Marker>
//         </MapContainer>
//     )
// }


// let date = users.dob.date;

// let finalDate = moment('date').format('DD MMM YYYY')

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            loading: false
        }
    }

    componentDidMount() {
        fetch("https://randomuser.me/api/")
            .then((response) => response.json())
            .then((response) => {
                this.setState({
                    users: response.results,
                    loading: true
                })
            })

    }


    render() {
        var { users, loading } = this.state
        if (!loading) {
            return (
                <div>Loading</div>
            )
        }
        else {
            return (

                // <div>Data</div>

                <div className="cont">

                    {users.map(user => (
                        <div>
                            <Map />


                            <div id="top">

                                <div id="img">
                                    <img src={user.picture.medium} alt="" />
                                </div>
                                <div id="name">
                                    {user.name.first} {user.name.last}
                                    <br></br>
                                    <br></br>
                                    <div id="text">
                                        Update your photo and personal details
                                    </div>
                                </div>

                            </div>
                            <div id="use2">
                                <div id="username"> Username </div>
                                <div id="user1">
                                    <span id="use1">untitleddui.com/</span>
                                    <span><input type="text" name="fname" /></span>
                                </div>
                                <button className="btn">Save</button>
                            </div>
                            {/* {moment('user.dob.date').format('MMMM Do YYYY')} */}
                            {/* {
                                var date = user.dob.date
                            var finalDate = moment('date').format('DD MMM YYYY')
                            <div>{finalDate}</div>
                        } */}

                            <div id="a">
                                <div id="gender">
                                    Gender
                                </div>
                                <div id="gen2">
                                    {user.gender}
                                </div>
                                <button id="btn">Edit</button>
                            </div>
                            <div id="c">
                                <div id="date">
                                    Date of Birth
                                </div>
                                <div id="date2">  {moment(user?.dob.date).format("DD MMM YYYY")} </div>
                            </div>
                            <div id="b">
                                <div id="numb">
                                    Phone Number
                                </div>
                                <div id="numb2">{user.phone}</div>
                                <button id="btn1">Edit</button>
                            </div>
                            <div id="address">
                                <div id="addtext"> Address</div>
                                <div id="input"><input type="text" placeholder="Add a short bio.." /></div>
                                <button id="btn2">Save</button>
                            </div>
                            <div id="job">
                                <div id="jobtext"> Job Title</div>
                                <div id="job1">
                                    <div id="input2"><input type="text" /></div>
                                    <div id="check"><input type="checkbox" />Show my job title in my profile</div>
                                </div>
                            </div>

                            <div id="email">
                                <div id="email1">
                                    <div id="emailtext">Alternative contact email</div>
                                    <div>Enter an alternative email</div>
                                </div>

                                <div id="email2">
                                    <div id="input3"><i class="fa fa-envelope" aria-hidden="true"></i> <input type="text" placeholder="example@gmail.com" /></div>

                                </div>
                            </div>

                            {/* <MapContainer center={[user?.coordinates.latitude, user?.coordinates.longitude]} zoom={13}>
                                <TileLayer
                                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                />
                                <Marker position={[user?.coordinates.latitude, user?.coordinates.longitude]}>
                                    <Popup>
                                        A pretty CSS3 popup. <br /> Easily customizable.
                                    </Popup>
                                </Marker>
                            </MapContainer> */}

                        </div>
                    )
                    )}

                </div >
            )
        }
    }
}

export default App;