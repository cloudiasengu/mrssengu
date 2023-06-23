import React, { useState } from "react";
import FeedStudentsTable from "../schoolDatabases/FeedStudentsTable";
import DropdownMenu from "./Dropdownmenu";

export default function SchoolsTable({district}) {
  const [selectedSchool, setSelectedSchool] = useState({});
  const [searchQuery, setSearchQuery] = useState("");

  const handleSelectSchool = (school) => {
    setSelectedSchool(school);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [id, setID] = useState("");
  const [contact, setContact] = useState("");
  const [address, setAddress] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // handle submission logic here
  };

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
                      Add New Beneficiary
                    </h3>
                    <div className="mt-2">
                      <form
                        onSubmit={handleSubmit}
                        className="max-w-lg mx-auto"
                      >
                        <div className="my-4">
                          <label
                            htmlFor="name"
                            className="block font-medium mb-1"
                          >
                            Name:
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
                          <label
                            htmlFor="surname"
                            className="block font-medium mb-1"
                          >
                            Surname:
                          </label>
                          <input
                            type="text"
                            id="surname"
                            className="w-full rounded-lg border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
                            value={surname}
                            onChange={(event) => setSurname(event.target.value)}
                          />
                        </div>
                        <div className="my-4">
                          <label
                            htmlFor="id"
                            className="block font-medium mb-1"
                          >
                            ID Number:
                          </label>
                          <input
                            type="text"
                            id="id"
                            className="w-full rounded-lg border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
                            value={id}
                            onChange={(event) => setID(event.target.value)}
                          />
                        </div>
                        <div className="my-4">
                          <label
                            htmlFor="contact"
                            className="block font-medium mb-1"
                          >
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
                          <label
                            htmlFor="address"
                            className="block font-medium mb-1"
                          >
                            House Address:
                          </label>
                          <textarea
                            id="address"
                            rows="3"
                            className="w-full rounded-lg border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
                            value={address}
                            onChange={(event) => setAddress(event.target.value)}
                          ></textarea>
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
              className="flex items-center gap-2 bg-pink-500 rounded-sm p-2 text-xl text-white font-bold"
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
              New Beneficiary
            </button>
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-gray-100 rounded-lg px-4 py-2 focus:outline-none focus:shadow-outline w-64"
            />
          </div>
          <FeedStudentsTable schoolName={selectedSchool.name} searchQuery={searchQuery} />
        </div>
      )}
    </div>
  );
}
