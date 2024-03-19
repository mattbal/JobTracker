type Props = {
  title: string;
  number: number;
};

export default function Stat({ title, number }: Props) {
  return (
    <div className='flex flex-col w-48 p-4 border rounded-lg border-gray-950/20'>
      <p className='text-gray-700'>{title}</p>
      <p className='text-2xl font-medium text-gray-900'>{number}</p>
    </div>
  );
}
