'use client';
import { Popover, Transition } from '@headlessui/react';
import { Fragment, Dispatch, SetStateAction } from 'react';

type Props = {
  applied: boolean;
  pending: boolean;
  rejected: boolean;
  offered: boolean;
  setApplied: Dispatch<SetStateAction<boolean>>;
  setPending: Dispatch<SetStateAction<boolean>>;
  setRejected: Dispatch<SetStateAction<boolean>>;
  setOffered: Dispatch<SetStateAction<boolean>>;
  handleFilterChange: (e: React.ChangeEvent<HTMLInputElement>, filter: string) => void;
};

export default function FilterBtn({
  applied,
  pending,
  rejected,
  offered,
  setApplied,
  setPending,
  setRejected,
  setOffered,
  handleFilterChange,
}: Props) {
  return (
    <Popover className='relative'>
      <Popover.Button className='inline-flex items-center border border-gray-950/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-600 rounded-md gap-x-2 py-3 px-2.5 text-gray-700 hover:bg-gray-50'>
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
            d='M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 0 1-.659 1.591l-5.432 5.432a2.25 2.25 0 0 0-.659 1.591v2.927a2.25 2.25 0 0 1-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 0 0-.659-1.591L3.659 7.409A2.25 2.25 0 0 1 3 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0 1 12 3Z'
          />
        </svg>
        <span>Filter</span>
      </Popover.Button>
      <Transition
        as={Fragment}
        enter='transition ease-out duration-200'
        enterFrom='opacity-0'
        enterTo='opacity-100'
        leave='transition ease-in duration-150'
        leaveFrom='opacity-100'
        leaveTo='opacity-0'
      >
        <Popover.Panel className='absolute z-10 mt-2 p-4 bg-white border rounded shadow-lg border-gray-950/20'>
          <fieldset>
            <legend className='font-bold mb-2'>Status</legend>
            <div className='space-y-2'>
              <div className='relative flex items-start'>
                <div className='flex h-6 items-center'>
                  <input
                    id='applied'
                    name='applied'
                    type='checkbox'
                    checked={applied}
                    onChange={(e) => {
                      setApplied(!applied);
                      handleFilterChange(e, 'applied');
                    }}
                    className='h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-600'
                  />
                </div>
                <div className='ml-3 text-sm leading-6'>
                  <label htmlFor='applied' className='font-medium text-gray-900'>
                    Applied
                  </label>
                </div>
              </div>
              <div className='relative flex items-start'>
                <div className='flex h-6 items-center'>
                  <input
                    id='pending'
                    name='pending'
                    type='checkbox'
                    checked={pending}
                    onChange={(e) => {
                      setPending(!pending);
                      handleFilterChange(e, 'pending');
                    }}
                    className='h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-600'
                  />
                </div>
                <div className='ml-3 text-sm leading-6'>
                  <label htmlFor='pending' className='font-medium text-gray-900'>
                    Pending
                  </label>
                </div>
              </div>
              <div className='relative flex items-start'>
                <div className='flex h-6 items-center'>
                  <input
                    id='rejected'
                    name='rejected'
                    type='checkbox'
                    checked={rejected}
                    onChange={(e) => {
                      setRejected(!rejected);
                      handleFilterChange(e, 'rejected');
                    }}
                    className='h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-600'
                  />
                </div>
                <div className='ml-3 text-sm leading-6'>
                  <label htmlFor='rejected' className='font-medium text-gray-900'>
                    Rejected
                  </label>
                </div>
              </div>
              <div className='relative flex items-start'>
                <div className='flex h-6 items-center'>
                  <input
                    id='offered'
                    name='offered'
                    type='checkbox'
                    checked={offered}
                    onChange={(e) => {
                      setOffered(!offered);
                      handleFilterChange(e, 'offered');
                    }}
                    className='h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-600'
                  />
                </div>
                <div className='ml-3 text-sm leading-6'>
                  <label htmlFor='offered' className='font-medium text-gray-900'>
                    Offered
                  </label>
                </div>
              </div>
            </div>
          </fieldset>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
