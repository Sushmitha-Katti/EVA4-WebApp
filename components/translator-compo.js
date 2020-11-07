import React, { useState } from "react";
import axios from 'axios';
import {TRANSLATOR_ENDPOINT } from "../api_endpoints";
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
const Translator = () => {

    axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
    axios.defaults.headers.post["Accept"] = "application/json";
    
  
 
   
     const [text, setText] = useState("");
    
     const [showLoading, setShowLoading] = useState(false);
     const [uploadPercentage, setUploadPercentage] = useState(0);
     const [results, setResults] = useState({});
 
     const recognise = async () => {
         try {
             
             setShowLoading(true);

            const formData = new FormData();
            formData.append("data", text);
            
             
 
             // request recognisation from end-point
             const results = await axios.post(
                 `${TRANSLATOR_ENDPOINT}`,
                 {
                     'data' : text.toLocaleLowerCase()
                 },
                 
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
   
         <h1 style = {{textAlign:"center"}}>German to English Translator</h1>
         <br/>
         <div style = {{textAlign:'center'}} >
               <p><strong>Translator model translates German text to English. This is the basic model which may not give the 100% result </strong></p>
              
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
                                     <strong>Enter German text to translate</strong>
                                 </h5>
                                 <p style = {{fontSize: 'small'}}>(Model gives better predictions if there are no punctuations in the text)</p>
                                
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
                         disabled={text.length < 2 }
                     >
                         Translate!
                     </Button>
                 </Row>
                 <br/>
                 <Row className="justify-content-md-center">
                     <Col md={12} lg={12}>
                  
                         {!(Object.entries(results).length === 0 && results.constructor === Object) && (
                         
                         <Alert style = {{textAlign:"center"}}  variant='dark'>{results['Status']==0 ? <strong>{results['Message']}</strong> : <strong>{results['data']}</strong>}</Alert>
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
    
  export default Translator