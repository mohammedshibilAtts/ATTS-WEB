import React, { useState } from "react";
import { Search } from "lucide-react";
import { carrerData } from "@/constants/constant";
import moment from "moment";

const JobListings = () => {
  const [selectedRole, setSelectedRole] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [filteredJobs, setFilteredJobs] = useState(carrerData);
  const [selectedJob, setSelectedJob] = useState(null); // Store selected job data
  const [isModalOpen, setIsModalOpen] = useState(false);

  const locations = [...new Set(carrerData.map((item) => item.location))];
  const roles = [...new Set(carrerData.map((item) => item.title))];

  const handleSearch = () => {
    const results = carrerData.filter((item) => {
      const roleMatch = selectedRole ? item.title === selectedRole : true;
      const locationMatch = selectedLocation
        ? item.location === selectedLocation
        : true;
      return roleMatch && locationMatch;
    });

    setFilteredJobs(results);
  };

  // Function to open the modal and set selected job
  const openModal = (job) => {
    setSelectedJob(job);
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setSelectedJob(null); // Reset the selected job when closing the modal
    setIsModalOpen(false);
  };

  return (
    <div className="w-full mt-8 bg-white mx-auto">
      <div className="flex gap-4 mb-6 mx-auto">
        <div className="flex-1">
          <select
            className="w-full p-2 border rounded-md bg-white"
            value={selectedRole}
            onChange={(e) => setSelectedRole(e.target.value)}
          >
            <option value="">--All Roles--</option>
            {roles.map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>

        <div className="flex-1">
          <select
            className="w-full p-2 border rounded-md bg-white"
            value={selectedLocation}
            onChange={(e) => setSelectedLocation(e.target.value)}
          >
            <option value="">--All Locations--</option>
            {locations.map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>

        <button
          className="p-2 bg-[#003067] text-white rounded-md"
          onClick={handleSearch}
        >
          <Search size={24} />
        </button>
      </div>

      <div className="divide-y">
        {filteredJobs.length > 0 ? (
          filteredJobs.map((role, index) => (
            <div key={index} className="py-4">
              <div className="flex justify-between items-center ps-1">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-sm text-red-600">Vacancy</span>
                    <span className="text-sm text-red-600">{role.vacancy}</span>
                  </div>
                  <h3 className="text-lg font-medium">{role.title}</h3>
                </div>
                <button
                  onClick={() => openModal(role)} // Pass the job to openModal
                  className="px-4 py-1 border border-blue-600 text-[#003067] rounded hover:bg-blue-50"
                >
                  More Details
                </button>
              </div>
              <div className="flex gap-1 mt-1 text-sm text-gray-500 ps-1">
                <span>{role.location}</span>
                <span>|</span>
                <span className="text-[#003067]">
                  Experience - {role.experience}
                </span>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-4 text-gray-500">
            No jobs found for your search criteria.
          </div>
        )}
      </div>

      {isModalOpen && selectedJob && (
        <div
          id="default-modal"
          tabIndex="-1"
          aria-hidden={!isModalOpen}
          className="overflow-y-auto overflow-x-hidden fixed inset-0 z-50 flex justify-center items-center w-full h-full bg-black bg-opacity-50 backdrop-blur-sm"
        >
          <div className="relative p-4 w-full max-w-5xl max-h-full">
            <div className="relative bg-white rounded-lg shadow ">
              <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t ">
                <h3 className="text-xl font-semibold text-gray-900 ">
                  {selectedJob.title}
                </h3>
                <button
                  type="button"
                  onClick={closeModal}
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center "
                >
                  <svg
                    className="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
              <div className="p-4 md:p-5 space-y-4">
                <p className="text-base leading-relaxed text-gray-500">
                  {selectedJob.jd}
                </p>

                <div className="space-y-2">
                  {selectedJob.Key_Responsibilities.length !==0 &&
                  (
                      <>
                        <h4 className="text-lg font-medium text-gray-900">
                          Key Responsibilities:
                        </h4>
                        <ul className="list-disc pl-5 space-y-1">
                          {selectedJob.Key_Responsibilities.map(
                            (item, index) => (
                              <li key={index} className="text-sm text-gray-500">
                                {item}
                              </li>
                            )
                          )}
                        </ul>
                      </>
                    )}
                </div>

                <div className="space-y-2">
                {selectedJob.Requirements.length !==0 &&(
                  <>
                  <h4 className="text-lg font-medium text-gray-900">
                    Requirements:
                  </h4>
                  <ul className="list-disc pl-5 space-y-1">
                    {selectedJob.Requirements.map((item, index) => (
                      <li key={index} className="text-sm text-gray-500">
                        {item}
                      </li>
                    ))}
                  </ul>
                  </>
                   )}
                </div>
              </div>
              <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b ">
                <a href="mailto:careers@atts.in">
                  <button
                    onClick={closeModal} // Close the modal when "I accept" is clicked
                    type="button"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                  >
                    Share Resume
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default JobListings;
