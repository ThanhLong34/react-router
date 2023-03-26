import classNames from "classnames/bind";
import styles from "./Home.module.scss";

const cx = classNames.bind(styles);

function Home() {
	return (
		<div className={cx("home")}>
			<h1 className="title">Welcome</h1>
		</div>
	);
}

export default Home;
