import { deleteStudent } from "../services/api";
import "../styles/StudentList.css";

function StudentList({ students, refreshStudents }) {
  const handleDelete = async (id) => {
    await deleteStudent(id);
    refreshStudents();
  };

  return (
    <div className="student-list">
      <h3>add you list</h3>

      {students.map((student) => (
        <div className="student-card" key={student.id}>
          <h4>{student.name}</h4>
          <p>{student.email}</p>
          <p>{student.course}</p>

          <button
            onClick={() => handleDelete(student.id)}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default StudentList;