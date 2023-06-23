import React, { useState } from "react";
import EducateStudentsTable from "../schoolDatabases/EducateStudentsTable";
import DropdownMenu from "./Dropdownmenu";

export default function SchoolsTable({ schools, district }) {
  const [selectedSchool, setSelectedSchool] = useState({});
  const [searchQuery, setSearchQuery] = useState("");

  const handleSelectSchool = (school) => {
    setSelectedSchool(school);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

 // Initialize state variables
const [name, setName] = useState("");
const [gender, setGender] = useState("");
const [dateOfBirth, setDateOfBirth] = useState("");
const [placeOfBirth, setPlaceOfBirth] = useState("");
const [nationality, setNationality] = useState("");
const [maritalStatus, setMaritalStatus] = useState("");
const [residentialAddress, setResidentialAddress] = useState("");
const [contact, setContact] = useState("");
const [otherInformation, setOtherInformation] = useState("");

// Form submission handler
const handleSubmit = (event) => {
  event.preventDefault();
  // Handle form submission logic here
};


  

  const options = schools.map((school) => ({
    name: school.name,
  }));

  const handleSelectChange = (selectedOption) => {
    const { value } = selectedOption;
    setSelectedSchool({
      ...selectedSchool,
      id: value,
      name: schools[value].name,
      district: schools[value].district,
    });
  };

  return (
    <div>
      <div class="py-12 bg-white sm:py-16 lg:py-20">
        <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div>
            <p class="text-base font-bold text-gray-900">
              Schools in {district}
            </p>
          </div>
          <DropdownMenu options={options} />
        </div>
      </div>
      {isModalOpen ? (
        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex items-center justify-center min-h-screen">
              <div className="bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:w-full sm:max-w-3xl">
                <div className="sm:flex sm:items-start mb-4">
                  <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-orange-100 sm:mx-0 sm:h-10 sm:w-10">
                    <svg
                      className="h-6 w-6 text-orange-600"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 4v16m8-8H4"
                      />
                    </svg>
                  </div>
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
  <h3 className="text-4xl leading-6 font-medium text-gray-900">
    Add New Identity
  </h3>
  <div className="mt-2">
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
      <div className="my-4">
        <label htmlFor="name" className="block font-medium mb-1">
          Full Name:
        </label>
        <input
          type="text"
          id="name"
          className="w-full rounded-lg border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </div>
      <div className="my-4">
        <label htmlFor="gender" className="block font-medium mb-1">
          Gender:
        </label>
        <select
          id="gender"
          className="w-full rounded-lg border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
          value={gender}
          onChange={(event) => setGender(event.target.value)}
        >
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>
      <div className="my-4">
        <label htmlFor="dateOfBirth" className="block font-medium mb-1">
          Date of Birth:
        </label>
        <input
          type="date"
          id="dateOfBirth"
          className="w-full rounded-lg border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
          value={dateOfBirth}
          onChange={(event) => setDateOfBirth(event.target.value)}
        />
      </div>
      <div className="my-4">
        <label htmlFor="placeOfBirth" className="block font-medium mb-1">
          Place of Birth:
        </label>
        <input
          type="text"
          id="placeOfBirth"
          className="w-full rounded-lg border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
          value={placeOfBirth}
          onChange={(event) => setPlaceOfBirth(event.target.value)}
        />
      </div>
      <div className="my-4">
        <label htmlFor="nationality" className="block font-medium mb-1">
          Nationality:
        </label>
        <input
          type="text"
          id="nationality"
          className="w-full rounded-lg border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
          value={nationality}
          onChange={(event) => setNationality(event.target.value)}
        />
      </div>
      <div className="my-4">
        <label htmlFor="maritalStatus" className="block font-medium mb-1">
          Marital Status:
        </label>
        <select
          id="maritalStatus"
          className="w-full rounded-lg border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
          value={maritalStatus}
          onChange={(event) => setMaritalStatus(event.target.value)}
        >
          <option value="">Select Marital Status</option>
          <option value="single">Single</option>
          <option value="married">Married</option>
          <option value="divorced">Divorced</option>
          <option value="widowed">Widowed</option>
        </select>
      </div>
      <div className="my-4">
        <label htmlFor="residentialAddress" className="block font-medium mb-1">
          Residential Address:
        </label>
        <textarea
          id="residentialAddress"
          rows="3"
          className="w-full rounded-lg border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
          value={residentialAddress}
          onChange={(event) => setResidentialAddress(event.target.value)}
        ></textarea>
      </div>
      <div className="my-4">
        <label htmlFor="contact" className="block font-medium mb-1">
          Contact:
        </label>
        <input
          type="text"
          id="contact"
          className="w-full rounded-lg border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
          value={contact}
          onChange={(event) => setContact(event.target.value)}
        />
      </div>
      <div className="my-4">
        <label htmlFor="otherInformation" className="block font-medium mb-1">
          Other Information:
        </label>
        <textarea
          id="otherInformation"
          rows="3"
          className="w-full rounded-lg border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
          value={otherInformation}
          onChange={(event) => setOtherInformation(event.target.value)}
        ></textarea>
      </div>
      <div className="my-4">
        <button
          type="submit"
          className="py-2 px-4 bg-orange-500 text-white rounded-md shadow hover:bg-orange-600"
        >
          Submit
        </button>
      </div>
    </form>
  </div>
</div>

                </div>
                <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                  <button
                    type="button"
                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={() => {
                      // Save student details to students state variable
                      setIsModalOpen(false);
                    }}
                  >
                    Save
                  </button>
                  <button
                    type="button"
                    className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={() => setIsModalOpen(false)}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}

      {selectedSchool && (
        <div>
          <div className="flex justify-start ml-24 gap-8 items-center mb-4">
            <button
              onClick={() => setIsModalOpen(true)}
              className="flex items-center gap-2 bg-indigo-500 rounded-sm p-2 text-xl text-white font-bold"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6 font-bold"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              New Entry
            </button>
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-gray-100 rounded-lg px-4 py-2 focus:outline-none focus:shadow-outline w-64"
            />
          </div>
          <EducateStudentsTable schoolName={selectedSchool.name} searchQuery={searchQuery} />
        </div>
      )}
    </div>
  );
}
