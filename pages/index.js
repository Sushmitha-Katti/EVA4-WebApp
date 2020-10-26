import React from 'react'
import Link from 'next/link'
import Head from '../components/head'
import CustomNavbar from '../components/nav';
import {MODELS} from '../urls';
import github from '../static/github.svg';
import website from '../static/network.svg';
import {
  Container,
  Form,
  Row,
  Col,
  Button,
  Card,
  CardColumns
  
} from "react-bootstrap";


 const Home = () => (
   <div style = {{background : '#f7f9fb'}}>
     <Head title="SVGS Works" />
     <CustomNavbar />
     <br/>
     <Container>
     <div style = {{textAlign:"center"}}>
          <h1>Welcome to SVGS Works </h1>
          <br/>
          <p>Take a look at our various deployed models</p>
          <br/>
      </div>
     
        <Row>
            
              {MODELS.map(model => 
              <Col md = '4'>
                <Card className="text-center" >
                
                  <Card.Body>
                    <Card.Title> {model.title} </Card.Title>
                    <Card.Text>
                      <br/>
              <Button variant="outline-info" size="sm" href={model.url} style = {{marginRight : '2rem'}}><img src = {website} style = {{width: '20px',
               marginRight: '10px'}}/>Model</Button>
               <Button variant="outline-info" size="sm" href={model.code} style = {{marginLeft : '2rem'}}><img src = {github} style = {{width: '20px',
               marginRight: '10px'}}/>Code</Button> 
                     
                    </Card.Text>
                  </Card.Body>
                </Card>

              <br/>
              
              </Col>
                )}
            
        </Row>
    </Container>

   
   </div>
 )

 export default Home


