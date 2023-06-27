import './BurgerMenu.css';
import { useState } from 'react';

function BurgerMenu() {
	const [isOpen, setIsOpen] = useState(false);

	const setOpenedState = () => {
		let reverseOpened = isOpen;
		setIsOpen(!reverseOpened);
	};

	return (
		<div className={isOpen ? 'menu__btn' : 'menu__btn-open'} onClick={setOpenedState}>
			<div className="menu__btn-burger">
        
      </div>
		</div>
	);
}

export default BurgerMenu;
