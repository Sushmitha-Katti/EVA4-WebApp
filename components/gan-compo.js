import React, { useState } from "react";
import axios from 'axios';
import {GAN_ENDPOINT} from "../api_endpoints";
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
const GanCompo = () => {
    axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
    axios.defaults.headers.post["Accept"] = "application/json";
    
  
     const [showLoading, setShowLoading] = useState(false);
     const [uploadPercentage, setUploadPercentage] = useState(0);
     const [results, setResults] = useState("");
 
     const construct = async () => {
         try {
             
             setShowLoading(true);
            
 
             // request recognisation from end-point
             const results = await axios.get(
                 `${GAN_ENDPOINT}`,
                
                 {
                     crossDomain: true,
                 }
             );
        
             setResults(results.data);
         } catch (e) {
     
             setResults({});
             alert(JSON.stringify(e));
             console.log(e);
             
             
         }
 
         // we are done, now turn off the loading and progress bar
         setShowLoading(false);
 
         // reset the states
         setTimeout(() => {
             setUploadPercentage(0);
         }, 5000);
     };
 
     const onFileSelect = (e) => {
         if (e.target.files.length >= 1) {
             setFile(e.target.files[0]);
             setFileName(e.target.files[0].name);
         } else {
             setFileName("Please select an Image");
         }
     };
 
     return (
       <>
      
         <Container>
   
         <h1 style = {{textAlign:"center"}}>Generative Adversal Network</h1>
         <br/>
         <div style = {{textAlign:'center'}} >
               <p><strong>A generative adversarial network (GAN) is a class of machine learning frameworks designed by Ian Goodfellow and his colleagues in 2014
</strong><br/>Here we have trained our Gan to generate 64 * 64 car images.</p>
              {/* TODO: Add faces here*/}
         </div>
         <br/>
        
           
           <Row className="justify-content-md-center" >
           
             <Col xs = {6}>
              <Form>
                 <Row>
                     <Button
                         variant="dark"
                         className="mx-auto shadow-lg"
                         size="lg"
                         onClick={() => construct()}
                       
                     >
                         Generate Car Image
                     </Button>
                 </Row>
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
                 <Row>
                     <Col  className="mx-auto" style = {{textAlign:'center'}}>
                         {results && ( 
                             <img
                               src={`data:image/jpeg;base64,${results.data}`}
                                 style={{ width: "120px" , height: "120px"}}
                                 className="mx-auto mt-5"
                                 rounded
                                 fluid
                             />
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
  export default GanCompo