import React, { useEffect, useState } from "react";
import "./center.css";
import GetImage from "./getImages";

interface ServerDetails {
	title: string;
	description: string;
	settings: Record<string, string>;
	advanced: Record<string, string>;
	rules: Record<string, number>;
}

const ServerDetails: React.FC = () => {
	const [serverDetails, setServerDetails] = useState<ServerDetails | null>(
		null
	);
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<string>("");

	useEffect(() => {
		const fetchServerDetails = async () => {
			try {
				const response = await fetch(
					"https://fog-back.onrender.com/api/server-details"
				);
				if (!response.ok) {
					throw new Error("Failed to fetch server details");
				}
				const data: ServerDetails = await response.json();
				setServerDetails(data);
			} catch (err: any) {
				setError(err.message);
			} finally {
				setLoading(false);
			}
		};

		fetchServerDetails();
	}, []);

	if (loading) {
		return <div className="text-white">Loading...</div>;
	}

	if (error) {
		return <div className="text-red-500">Error: {error}</div>;
	}

	return (
		<div className="mt-10 sara">
			{serverDetails && (
				<>
					<div className="mb-8 ">
						<h2 className="text-xl font-bold  text-white mb-2">
							{serverDetails.title}
						</h2>
						<div className="chota font-bold text-gray-300 lines">
							<p className="flex">
								<img
									className="w-4"
									alt="United States"
									src="http://purecatamphetamine.github.io/country-flag-icons/3x2/US.svg"
								/>{" "}
								CONQUEST LARGE - LANCING DAM - CUSTOM - 60 hz
							</p>
							<p>
								Server protected by The_K-50 AntiCheat. Vip !Rules, Questions,
								Request, Appeal, Visit us: www.epg.gg | Discord{" "}
							</p>
							<p>https://discord.gg/3r5NK4d</p>
						</div>
					</div>
					<div className="center_button flex">
						<button>JOIN</button>
						<button>SPECTATE</button>
						<button>JOIN AS COMMANDER</button>
						<button className="two">13672</button>
					</div>
					<div className="flex gap-24 ml- mt-4">
						<div>
							<p className="top">PLAYERS</p>
							<p className="text-lg"> 60/64</p>
						</div>
						<div>
							<p className="top">PING</p>
							<p className="text-lg">104ms</p>
						</div>
						<div>
							<p className="top">TICKRATE</p>
							<p className="text-lg">60Hz</p>
						</div>
					</div>

					<div className="center_grid grid grid-cols-2 md:grid-cols-3  ">
						<div className="Newfont p-2  ">
							<div className="text- font mb-3 text-white">SETTINGS</div>
							<div className="">
								{Object.entries(serverDetails.settings).map(([key, value]) => (
									<div>
										<div
											key={key}
											className="flex ml-4 justify-between p-1.5 content items-center"
										>
											<span className=" uppercase text-base ">{key}</span>
											<span className=" text-base ">{value}</span>
										</div>
										<div className="line ml-4">
											<hr className=" border-gray-500" />
										</div>
									</div>
								))}
							</div>
						</div>

						<div className="Newfont p-2 rounded-lg ">
							<h2 className="text- font mb-3 text-white">ADVANCED</h2>
							<div className="">
								{Object.entries(serverDetails.advanced).map(([key, value]) => (
									<div>
										<div
											key={key}
											className="flex ml-4 justify-between items-center content p-1.5"
										>
											<span className=" uppercase text-base ">{key}</span>
											<span className=" text-base ">{value}</span>
										</div>
										<div className="line ml-4">
											<hr className=" border-gray-500" />
										</div>
									</div>
								))}
							</div>
						</div>

						<div className="Newfont p-2 rounded ">
							<h2 className="text- font mb-3 text-white">RULES</h2>
							<div className="">
								{Object.entries(serverDetails.rules).map(([key, value]) => (
									<div>
										<div
											key={key}
											className="flex ml-4 justify-between content items-center p-1.5"
										>
											<div className=" uppercase text-base ">{key}</div>

											<div className="text-base ">{value}</div>
										</div>
										<div className="line ml-4">
											<hr className=" border-gray-500" />
										</div>
									</div>
								))}
							</div>
						</div>
					</div>
					<div>
						<GetImage />
					</div>
				</>
			)}
		</div>
	);
};

export default ServerDetails;
