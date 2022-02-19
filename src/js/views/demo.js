import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import rigoImage  from "../../img/boy.png";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const Demo = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container d-block">
			
			<img className="img2" src={rigoImage}/>
			
			

			<form className="login">
  			<input type="text" placeholder="Username"/>
		 	<input type="password" placeholder="Password"/>
  			<button className="btn">Login</button>
			  	<Link to="/">
				<button className="btn btn-primary">Back home</button>
			</Link>
			</form>

			<a href="https://codepen.io/davinci/" target="_blank">Forgot Password?</a>
			
			
		
		</div>
	);
};
