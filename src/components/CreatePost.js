
import { faCamera, faFileAlt, faVideo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const CreatePost = () => {
  return (
    <div className="bg-white rounded-xl border shadow-slate-100 p-6 flex items-center ml-4 -mt-[13.5rem] w-[57rem]">
      <span className="mr-4 text-[#757575] font-[400]">Create a new post...</span>
      <div className="flex ml-auto">
        <FontAwesomeIcon icon={faFileAlt} className="mr-5 text-gray-400" />
        <FontAwesomeIcon icon={faVideo} className="mr-5 text-gray-400" />
        <FontAwesomeIcon icon={faCamera} className="text-gray-400" />
      </div>
    </div>
  );
};

export default CreatePost;


