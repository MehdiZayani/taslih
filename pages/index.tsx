import React from "react";
import HeadTag from "../components/HeadTag";
import Navbar from "../components/navbar";
import Homepage from './homepage';

export default function Home() {
	return (
		<div>
			<HeadTag title="Home" />
			<Homepage></Homepage>
		</div>
	);
}
