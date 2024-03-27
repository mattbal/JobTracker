import { useState } from 'react';
import {
  DialogTrigger,
  Dialog,
  Modal,
  ModalOverlay,
  Button,
  Input,
  Label,
  TextField,
  Select,
  SelectValue,
  Popover,
  ListBox,
  ListBoxItem,
  Heading,
} from 'react-aria-components';
import Status from './Status';
import { Oval } from 'react-loader-spinner';

export default function AddJobBtn() {
  const [jobURL, setJobURL] = useState('');
  const [status, setStatus] = useState('react-aria-1');

  return (
    <DialogTrigger>
      <Button className='inline-flex items-center border border-gray-950/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-600 rounded gap-x-2 py-3 px-2.5 text-gray-700 hover:bg-gray-100 hover:border-gray-950/30 transition-colors ease-linear duration-150'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth='1.5'
          stroke='currentColor'
          className='w-6 h-6'
        >
          <path strokeLinecap='round' strokeLinejoin='round' d='M12 4.5v15m7.5-7.5h-15' />
        </svg>
        Add job
      </Button>
      <ModalOverlay className='fixed inset-0 z-20'>
        <Modal className='w-full max-w-sm p-6 overflow-hidden text-left align-middle bg-white shadow-xl absolute right-0 inset-y-0 border-l border-gray-200'>
          <Dialog className=''>
            {({ close }) => (
              <form className='flex flex-col'>
                <div className='flex items-center pb-2 border-b border-gray-950/10'>
                  <Heading slot='title' className='text-xl font-bold text-gray-900'>
                    Add job
                  </Heading>
                  <Button onPress={close} className='ml-auto text-gray-600'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      strokeWidth='1.5'
                      stroke='currentColor'
                      className='w-6 h-6'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M6 18 18 6M6 6l12 12'
                      />
                    </svg>
                  </Button>
                </div>
                <TextField autoFocus className='mt-5' value={jobURL} onChange={setJobURL}>
                  <Label>Job post URL</Label>
                  <div className='flex mt-2 rounded'>
                    <Input
                      placeholder='https://...'
                      className='text-gray-700 appearance-none block px-2.5 py-3 w-full ring-1 ring-inset ring-gray-950/20 focus:ring-2 focus:ring-blue-600 focus:outline-none rounded-l'
                    />
                    <Button
                      className='px-3.5 py-2 text-white -ml-px bg-blue-500 w-fit active:bg-blue-600 rounded-r'
                      onPress={() => alert('test')}
                    >
                      Scan
                    </Button>
                  </div>
                </TextField>
                <TextField className='mt-4'>
                  <Label>Name</Label>
                  <Input className='text-gray-700 appearance-none block px-2.5 py-3 w-full ring-1 ring-inset ring-gray-950/20 focus:ring-2 focus:ring-blue-600 focus:outline-none hover:ring-gray-950/30 rounded-l' />
                </TextField>
                <TextField className='mt-4'>
                  <Label>Company</Label>
                  <Input className='text-gray-700 appearance-none block px-2.5 py-3 w-full ring-1 ring-inset ring-gray-950/20 focus:ring-2 focus:ring-blue-600 focus:outline-none hover:ring-gray-950/30 rounded-l' />
                </TextField>
                <TextField className='mt-4'>
                  <Label>Job ID</Label>
                  <Input className='text-gray-700 appearance-none block px-2.5 py-3 w-full ring-1 ring-inset ring-gray-950/20 focus:ring-2 focus:ring-blue-600 focus:outline-none hover:ring-gray-950/30 rounded-l' />
                </TextField>
                <TextField className='mt-4'>
                  <Label>Date Posted</Label>
                  <Input className='text-gray-700 appearance-none block px-2.5 py-3 w-full ring-1 ring-inset ring-gray-950/20 focus:ring-2 focus:ring-blue-600 focus:outline-none hover:ring-gray-950/30 rounded-l' />
                </TextField>
                <TextField className='mt-4'>
                  <Label>Date Applied</Label>
                  <Input className='text-gray-700 appearance-none block px-2.5 py-3 w-full ring-1 ring-inset ring-gray-950/20 focus:ring-2 focus:ring-blue-600 focus:outline-none hover:ring-gray-950/30 rounded-l' />
                </TextField>
                <Select
                  selectedKey={status}
                  onSelectionChange={(selected) => setStatus(selected)}
                  className='flex flex-col mt-4'
                >
                  <Label>Status</Label>
                  <Button className='flex items-center max-w-fit border border-gray-950/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-600 py-3 px-2.5 text-gray-700 rounded mt-2'>
                    <SelectValue className='flex-1' />
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      strokeWidth='1.5'
                      stroke='currentColor'
                      className='w-6 h-6 ml-1'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9'
                      />
                    </svg>
                  </Button>
                  <Popover className='overflow-auto bg-white rounded shadow-lg ring-1 ring-black/5'>
                    <ListBox selectionMode='single' className='p-1 outline-none'>
                      <ListBoxItem className='flex items-center p-1 text-gray-900 rounded select-none group'>
                        <Status>Applied</Status>
                      </ListBoxItem>
                      <ListBoxItem className='flex items-center p-1 text-gray-900 rounded select-none group'>
                        <Status>Interviewing</Status>
                      </ListBoxItem>
                      <ListBoxItem className='flex items-center p-1 text-gray-900 rounded select-none group'>
                        <Status>Offered</Status>
                      </ListBoxItem>
                      <ListBoxItem className='flex items-center p-1 text-gray-900 rounded select-none group'>
                        <Status>Rejected</Status>
                      </ListBoxItem>
                    </ListBox>
                  </Popover>
                </Select>
                <Button
                  className='px-3.5 py-2 mt-6 text-white bg-blue-500 rounded w-fit ml-auto active:bg-blue-600'
                  onPress={close}
                >
                  Add job
                </Button>
              </form>
            )}
          </Dialog>
        </Modal>
      </ModalOverlay>
    </DialogTrigger>
  );
}
