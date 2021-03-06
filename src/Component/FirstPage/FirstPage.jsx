import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import "./FirstCard.css";
import { Button } from "antd";
import { app } from "../firebase";
import SimpleModal from "./Moder.js";

const db = app.firestore().collection("datacollection");
function FirstPage() {
	const [data, setData] = useState([]);

	const getData = async () => {
		await db.onSnapshot(snapshot => {
			const item = [];
			snapshot.forEach(doc => {
				item.push({ ...doc.data(), id: doc.id });
			});
			setData(item);
			console.log(data);
		});
	};

	useEffect(() => {
		getData();
	}, []);

	return (
		<div className="firstPage">
			{data.map(({ id, title, paragraph, desc, img2, img1, avatar }) => (
				<div className="Card">
					<img src={img1} className="imageHolder" />

					<Link to={`/furtherpage/${id}`}>
						<img className="image" src={avatar} />
					</Link>
					<p>{paragraph}</p>
					<SimpleModal
						Open="See More"
						id={id}
						title={title}
						paragraph={paragraph}
						desc={desc}
						avatar={avatar}
						img1={img1}
						img2={img2}
					/>
				</div>
			))}
		</div>
	);
}

export default FirstPage;

