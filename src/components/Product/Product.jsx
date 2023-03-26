import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./Product.module.scss";

const cx = classNames.bind(styles);

function Product({ product }) {
	return (
		<div className={cx("product")}>
			<h6 className={cx("id")}>ID: {product.id}</h6>
			<h6 className={cx("title")}>Title: {product.title}</h6>
			<div className={cx("price")}>Price: {product.price}$</div>
			<Link to={ `/shop-details/${product.id}` } className={cx('show-details-btn')}>Show details</Link>
		</div>
	);
}

export default Product;
