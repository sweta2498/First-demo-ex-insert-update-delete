import { Link } from "react-router-dom";

function About()
{
    return(
        <div className="App">
            <br/><br/><br/><br/>
                <h2>About US </h2>
                <h2>Employee Detail </h2><br/>
                <Link to="/">Back to Home</Link><br/>
                <Link to="/">Show All Employee Detail</Link>< br/>
                <Link to="/add">Add New Employee</Link>
        </div>
    )

}
export default About;