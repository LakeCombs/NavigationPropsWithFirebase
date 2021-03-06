import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { app } from "../firebase";

const db = app.firestore().collection("datacollection");

function FurtherPage() {
	const [data, setData] = useState([]);

	const { id } = useParams();
	const getData = async () => {
		const docRef = await db.doc(id);
		const docData = await docRef.get();
		setData(docData.data());
	};

	useEffect(() => {
		getData();
	}, []);
	return (
		<center>
			<div style={{ height: "auto", width: "500px", border: "2px solid blue" }}>
				<div
					style={{
						height: "auto",
						width: "100%",
						backgroundColor: "lightblue",
						display: "flex",
						flexDirection: "row",
						justifyContent: "space-between",
						paddingLeft: "20px",
						paddingRight: "20px"
					}}>
					{" "}
					<img
						style={{
							height: "40px",
							width: "40px",
							borderRadius: "200px",
							objectFit: "cover"
						}}
						src={data.avatar}
					/>{" "}
					<h4>{data.title}</h4>
				</div>
				<div>
					<center>{data.title}</center>
					<center>{data.paragraph}</center>
					<center>
						{" "}
						<img
							style={{
								height: "40px",
								width: "40px",
								borderRadius: "200px",
								objectFit: "cover"
							}}
							src={data.img1}
						/>{" "}
						<p>{data.desc}</p>
					</center>
				</div>
			</div>
		</center>
	);
}

export default FurtherPage;
