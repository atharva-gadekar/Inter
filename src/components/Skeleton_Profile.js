import React from "react";
import ContentLoader from "react-content-loader";

const DevtoCard = (props) => (
	<>
		<ContentLoader viewBox="0 0 1450 800" height={800} width={1500} {...props}>
			<circle cx="30" cy="258" r="30" />
			<rect x="0" y="0" rx="0" ry="0" width="1090" height="200" />
			<rect x="75" y="233" rx="0" ry="4" width="1000" height="13" />
			<rect x="75" y="260" rx="4" ry="4" width="500" height="8" />
			<rect x="0" y="300" rx="0" ry="0" width="1090" height="400" />
		</ContentLoader>
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
			<rect x="190" y="489" rx="2" ry="2" width="700" height="18" />
			<rect x="190" y="519" rx="2" ry="2" width="700" height="18" />
			<rect x="199" y="440" rx="2" ry="2" width="600" height="21" />
			<rect x="190" y="551" rx="2" ry="2" width="700" height="18" />
			<rect x="190" y="580" rx="2" ry="2" width="700" height="18" />
			<rect x="630" y="615" rx="2" ry="2" width="104" height="11" />
			<rect x="190" y="70" rx="2" ry="2" width="700" height="334" />
		</ContentLoader>
	</>
);

DevtoCard.metadata = {
	name: "RoyalBhati",
	github: "royalbhati",
	description: "Dev.to card",
	filename: "DevtoCard",
};

export default DevtoCard;
