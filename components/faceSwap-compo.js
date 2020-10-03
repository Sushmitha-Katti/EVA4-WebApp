
import React, { useState } from "react";
import axios from 'axios';
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
import {FACE_SWAP_ENDPOINT} from "../api_endpoints";
const FaceSwapCompo = () => {


   axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
    axios.defaults.headers.post["Accept"] = "application/json";
     const [file1, setFile1] = useState("");
     const [fileName1, setFileName1] = useState("Please select an image");
     const [file2, setFile2] = useState("");
     const [fileName2, setFileName2] = useState("Please select an image");
  
     const [showLoading, setShowLoading] = useState(false);
     const [uploadPercentage, setUploadPercentage] = useState(0);
     const [results, setResults] = useState({});
     
 
     const swap = async () => {
         try {
             
             setShowLoading(true);
             const formData = new FormData();
             formData.append("file1", file1);
             formData.append("file2", file2)
 
             // request recognisation from end-point
             const results = await axios.post(
                 `${FACE_SWAP_ENDPOINT}`,
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
 
     const onFileSelect1 = (e) => {
         if (e.target.files.length >= 1) {
             setFile1(e.target.files[0]);
             setFileName1(e.target.files[0].name);
         } else {
             setFileName1("Please select an Image");
         }
     };
     const onFileSelect2 = (e) => {
        if (e.target.files.length >= 1) {
            setFile2(e.target.files[0]);
            setFileName2(e.target.files[0].name);
        } else {
            setFileName2("Please select an Image");
        }
    };
 
     return (
       <>
      
         <Container>
   
         <h1 style = {{textAlign:"center"}}>Face Swap</h1>
         <br/>
         <div style = {{textAlign:'center'}} >
               <p><strong>Do you wonder how it would be if the persons face is swapped with other person face. Do you want to try it? Then try below. It's awesome</strong></p>
         
         </div>
         <br/>
         <Row className="justify-content-md-center">
                    <Col md={4} lg={4} className="mx-auto">
                 
                        {results.Status === 'IncorrectInput' && (
                        
                           <Alert style = {{textAlign:"center"}}  variant='dark'><strong>{results.Status}<br/>{results.Result}</strong></Alert>
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
            <br/>
           <Row className="justify-content-md-center" >
           
             <Col xs = {10}>
              <Form>
              <Form.Row>
                         <Form.Group as={Col}>
                             <Form.Label>
                                 <h5>
                                     <strong>Select Firt Image</strong>
                                 </h5>
                             </Form.Label>
 
                             <Form.File custom>
                                 <Form.File.Input
                                     onChange={onFileSelect1}
                                     accept=".jpg,.png,.jpeg"
                                 />
                                 <Form.File.Label data-browse="Browse">
                                     {fileName1}
                                 </Form.File.Label>
                             </Form.File>
                         </Form.Group>

                         <Form.Group as={Col}>
                             <Form.Label>
                                 <h5>
                                     <strong>Select Second Image</strong>
                                 </h5>
                             </Form.Label>
 
                             <Form.File custom>
                                 <Form.File.Input
                                     onChange={onFileSelect2}
                                     accept=".jpg,.png,.jpeg"
                                 />
                                 <Form.File.Label data-browse="Browse">
                                     {fileName2}
                                 </Form.File.Label>
                             </Form.File>
                         </Form.Group>
                         </Form.Row>
              
                    <Row>
                     <Col  md = {6} className="mx-auto" style = {{textAlign:'center'}}>
                         {file1.name && (
                             <Image
                                 src={URL.createObjectURL(file1)}
                                 style={{ width: "500 px" }}
                                 className="mx-auto mt-5"
                                 rounded
                                 fluid
                             />
                         )}
                     </Col>
                     <Col  md = {6} className="mx-auto" style = {{textAlign:'center'}}>
                         {file2.name && (
                             <Image
                                 src={URL.createObjectURL(file2)}
                                 style={{ width: "500 px" }}
                                 className="mx-auto mt-5"
                                 rounded
                                 fluid
                             />
                         )}
                     </Col>
                     <Col  md = {6} className="mx-auto" style = {{textAlign:'center'}}>
                         {results.ImageBytes && (
                             <img
                             src={`data:image/jpeg;base64,${results.ImageBytes}`}
                                 style={{ height: "500 px" }}
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
                         onClick={() => swap()}
                         disabled={file1.name === undefined || file2.name === undefined}
                     >
                       Click to See Magic!
                     </Button>
                 </Row>
                 
                 
                
             </Form>
             </Col>
             </Row>
           
         </Container>
         </>
     );
  
     
   
   
 
 

}
    
export default FaceSwapCompo