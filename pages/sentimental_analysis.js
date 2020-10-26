import Head from '../components/head'
import CustomNavbar from '../components/nav';
import SentimentCompo from '../components/sentiment-compo';
const Vae = () => (
    <div>
      <Head title="Sentimental Analysis" />
      <CustomNavbar active = 'sa' />
      <SentimentCompo/>
 
    
    </div>
  )
  export default Vae