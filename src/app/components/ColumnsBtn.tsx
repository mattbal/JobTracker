export default function ColumnsBtn() {
  return (
    <button className='inline-flex items-center border border-gray-950/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-600 rounded gap-x-2 py-3 px-2.5 text-gray-700 hover:bg-gray-100 hover:border-gray-950/30 transition-colors ease-linear duration-150 '>
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
          d='M9 4.5v15m6-15v15m-10.875 0h15.75c.621 0 1.125-.504 1.125-1.125V5.625c0-.621-.504-1.125-1.125-1.125H4.125C3.504 4.5 3 5.004 3 5.625v12.75c0 .621.504 1.125 1.125 1.125Z'
        />
      </svg>
      Columns
    </button>
  );
}
