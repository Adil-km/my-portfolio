
import { useState } from "react";
const ScrollToButton = () => {

	const [visible, setVisible] = useState(false);

	const toggleVisible = () => {
		const scrolled = document.documentElement.scrollTop;
		if (scrolled > 300) {
			setVisible(true);
		} else if (scrolled <= 300) {
			setVisible(false);
		}
	};

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth"

		});
	};

	window.addEventListener("scroll", toggleVisible);

	return (
		<div className="scroll-to-button" onClick={scrollToTop} style={{opacity: visible ? "1" : "0" }}>
		</div>
	);
};

export default ScrollToButton;