import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import StudentForm from "./components/StudentForm";
import StudentList from "./components/StudentList";
import { getStudents } from "./services/api";
import "./styles/App.css";

function App() {
  const [students, setStudents] = useState([]);

  const fetchStudents = async () => {
    const response = await getStudents();
    setStudents(response.data);
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  return (
    <>
      <Navbar />

      <div className="container">
        <StudentForm refreshStudents={fetchStudents} />

        <StudentList
          students={students}
          refreshStudents={fetchStudents}
        />
      </div>
    </>
  );
}

export default App;