import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

function Home() {
    const [data, setData] = useState([])
    
    
    useEffect(() => {
        getList()
    }, [])
    console.log(data)

    function getList()
    {
        fetch("http://localhost:4000/data123").
        then((result) => {
            result.json().then((resp) => {
                setData(resp);
            })
        })
    }


    function DeleteBtn(id)
    {
        fetch(`http://localhost:4000/data123/${id}`,{
            method:'DELETE'
        }).then((result)=>{
            result.json().then((resp)=>{
                console.log(resp);
                getList();
                alert("Delete SuccessFullyyyyyy..!!!")
            })
          })

    }

    return (
        <>
        <div className="App">
            <table className="table">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">No.</th>
                        <th scope="col">Employee Number</th>
                        <th scope="col">Employee Name</th>
                        <th scope="col">Department</th>
                        <th scope="col">Salary</th>
                        <th scope="col">Address</th>
                        <th>Operation</th>
                        <th>Operation</th>
                    </tr>
                </thead>
                <tbody>
                        {
                            data.map((item, i) =>
                                <tr key={i}>
                                    
                                    <td>{item.id}</td>
                                    <td>{item.number}</td>
                                    <td>{item.name}</td>
                                    <td>{item.dept}</td>
                                    <td>{item.salary}</td>
                                    <td>{item.address}</td>

                                    <td><Link to={"/update/"+item.id}><img title="Edit Detail" className="icon-img"
                                    src="https://www.clker.com/cliparts/E/X/T/d/g/H/red-edit-icon-glossy-hi.png">
                                        </img></Link></td>




                                    <td><img title="Delete Datail" className="icon-img" onClick={()=>DeleteBtn(item.id)}
                                     src="https://th.bing.com/th/id/OIP.WYJg_e2tOPf1eAHMG-h8UgHaHa?pid=ImgDet&rs=1"/></td>
                                </tr>)
                        }

                    
                </tbody>
            </table>
        </div>
        <div>

        </div>
        </>
    )

}
export default Home;