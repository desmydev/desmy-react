import React from "react";
const DesmyError401 = () => {
  return (
      <div className="px-2 mx-auto text-center font-poppinsRegular">
        <div className="h-[calc(100vh-160px)] flex flex-col justify-center items-center">
          <h1 className="text-8xl font-extrabold text-red-500 font-poppinsBold">401</h1>
          <p className="text-2xl font-medium text-gray-800 dark:text-white font-poppinsMedium">
            Unauthorized Access
          </p>
          <p className="text-gray-800 mt-4 dark:text-white">
            Sorry, it seems you are not allowed to access this page or the page was not found.
          </p>
        </div>
      </div>
    );
};

export default DesmyError401;
