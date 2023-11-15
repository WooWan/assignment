import React from 'react';
import LoadingSpinner from './LoadingSpinner';

type Props = {
  searchText: string;
  handleTextChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  isPending: boolean;
};

function FeedsHeader({ searchText, handleTextChange, isPending }: Props) {
  return (
    <header className="flex gap-x-2 py-5">
      <div className="relative flex items-center justify-between rounded-sm border-[1px] border-black">
        <input
          placeholder="저장소를 검색해보세요"
          className="border-transparent px-2 py-1"
          onChange={handleTextChange}
          value={searchText}
        />
        {isPending && <LoadingSpinner className="absolute right-2" />}
      </div>
    </header>
  );
}

export default FeedsHeader;
