import React, { useState, useEffect } from "react";
import beneficiaries_data from "public/beneficiaries_data.json";
import Modal from "react-modal";
import { Transition } from "@headlessui/react";

export default function beneficiarysTable({ schoolName, searchQuery }) {
  const [open, setOpen] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [openBeneficiaryDetails, setOpenBeneficiaryDetails] = useState(false);
  const [selectedBeneficiary, setSelectedBeneficiary] = useState(null);
  const [beneficiaries, setBeneficiaries] = useState([]);
  const [updatedBeneficiary, setUpdatedBeneficiary] = useState({});
  const [reports, setReports] = useState([
    { reports: "http://dummyimage.com/194x100.png/dddddd/000000" },
    { reports: "http://dummyimage.com/156x100.png/ff4444/ffffff" },
    { reports: "http://dummyimage.com/144x100.png/ff4444/ffffff" },
  ]);
  const filteredBeneficiaries = beneficiaries.filter((beneficiary) =>
    beneficiary.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(() => {
    setBeneficiaries(beneficiaries_data);
  }, []);

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      width: "80%",
      maxWidth: "600px",
    },
  };

  const handleEdit = (beneficiary) => {
    setSelectedBeneficiary(beneficiary);
    setUpdatedBeneficiary({ ...beneficiary });
    setOpenEdit(true);
  };

  const handleDelete = (beneficiary) => {
    setSelectedBeneficiary(beneficiary);
    setOpenDelete(true);
  };

  const handleBeneficiaryDetails = (beneficiary) => {
    setSelectedBeneficiary(beneficiary);
    setOpenBeneficiaryDetails(true);
  };

  const handleDeleteConfirm = () => {
    // Perform delete operation here
    setOpenDelete(false);
  };

  const handleEditSubmit = () => {
    // Find the index of the selected beneficiary in the beneficiaries array
    const index = beneficiaries.findIndex((beneficiary) => beneficiary.id === selectedBeneficiary.id);
    // Create a new array of beneficiaries with the updated beneficiary data
    const updatedBeneficiaries = [...beneficiaries];
    updatedBeneficiaries[index] = { ...updatedBeneficiary};
    // Update the Beneficiaries state with the new array
    setBeneficiaries(updatedBeneficiaries);
    setOpenEdit(false);
  };
  

  return (
    <div className="flex justify-center">
      <div style={{ height: "600px", overflowY: "scroll" }}>
        <table
          className="table-auto border-collapse mt-8 shadow-lg"
          style={{ width: "100%" }}
        >
          {/* Table Header */}
          <thead>
            <tr className="bg-pink-500 text-white">
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Surname</th>
              <th className="px-4 py-2">ID Number</th>
              <th className="px-4 py-2">Contact</th>
              <th className="px-4 py-2">House Address</th>
              <th className="px-4 py-2">Edit</th>
              <th className="px-4 py-2">Delete</th>
            </tr> 
          </thead>
          {/* Table Body */}
          <tbody>
            {filteredBeneficiaries.map((beneficiary) => (
              <tr
                key={beneficiary.id}
                className="border-b-2 border-gray-200 hover:bg-gray-100 cursor-pointer"
                onClick={() => handleBeneficiaryDetails(beneficiary)}
              >
                <td className="px-4 py-2">{beneficiary.name}</td>
                <td className="px-4 py-2">{beneficiary.surname}</td>
                <td className="px-4 py-2">{beneficiary.id}</td>
                <td className="px-4 py-2">{beneficiary.phone}</td>
                <td className="px-4 py-2">{beneficiary.address}</td>
                <td className="flex justify-center px-4 py-2">
                  <div
                    className="cursor-pointer"
                    onClick={() => handleEdit(beneficiary)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                      />
                    </svg>
                  </div>
                </td>
                <td className=" px-4 py-2">
                  <div
                    className="cursor-pointer"
                    onClick={(event) => {
                      event.stopPropagation();
                      handleDelete(beneficiary);
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                      />
                    </svg>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Modal
        isOpen={openEdit}
        onRequestClose={() => setOpenEdit(false)}
        style={customStyles}
      >
        {selectedBeneficiary && (
          <div>
            <h2>Edit Beneficiary</h2>
            <form onSubmit={handleEditSubmit}>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="name"
                  type="text"
                  placeholder="Enter name"
                  value={updatedBeneficiary.name}
                  onChange={(e) =>
                    setUpdatedBeneficiary({
                      ...updatedBeneficiary,
                      name: e.target.value,
                    })
                  }
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="surname"
                >
                  Surname
                </label>
                <input
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="surname"
                  type="text"
                  placeholder="Enter surname"
                  value={updatedBeneficiary.surname}
                  onChange={(e) =>
                    setUpdatedBeneficiary({
                      ...updatedBeneficiary,
                      surname: e.target.value,
                    })
                  }
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="id"
                >
                  ID Number
                </label>
                <input
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="grade"
                  type="text"
                  placeholder="Enter Grade"
                  value={updatedBeneficiary.id}
                  onChange={(e) =>
                    setUpdatedBeneficiary({
                      ...updatedBeneficiary,
                      id: e.target.value,
                    })
                  }
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="contact"
                >
                  Contact
                </label>
                <input
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="contact"
                  type="text"
                  placeholder="Enter contact details"
                  value={updatedBeneficiary.phone}
                  onChange={(e) =>
                    setUpdatedBeneficiary({
                      ...updatedBeneficiary,
                      phone: e.target.value,
                    })
                  }
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="address"
                >
                  House Address
                </label>
                <input
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="address"
                  type="text"
                  placeholder="Enter surname"
                  value={updatedBeneficiary.address}
                  onChange={(e) =>
                    setUpdatedBeneficiary({
                      ...updatedBeneficiary,
                      address: e.target.value,
                    })
                  }
                />
              </div>
              <div className="flex gap-4">
                <button
                  className="border rounded-lg py-2 px-4 bg-green-500 text-white hover:bg-green-700"
                  type="submit"
                >
                  Save
                </button>
                <button
                  className="border rounded-lg py-2 px-4 bg-gray-500 text-white hover:bg-gray-700"
                  onClick={() => setOpenEdit(false)}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}
      </Modal>

      {/* beneficiary Details Modal */}
      <Modal
        isOpen={openBeneficiaryDetails}
        onRequestClose={() => setOpenBeneficiaryDetails(false)}
        style={customStyles}
        ariaHideApp={false}
      >
        {selectedBeneficiary && (
          <Transition
            show={openBeneficiaryDetails}
            enter="transition-opacity duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="bg-white rounded-lg p-8">
              <h2 className="text-2xl font-bold mb-4">Beneficiary Details</h2>
              <div className="flex items-start">
                <img
                  src={selectedBeneficiary.image}
                  alt="beneficiary"
                  className="w-1/3 rounded-lg mr-8"
                />
                <div className="w-2/3">
                  <p className="mb-2">
                    <span className="font-bold">Name:</span>{" "}
                    {selectedBeneficiary.name}
                  </p>
                  <p className="mb-2">
                    <span className="font-bold">Surname:</span>{" "}
                    {selectedBeneficiary.surname}
                  </p>
                  <p className="mb-2">
                    <span className="font-bold">ID Number:</span>{" "}
                    {selectedBeneficiary.id}
                  </p>
                  <p className="mb-2">
                    <span className="font-bold">Contact:</span>{" "}
                    {selectedBeneficiary.phone}
                  </p>
                  <p className="mb-2">
                    <span className="font-bold">House Address:</span>{" "}
                    {selectedBeneficiary.address}
                  </p>
                </div>
              </div>
            </div>
          </Transition>
        )}
      </Modal>
      {/* Delete Modal */}
      <Modal
        isOpen={openDelete}
        onRequestClose={() => setOpenDelete(false)}
        style={customStyles}
      >
        {selectedBeneficiary && (
          <div>
            <h2>Are you sure you want to delete this record?</h2>
            <div className="flex gap-4">
              <button
                className="border rounded-lg py-2 px-4 bg-red-500 text-white hover:bg-red-700"
                onClick={handleDeleteConfirm}
              >
                Delete
              </button>
              <button
                className="border rounded-lg py-2 px-4 bg-gray-500 text-white hover:bg-gray-700"
                onClick={() => setOpenDelete(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}
