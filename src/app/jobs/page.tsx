import Status from '../components/StatusBubble';
import Stat from '../components/Stat';
import JobMenubar from '../components/JobMenubar';

export default function Page() {
  let totalApplications = 0;
  let activeApplications = 0;
  let interviewingApplications = 5;

  // async function getData() {
  //   const response = await fetch('http://localhost:3000/api/jobs');
  //   if (!response.ok) {
  //     throw new Error('Something went wrong');
  //   }
  //   const data = await response.json();
  //   console.log(data);
  //   return data;
  // }

  // const [jobs, setJobs] = useState([]);

  // useEffect(() => {
  //   async function getData() {
  //     const response = await fetch('http://localhost:3000/api/jobs');
  //     if (!response.ok) {
  //       throw new Error('Something went wrong');
  //     }
  //     const data = await response.json();
  //     setJobs(data);
  //   }
  //   getData();
  // }, []);

  return (
    <div className='mx-8'>
      <h1 className='mt-12 text-5xl font-bold'>Jobs</h1>
      <div className='flex flex-row gap-3.5 mt-6'>
        <Stat title='Total applications' number={totalApplications} />
        <Stat title='Active' number={activeApplications} />
        <Stat title='Interviewing' number={interviewingApplications} />
      </div>
      <JobMenubar />
      <table className='w-full mt-5 overflow-auto text-gray-600'>
        <thead>
          <tr>
            <th scope='col'>Name</th>
            <th scope='col'>Company</th>
            <th scope='col'>Date Applied</th>
            <th scope='col'>Job ID</th>
            <th scope='col'>Status</th>
            <th scope='col'>Job Post</th>
          </tr>
        </thead>
        <tbody className='divide-y divide-gray-200'>
          {/* {jobs.map((job) => (
            <tr key={job.id}>
              <td>{job.name}</td>
              <td>{job.company}</td>
              <td>{job.dateApplied.toString()}</td>
              <td>{job.datePosted.toString()}</td>
              <td>{job.jobID}</td>
              <td>{job.status}</td>
            </tr>
          ))} */}
        </tbody>
      </table>
      {/* {jobs.length === 0 && <p className='text-center'>No jobs added yet.</p>} */}
    </div>
  );
}
