import Home from "@/pages/Home";
import About from "@/pages/About";
import Shop from "@/pages/Shop";
import ShopDetails from "@/pages/ShopDetails";
import Contact from "@/pages/Contact";

const routes = [
	{
		path: "/",
		component: Home,
	},
	{
		path: "/about",
		component: About,
	},
	{
		path: "/shop",
		component: Shop,
	},
	{
		path: "/shop-details/:id",
		component: ShopDetails,
	},
	{
		path: "/contact",
		component: Contact,
	},
];

export { routes };
