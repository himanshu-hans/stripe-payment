import { render } from "@testing-library/react";
import React, { useEffect, useRef, useState } from "react";
import StripeForm from './card-minimal';
 export default function StripePayement() {

    // render (){
        return(
           <div>
           <StripeForm></StripeForm>
            </div>
        )
        // }
  console.log("stripe");
 }