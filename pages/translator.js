import Head from '../components/head'
import CustomNavbar from '../components/nav';
import TranslatorCompo from '../components/translator-compo';
const Translator = () => (
    <div>
      <Head title="Translator" />
      <CustomNavbar active = 'translator' />
      <TranslatorCompo/>
 
    
    </div>
  )
  export default Translator