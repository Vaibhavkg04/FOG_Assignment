import i1 from "./game_image/game1.png";
import i2 from "./game_image/game2.png";
import i3 from "./game_image/game3.png";
import i4 from "./game_image/game4.png";
import i5 from "./game_image/game5.png";
import i6 from "./game_image/vid.png";

import i7 from "./game_image/News.png";

function Left(): JSX.Element {
	return (
		<div className="text-white mt-32 left_img ">
			<img className="h-8 ml-4 mb-2.5 " src={i1} />
			<img className="h-8 ml-4 mb-2.5" src={i2} />
			<img className="h-8 mb-2.5 " src={i3} />
			<img className="h-8 ml-4 mb-2.5" src={i4} />
			<img className="w-7 ml-4  mb-2.5" src={i5} />
			<img className="w-7 ml-4  mb-2.5" src={i6} />

			<img className="w-7 ml-4  mb-2" src={i7} />
		</div>
	);
}
export default Left;
