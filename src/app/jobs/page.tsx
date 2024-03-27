import {
  Cell,
  Column,
  Group,
  ColumnResizer,
  Row,
  Table,
  TableBody,
  TableHeader,
  ResizableTableContainer,
  Tabs,
  TabList,
  Tab,
  TabPanel,
} from 'react-aria-components';
import Status from '../components/Status';
import Stat from '../components/Stat';
import JobMenubar from '../components/JobMenubar';
import prisma from '@/lib/prisma';

/*
function JobColumn(props: any) {
  return (
    <Column
      {...props}
      className='sticky top-0 p-0 font-bold text-left bg-gray-100 border-0 border-b border-gray-300 border-solid outline-none cursor-default whitespace-nowrap'
    >
      {({ allowsSorting, sortDirection }) => (
        <div className='flex items-center py-2 pl-4'>
          <Group
            role='presentation'
            tabIndex={-1}
            className='flex items-center flex-1 overflow-hidden rounded outline-none focus-visible:ring-2 ring-gray-600'
          >
            <span className='flex-1 text-xs uppercase truncate'>{props.children}</span>
            {allowsSorting && (
              <span
                className={`ml-1 w-4 h-4 flex items-center justify-center transition ${
                  sortDirection === 'descending' ? 'rotate-180' : ''
                }`}
              >
                {sortDirection && (
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
                      d='M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18'
                    />
                  </svg>
                )}
              </span>
            )}
          </Group>
          <ColumnResizer className='w-px px-[8px] py-1 h-5 bg-clip-content bg-slate-400 cursor-col-resize rounded resizing:bg-slate-800 resizing:w-[2px] resizing:pl-[7px] focus-visible:ring-2 ring-gray-600 ring-inset' />
        </div>
      )}
    </Column>
  );
}

function JobRow(props: any) {
  return (
    <Row
      {...props}
      className='outline-none cursor-default even:bg-gray-100 selected:bg-gray-600 selected:text-white group focus-visible:outline focus-visible:outline-2 focus-visible:outline-gray-600 focus-visible:-outline-offset-4 selected:focus-visible:outline-white'
    />
  );
}

function JobCell(props: any) {
  return (
    <Cell
      {...props}
      className={`px-4 py-2 truncate ${props.className} focus-visible:outline focus-visible:outline-2 focus-visible:outline-gray-600 focus-visible:-outline-offset-4 group-selected:focus-visible:outline-white`}
    />
  );
}
*/

export default async function Page() {
  let totalApplications = 0;
  let activeApplications = 0;
  let interviewingApplications = 5;

  const jobs = await prisma.job.findMany();

  return (
    <div className='mx-8'>
      <h1 className='mt-12 text-5xl font-bold'>Jobs</h1>
      <JobMenubar />
      {jobs.map((job) => (
        <div key={job.id}>{job.name}</div>
      ))}

      {/* <Tabs className='mt-4'>
        <TabList className='flex border-b-2 border-gray-300 gap-x-2'>
          <Tab
            id='active'
            className='selected:border-blue-600 selected:text-blue-600 p-2 selected:border-b-2 cursor-pointer -mb-[2px] text-gray-600 outline-none focus-visible:ring-2 focus-visible:ring-blue-600'
          >
            Active
          </Tab>
          <Tab
            id='archive'
            className='selected:border-blue-600 selected:text-blue-600 p-2 selected:border-b-2 cursor-pointer -mb-[2px] text-gray-600 outline-none focus-visible:ring-2 focus-visible:ring-blue-600'
          >
            Archived
          </Tab>
        </TabList>
        <TabPanel id='active'>
          <div className='flex flex-row gap-3.5 mt-6'>
            <Stat title='Total applications' number={totalApplications} />
            <Stat title='Active' number={activeApplications} />
            <Stat title='Interviewing' number={interviewingApplications} />
          </div>
          <JobMenubar />
          <ResizableTableContainer className='w-full mt-5 overflow-auto text-gray-600'>
            <Table aria-label='Jobs' className=''>
              <TableHeader className=''>
                <JobColumn isRowHeader allowsSorting defaultWidth='2fr'>
                  Name
                </JobColumn>
                <JobColumn allowsSorting defaultWidth='1fr'>
                  Company
                </JobColumn>
                <JobColumn>Date applied</JobColumn>
                <JobColumn>Date posted</JobColumn>
                <JobColumn>Job ID</JobColumn>
                <JobColumn>Status</JobColumn>
                <JobColumn>Job post</JobColumn>
              </TableHeader>
              <TableBody>
                <JobRow>
                  <JobCell>
                    <input type='text' />
                  </JobCell>
                  <JobCell>iOS Software Engineering Program Manager - Sensing & Connectivity</JobCell>
                  <JobCell>Microsoft</JobCell>
                  <JobCell>Dec 15th, 2023</JobCell>
                  <JobCell>Dec 13th, 2023</JobCell>
                  <JobCell>200507243</JobCell>
                  <JobCell>
                    <Status>Offered</Status>
                  </JobCell>
                  <JobCell>https://apple.com</JobCell>
                </JobRow>
              </TableBody>
            </Table>
          </ResizableTableContainer>
        </TabPanel>
        <TabPanel id='archive'></TabPanel>
      </Tabs> */}
    </div>
  );
}
