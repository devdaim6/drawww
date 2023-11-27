import React from "react";

const ImageInput = ({ disabled }) => {
  return (
    <div className="input-div">
      <input
        onChange={(e) => {
          setVisibleButtons((prev) => !prev);
        }}
        className={`block mt-4 lg:w-1/6 w-3/6 text-sm text-gray-900 border border-gray-300 rounded-lg ${
          !disabled ? "cursor-pointer" : "cursor-not-allowed"
        } bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400`}
        aria-describedby="user_avatar_help"
        id="user_avatar"
        type="file"
        name="file"
        disabled={disabled || false}
      />
    </div>
  );
};

export default ImageInput;
