import { Button } from "antd";
import React, { useState, useEffect } from "react";
import Header from "../Header/Header";
import { Link } from "react-router-dom";
import { app } from "../../firebase/firebase.js";
import firebase from "firebase";

function Home() {
	const [userName, setUserName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [passwordConfirm, setPasswordConfirm] = useState("");
	const [flip, setFlip] = useState(false);
	const [current, setCurrent] = useState([]);
	const [confirm, setConfirm] = useState("");

	const changeCard = () => {
		setFlip(!flip);
	};

	const signOut = () => {
		app.auth().signOut();
	};

	const GoogleProvider = new firebase.auth.GoogleAuthProvider();
	const googleLogin = () => {
		firebase.auth().signInWithPopup(GoogleProvider);
	};

	const FacebookProvider = new firebase.auth.FacebookAuthProvider();
	const signINfacebook = () => {
		firebase.auth().signInWithPopup(FacebookProvider);
	};

	const GithubProvider = new firebase.auth.GithubAuthProvider();
	const signingithub = () => {
		firebase.auth().signInWithPopup(GithubProvider);
	};

	const SignUp = () => {
		app.auth().createUserWithEmailAndPassword(email, password);
		app.auth().currentUser.updateProfile({
			displayName: userName
		});
	};

	const SignInNow = () => {
		app.auth().signInWithEmailAndPassword(email, password);
	};

	const confirmingPassword = () => {
		if (password !== passwordConfirm) {
			setConfirm("password do not match");
		} else {
			SignUp();
		}
	};

	useEffect(() => {
		app.auth().onAuthStateChanged(user => {
			setCurrent(user);
			console.log(current)
		});
	}, []);

	return (
		<>
			<center>
				<Header logOut={signOut} username={current.email} src={current.photoURL} />
	

			
				{flip ? (
					<div className="FormHolder">
						<form className="Form">
							<label> Sign In with BetaPay</label>

							<input
								type="text"
								placeholder="email"
								value={email}
								onChange={e => {
									setEmail(e.target.value);
								}}
							/>
							<input
								type="text"
								placeholder="password"
								value={password}
								onChange={e => {
									setPassword(e.target.value);
								}}
							/>

							<Button
								onClick={() => {
									SignInNow();
								}}>
								Sign in
							</Button>
							<Button style={{ backgroundColor: "red" }} onClick={googleLogin}>
								Sign in with Google
							</Button>
							<Button onClick={signINfacebook}>Sign with Facebook</Button>
							<Button
								style={{ backgroundColor: "gray" }}
								onClick={signingithub}>
								Sign in with GitHub
							</Button>
							<label>
								Don't have an account <Link onClick={changeCard}>Sign Up</Link>
							</label>
						</form>
					</div>
				) : (
					<div className="FormHolder">
						<form className="Form">
							<label>Sign up to BetaPay</label>
							<p>{setConfirm}</p>
							<input
								type="text"
								placeholder="user name"
								value={userName}
								onChange={e => {
									setUserName(e.target.value);
								}}
							/>
							<input
								type="text"
								placeholder="email"
								value={email}
								onChange={e => {
									setEmail(e.target.value);
								}}
							/>
							<input
								type="text"
								placeholder="password"
								value={password}
								onChange={e => {
									setPassword(e.target.value);
								}}
							/>
							<input
								type="text"
								placeholder="confirm password"
								value={passwordConfirm}
								onChange={e => {
									setPasswordConfirm(e.target.value);
								}}
							/>
							<Button
								onClick={() => {
									confirmingPassword();
									SignUp();
								}}>
								Sign up
							</Button>
							<Button style={{ backgroundColor: "red" }}>
								Sign up with Google
							</Button>
							<Button onClick={googleLogin}>Sign up with Facebook</Button>
							<Button
								style={{ backgroundColor: "gray" }}
								onClick={signingithub}>
								Sign up with GitHub
							</Button>
							<label>
								already have an account{" "}
								<Link onClick={changeCard}> Sign In</Link>
							</label>
						</form>
					</div>
				)}
			</center>
		</>
	);
}

export default Home;
