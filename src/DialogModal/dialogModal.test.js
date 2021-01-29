import React from 'react';
import { shallow } from 'enzyme';
import { DialogModal } from './DialogModal';

describe('Dialog modal should', () => {
	it('render and work as expected', () => {
		const handleClose = jest.fn();
		const handleAccept = jest.fn();
		const title = 'dialog title';
		const description = ' dialog description';
		const isOpen = true;
		const childrenText = 'childrentex';
		const buttons = [
			{ id: 'dialog-button-cancel', onClick: handleClose, text: 'cancel' },
			{ id: 'dialog-button-accept', onClick: handleAccept, text: 'accept' },
		];

		const dialogModal = shallow(
			<DialogModal
				title={title}
				description={description}
				buttons={buttons}
				isOpen={isOpen}
				handleClose={handleClose}
			>
				<div id='dialog_children'>{childrenText}</div>
			</DialogModal>
		);

		expect(dialogModal.find('#dialog_title').text()).toContain(title);
		expect(dialogModal.find('#dialog_description').text()).toContain(
			description
		);
		expect(dialogModal.find('#dialog_children').text()).toContain(childrenText);
		expect(dialogModal.find('#dialog-button-cancel').text()).toContain(
			'cancel'
		);
		expect(dialogModal.find('#dialog-button-accept').text()).toContain(
			'accept'
		);

		dialogModal.find('#dialog-button-accept').simulate('click');
		dialogModal.find('#dialog-button-cancel').simulate('click');

		expect(handleClose).toBeCalledTimes(1);
		expect(handleAccept).toBeCalledTimes(1);
	});
});
