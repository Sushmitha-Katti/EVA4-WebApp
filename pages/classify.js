import Head from '../components/head'
import CustomNavbar from '../components/nav';
import React, { useState } from "react";
import ClassifyComp from '../components/classify-comp'


const Classify = () => (
  <>
  <Head title="Classify" />
  <CustomNavbar active='classify'/>
  <ClassifyComp />
  </>
)
   
   
  export default Classify