'use client';

import AddJobBtn from '../components/AddJobBtn';
import FilterBtn from './FilterBtn';
import ColumnsBtn from '../components/ColumnsBtn';

export default function JobMenubar() {
  return (
    <div className='flex items-center justify-between mt-9'>
      <div className='flex items-center gap-x-3'>
        <div className='relative w-80'>
          <div className='flex items-center pl-2.5 left-0 top-0 bottom-0 absolute pointer-events-none'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth='1.5'
              stroke='currentColor'
              className='w-6 h-6'
              aria-hidden='true'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z'
              />
            </svg>
          </div>
          <input
            name='search'
            type='text'
            className='text-gray-700 placeholder-gray-700 appearance-none rounded block pl-11 pr-2.5 py-3 w-full ring-1 ring-gray-950/20 focus:ring-inset  focus:ring-2 focus:ring-blue-600 focus:outline-none hover:ring-gray-950/30 hover:bg-gray-100 transition-colors ease-linear duration-150'
            placeholder='Search'
          />
        </div>
        <FilterBtn />
      </div>
      <AddJobBtn />
    </div>
  );
}
