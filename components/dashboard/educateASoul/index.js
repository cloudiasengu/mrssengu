import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import SchoolsTable from "./SchoolsTable";
import Head from 'next/head'

export default function index() {
  const [district, setDistrict] = useState("HARARE");
  const [schools, setSchools] = useState([
    {
      id: 1,
      name: "Mufakose High",
      district: "Harare",
    },
    {
      id: 2,
      name: "Mutiunokura Primary",
      district: "Harare",
    },
  ]);

  function handleDistrictChange(event) {
    setDistrict(event.target.textContent);
  }

  //Pull data for selected district
  //   axios
  //     .get(`/api/data?district=${encodeURIComponent(district)}`)
  //     .then((response) => {
  //       const data = response.data;
  //       setSchools(data);
  //       console.log(`Data for ${district}:`, data);
  //     })
  //     .catch((error) => {
  //       console.error(`Error fetching data for ${district}:`, error);
  //     });

  return (
    <div>
      <Head>
      <link className="border rounded-full" rel="shortcut icon" href="/students2.avif"></link>
        <title>Rusape</title>
      </Head>
      <div className="py-12 bg-white">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex items-center justify-between">
            <Image
              className="cursor-pointer"
              src="/gracelife-logo.png"
              width={200}
              height={200}
            />
            <div className="sm:border-gray-200 sm:border-b">
              <nav className="flex flex-wrap -mb-px sm:space-x-10">
                <Link
                  href="#"
                  className={`inline-flex items-center w-1/2 text-sm font-medium transition-all duration-200 sm:w-auto sm:border-transparent sm:border-b-2 sm:py-4 hover:text-gray-900 hover:border-gray-300 whitespace-nowrap group ${
                    district === "HARARE"
                      ? "text-indigo-600"
                      : "text-gray-500"
                  }`}
                  onClick={handleDistrictChange}
                >
                  Rusape Urban Ward 1
                </Link>

                <Link
                  href="#"
                  className={`inline-flex items-center w-1/2 text-sm font-medium transition-all duration-200 sm:w-auto sm:border-transparent sm:border-b-2 sm:py-4 group whitespace-nowrap ${
                    district === "MAZOWE"
                      ? "text-indigo-600"
                      : "text-gray-500"
                  }`}
                  onClick={handleDistrictChange}
                >
                  Rusape Urban Ward 2
                </Link>

                <Link
                  href="#"
                  className={`inline-flex items-center w-1/2 mt-5 text-sm font-medium transition-all duration-200 sm:mt-0 sm:w-auto sm:border-transparent sm:border-b-2 sm:py-4 hover:text-gray-900 hover:border-gray-300 whitespace-nowrap group ${
                    district === "RUSAPE"
                      ? "text-indigo-600"
                      : "text-gray-500"
                  }`}
                  onClick={handleDistrictChange}
                >
                  Rusape Urban Ward 3
                </Link>

                <Link
                  href="#"
                  className={`inline-flex items-center w-1/2 mt-5 text-sm font-medium transition-all duration-200 sm:mt-0 sm:w-auto sm:border-transparent sm:border-b-2 sm:py-4 hover:text-gray-900 hover:border-gray-300 whitespace-nowrap group ${
                    district === "EPWORTH"
                      ? "text-indigo-600"
                      : "text-gray-500"
                  }`}
                  onClick={handleDistrictChange}
                >
                  Rusape Rural Ward 1
                </Link>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <SchoolsTable schools={schools} district={district} />
    </div>
  );
}
