import React from "react";
import Background_img from "../assets/images/menu__background.jpg";
import Left from "./Left_bar/left";
import "./server.css";
import Right from "./Right_bar/right";
import ServerDetails from "./Center_call/center";
import { MdKeyboardArrowLeft } from "react-icons/md";
// import { FaBeer } from "react-icons/fa";

// countries.includes('US') === true
const Server: React.FC = () => {
	const backgroundStyle: React.CSSProperties = {
		backgroundImage: `url(${Background_img})`,
		backgroundSize: "cover",
		backgroundPosition: "center",
		backgroundRepeat: "no-repeat",
		height: "100vh",
		width: "100%",
		filter: "brightness(0.4)",
		zIndex: -1,
		position: "absolute",
	};

	return (
		<div className="Pura relative">
			<div style={backgroundStyle}></div>

			{/* Content */}
			<div className="flex ">
				<div className="w-14 fixed">
					<Left />
				</div>
				<div className="vertical_line w-8 ml-14 "></div>
				<div className="text-white font-normal text-xs">
					<div className="mt-5 text-white flex ">
						<div>
							<MdKeyboardArrowLeft className=" text-4xl text-gray-500" />
						</div>
						<div className="mt-2">MULTIPLAYER / SERVER BROWSER /</div>
					</div>
					<div className="text-2xl ml-4">SERVER INFO</div>

					<div>
						<ServerDetails />
					</div>
				</div>

				<div>
					<Right />
				</div>
			</div>
		</div>
	);
};

export default Server;
