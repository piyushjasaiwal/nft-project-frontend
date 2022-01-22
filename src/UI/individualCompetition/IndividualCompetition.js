import React, {useCallback, useState, useEffect} from 'react';
import { Navbar, Container, Spinner } from 'react-bootstrap';
import IndividualCompetitionItem from '../individualCompetitionItem/IndividualCompetitionItem';
import AddCert from '../addCert/AddCert';
import db from '../../logic/firebase/firebase';
import Portal from 'react-portal/lib/Portal';
import { useLocation, useHistory } from 'react-router-dom';

export default function IndividualCompetition() {

    const [isLoading, setisLoading] = useState(false);
    const [competitions, setCompetitions] = useState([]);
    const [competitionName, setCompetitionName] = useState("");

    const location = useLocation();
    const history = useHistory()

    let competitionid;
  
    if (location.pathname) {
        competitionid = location.pathname.split("/")[2]//location.state.competitionId
    }else{
        history.replace('/errir')
    }

    const fetchData = useCallback( async () =>{
        setisLoading(true);
        await db.ref(`competitions_info/${competitionid}`).once("value" ,function (snapshot){
            const val = snapshot.val();

            var competition_name = val.Competition_name;
            var certificates = val.certificates;

            var certificateskeys = Object.keys(certificates);

            var values = certificateskeys.map((key)=>{
                return certificates[key];
            });
            console.log(values)
            setCompetitions(values)
            setCompetitionName(competition_name);
        });
        setisLoading(false);
    },[competitionid]);

    useEffect(() => {
        fetchData()
    }, [fetchData])
    
    return (
      <>
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="#home">{competitionName} Competition</Navbar.Brand>
          </Container>
        </Navbar>
        {
          competitions.map((e, i)=> <IndividualCompetitionItem key={i} cert={e}/>)
        }
        <AddCert competitionId={competitionid} competitionName={competitionName}/>
        <Portal node={document && document.getElementById('loader')}>
            { 
                isLoading&&<div className="loader-context dark">
                    <Spinner animation="border" variant="primary"/>
                </div>
            }
        </Portal>
      </>
    );
}
