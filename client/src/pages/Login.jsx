import { SignIn, SignUpButton, useUser } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";
import React from "react";

export default function Login() {
	const navigate = useNavigate();

	const user = useUser();

	return (
		<div className="flex items-center justify-center min-h-screen w-full">
			<SignIn signUpUrl="/signup" fallbackRedirectUrl="/game" />
		</div>
	);
}
