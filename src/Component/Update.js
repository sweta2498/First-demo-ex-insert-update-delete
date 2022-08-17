import { useEffect, useState } from 'react';
import React from 'react';
import { useNavigate, useParams, withRouter } from 'react-router-dom'
const Update = () => {
    const [number, setNumber] = useState("")
    const [name, setName] = useState("")
    const [dept, setDept] = useState("")
    const [salary, setSalary] = useState("")
    const [address, setAddress] = useState("")
    const params = useParams();
    const navigate = useNavigate();



    useEffect(() => {
        getdata();
    }, [])

    const getdata = async () => {
        
        let result = await fetch(`http://localhost:4000/data123/${params.id}`);
        result = await result.json();
        setName(result.name);
        setNumber(result.number);
        setDept(result.dept);
        setSalary(result.salary);
        setAddress(result.address);
        
        
    }
    console.log("number1=",number)

    const updatebtn = async () => {
        console.warn(number,name, dept,salary,address)
        let data={number,name, dept,salary,address}
        let result = await fetch(`http://localhost:4000/data123/${params.id}`, {
            method: 'Put',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'Application/json'
            }
        });
        result = await result.json();
        if (result) {
            alert("Update Success..!!!")
            navigate('/home')

        }

    }

    return (
        <div className="App">
            <div className="header-logo">
                <img className="logo-page" src="https://img.lovepik.com/element/40050/5196.png_1200.png"></img>

            </div>
            <br /><br />
            <input type="text" className="input-text" placeholder="Enter Employee Number"
                value={number} name="number" onChange={(e) => { setNumber(e.target.value) }} />
            <br /><br />
            <input type="text" className="input-text" placeholder="Enter Employee Name"
                value={name} name="name" onChange={(e) => { setName(e.target.value) }} />
            <br /><br />
            <input type="text" className="input-text" placeholder="Enter Employee Department"
                value={dept} name="dept" onChange={(e) => { setDept(e.target.value) }} />
            <br /><br />
            <input type="text" className="input-text" placeholder="Enter Employee Salary"
                value={salary} name="salary" onChange={(e) => { setSalary(e.target.value) }} />
            <br /><br />
            <input type="text" className="input-text" placeholder="Enter Employee Address"
                value={address} name="address" onChange={(e) => { setAddress(e.target.value) }} />
            <br /><br />
            <button className="update-btn" onClick={updatebtn}>Update Detail</button>
            {/* <button className="cancel-btn">Cancel</button> */}


        </div>
    )

}
export default Update;