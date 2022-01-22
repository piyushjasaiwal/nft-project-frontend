import React, { useState } from 'react'
import './competitions_style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'
import db from './../../firebase'

const Competitions = () => {

    const navigate = new useNavigate()

    const [competition_info, setCompetitionInfo] = useState([]);    

    const addCompetition = () => {
        navigate('/addCompetition');
        // console.log("add Competition");
    }

    return (
        <div className = 'homepage'>
            <h1 className='main-heading'>Competitions</h1>
            {/* <div className='input-label'>
               List of Competitions
            </div> */}
            <button className = 'button' onClick = {addCompetition}><FontAwesomeIcon icon = {faPlus} className = "icon"/>Add Competition</button>
        </div>
    )
}

export default Competitions;