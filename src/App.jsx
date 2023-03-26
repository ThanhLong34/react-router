import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { routes } from "./router";
import Navigator from "./components/Navigator";

function App() {
	const renderRoutes = () =>
		routes &&
		routes.map((route, idx) => {
			const Component = route.component;
			return (
				<Route key={idx} path={route.path} element={<Component />} />
			)
		});

	return (
		<div className="App">
			<Router>
				<Navigator />
				<main className="main-view">
					<Routes>{renderRoutes()}</Routes>
				</main>
			</Router>
		</div>
	);
}

export default App;
