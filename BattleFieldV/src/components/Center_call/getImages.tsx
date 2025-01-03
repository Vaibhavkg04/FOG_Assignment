import i1 from "./center_images/c1.png";
import i2 from "./center_images/c2.png";
import i3 from "./center_images/c3.png";
import i4 from "./center_images/c4.png";
import i5 from "./center_images/c5.png";
import i6 from "./center_images/c6.png";
import "./getimage.css";
function GetImage(): JSX.Element {
	return (
		<div>
			<p className="mt-4 ">MAP ROTATION</p>
			<div className="center_grid2 grid grid-cols-1 md:grid-cols-4 gap-3 mr-4 ">
				<img src={i1} />
				<img src={i2} />
				<img src={i3} />
				<img src={i4} />
				<img src={i5} />
				<img src={i6} />
				<img src={i2} />
				<img src={i5} />
				<img src={i1} />
				<img src={i2} />
				<img src={i3} />
				<img src={i4} />
				<img src={i5} />
				<img src={i6} />
				<img src={i2} />
				<img src={i6} />
			</div>
			<div className="mb-14"></div>
		</div>
	);
}
export default GetImage;
