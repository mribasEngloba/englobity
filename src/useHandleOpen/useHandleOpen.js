import { useCallback, useEffect, useState } from 'react';

export function useHandleOpen(open = false) {
	const [isOpen, setIsOpen] = useState(open);

	useEffect(() => {
		setIsOpen(open);
	}, [open]);

	const handleOpen = useCallback(() => {
		setIsOpen(true);
	}, []);

	const handleClose = useCallback(() => {
		setIsOpen(false);
	}, []);

	return { isOpen, handleOpen, handleClose };
}
