import {
  DialogTrigger,
  Button,
  Popover,
  Dialog,
  CheckboxGroup,
  Checkbox,
  Label,
} from 'react-aria-components';

export default function FilterBtn() {
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
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 0 1-.659 1.591l-5.432 5.432a2.25 2.25 0 0 0-.659 1.591v2.927a2.25 2.25 0 0 1-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 0 0-.659-1.591L3.659 7.409A2.25 2.25 0 0 1 3 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0 1 12 3Z'
          />
        </svg>
        Filter
      </Button>
      <Popover>
        <Dialog className='p-4 bg-white border rounded shadow-lg border-gray-950/20'>
          <CheckboxGroup className='flex flex-col'>
            <Label className='font-bold mb-2  '>Status</Label>
            <Checkbox value='Applied'>
              <div className='checkbox'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth='1.5'
                  stroke='currentColor'
                  className='w-6 h-6 text-white transition-all duration-200'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='m4.5 12.75 6 6 9-13.5'
                  />
                </svg>
              </div>
              Applied
            </Checkbox>
            <Checkbox value='Interviewing'>
              <div className='checkbox'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth='1.5'
                  stroke='currentColor'
                  className='w-6 h-6 text-white transition-all duration-200'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='m4.5 12.75 6 6 9-13.5'
                  />
                </svg>
              </div>
              Interviewing
            </Checkbox>
            <Checkbox value='Offered'>
              <div className='checkbox'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth='1.5'
                  stroke='currentColor'
                  className='w-6 h-6 text-white transition-all duration-200'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='m4.5 12.75 6 6 9-13.5'
                  />
                </svg>
              </div>
              Offered
            </Checkbox>
            <Checkbox value='Rejected'>
              <div className='checkbox'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth='1.5'
                  stroke='currentColor'
                  className='w-6 h-6 text-white transition-all duration-200'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='m4.5 12.75 6 6 9-13.5'
                  />
                </svg>
              </div>
              Rejected
            </Checkbox>
          </CheckboxGroup>
        </Dialog>
      </Popover>
    </DialogTrigger>
  );
}
