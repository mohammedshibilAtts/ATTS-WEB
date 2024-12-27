"use client"
import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { carrerData } from '@/constants/constant';
import moment from 'moment';

const JobListings = () => {
  const [selectedRole, setSelectedRole] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [filteredJobs, setFilteredJobs] = useState(carrerData); 


  const locations = [...new Set(carrerData.map((item) => item.location))];
  const roles = [...new Set(carrerData.map((item) => item.title))];


  const handleSearch = () => {
    const results = carrerData.filter((item) => {
      const roleMatch = selectedRole ? item.title === selectedRole : true;
      const locationMatch = selectedLocation ? item.location === selectedLocation : true;
      return roleMatch && locationMatch;
    });

    setFilteredJobs(results);
  };

  return (
    <div className="w-full  mt-8 bg-white mx-auto">

      <div className="flex gap-4 mb-6 mx-auto">
        <div className="flex-1">
          <select 
            className="w-full p-2 border rounded-md bg-white" 
            value={selectedRole}
            onChange={(e) => setSelectedRole(e.target.value)}
          >
            <option value="">--All Roles--</option>
            {roles.map((item, index) => (
              <option key={index} value={item}>{item}</option>
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
              <option key={index} value={item}>{item}</option>
            ))}
          </select>
        </div>

        <button 
          className="p-2 bg-blue-600 text-white rounded-md"
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
                    <span className="text-sm text-blue-600">Vacancy</span>
                    <span className="text-sm text-blue-600">{role.vacancy}</span>
                  </div>
                  <h3 className="text-lg font-medium">{role.title}</h3>
                </div>
                <button className="px-4 py-1 border border-blue-600 text-blue-600 rounded hover:bg-blue-50">
                  Explore
                </button>
              </div>
                <div className="flex gap-1 mt-1  text-sm text-gray-500 ps-1">
                <span>{role.location}</span>
                <span>|</span>
                <span>Posted on {moment(role.date).format('MMMM Do YYYY')}</span>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-4 text-gray-500">
            No jobs found for your search criteria.
          </div>
        )}
      </div>
    </div>
  );
};

export default JobListings;
