'use client';

import { Job, Status } from '@prisma/client';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState, Dispatch, SetStateAction } from 'react';
import { Oval } from 'react-loader-spinner';
import { useRouter } from 'next/navigation';

type Props = {
  job: Job;
  jobs: Job[];
  setJobs: Dispatch<SetStateAction<Job[]>>;
  setStats: (jobs: Job[]) => void;
};

export default function EditJobBtn({ job, jobs, setJobs, setStats }: Props) {
  const [open, setOpen] = useState(false);

  const router = useRouter();

  const [jobURL, setJobURL] = useState(job.jobPost);
  const [name, setName] = useState(job.name);
  const [company, setCompany] = useState(job.company);
  const [jobID, setJobID] = useState(job.jobID);
  const [status, setStatus] = useState(
    String(job.status.charAt(0) + job.status.slice(1).toLocaleLowerCase())
  );
  const [dateApplied, setDateApplied] = useState(
    new Date(job.dateApplied).toLocaleDateString()
  );

  const [loading, setLoading] = useState(false);

  async function handleDelete() {
    try {
      const response = await fetch(`/api/jobs/${job.id}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error('Something went wrong');
      }
      const newJobs = jobs.filter((j: Job) => j.id !== job.id);
      setJobs(newJobs);
      setStats(newJobs);
      setLoading(false);
      setOpen(false);
    } catch (error) {
      console.error(error);
    }
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (name === '' || company === '') return;

    setLoading(true);
    try {
      let newStatus: Status;
      switch (status) {
        case 'Applied':
          newStatus = Status.APPLIED;
          break;
        case 'Pending':
          newStatus = Status.PENDING;
          break;
        case 'Offered':
          newStatus = Status.OFFERED;
          break;
        case 'Rejected':
          newStatus = Status.REJECTED;
          break;
        default:
          newStatus = Status.APPLIED;
      }
      const response = await fetch(`/api/jobs/${job.id}`, {
        method: 'PATCH',
        body: JSON.stringify({
          jobPost: jobURL,
          name: name,
          company: company,
          jobID: jobID,
          status: newStatus,
        }),
      });
      if (!response.ok) {
        throw new Error('Something went wrong');
      }
      const newJobs = jobs.map((j: Job) =>
        j.id === job.id
          ? {
              ...j,
              jobPost: jobURL,
              name: name,
              company: company,
              jobID: jobID,
              status: newStatus,
            }
          : j
      );
      setJobs(newJobs);
      setStats(newJobs);
      setLoading(false);
      setOpen(false);
      router.refresh();
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <button
        type='button'
        onClick={() => setOpen(true)}
        className=' focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-600 rounded-md text-blue-600 hover:text-blue-900'
      >
        Edit
      </button>
      <Transition.Root show={open} as={Fragment}>
        <Dialog as='div' className='relative z-10' onClose={setOpen}>
          <div className='fixed inset-0' />
          <div className='fixed inset-0 overflow-hidden'>
            <div className='absolute inset-0 overflow-hidden'>
              <div className='pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10'>
                <Transition.Child
                  as={Fragment}
                  enter='transform transition ease-in-out duration-500 sm:duration-700'
                  enterFrom='translate-x-full'
                  enterTo='translate-x-0'
                  leave='transform transition ease-in-out duration-500 sm:duration-700'
                  leaveFrom='translate-x-0'
                  leaveTo='translate-x-full'
                >
                  <Dialog.Panel className='pointer-events-auto w-screen max-w-sm'>
                    <form
                      onSubmit={handleSubmit}
                      className='flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl px-4'
                    >
                      <div className=''>
                        <div className='flex items-start justify-between'>
                          <Dialog.Title className='text-base font-semibold leading-6 text-gray-900'>
                            Edit job
                          </Dialog.Title>
                          <div className='ml-3 flex h-7 items-center'>
                            <button
                              type='button'
                              className='relative rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
                              onClick={() => setOpen(false)}
                            >
                              <span className='absolute -inset-2.5' />
                              <span className='sr-only'>Close panel</span>
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
                                  d='M6 18 18 6M6 6l12 12'
                                />
                              </svg>
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className='mt-6 flex flex-col space-y-4'>
                        <div>
                          <label
                            htmlFor='jobURL'
                            className='block text-sm font-medium leading-6 text-gray-900'
                          >
                            Job URL
                          </label>
                          <div className='mt-1 flex rounded-md'>
                            <input
                              type='text'
                              name='jobURL'
                              id='jobURL'
                              value={jobURL}
                              onChange={(e) => setJobURL(e.target.value)}
                              className='block w-full border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 rounded'
                              placeholder='https://'
                            />
                          </div>
                        </div>
                        <div>
                          <label
                            htmlFor='name'
                            className='block text-sm font-medium leading-6 text-gray-900'
                          >
                            Name
                          </label>
                          <div className='mt-1'>
                            <input
                              type='text'
                              name='name'
                              id='name'
                              value={name}
                              onChange={(e) => setName(e.target.value)}
                              className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600'
                            />
                          </div>
                        </div>
                        <div>
                          <label
                            htmlFor='company'
                            className='block text-sm font-medium leading-6 text-gray-900'
                          >
                            Company
                          </label>
                          <div className='mt-1'>
                            <input
                              type='text'
                              name='company'
                              id='company'
                              value={company}
                              onChange={(e) => setCompany(e.target.value)}
                              className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600'
                            />
                          </div>
                        </div>
                        <div>
                          <label
                            htmlFor='company'
                            className='block text-sm font-medium leading-6 text-gray-900'
                          >
                            Job ID
                          </label>
                          <div className='mt-1'>
                            <input
                              type='text'
                              name='jobID'
                              id='jobID'
                              value={jobID}
                              onChange={(e) => setJobID(e.target.value)}
                              className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600'
                            />
                          </div>
                        </div>
                        <div>
                          <label
                            htmlFor='company'
                            className='block text-sm font-medium leading-6 text-gray-900'
                          >
                            Company
                          </label>
                          <div className='mt-1'>
                            <input
                              type='text'
                              name='company'
                              id='company'
                              value={company}
                              onChange={(e) => setCompany(e.target.value)}
                              className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600'
                            />
                          </div>
                        </div>
                        <div>
                          <label
                            htmlFor='dateApplied'
                            className='block text-sm font-medium leading-6 text-gray-900'
                          >
                            Date Applied
                          </label>
                          <div className='mt-1'>
                            <input
                              type='text'
                              name='dateApplied'
                              id='dateApplied'
                              value={dateApplied}
                              disabled
                              className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 disabled:ring-gray-200'
                            />
                          </div>
                        </div>
                        <div>
                          <label
                            htmlFor='status'
                            className='block text-sm font-medium leading-6 text-gray-900'
                          >
                            Status
                          </label>
                          <select
                            id='status'
                            name='status'
                            defaultValue={status}
                            onChange={(e) => setStatus(e.target.value)}
                            className='mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-blue-600'
                          >
                            <option>Applied</option>
                            <option>Pending</option>
                            <option>Offered</option>
                            <option>Rejected</option>
                          </select>
                        </div>
                      </div>
                      <div className='justify-between flex items-center mt-6'>
                        <button
                          type='button'
                          className='rounded-md bg-white px-3 py-2 font-semibold text-red-600'
                          onClick={handleDelete}
                        >
                          Delete
                        </button>
                        <div className='flex justify-end space-x-3'>
                          <button
                            type='button'
                            className='rounded-md bg-white px-3 py-2 font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50'
                            onClick={() => setOpen(false)}
                          >
                            Cancel
                          </button>
                          <button
                            type='submit'
                            className='bg-blue-600 py-2 px-3 text-white font-semibold hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 rounded-md ml-auto flex justify-center'
                          >
                            {loading ? (
                              <Oval
                                height={24}
                                width={24}
                                strokeWidth={4}
                                color='#fff'
                                secondaryColor='#f5f5f5'
                              />
                            ) : (
                              'Save'
                            )}
                          </button>
                        </div>
                      </div>
                    </form>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
}
