type Props = {
  title: string;
};

const shimmer =
  'before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent';

export default function SkeletonStat({ title }: Props) {
  return (
    <div className='flex flex-col w-48 p-4 border rounded-lg border-gray-950/20'>
      <p className='text-gray-700'>{title}</p>
      <div
        className={`h-7 w-8 mt-1 ${shimmer} relative bg-gray-200 overflow-hidden isolate`}
      ></div>
    </div>
  );
}
