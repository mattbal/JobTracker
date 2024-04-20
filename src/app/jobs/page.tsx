'use client';
import StatusBubble from '../components/StatusBubble';
import Stat from '../components/Stat';
import JobMenubar from '../components/JobMenubar';
import { Job, Status } from '@prisma/client';
import prisma from '@/lib/prisma';
import EditJobBtn from '../components/EditJobBtn';
import { useState, useEffect } from 'react';
import SkeletonStat from '../components/SkeletonStat';
import { useRouter, useSearchParams } from 'next/navigation';

export default function Page() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [jobs, setJobs] = useState<Job[]>([]);
  const [isLoading, setLoading] = useState(true);

  const [search, setSearch] = useState(searchParams.get('q'));

  const [numActiveJobs, setNumActiveJobs] = useState(0);
  const [numPendingJobs, setNumPendingJobs] = useState(0);
  const [error, setError] = useState(null);

  const [applied, setApplied] = useState(
    searchParams.getAll('filter').includes('applied')
  );
  const [pending, setPending] = useState(
    searchParams.getAll('filter').includes('pending')
  );
  const [rejected, setRejected] = useState(
    searchParams.getAll('filter').includes('rejected')
  );
  const [offered, setOffered] = useState(
    searchParams.getAll('filter').includes('offered')
  );

  function handleFilterChange(e: React.ChangeEvent<HTMLInputElement>, filter: string) {
    const newSearchParams = new URLSearchParams(searchParams.toString());
    e.target.checked
      ? newSearchParams.append('filter', filter)
      : newSearchParams.delete('filter', filter);
    router.push(`/jobs?${newSearchParams.toString()}`);
  }

  function handleSearchChange(e: React.ChangeEvent<HTMLInputElement>) {
    const newSearchParams = new URLSearchParams(searchParams.toString());
    if (e.target.value === '') {
      newSearchParams.delete('q');
    } else {
      newSearchParams.set('q', e.target.value);
    }
    router.push(`jobs?${newSearchParams.toString()}`);
  }

  function setStats(jobs: Job[]) {
    setNumActiveJobs(jobs.filter((job: Job) => job.status === Status.APPLIED).length);
    setNumPendingJobs(jobs.filter((job: Job) => job.status === Status.PENDING).length);
  }

  useEffect(() => {
    fetch('/api/jobs')
      .then((res) => res.json())
      .then((data) => {
        setJobs(data);
        setStats(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setError(error);
      });
  }, []);

  if (error)
    return (
      <div className='mx-8 mt-12 mb-4'>
        <h1 className='text-5xl font-bold'>Jobs</h1>
        <div className='flex flex-row gap-3.5 mt-6'>
          <Stat title='Total applications' number={0} />
          <Stat title='Active' number={0} />
          <Stat title='Pending' number={0} />
        </div>
        <JobMenubar
          applied={applied}
          pending={pending}
          rejected={rejected}
          offered={offered}
          setApplied={setApplied}
          setPending={setPending}
          setRejected={setRejected}
          setOffered={setOffered}
          handleFilterChange={handleFilterChange}
          search={search}
          setSearch={setSearch}
          handleSearchChange={handleSearchChange}
          jobs={jobs}
          setJobs={setJobs}
          setStats={setStats}
        />
        <table className='w-full mt-5 overflow-auto text-gray-600'>
          <thead>
            <tr className='text-left sticky top-0 border-b border-gray-300 bg-white text-gray-900'>
              <th scope='col' className='px-3 py-3.5'>
                Name
              </th>
              <th scope='col' className='px-3 py-3.5'>
                Company
              </th>
              <th scope='col' className='px-3 py-3.5'>
                Date Applied
              </th>
              <th scope='col' className='px-3 py-3.5'>
                Job ID
              </th>
              <th scope='col' className='px-3 py-3.5'>
                Status
              </th>
              <th scope='col' className='px-3 py-3.5 max-w-96'>
                Job Post
              </th>
              <th scope='col' className='px-3 py-3.5'>
                <span className='sr-only'>Edit</span>
              </th>
            </tr>
          </thead>
        </table>
        <p className='text-center mt-12 text-red-600'>Error fetching data</p>
      </div>
    );
  if (isLoading)
    return (
      <div className='mx-8 mt-12 mb-4'>
        <h1 className='text-5xl font-bold'>Jobs</h1>
        <div className='flex flex-row gap-3.5 mt-6'>
          <SkeletonStat title='Total applications' />
          <SkeletonStat title='Active' />
          <SkeletonStat title='Pending' />
        </div>
        <JobMenubar
          applied={applied}
          pending={pending}
          rejected={rejected}
          offered={offered}
          setApplied={setApplied}
          setPending={setPending}
          setRejected={setRejected}
          setOffered={setOffered}
          handleFilterChange={handleFilterChange}
          search={search}
          setSearch={setSearch}
          handleSearchChange={handleSearchChange}
          jobs={jobs}
          setJobs={setJobs}
          setStats={setStats}
        />
        <table className='w-full mt-5 overflow-auto text-gray-600'>
          <thead>
            <tr className='text-left sticky top-0 border-b border-gray-300 bg-white text-gray-900'>
              <th scope='col' className='px-3 py-3.5'>
                Name
              </th>
              <th scope='col' className='px-3 py-3.5'>
                Company
              </th>
              <th scope='col' className='px-3 py-3.5'>
                Date Applied
              </th>
              <th scope='col' className='px-3 py-3.5'>
                Job ID
              </th>
              <th scope='col' className='px-3 py-3.5'>
                Status
              </th>
              <th scope='col' className='px-3 py-3.5 max-w-96'>
                Job Post
              </th>
              <th scope='col' className='px-3 py-3.5'>
                <span className='sr-only'>Edit</span>
              </th>
            </tr>
          </thead>
          <tbody className='divide-y divide-gray-200 text-gray-600'>
            <tr>
              <td>
                <div className='h-10 mx-3 my-4 before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent relative bg-gray-200 overflow-hidden isolate' />
              </td>
              <td>
                <div className='h-10 mx-3 my-4 before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent relative bg-gray-200 overflow-hidden isolate' />
              </td>
              <td>
                <div className='h-10 mx-3 my-4 before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent relative bg-gray-200 overflow-hidden isolate' />
              </td>
              <td>
                <div className='h-10 mx-3 my-4 before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent relative bg-gray-200 overflow-hidden isolate' />
              </td>
              <td>
                <div className='h-10 mx-3 my-4 before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent relative bg-gray-200 overflow-hidden isolate' />
              </td>
              <td>
                <div className='h-10 mx-3 my-4 before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent relative bg-gray-200 overflow-hidden isolate' />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );

  return (
    <div className='mx-8 mt-12 mb-4'>
      <h1 className='text-5xl font-bold'>Jobs</h1>
      <div className='flex flex-row gap-3.5 mt-6'>
        <Stat title='Total applications' number={jobs.length} />
        <Stat title='Active' number={numActiveJobs} />
        <Stat title='Pending' number={numPendingJobs} />
      </div>
      <JobMenubar
        applied={applied}
        pending={pending}
        rejected={rejected}
        offered={offered}
        setApplied={setApplied}
        setPending={setPending}
        setRejected={setRejected}
        setOffered={setOffered}
        handleFilterChange={handleFilterChange}
        search={search}
        setSearch={setSearch}
        handleSearchChange={handleSearchChange}
        jobs={jobs}
        setJobs={setJobs}
        setStats={setStats}
      />
      <table className='w-full mt-5 overflow-auto text-gray-600'>
        <thead>
          <tr className='text-left sticky top-0 border-b border-gray-300 bg-white text-gray-900'>
            <th scope='col' className='px-3 py-3.5'>
              Name
            </th>
            <th scope='col' className='px-3 py-3.5'>
              Company
            </th>
            <th scope='col' className='px-3 py-3.5'>
              Date Applied
            </th>
            <th scope='col' className='px-3 py-3.5'>
              Job ID
            </th>
            <th scope='col' className='px-3 py-3.5'>
              Status
            </th>
            <th scope='col' className='px-3 py-3.5 max-w-96'>
              Job Post
            </th>
            <th scope='col' className='px-3 py-3.5'>
              <span className='sr-only'>Edit</span>
            </th>
          </tr>
        </thead>
        <tbody className='divide-y divide-gray-200 text-gray-600'>
          {jobs
            .filter((job: Job) => {
              const newSearch = search.toLocaleLowerCase();
              if (newSearch === '') {
                return job;
              } else {
                return (
                  job.name.toLocaleLowerCase().includes(newSearch) ||
                  job.company.toLocaleLowerCase().includes(newSearch) ||
                  job.jobPost.toLocaleLowerCase().includes(newSearch)
                );
              }
            })
            .filter((job: Job) =>
              !applied && !pending && !rejected && !offered
                ? job
                : (applied && job.status === 'APPLIED') ||
                  (pending && job.status === 'PENDING') ||
                  (rejected && job.status === 'REJECTED') ||
                  (offered && job.status === 'OFFERED')
            )
            .map((job: Job) => (
              <tr key={job.id} className='border-b border-gray-200'>
                <td className='px-3 py-4'>{job.name}</td>
                <td className='px-3 py-4'>{job.company}</td>
                <td className='px-3 py-4'>
                  {new Date(job.dateApplied).toLocaleDateString()}
                </td>
                <td className='px-3 py-4'>{job.jobID}</td>
                <td className='px-3 py-4'>
                  <StatusBubble>
                    {job.status.charAt(0) + job.status.slice(1).toLocaleLowerCase()}
                  </StatusBubble>
                </td>
                <td className='px-3 py-4 max-w-96 overflow-ellipsis'>
                  <a href={job.jobPost} className='text-blue-600 hover:underline'>
                    {job.jobPost}
                  </a>
                </td>
                <td className='px-3 py-4'>
                  <EditJobBtn
                    job={job}
                    jobs={jobs}
                    setJobs={setJobs}
                    setStats={setStats}
                  />
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      {jobs.length === 0 && <p className='text-center mt-12'>No jobs added yet.</p>}
    </div>
  );
}
