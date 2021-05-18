import React, { useEffect,useState } from 'react';
import '../Covid_tracker/Covid.css';
import { Link } from 'react-router-dom';


const Covid = () => {
    
        const [data,setData] = useState([]);
    
    const getCovidData = async () => {
        try {
            const response = await fetch('https://api.covid19india.org/data.json')
            const actualData = await response.json();
            console.log(actualData.statewise[0]);
            setData(actualData.statewise[0]);
        }
        catch (err) {
            console.log(err);
        }

    }
    useEffect(() => {
        getCovidData();    
    }, []);


    return (
        <>
            <section>
                
            <Link to="/statewise"><button type="button" onClick="/statewise" className="btn btn-succes">Statewise cases</button></Link>
            

                <h3 className="vert-move">LIVE UPDATE</h3>
                <h2>COVID-19 CORONAVIRUS TRACKER</h2>
                

                    <div className="Container">
                        <div className="item">
                            <div className="inner_div">
                                <h3 className="card_text"> OUR <span>COUNTRY </span></h3>
                                <h1>INDIA</h1>
                        </div>
                        </div>
                        <div className="item">
                        <div className="inner_div">
                                <h3 className="card_text"> TOTAL <span>RECOVERD</span></h3>
                                <h1>{data.recovered}</h1>
                        </div>
                        </div>
                        <div className="item">
                        <div className="inner_div"> 
                                <h3 className="card_text"> TOTAL <span>CONFIRMED</span></h3>
                                <h1>{data.confirmed}</h1>
                        </div>
                        </div>
                        <div className="item">
                        <div className="inner_div"> 
                                <h3 className="card_text"> TOTAL <span>DEATH</span></h3>
                                <h1>{data.deaths}</h1>
                        </div>
                        </div>
                        <div className="item">
                        <div className="inner_div"> 
                                <h3 className="card_text"> TOTAL <span>ACTIVE CASES</span></h3>
                                <h1>{data.active}</h1>
                        </div>
                        </div>
                        <div className="item">
                        <div className="inner_div"> 
                                <h3 className="card_text"> LAST <span>UPDATE</span></h3>
                                <h1 className="time">{data.lastupdatedtime}</h1>
                        </div>
                        </div>
                    </div>
                    <div className="footer">
                All the Covid-19 live update available here ©Copy rights from Govt official Apis
                </div>
                
            </section>
        </>
    )
}
export default Covid