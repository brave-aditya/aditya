import React from "react";

const ProjectTag = ({ name, onClick, isSelected }) => {
  const buttonStyles = isSelected
    ? "text-white bg-gradient-to-br from-[#ff0039] via-[#fc00ff] to-[#ff0039] p-1"
    : "text-[#ADB7BE] p-0.5 border-2 border-slate-600 hover:border-white";
  return (
    <button
      className={`${buttonStyles} rounded-full `}
      onClick={() => onClick(name)}
    ><span className="block bg-[#121212] rounded-full px-6 py-3 text-xl cursor-pointer">{name}</span>
    </button>
  );
};

export default ProjectTag;