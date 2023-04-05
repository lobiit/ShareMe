import React, {useEffect, useState} from "react";
import {v4 as uuidv4} from 'uuid';
import {useParams} from "react-router-dom";
import Spinner from "./Spinner";
import {client} from "../client";
import {data} from "autoprefixer";
function  PinDetail(){
    const [pins, setPins] = useState(null);
    const [pinDetails, setPinDetails] = useState(null);
    const [comment, setComment] = useState('');
    const [addingComment, setAddingComment] = useState(false);
    const {pinId} = useParams();

    if (!pinDetails) return <Spinner message="loading pin"/>

    const fetchPinDetails = ()=> {
        let query = pinDetailQuery(pinId);

        if(query) {
            client.fetch(query)
                .then((data) => {
                setPinDetails(data[0])

                if(data[0]) {
                    query = pinDetailMorePinQuery(data[0]);

                    client.fetch(query)
                        .then((res) => setPins(res));
                }
            })
        }
    }
    useEffect(()=>{
        fetchPinDetails();
    }, [pinId])

    if (!pinDetails) return <Spinner message="loading pin"/>

    return(
        <div>
            PinDetail
        </div>
    );
}
export  default  PinDetail;
