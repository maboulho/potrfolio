import React from 'react';

interface FolderItemProps {
  name: string;
  isActive: boolean;
  onClick: () => void;
  icon?: string;

}

const FolderItem: React.FC<FolderItemProps> = ({ name, isActive, onClick,icon }) => {
  return (
    <div
      className={`p-2 rounded flex items-center mb-1 cursor-pointer ${isActive ? 'text-white' : 'text-[#607B96]'}`}
      onClick={onClick}
    >
      {icon && <img src={icon} height="15" width="15" alt={`${name}  icon`} className="mr-2 " />}
      {name}
    </div>
  );
};

export default FolderItem;
