import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Component/Home/Home.jsx";
import "antd/dist/antd.css";
import { GlobalProvider } from "./Component/context/GlobalContext.js";
import FirstPage from "./Component/FirstPage/FirstPage.jsx";
import SimpleModal from "./Component/FirstPage/Moder.js";
import FurtherPage from "./Component/FurtherPage/FurtherPage";

function App() {
	return (
		<GlobalProvider>
			<Router>
				<Switch>
					<Route exact path="/" component={FirstPage} />
					<Route exact path="/furtherpage/:id" component={FurtherPage} />
				</Switch>
			</Router>
		</GlobalProvider>
	);
}

export default App;
