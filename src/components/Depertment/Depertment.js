import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Depertment = () => {
    const{serviceId} = useParams();
    const[depertments,setDepertments]= useState([])

    useEffect( ()=>{
        fetch('./service.json')
        .then(res=>res.json())
        .then(data=> {
            console.log(data)
            const details = data.find((dtls)=>dtls?.code === serviceId);
            setDepertments(details)
        })
    } ,[])

    // console.log(depertments)
    return (
        <div className="container">
            <div className="card mb-3" >
                <div className="row g-0">
                    <div className="col-md-4">
                    <img src={depertments.img} className="img-fluid rounded-start" alt="..."/>
                    </div>
                    <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{depertments?.name} </h5>
                        <p className="card-text">{depertments?.description}</p>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Depertment;