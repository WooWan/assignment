import { SearchIcon } from 'lucide-react';

type Props = {
  searchText: string;
  handleTextChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

function FeedsHeader({ searchText, handleTextChange }: Props) {
  return (
    <header className="flex py-5">
      <div className="relative flex h-8 items-center justify-between rounded-sm border-[1px] border-black text-sm">
        <SearchIcon className="absolute left-2 h-4 w-4" />
        <input
          placeholder="저장소를 검색해보세요"
          className="border-transparent px-8 py-1"
          onChange={handleTextChange}
          value={searchText}
        />
      </div>
    </header>
  );
}

export default FeedsHeader;
