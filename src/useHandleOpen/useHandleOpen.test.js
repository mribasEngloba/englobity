import { useHandleOpen } from './useHandleOpen';
import { renderHook, act } from '@testing-library/react-hooks';

describe('Use modal should', () => {
	it('start as false', () => {
		const { result } = renderHook(() => useHandleOpen());

		expect(result.current.isOpen).toBeFalsy();
	});

	it('turn true is open property', () => {
		const { result } = renderHook(() => useHandleOpen());

		expect(result.current.isOpen).toBeFalsy();

		act(() => {
			result.current.handleOpen();
		});

		expect(result.current.isOpen).toBeTruthy();
	});

	it('toggle is open property', () => {
		const { result } = renderHook(() => useHandleOpen());

		expect(result.current.isOpen).toBeFalsy();

		act(() => {
			result.current.handleOpen();
		});

		expect(result.current.isOpen).toBeTruthy();

		act(() => {
			result.current.handleClose();
		});

		expect(result.current.isOpen).toBeFalsy();
	});
});
