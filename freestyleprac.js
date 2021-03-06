import React,{useState,useEffect} from 'react'
import firebase from "firebase"
import {app} from 'dirname'

const db = app.firestore()

function freestyleprac() {
    const [ data, getData] = useState([])


    useEffect(() => {

    }, [])
    return (
        <div>
            
        </div>
    )
}

export default freestyleprac
