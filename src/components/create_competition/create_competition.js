import React, { useState } from 'react'
import './create_competition_style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDollarSign } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'

const CreateCompetition = () =>{

    const navigate = new useNavigate();

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

    const submit = async () =>{
        if(Competition.Competition_name && Competition.prize_money){
            // console.log("submitted");
            const res = await fetch('https://competetionsdatabase-default-rtdb.firebaseio.com/competitions_info.json', {
                method: "POST",
                header: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    Competition_name:Competition.Competition_name,
                    prize_money: Competition.prize_money
                })
            });

            alert("Submitted Successfully")
            navigate('/');
        }else{
            alert("Please fill all the information")
        }
        
    }

    return(
        <div className = 'container'>
            <div className = 'main-heading'>Create Competition</div>
            <div className='input-label' >Name of Competition</div>
            <input name = 'Competition_name' value = {Competition.Competition_name} type='text' placeholder = 'Enter Name of the Competition' onChange = {handleChange}/>
            <div className='input-label'>Prize Money <FontAwesomeIcon icon = {faDollarSign} /></div>
            <input name = 'prize_money' value = {Competition.prize_money} type='text' placeholder = 'Enter Prize Money' onChange = {handleChange}/>
            <button className = 'button' onClick = {submit}>Submit</button>
        </div>
    );
}

export default CreateCompetition;