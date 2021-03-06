import React from "react";
import app from "./firebase/firebase";
import firebase from "firebase";

function Demo() {
	const [userName, setUserName] = useState("");
	const [currentUser, setCurrentUser] = useState([]);

	const SignUp = () => {
		app.auth().createUserWithEmailAndPassword(email, Password);
		app.auth().currentUser.updatedProfile({
			displayName: user
		});
	};

	const SignOut = () => {
		app.auth().signOut();
	};

	const facebookProvider = new firebase.auth.FacebookProvider();
	const signedFaceBook = () => {
		app.auth().signInWithPopup(facebookProvider);
	};

	const GoogleProvider = new firebase.auth.GoogleProvider();
	const signedgoogle = () => {
		app.auth().signInWithPopup(GoogleProvider);
	};

	useEffect(() => {
		app,
			auth().onAuthStateChanged(user => {
				setCurrentUser(user);
			});
	}, []);
	return <div></div>;
}

export default Demo;
