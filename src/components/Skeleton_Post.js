import React from "react";
import ContentLoader from "react-content-loader";

const MyLoader = (props) => (
	<ContentLoader
		className="-mt-5"
		speed={2}
		width={1800}
		height={1200}
		viewBox="0 0 1800 1200"
		backgroundColor="#f0f0f0"
		foregroundColor="#ecebeb"
		{...props}
	>
		<circle cx="600" cy="621" r="10" />
		<rect x="40" y="489" rx="2" ry="2" width="700" height="18" />
		<rect x="40" y="519" rx="2" ry="2" width="700" height="18" />
		<rect x="99" y="440" rx="2" ry="2" width="600" height="21" />
		<rect x="40" y="551" rx="2" ry="2" width="700" height="18" />
		<rect x="40" y="580" rx="2" ry="2" width="700" height="18" />
		<rect x="630" y="615" rx="2" ry="2" width="104" height="11" />
		<rect x="40" y="70" rx="2" ry="2" width="700" height="334" />
	</ContentLoader>
);

export default MyLoader;
