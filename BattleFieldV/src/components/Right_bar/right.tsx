import React from "react";
import "./right.css";
import i1 from "./Right_images/r1.png";
import i2 from "./Right_images/r2.png";
import i3 from "./Right_images/r3.png";

const Right: React.FC = () => {
	return (
		<div>
			<nav className="nav__cont">
				<ul className="nav">
					<li className="nav__items flex">
						<img className="ml-2 mt-4 w-9" src={i1} />
						<div className=" mt-10 h-9 w-36  right_text">
							<div className="">
								<p className="mt-3 ml-3 font-bold">Squad Join</p>
								{/* <p className="ml-3">OFFLINE</p> */}
							</div>
						</div>
					</li>

					<li className="nav__items flex">
						<img className="ml-2  w-9" src={i2} />
						<div className=" mt-5 h-9 w-36  right_text">
							<div className="">
								<p className="mt-1 font-bold ml-3">MaryJane</p>
								<p className="ml-3">ONLINE</p>
							</div>
						</div>
					</li>

					<li className="nav__items flex ">
						<img className="ml-2  w-9" src={i3} />
						<div className=" mt-5 h-9 w-36 right_text">
							<div className="">
								<p className="mt-1 ml-3">420</p>
								<p className="ml-3">OFFLINE</p>
							</div>
						</div>
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default Right;
