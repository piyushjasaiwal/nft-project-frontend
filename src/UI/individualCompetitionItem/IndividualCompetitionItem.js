import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import productIcon from '../../assets/product_icon.png';
import classes from './IndividualCompetitionItem.module.css';


export default function IndividualCompetitionItem({cert}) {
  return <div>
      <Container className={classes.item}>
        <Row className={classes.ro}>
          <Col md="auto">
            <Image 
              src={productIcon}
              height={50}
              width={50}
            />
          </Col>
          <Col md='auto'>
            <Row className={classes.title}>
                {cert.certname}
            </Row>
            <Row className={classes.subtitle}>
                {cert.winnername}
            </Row>
            <Row className={classes.subtitle}>
                {cert.winnerwallet}
            </Row>
          </Col>
        </Row>
      </Container>
  </div>;
}
