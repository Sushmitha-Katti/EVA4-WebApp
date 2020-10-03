import React, { useState } from "react";
import axios from 'axios';
import {FACE_RECOGNISATION_ENDPOINT } from "../api_endpoints";
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
const faceReco = () => {

    axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
    axios.defaults.headers.post["Accept"] = "application/json";
     const [file, setFile] = useState("");
     const [fileName, setFileName] = useState("Please select an image");
  
     const [showLoading, setShowLoading] = useState(false);
     const [uploadPercentage, setUploadPercentage] = useState(0);
     const [results, setResults] = useState({});
 
     const recognise = async () => {
         try {
             
             setShowLoading(true);
             const formData = new FormData();
             formData.append("file", file);
 
             // request recognisation from end-point
             const results = await axios.post(
                 `${FACE_RECOGNISATION_ENDPOINT}`,
                 formData,
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
   
         <h1 style = {{textAlign:"center"}}>Face Recognisation</h1>
         <br/>
         <div style = {{textAlign:'center'}} >
               <p><strong>Our Face Recognition model can recognise:</strong></p>
              {/* TODO: Add faces here*/}
         </div>
         <br/>
         <Row className="justify-content-md-center">
                     <Col md={4} lg={4} className="mx-auto">
                  
                         {!(Object.entries(results).length === 0 && results.constructor === Object) && (
                         
                         <Alert style = {{textAlign:"center"}}  variant='dark'>{results['Status']==0 ? <strong>{results['Message']}</strong> : <strong>It is  {results['Predicted_Class']}</strong>}</Alert>
                         )}
                     </Col>
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
           <Row className="justify-content-md-center" >
           
             <Col xs = {6}>
              <Form>
                
                         <Form.Group as={Row}>
                             <Form.Label>
                                 <h5>
                                     <strong>Select Image</strong>
                                 </h5>
                             </Form.Label>
 
                             <Form.File custom>
                                 <Form.File.Input
                                     onChange={onFileSelect}
                                     accept=".jpg,.png,.jpeg"
                                 />
                                 <Form.File.Label data-browse="Browse">
                                     {fileName}
                                 </Form.File.Label>
                             </Form.File>
                         </Form.Group>
                    
              
                 <Row>
                     <Col  className="mx-auto" style = {{textAlign:'center'}}>
                         {file.name && (
                             <Image
                                 src={URL.createObjectURL(file)}
                                 style={{ width: "200px" }}
                                 className="mx-auto mt-5"
                                 rounded
                                 fluid
                             />
                         )}
                     </Col>
                 </Row>
                 <br/>
                 <Row>
                     <Button
                         variant="dark"
                         className="mx-auto shadow-lg"
                         size="lg"
                         onClick={() => recognise()}
                         disabled={file.name === undefined}
                     >
                         Recognise!
                     </Button>
                 </Row>
                 
                 
                
             </Form>
             </Col>
             </Row>
           
         </Container>
         </>
     );
  
     
   
   
 
 

}
    
  export default faceReco