import classNames from "classnames/bind";
import styles from "./About.module.scss";

const cx = classNames.bind(styles);

function About() {
	return (
		<div className={cx("about")}>
			<h1 className="title">About page</h1>
		</div>
	);
}

export default About;
