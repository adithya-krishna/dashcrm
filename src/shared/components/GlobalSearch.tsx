interface ISearchProps {
  globalFilter: string;
  setGlobalFilter: (value: React.SetStateAction<string>) => void;
}

export default function GlobalSearch({
  globalFilter,
  setGlobalFilter,
}: ISearchProps) {
  return (
    <div className="w-64">
      <input
        type="text"
        className="bg-gray-50 border w-full border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-800 dark:border-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Search leads..."
        value={globalFilter ?? ""}
        onChange={(e) => setGlobalFilter(e.target.value)}
      />
    </div>
  );
}
