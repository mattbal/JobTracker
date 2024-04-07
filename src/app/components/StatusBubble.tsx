export default function StatusBubble({ children }: { children: string }) {
  let color = '';
  if (children === 'Applied') {
    color = 'bg-blue-100 text-blue-800';
  } else if (children === 'Interviewing') {
    color = 'bg-orange-100 text-orange-800';
  } else if (children === 'Offered') {
    color = 'bg-green-100 text-green-800';
  } else if (children === 'Rejected') {
    color = 'bg-red-100 text-red-800';
  } else {
    color = 'bg-gray-100 text-gray-800';
  }

  return <p className={`rounded-md ${color} py-1 px-2.5 w-fit`}>{children}</p>;
}
