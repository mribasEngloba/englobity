import React, {useState } from 'react';
import { Button, ButtonGroup, DialogModal } from '../';
import CloseIcon from '@material-ui/icons/Close';
import AddIcon from '@material-ui/icons/Add';

export function App() {

  const [openModal, setOpenModal] = useState(false);

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
        <Button type="secondary">secondary</Button>
        <Button disabled>look disabled</Button>
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
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          margin: '2rem',
        }}
      >
        <ButtonGroup
          defaultOption={1}
          options={[
            { name: 'Action 1', icon: <AddIcon />, action: () => null },
            { name: 'Action 2', action: () => null },
          ]}
        ></ButtonGroup>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          margin: '2rem',
        }}
      >
        <Button onClick={() => setOpenModal(true)}>This opens a dialog</Button>
        
        <DialogModal
          fullWidth
          title={'Modal'}
          description={''}
          isOpen={openModal}
          onClose={() => setOpenModal(false)}
          buttons={[
            {
              children: <CloseIcon />,
              text: 'Close',
              type: 'secondary',
              onClick: () => setOpenModal(false)
            },
            {
              children: <CloseIcon />,
              text: 'Close',
              type: 'secondary',
              onClick: () => setOpenModal(false)
            }
          ]}
        >
          <p>And this the content</p>
        </DialogModal>
      </div>
    </>
  );
}
