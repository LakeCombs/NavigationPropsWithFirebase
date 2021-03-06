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
	return <div>this is the page id:{id}
	<p>
		{data && data.title}
		<img src={data.avatar}/>
		
		{/* hello lakes */}
	</p>
	</div>;
}

export default FurtherPage;
