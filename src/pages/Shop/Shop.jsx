import classNames from "classnames/bind";
import styles from "./Shop.module.scss";

import Product from "@/components/Product";

const cx = classNames.bind(styles);

const products = [
	{ id: 1, title: "Carrot", price: 120 },
	{ id: 2, title: "Tomato", price: 96 },
	{ id: 3, title: "Meat", price: 150 },
	{ id: 4, title: "Fish", price: 80 },
];

function Shop() {
	return (
		<div className={cx("shop")}>
			<h1 className="title">Shop page</h1>
			<div className={cx("shop-list")}>
				{products &&
					products.map((product) => <Product key={product.id} product={product} />)}
			</div>
		</div>
	);
}

export default Shop;
