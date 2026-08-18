// const userData = [
//   { name: "Abhishek", id: 25, age: 29, designation: "Solution Engineer" },
//   { name: "Rohit Sharma", id: 26, age: 28, designation: "Frontend Developer" },
//   { name: "Priya Verma", id: 27, age: 26, designation: "Backend Developer" },
//   { name: "Amit Kumar", id: 28, age: 31, designation: "Full Stack Developer" },
//   { name: "Sneha Gupta", id: 29, age: 24, designation: "UI/UX Designer" },
//   { name: "Rahul Singh", id: 30, age: 33, designation: "Project Manager" },
//   { name: "Simran Kaur", id: 31, age: 27, designation: "QA Engineer" },
//   { name: "Vikas Yadav", id: 32, age: 30, designation: "Software Engineer" },
//   { name: "Neha Sharma", id: 33, age: 25, designation: "Business Analyst" },
//   { name: "Kunal Mehta", id: 34, age: 32, designation: "DevOps Engineer" },
//   { name: "Anjali Pandey", id: 35, age: 23, designation: "Data Analyst" },
//   { name: "Suresh Rathi", id: 36, age: 35, designation: "Tech Lead" },
//   { name: "Jyoti Mishra", id: 37, age: 29, designation: "Scrum Master" },
//   { name: "Deepak Chauhan", id: 38, age: 34, designation: "Security Engineer" },
//   { name: "Megha Kapoor", id: 39, age: 28, designation: "Mobile Developer" },
//   { name: "Harsh Vardhan", id: 40, age: 30, designation: "AI/ML Engineer" },
//   { name: "Ritika Jain", id: 41, age: 27, designation: "HR Manager" },
//   {
//     name: "Manish Patel",
//     id: 42,
//     age: 31,
//     age: 31,
//     designation: "Cloud Architect",
//   },
//   // {
//   //   name: "Kiran Desai",
//   //   id: 43,
//   //   age: 29,
//   //   designation: "Database Administrator",
//   // },
//   { name: "Shreya Kulkarni", id: 44, age: 26, designation: "Software Tester" },
//   { name: "Aakash Joshi", id: 45, age: 32, designation: "React Developer" },
//   { name: "Nidhi Chauhan", id: 46, age: 25, designation: "Content Writer" },
//   { name: "Vivek Raj", id: 47, age: 33, designation: "Network Engineer" },
//   { name: "Komal Agarwal", id: 48, age: 24, designation: "Angular Developer" },
//   { name: "Arjun Reddy", id: 49, age: 34, designation: "Product Manager" },
//   { name: "Pooja Bhat", id: 50, age: 28, designation: "Marketing Specialist" },
//   { name: "Sagar Pawar", id: 51, age: 29, designation: "System Analyst" },
//   { name: "Tanya Singh", id: 52, age: 27, designation: "SEO Analyst" },
//   { name: "Ravi Teja", id: 53, age: 30, designation: "Data Scientist" },
//   { name: "Isha Sharma", id: 54, age: 26, designation: "Support Engineer" },
// ];




import React, { useState } from "react";

const Pagination = ({
  currentPage,
  handleCurrentPage,
  pageSize,
  handlePageSize,
  pageSizes,
  numberOfPages,
}) => {

  const CHUNK_SIZE = 5;

  const chunkStart =
    Math.floor((currentPage - 1) / CHUNK_SIZE) * CHUNK_SIZE + 1;

  const pages = Array.from(
    {
      length: Math.min(
        CHUNK_SIZE,
        numberOfPages - chunkStart + 1
      ),
    },
    (_, index) => chunkStart + index
  );

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
        marginTop: "20px",
      }}
    >
      {/* Previous */}
      <button
        disabled={currentPage === 1}
        onClick={() => handleCurrentPage("prev")}
      >
        Prev
      </button>

      {/* Pages */}
      {pages.map((page)=>

         (
          <button
            key={page}
            style={{
              border:
                page === currentPage
                  ? "2px solid blue"
                  : "1px solid black",
              background: page === currentPage ? "#eee" : "white",
              padding: "5px 10px",
              cursor: "pointer",
            }}
            onClick={() => handleCurrentPage(page)}
          >
            {page}
          </button>
        )
)}

      {/* Next */}
      <button
        disabled={currentPage === numberOfPages}
        onClick={() => handleCurrentPage("next")}
      >
        Next
      </button>

      {/* Page Size */}
      {pageSizes.length > 0 && (
        <select
          value={pageSize}
          onChange={(e) => handlePageSize(Number(e.target.value))}
        >
          {pageSizes.map((size) => (
            <option key={size} value={size}>
              {size}
            </option>
          ))}
        </select>
      )}
    </div>
  );
};

const PaginationContainer = ({
  children,

  // Controlled props
  currentPage: externalCurrentPage,
  handleCurrentPage: externalHandleCurrentPage,

  // Page size
  pageSize = 10,
  handlePageSize: externalHandlePageSize,
  pageSizes = [10, 20, 50],

  totalNumberOfItems = 200,
}) => {
  // Internal state
  const [internalCurrentPage, setInternalCurrentPage] = useState(1);
  const [internalPageSize, setInternalPageSize] = useState(pageSize);

  // Controlled OR uncontrolled
  const currentPage =
    externalCurrentPage ?? internalCurrentPage;

  const currentPageSize =
    pageSize ?? internalPageSize;

  const numberOfPages = Math.ceil(
    totalNumberOfItems / currentPageSize
  );

  const handleCurrentPage =
    externalHandleCurrentPage ??
    ((value) => {
      setInternalCurrentPage((prev) => {
        if (value === "prev") {
          return Math.max(1, prev - 1);
        }

        if (value === "next") {
          return Math.min(numberOfPages, prev + 1);
        }

        return value;
      });
    });

  const handlePageSize =
    externalHandlePageSize ??
    ((size) => {
      setInternalPageSize(size);

      // Reset pagination when page size changes
      setInternalCurrentPage(1);
    });

  return (
    <div>
      {/* Render Prop */}
      {typeof children === "function"
        ? children({
            currentPage,
            pageSize: currentPageSize,
          })
        : children}

      <Pagination
        currentPage={currentPage}
        handleCurrentPage={handleCurrentPage}
        pageSize={currentPageSize}
        handlePageSize={handlePageSize}
        pageSizes={pageSizes}
        numberOfPages={numberOfPages}
      />
    </div>
  );
};

export default PaginationContainer;