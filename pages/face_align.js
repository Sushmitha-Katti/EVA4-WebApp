import Head from '../components/head'
import CustomNavbar from '../components/nav';
import FaceAlignCompo from '../components/faceAlign-compo';
const FaceAlign = () => (
    <div>
      <Head title="FaceAlign" />
      <CustomNavbar active='face' />
      <FaceAlignCompo/>
 
    
    </div>
  )
  export default FaceAlign