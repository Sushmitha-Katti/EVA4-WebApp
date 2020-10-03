import Head from '../components/head'
import CustomNavbar from '../components/nav';
import FaceSwapCompo from "../components/faceSwap-compo";
const FaceSwap = () => (
    <div>
      <Head title="FaceSwap" />
      <CustomNavbar  active = 'face'/>
      <FaceSwapCompo/>
      
 
    
    </div>
  )
export default FaceSwap