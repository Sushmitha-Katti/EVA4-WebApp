import React, { useState } from "react";
import axios from 'axios';
import {SENTIMENTAL_ANALYSIS_ENDPOINT } from "../api_endpoints";
import {
    Container,
    Form,
    Row,
    Col,
    Button,
    Spinner,
    Toast,
    ProgressBar,
    Image,
    Alert
} from "react-bootstrap";
const Sentiment = () => {

    axios.defaults.headers.post["Content-Type"] = "application/json";
    axios.defaults.headers.post["Accept"] = "application/json";
     const [text, setText] = useState("");
    
     const [showLoading, setShowLoading] = useState(false);
     const [uploadPercentage, setUploadPercentage] = useState(0);
     const [results, setResults] = useState({});
 
     const recognise = async () => {
         try {
             
             setShowLoading(true);
             
 
             // request recognisation from end-point
             const results = await axios.post(
                 `${SENTIMENTAL_ANALYSIS_ENDPOINT}`,
                 {'data' : text},
                 {
                     crossDomain: true,
                 }
             );
            
             setResults(results.data);
         } catch (e) {
     
             setResults({});
             alert(JSON.stringify(e));
           
             
             
         }
 
         // we are done, now turn off the loading and progress bar
         setShowLoading(false);
 
         // reset the states
         setTimeout(() => {
             setUploadPercentage(0);
         }, 5000);
     };
 
     const onText = (e) => {
         if(e.target.value){
          setText(e.target.value);
         }
         
     };
 
     return (
       <>
      
         <Container>
   
         <h1 style = {{textAlign:"center"}}>Sentimental Anaysis</h1>
         <br/>
         <div style = {{textAlign:'center'}} >
               <p><strong>This is a sentiment analysis model trained on the IMDb reviews dataset. The model can predict whether a given movie review is positive or negative.</strong></p>
              
         </div>
         <br/>
         
           <Row  className="justify-content-md-center">
                     <Button
                         variant="dark"
                         className="mt-5"
                         hidden={!showLoading}
                         disabled
                         block
                     >
                         <Spinner
                             as="span"
                             animation="grow"
                             size="sm"
                             role="status"
                             aria-hidden="true"
                         />{" "}
                         Loading...
                     </Button>
            </Row>
           <Row className="justify-content-md-center" >
           
             <Col xs = {6}>
              <Form>
                
                         <Form.Group as={Row}>
                             <Form.Label>
                                 <h5>
                                     <strong>Enter Movie Review</strong>
                                 </h5>
                                 <p style = {{fontSize: 'small'}}>(It should be atleast 5 letter word)</p>
                             </Form.Label>
                             <Form.Control type="text" onChange = {onText} />
 
                         </Form.Group>
                    
              
              
                 <br/>
                 <Row>
                     <Button
                         variant="dark"
                         className="mx-auto shadow-lg"
                         size="lg"
                         onClick={() => recognise()}
                         disabled={text.length < 6 }
                     >
                         Predict Sentiment!
                     </Button>
                 </Row>
                 <br/>
                 <Row className="justify-content-md-center">
                     <Col md={12} lg={12}>
                  
                         {!(Object.entries(results).length === 0 && results.constructor === Object) && (
                         
                         <Alert style = {{textAlign:"center"}}  variant='dark'>{results['Status']==0 ? <strong>{results['Message']}</strong> : <strong>Sentiment of the review is  <strong style = {{ color  : results['data'] > 0.6 ? 'green' : results['data'] < 0.4 ? 'red' : 'orange' }}>{results['data'] > 0.6 ? 'Positive' : results['data'] < 0.4 ? 'Negative' : 'Neutral'}</strong></strong>}</Alert>
                         )}
                     </Col>
           </Row>
                 
                 
                
             </Form>
             </Col>
             </Row>
           
         </Container>
         </>
     );
  
     
   
   
 
 

}
    
  export default Sentiment