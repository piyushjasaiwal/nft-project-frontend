import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import classes from './AddCert.module.css';
import addicon from '../../assets/add.png'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

export default function AddCert({competitionId, competitionName}) {
  const history = useHistory();
  function onAdd(){
    history.push({pathname: `${competitionId}/create`, state: {competitionId: competitionId, competitionName: competitionName}});
  }
  return <div>
      <Container className={classes.item} onClick={onAdd}>
        <Row className={classes.ro}>
          <Col md="auto">
            <Image 
              src={addicon}
              height={50}
              width={50}
            />
          </Col>
          <Col md='auto'>
            <Row className={classes.title}>
                Add Certificates
            </Row>
          </Col>
        </Row>
      </Container>
  </div>;
}
