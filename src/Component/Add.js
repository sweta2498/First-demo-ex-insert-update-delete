import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Add()
{
    const [number,setNumber]=useState("")
    const [name,setName]=useState("")
    const [dept,setDept]=useState("")
    const [salary,setSalary]=useState("")
    const [address,setAddress]=useState("")

    const navigate = useNavigate();

    function savebtn()
    {
        console.log(number,name,dept,salary,address);
        let data={number,name,dept,salary,address};

        console.log("1",number.trim(),"2");
        return false
        if(number.trim() != '' || name != '' || dept  != '' || salary  != '' || address != '')
        {
            fetch("http://localhost:4000/data123", {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(data)
            }).then((result) => {
                console.log(result);
                alert("Data Save Successfully..!!!")
                navigate('/')

            })


        }
        else
        {
            alert("Enter All Data..!!!")
        }
    }

    return(
        <div className="App">
            <div className="header-logo">
            <img className="logo-page" src="https://img.lovepik.com/element/40050/5196.png_1200.png"></img>
            
            </div>
<br/><br/>
            <input type="text" className="input-text" placeholder="Enter Employee Number"
            value={number} name="number" onChange={(e) => { setNumber(e.target.value)}} />
            <br/><br/>
            <input type="text" className="input-text" placeholder="Enter Employee Name"
            value={name} name="name" onChange={(e) => { setName(e.target.value)}} />
            <br/><br/>
            <input type="text" className="input-text" placeholder="Enter Employee Department"
            value={dept} name="dept" onChange={(e) => { setDept(e.target.value)}} />
            <br/><br/>
            <input type="text" className="input-text" placeholder="Enter Employee Salary"
            value={salary} name="salary" onChange={(e) => { setSalary(e.target.value)}} />
            <br/><br/>
            <input type="text" className="input-text" placeholder="Enter Employee Address"
            value={address} name="address" onChange={(e) => { setAddress(e.target.value)}} />
            <br/><br/>
            <button className="save-btn" onClick={savebtn}>Save Detail</button>
            {/* <button className="cancel-btn">Cancel</button> */}

        </div>
    )

}
export default Add;