import { useParams } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./ShopDetails.module.scss";

const cx = classNames.bind(styles);

function ShopDetails() {
	const { id } = useParams();

	return (
		<div className={cx("shop-details")}>
			<h1 className="title">Shop details page</h1>
			<h4>Product ID: {id}</h4>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora
				obcaecati delectus reiciendis mollitia illo! Ad, doloremque quo! Quo
				quis, molestias necessitatibus iusto minima assumenda voluptates
				aliquid quibusdam commodi facilis delectus voluptatem explicabo
				culpa ab quam eveniet tempora? Qui eius assumenda quae provident
				molestias aliquam nam eos sapiente quis laboriosam minus veniam
				harum sit repellat odio nobis deserunt, ducimus aut saepe, voluptate
				eveniet molestiae quaerat magnam? Quibusdam, doloribus magnam
				maiores quidem alias maxime libero omnis dicta. Vel perferendis
				tenetur placeat eum, fugiat, odit nostrum suscipit reiciendis
				officia nihil accusantium error aperiam atque, unde eveniet ad magni
				ratione harum. Eveniet, provident praesentium.
			</p>
		</div>
	);
}

export default ShopDetails;
