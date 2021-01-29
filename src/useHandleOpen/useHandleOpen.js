import { useEffect, useState } from 'react';

export function useHandleOpen(open = false) {
	const [isOpen, setIsOpen] = useState(open);

	useEffect(() => {
		setIsOpen(open);
	}, [open]);

	function handleOpen() {
		setIsOpen(true);
	}

	function handleClose() {
		setIsOpen(false);
	}

	return { isOpen, handleOpen, handleClose };
}
