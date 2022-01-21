import React, { useState } from 'react'
import './create_competition_style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDollarSign } from '@fortawesome/free-solid-svg-icons'

const CreateCompetition = () =>{

    const [Competition, setCompetitionValue] = useState({
        Competition_name: "",
        prize_money: "",
    })

    const handleChange = (e) => {
        const {name, value} = e.target
        setCompetitionValue({
            ...Competition,
            [name]: value
        })
    }

    const submit = () =>{
        console.log("submitted");
    }

    return(
        <div className = 'container'>
            <div className = 'main-heading'>Create Competition</div>
            <div className='input-label' >Name of Competition</div>
            <input name = 'Competition_name' value = {Competition.Competition_name} type='text' placeholder = 'Enter Name of the Competition' onChange = {handleChange}/>
            <div className='input-label'>Prize Money <FontAwesomeIcon icon = {faDollarSign} /></div>
            <input name = 'author' value = {Competition.prize_money} type='text' placeholder = 'Enter Prize Money' onChange = {handleChange}/>
            <button className = 'button' onClick = {submit}>Submit</button>
        </div>
    );
}

export default CreateCompetition;