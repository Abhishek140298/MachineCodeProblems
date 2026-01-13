import React from "react";

const userData = [
  { name: "Abhishek", id: 25, age: 29, designation: "Solution Engineer" },
  { name: "Rohit Sharma", id: 26, age: 28, designation: "Frontend Developer" },
  { name: "Priya Verma", id: 27, age: 26, designation: "Backend Developer" },
  { name: "Amit Kumar", id: 28, age: 31, designation: "Full Stack Developer" },
  { name: "Sneha Gupta", id: 29, age: 24, designation: "UI/UX Designer" },
  { name: "Rahul Singh", id: 30, age: 33, designation: "Project Manager" },
  { name: "Simran Kaur", id: 31, age: 27, designation: "QA Engineer" },
  { name: "Vikas Yadav", id: 32, age: 30, designation: "Software Engineer" },
  { name: "Neha Sharma", id: 33, age: 25, designation: "Business Analyst" },
  { name: "Kunal Mehta", id: 34, age: 32, designation: "DevOps Engineer" },
  { name: "Anjali Pandey", id: 35, age: 23, designation: "Data Analyst" },
  { name: "Suresh Rathi", id: 36, age: 35, designation: "Tech Lead" },
  { name: "Jyoti Mishra", id: 37, age: 29, designation: "Scrum Master" },
  { name: "Deepak Chauhan", id: 38, age: 34, designation: "Security Engineer" },
  { name: "Megha Kapoor", id: 39, age: 28, designation: "Mobile Developer" },
  { name: "Harsh Vardhan", id: 40, age: 30, designation: "AI/ML Engineer" },
  { name: "Ritika Jain", id: 41, age: 27, designation: "HR Manager" },
  {
    name: "Manish Patel",
    id: 42,
    age: 31,
    age: 31,
    designation: "Cloud Architect",
  },
  {
    name: "Kiran Desai",
    id: 43,
    age: 29,
    designation: "Database Administrator",
  },
  { name: "Shreya Kulkarni", id: 44, age: 26, designation: "Software Tester" },
  { name: "Aakash Joshi", id: 45, age: 32, designation: "React Developer" },
  { name: "Nidhi Chauhan", id: 46, age: 25, designation: "Content Writer" },
  { name: "Vivek Raj", id: 47, age: 33, designation: "Network Engineer" },
  { name: "Komal Agarwal", id: 48, age: 24, designation: "Angular Developer" },
  { name: "Arjun Reddy", id: 49, age: 34, designation: "Product Manager" },
  { name: "Pooja Bhat", id: 50, age: 28, designation: "Marketing Specialist" },
  { name: "Sagar Pawar", id: 51, age: 29, designation: "System Analyst" },
  { name: "Tanya Singh", id: 52, age: 27, designation: "SEO Analyst" },
  { name: "Ravi Teja", id: 53, age: 30, designation: "Data Scientist" },
  { name: "Isha Sharma", id: 54, age: 26, designation: "Support Engineer" },
];



export default function Pagination() {
  const [totaluserData, setTotalUserData] = React.useState([]);
  const [currentPage, setCurrent] = React.useState(1);
  const [pageSize, setPageSize] = React.useState(10);
  async function getUSerData() {
    let data;
    let dataLoader = new Promise((resolve, reject) => resolve(userData));
    return dataLoader;
  }

  React.useEffect(() => {
    let data;
    const getter = async () => {
      data = await getUSerData();
      console.log("Dta", data);
      setTotalUserData(data);
    };
    getter();
  }, [currentPage]);
  {
    console.log("Totla user", totaluserData);
  }

  return (
    <div>
      {console.log("Totla user", totaluserData)}
      {totaluserData
        ?.filter((data, index) => {
          return (
            index >= (currentPage - 1) * pageSize &&
            index < currentPage * pageSize
          );
        })
        .map((data) => (
            
          <div>{data.name}</div>
        ))}
      <div style={{ display: "flex", justifyContent:'space-between' }}>
        <div
          onClick={() => setCurrent((prev) => (prev == 1 ? prev : prev - 1))}
        >
          Prev
        </div>
        <div onClick={() => setCurrent((prev) => (prev == 3 ? prev : prev + 1))}>
          Next
        </div>
      </div>
    </div>
  );
}
