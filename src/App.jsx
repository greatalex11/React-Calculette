import {useEffect, useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {useRef} from "react";
import './App.css'

function App() {

const classSelector=useRef(null)

    useEffect(() => {

        if(classSelector.current){
           const opCalc=classSelector.current.querySelectorAll('.global.operation');
          for (let op of opCalc){
              console.log(op.value);
          }
        }
    }, []);

  return (
    <>
       <div>
          <h1>Ma Super Calculette Objet</h1>
          <div className="container" ref={classSelector}>
            <div className="header">Calculator</div>
              <input className="result" id="display" readOnly type="text"/>

                  <div className="first-row">
                      <input className="global operation" name="" type="button" value="&radic;"/>
                          <input className="global chiffre" name="" type="button" value="("/>
                              <input className="global chiffre" name="" type="button" value=")"/>
                                  <input className="global operation" name="" type="button" value="%"/>
                  </div>
                  <div className="second-row">

                      <input className="global chiffre" name="" type="button" value="7"/>
                          <input className="global chiffre" name="" type="button" value="8"/>
                              <input className="global chiffre" name="" type="button" value="9"/>
                                  <input className="global operation" name="" type="button" value=""/>
                  </div>

                  <div className="third-row">

                      <input className="global chiffre" name="" type="button" value="4"/>
                          <input className="global chiffre" name="" type="button" value="5"/>
                              <input className="global chiffre" name="" type="button" value="6"/>
                                  <input className="global operation" name="" type="button" value="X"/>
                  </div>

                  <div className="fourth-row">
                      <input className="global chiffre" name="" type="button" value="1"/>
                          <input className="global chiffre" name="" type="button" value="2"/>
                              <input className="global chiffre" name="" type="button" value="3"/>
                                  <input className="global operation" name="" type="button" value="-"/>
                  </div>

                  <div className="conflict">
                      <div className="left">
                          <input className="chiffre big" name="" type="button" value="0"/>
                              <input className="chiffre small" name="" type="button" value="."/>
                                  <input className=" red small white-text top-margin operation" name="" type="button" value="Del"/>
                                      <input className=" green white-text big top-margin operation" name="" type="button" value="="/>
                      </div>

                      <div className="right">
                         <input className="global grey plus operation" id='plus' name="" type="button" value="+"/>
                      </div>
                  </div>
          </div>

           </div>
     <div/>
    </>
  )
}



export default App
