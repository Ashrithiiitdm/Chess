import React from "react";

export default function Button({ onClick, children }) {
	return (
		<button
			onClick={onClick}
			className="px-8 text-2xl py-4 bg-green-500 hover:bg-green-700 text-white font-bold rounded"
		>
			{children}
		</button>
	);
}
