import React, { useEffect, useState } from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

export default function Login() {
	const [slide, setSlide] = useState();

	const toggleSuper = () => {
		slide.classList.toggle("right");
	};

	useEffect(() => {
		setSlide(document.querySelector("#slide"));
	}, [setSlide]);

	return (
		<div className='screen'>
			<div id='login'>
				<div id='slide' className='super right'>
					<div className='register-blurb'>
						<h1>No account?</h1>
						<button onClick={toggleSuper}>Register Now</button>
					</div>
					<div className='login-blurb'>
						<h1>Have an account?</h1>
						<button onClick={toggleSuper}>Login Now</button>
					</div>
				</div>
				<SignIn />
				<SignUp />
			</div>
		</div>
	);
}
