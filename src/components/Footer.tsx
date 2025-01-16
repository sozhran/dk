import Image from "next/image";

export default function Footer() {
	return (
		<div key="footer" className="footer">
			<a href="https://github.com/sozhran/dk" target="_blank">
				<Image alt="github share icon" src="https://i.imgur.com/5Qr1cEC.png" width="25" height="25" className="share" />
			</a>
		</div>
	);
}
