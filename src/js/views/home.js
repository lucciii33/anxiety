import React from "react";
import rigoImage from "../../img/mainpageimage.png";
import "../../styles/home.css";

export const Home = () => (
	<div className="d-flex justify-content-between container align-items-center">
		<div className="mt-5 text-justify">
			<h1>Let us Help you!</h1>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
			<div className=" d-flex p-2 m-2 align-items-center">

			<button className="btn mt-2 ">Click more info</button>
			<button className="btn mt-2 ">Ask for help</button>
			</div>
		</div>
		<div className="">
			<img src={rigoImage}/>
		</div>
		
	</div>
);
