import classNames from "classnames/bind";
import styles from "./Contact.module.scss";

const cx = classNames.bind(styles);

function Contact() {
	return (
		<div className={cx("contact")}>
			<h1 className="title">Contact page</h1>
		</div>
	);
}

export default Contact;
