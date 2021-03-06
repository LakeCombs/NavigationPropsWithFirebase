import React from "react";
import "./Header.css";

export default function Header({ LogOut, username, src }) {
	return (
		<div className="header">
			<p>Logo</p>
			<div className="ProfileDetails">
				<p>{username}</p>
				<button onClick={LogOut}>Log Out</button>
				<img src={src} />
			</div>
		</div>
	);
}
