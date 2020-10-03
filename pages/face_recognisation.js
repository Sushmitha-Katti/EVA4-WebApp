import Head from '../components/head'
import CustomNavbar from '../components/nav';
import FaceReco from "../components/faceReco-comp";


const FaceRecognisation = () => (
    <div>
      <Head title="FaceRecognisation" />
      <CustomNavbar  active = 'face'/>
      <FaceReco />
      
 
    
    </div>
  )
  export default FaceRecognisation