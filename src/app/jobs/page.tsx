import StatusBubble from '../components/StatusBubble';
import Stat from '../components/Stat';
import JobMenubar from '../components/JobMenubar';
import { Job, Status } from '@prisma/client';
import prisma from '@/lib/prisma';
import EditJobBtn from '../components/EditJobBtn';

export default async function Page() {
  const jobs = await prisma.job.findMany();
  const numActiveJobs = jobs.filter((job) => job.status === Status.APPLIED).length;
  const numPendingJobs = jobs.filter((job) => job.status === Status.PENDING).length;

  return (
    <div className='mx-8 mt-12 mb-4'>
      <h1 className='text-5xl font-bold'>Jobs</h1>
      <div className='flex flex-row gap-3.5 mt-6'>
        <Stat title='Total applications' number={jobs.length} />
        <Stat title='Active' number={numActiveJobs} />
        <Stat title='Pending' number={numPendingJobs} />
      </div>
      <JobMenubar />
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
          {jobs.map((job: Job) => (
            <tr key={job.id} className='border-b border-gray-200'>
              <td className='px-3 py-4'>{job.name}</td>
              <td className='px-3 py-4'>{job.company}</td>
              <td className='px-3 py-4'>{job.dateApplied.toLocaleDateString()}</td>
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
                <EditJobBtn job={job} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {jobs.length === 0 && <p className='text-center mt-16'>No jobs added yet.</p>}
    </div>
  );
}
