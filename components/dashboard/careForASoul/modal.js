import { useState } from "react";

export default function Modal({ student, open, close}) {
  const [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    
  }
  return(
    <>
      <div className="z-1 fixed inset-0 overflow-y-auto">
        <div className="flex min-h-screen items-center justify-center">
          <div className="fixed inset-0 bg-gray-500 opacity-30 "></div>

          <div className="z-10 flex justify-center md:w-1/2 p-4">
            <div className="  rounded-lg bg-white p-6">
              <h2 className="mb-4 text-xl font-bold font-medium">
                {student.name}
              </h2>
              <button
                className="rounded bg-[#f5a524] py-2 px-4 font-bold text-white hover:bg-secondary"
                onClick={closeModal}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
