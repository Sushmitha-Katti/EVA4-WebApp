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



import {CLASSIFICATION_RESNET_ENDPOINT,CLASSIFICATION_MOBILENET_ENDPOINT } from "../api_endpoints";


const ClassifyComp = () => {
    axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
   axios.defaults.headers.post["Accept"] = "application/json";
    const [file, setFile] = useState("");
    const [modelType, setModelType] = useState({CLASSIFICATION_RESNET_ENDPOINT});
    const [fileName, setFileName] = useState("Please select an image");
    const [showMessage, setShowMessage] = useState(false);
    const [message, setMessage] = useState("");
    const [showLoading, setShowLoading] = useState(false);
    const [uploadPercentage, setUploadPercentage] = useState(0);
    const [results, setResults] = useState({});

    const classifyImage = async () => {
        try {
            setMessage("");
            setShowMessage(false);
            setShowLoading(true);
            const formData = new FormData();
            formData.append("file", file);

            // request classification from end-point
            const results = await axios.post(
                `${modelType}`,
                formData,
                {
                    crossDomain: true,
                }
            );
          
            setResults(results.data);
        } catch (e) {
            // some error occured, create a Toast !
            setMessage(JSON.stringify(e));
            setShowMessage(true);
            setResults({});
            alert('Error in the prediction, lambda may be sleeping, try again!!!')
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
  
        <h1 style = {{textAlign:"center"}}>Classification</h1>
        <br/>
        <div style = {{margin:"0 20%"}} >
              <p><strong>Imagenet Classifier : </strong>Pretrained resnet model on Imagenet dataset which has 1000 classes.</p>
              <p><strong>Drones Classifier : </strong> Trained MobilenetV2 Model using transfer learning that has 4 classes small quadcopters, large quadcopters, Flying Birds, Winged Drones</p>
        </div>
        <br/>
        <Row className="justify-content-md-center">
                    <Col md={4} lg={4} className="mx-auto">
                 
                        {results['Predicted Class'] && (
                        
                           <Alert style = {{textAlign:"center"}}  variant='dark'>It is a <strong>{results['Predicted Class']}</strong></Alert>
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
          
            <Col xs = {10}>
             <Form>
                 <Row>
                   
                        <Form.Group
                            as={Col}
                            controlId="exampleForm.ControlSelect1"
                            className=""
                        >
                            <Form.Label>
                                <h5>
                                    <strong>Select Model</strong>
                                </h5>
                            </Form.Label>
                            <Form.Control
                                as="select"
                                onChange={(e) => setModelType(e.target.value)}
                                value={modelType}
                            >
                                <option value={CLASSIFICATION_RESNET_ENDPOINT}>
                                    ImageNet Classifier - ResNet
                                </option>
                                <option value={CLASSIFICATION_MOBILENET_ENDPOINT}>
                                    Drones Classifier -
                                    MobileNetV2
                                </option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group as={Col}>
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
                   
                </Row>
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
                <Row>
                    <Button
                        variant="dark"
                        className="mx-auto shadow-lg"
                        size="lg"
                        onClick={() => classifyImage()}
                        disabled={file.name === undefined}
                    >
                        Classify !
                    </Button>
                </Row>
                
                
               
            </Form>
            </Col>
            </Row>
          
        </Container>
        </>
    );
 
    
  
  

}
  export default ClassifyComp