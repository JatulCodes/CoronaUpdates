import React, { useEffect, useState } from "react";
import '../Stateswise/Statewise.css'
const Stateweise = () => {

    const [data, setdata] = useState([]);


    const getCovidData = async () => {
        const res = await fetch('https://api.covid19india.org/data.json');
        const actualData = await res.json();
        console.log(actualData.statewise);
        setdata(actualData.statewise);
    }

    useEffect(() => {
        getCovidData();
    }, []);
    return (
        
        <>
       
        <div className="bgcolor">
            <h1 className="mb-0 text-center headtext">INDIA's COVID-19 CASES UPDATE <div className="vert-move text-right">Live Updates</div></h1>
            </div>
            
            <div>
            <table className="table-responsive table table-hover table-dark">
                <thead>
                    <tr>
                        <th scope="col">STATE</th>
                        <th scope="col">CONFIRMED</th>
                        <th scope="col">RECOVERD</th>
                        <th scope="col">DEATHS</th>
                        <th scope="col">ACTIVES</th>
                        <th scope="col">UPADATE</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((curElem, ind) => {
                            return (
                                <tr key={ind}>
                                    <th>{curElem.state}</th>
                                    <td>{curElem.confirmed}</td>
                                    <td>{curElem.recovered}</td>
                                    <td>{curElem.deaths}</td>
                                    <td>{curElem.active}</td>
                                    <td>{curElem.lastupdatedtime}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
                
            </table>
            </div>
            
        </>
        
    )
}
export default Stateweise;