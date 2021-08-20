import React, {useState} from 'react';
import {PForwardContainer, PForwardButton} from './PForwardStyle';

const PForwardPg = () => {
    const [radio, setRadio] = useState();

    return (
        <div className="mt-4 mx-5">
        
        <PForwardContainer>

        <h2>Port Forwarding Configuration</h2>
        
        <div className="d-flex py-4">
        <input 
            type="radio" 
            name="enable" 
            value="enable"
            id="enable"
            checked={radio === "enable"}
            onChange={(e)=>{setRadio(e.target.value)}}
        />

        <label htmlFor="enable">
        Enable all ports
        <p className="mt-2">Lorem ipsum dolor sit amet consectetur adipiscing elit n orci magna, commodonec euismodeu commodo et nunulla facilulla laoreet nisi id nulla luctus semper.</p>
        </label>
        </div>
        </PForwardContainer>

        <PForwardContainer>
        <div className="d-flex py-3 mt-4">
        <input 
            type="radio"     
            name="disable" 
            value="disable"
            id="disable"
            checked={radio === "disable"}
            onChange={(e)=>{setRadio(e.target.value)}}
        />

        <label htmlFor="disable">
        Disable all ports
        <p className="mt-2">Lorem ipsum dolor sit amet consectetur adipiscing elit n orci magna, commodonec euismodeu commodo et nunulla facilulla laoreet nisi id nulla luctus semper.</p>
        </label>
        </div>
        </PForwardContainer>
        
        <PForwardContainer noborder>
        <div className="d-flex py-3 mt-4" style={{width: '645px'}}>
        <input 
            type="radio" 
            name="block" 
            value="block"
            id="block"
            checked={radio === "block"}
            onChange={(e)=>{setRadio(e.target.value)}}
        />

        <label htmlFor="block">
        Block all ports but enable the following
        <p className="mt-3">Lorem ipsum dolor sit amet consectetur adipiscing elit n orci magna, commodonec euismodeu commodo et nunulla facilulla laoreet nisi id nulla luctus semper.</p>
        

        <div className="d-block mt-3">
        <p className="enport-h">Enter the ports you want to enable
        <p>Lorem ipsum dolor sitamet consectetur adipis cingelitrc magna</p>
        </p>

        <input 
        className="tinput"
        type="text" 
        name="form-control" 
        placeholder="80, 8080, 2156-2180" 
        />
        </div>
        
        </label>

        </div>
        </PForwardContainer>

         
        <div className="mt-5">
        <PForwardButton>
          Apply Settings
        </PForwardButton>
        </div>
        
        </div>
    )


}

export default PForwardPg;
