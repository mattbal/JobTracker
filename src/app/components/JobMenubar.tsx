'use client';

import AddJobBtn from '../components/AddJobBtn';
import FilterBtn from './FilterBtn';
import { Dispatch, SetStateAction } from 'react';
import { Job } from '@prisma/client';

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
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
  jobs: Job[];
  setJobs: Dispatch<SetStateAction<Job[]>>;
  setStats: (jobs: Job[]) => void;
};

export default function JobMenubar({
  applied,
  pending,
  rejected,
  offered,
  setApplied,
  setPending,
  setRejected,
  setOffered,
  handleFilterChange,
  search,
  setSearch,
  jobs,
  setJobs,
  setStats,
}: Props) {
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
            className='text-gray-700 placeholder-gray-700 appearance-none rounded-md block pl-11 pr-2.5 py-3 w-full ring-1 ring-gray-950/20 focus:ring-inset border-none focus:ring-2 focus:ring-blue-600 focus:outline-none'
            placeholder='Search'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <FilterBtn
          applied={applied}
          pending={pending}
          rejected={rejected}
          offered={offered}
          setApplied={setApplied}
          setPending={setPending}
          setRejected={setRejected}
          setOffered={setOffered}
          handleFilterChange={handleFilterChange}
        />
      </div>
      <AddJobBtn jobs={jobs} setJobs={setJobs} setStats={setStats} />
    </div>
  );
}
