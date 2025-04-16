const SkeletonCard = () => {
  return (
    <div className="animate-pulse bg-[1e1e1e] rounded-2xl shadow-lg p-4 space-y-4">
      <div className="bg-gray-700 h-[200px] w-full rounded-lg flex items-center justify-center text-gray-400 text-md">
        맛집을 불러오는 중입니다...
      </div>
      <div className="h-4 bg-gray-700 rounded w-3/4"></div>
      <div className="h-3 bg-gray-700 rounded w-2/4"></div>
    </div>
  );
};

const SkeletonList = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {Array.from({ length: 8 }).map((_, i) => (
        <SkeletonCard key={i} />
      ))}
    </div>
  );
};

export default SkeletonList;
