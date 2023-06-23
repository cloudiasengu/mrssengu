import React, { useState, useEffect } from "react";
import mockData from "/mockdata.json";
import Modal from "react-modal";
import { Transition } from "@headlessui/react";

export default function StudentsTable({ schoolName, searchQuery }) {
  const [open, setOpen] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [openStudentDetails, setOpenStudentDetails] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [students, setStudents] = useState([]);
  const [updatedStudent, setUpdatedStudent] = useState({});
  const [reports, setReports] = useState([
    { reports: "http://dummyimage.com/194x100.png/dddddd/000000" },
    { reports: "http://dummyimage.com/156x100.png/ff4444/ffffff" },
    { reports: "http://dummyimage.com/144x100.png/ff4444/ffffff" },
  ]);
  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  function handleNewStudentAdd() {
    setOpenEdit(false);

    // Make the API POST request
    axios
      .post("your_api_endpoint_here", updatedStudent)
      .then((response) => {
        console.log("Student added successfully:", response.data);
        // Perform any additional actions upon successful addition of student
      })
      .catch((error) => {
        console.error("Error adding student:", error);
        // Handle error case
      });
  }

  useEffect(() => {
    setStudents(mockData);
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

  const handleEdit = (student) => {
    setUpdatedStudent({ ...student });
    setOpenStudentDetails(false);
    setOpenEdit(true);
    setOpenDelete(false);
  };

  const handleDelete = (student) => {
    setSelectedStudent(student);
    setOpenDelete(true);
  };

  const handleStudentDetails = (student) => {
    setSelectedStudent(student);
    setOpenStudentDetails(true);
  };

  const handleDeleteConfirm = () => {
    // Perform delete operation here
    setOpenDelete(false);
  };

  const handleEditSubmit = () => {
    // Find the index of the selected student in the students array
    const index = students.findIndex(
      (student) => student.id === selectedStudent.id
    );
    // Create a new array of students with the updated student data
    const updatedStudents = [...students];
    updatedStudents[index] = { ...updatedStudent };
    // Update the students state with the new array
    setStudents(updatedStudents);
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
            <tr className="bg-indigo-500 text-white">
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Surname</th>
              <th className="px-4 py-2">Grade/Form</th>
              <th className="px-4 py-2">Name of School</th>
              <th className="px-4 py-2">Contact</th>
              <th className="px-4 py-2">House Address</th>
              <th className="px-4 py-2">Edit</th>
              <th className="px-4 py-2">Delete</th>
            </tr>
          </thead>
          {/* Table Body */}
          <tbody>
            {filteredStudents.map((student) => (
              <tr
                key={student.id}
                className="border-b-2 border-gray-200 hover:bg-gray-100 cursor-pointer"
                onClick={() => handleStudentDetails(student)}
              >
                <td className="px-4 py-2">{student.name}</td>
                <td className="px-4 py-2">{student.surname}</td>
                <td className="px-4 py-2">{student.grade}</td>
                <td className="px-4 py-2">{student.school}</td>
                <td className="px-4 py-2">{student.contact}</td>
                <td className="px-4 py-2">{student.address}</td>
                <td className="flex justify-center px-4 py-2">
                  <div
                    className="cursor-pointer"
                    onClick={() => handleEdit(student)}
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
                      handleDelete(student);
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
        {selectedStudent && (
          <div>
            <h2>Edit Student</h2>
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
                  value={updatedStudent.name}
                  onChange={(e) =>
                    setUpdatedStudent({
                      ...updatedStudent,
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
                  value={updatedStudent.surname}
                  onChange={(e) =>
                    setUpdatedStudent({
                      ...updatedStudent,
                      surname: e.target.value,
                    })
                  }
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="school"
                >
                  School
                </label>
                <input
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="school"
                  type="text"
                  placeholder="Enter school"
                  value={updatedStudent.school}
                  onChange={(e) =>
                    setUpdatedStudent({
                      ...updatedStudent,
                      school: e.target.value,
                    })
                  }
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="grade"
                >
                  Grade
                </label>
                <input
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="grade"
                  type="text"
                  placeholder="Enter Grade"
                  value={updatedStudent.grade}
                  onChange={(e) =>
                    setUpdatedStudent({
                      ...updatedStudent,
                      grade: e.target.value,
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
                  value={updatedStudent.contact}
                  onChange={(e) =>
                    setUpdatedStudent({
                      ...updatedStudent,
                      contact: e.target.value,
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
                  value={updatedStudent.address}
                  onChange={(e) =>
                    setUpdatedStudent({
                      ...updatedStudent,
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
                  onClick={handleNewStudentAdd}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}
      </Modal>

      {/* Student Details Modal */}
      <Modal
        isOpen={openStudentDetails}
        onRequestClose={() => setOpenStudentDetails(false)}
        style={customStyles}
        ariaHideApp={false}
      >
        {selectedStudent && (
          <Transition
            show={openStudentDetails}
            enter="transition-opacity duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="bg-white rounded-lg p-8">
              <h2 className="text-2xl font-bold mb-4">Student Details</h2>
              <div className="flex items-start">
                <img
                  src={selectedStudent.image}
                  alt="Student"
                  className="w-1/3 rounded-lg mr-8"
                />
                <div className="w-2/3">
                  <p className="mb-2">
                    <span className="font-bold">Name:</span>{" "}
                    {selectedStudent.name}
                  </p>
                  <p className="mb-2">
                    <span className="font-bold">Surname:</span>{" "}
                    {selectedStudent.surname}
                  </p>
                  <p className="mb-2">
                    <span className="font-bold">Grade/Form:</span>{" "}
                    {selectedStudent.grade}
                  </p>
                  <p className="mb-2">
                    <span className="font-bold">Name of School:</span>{" "}
                    {selectedStudent.school}
                  </p>
                  <p className="mb-2">
                    <span className="font-bold">Contact:</span>{" "}
                    {selectedStudent.contact}
                  </p>
                  <p className="mb-2">
                    <span className="font-bold">House Address:</span>{" "}
                    {selectedStudent.address}
                  </p>
                  <h3 className="text-lg font-bold mt-4">Reports</h3>
                  {/* Reports Table */}
                  <table className="mt-2">
                    <thead>
                      <tr>
                        <th className="py-2">Report</th>
                      </tr>
                    </thead>
                    <tbody>
                      {reports.map((report, index) => (
                        <tr key={index}>
                          <td>
                            <a
                              href={report.reports}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-500 hover:underline"
                            >
                              Report {index + 1}
                            </a>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
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
        {selectedStudent && (
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
