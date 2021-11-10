import React from 'react';
import { Button } from '../';

export function App() {
	return (
		<>
			<div
				style={{
					display: 'flex',
					justifyContent: 'space-around',
					margin: '2rem',
				}}
			>
				<Button>primary</Button>
				<Button type='secondary'>secondary</Button>
				<Button disabled> disabled</Button>
				<Button tooltip={{ title: 'with tooltip' }}>with tooltip</Button>
				<Button
					tooltip={{
						title: 'with tooltip diferent placement',
						placement: 'left',
					}}
				>
					with tooltip diferent placement
				</Button>
			</div>
		</>
	);
}
