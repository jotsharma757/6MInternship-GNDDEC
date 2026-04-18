import { useState, useEffect } from "react";

function Feedback() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [batch, setBatch] = useState("");
  const [section, setSection] = useState("");
  const [urn, setUrn] = useState("");
  const [feedback, setFeedback] = useState("");
  const [msg, setMsg] = useState("");
  const [data, setData] = useState([]);
  const [editId, setEditId] = useState(null);

  const fetchData = async () => {
    const res = await fetch("http://localhost:5000/api/feedback");
    const result = await res.json();
    setData(result);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let url = "http://localhost:5000/api/feedback";
    let method = "POST";
    if (editId) {
      url = `http://localhost:5000/api/feedback/${editId}`;
      method = "PUT";
    }

    try {
      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, batch, section, urn, feedback }),
      });
      const result = await res.json();
      setMsg(result.message);

      // Reset form
      setName(""); setEmail(""); setBatch(""); setSection(""); setUrn(""); setFeedback(""); setEditId(null);
      fetchData();
    } catch (error) {
      setMsg("Error occurred");
    }
  };

  const handleDelete = async (id) => {
    await fetch(`http://localhost:5000/api/feedback/${id}`, { method: "DELETE" });
    fetchData();
  };

  const handleEdit = (item) => {
    setName(item.name); setEmail(item.email); setBatch(item.batch);
    setSection(item.section); setUrn(item.urn); setFeedback(item.feedback);
    setEditId(item._id);
  };

  return (
    <div>
      <h2>Feedback Form</h2>
      <form onSubmit={handleSubmit}>
        <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" /><br /><br />
        <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" /><br /><br />
        <input value={batch} onChange={(e) => setBatch(e.target.value)} placeholder="Batch" /><br /><br />
        <input value={section} onChange={(e) => setSection(e.target.value)} placeholder="Section" /><br /><br />
        <input value={urn} onChange={(e) => setUrn(e.target.value)} placeholder="URN" /><br /><br />
        <textarea value={feedback} onChange={(e) => setFeedback(e.target.value)} placeholder="Feedback" /><br /><br />
        <button type="submit" >{editId ? "Update" : "Submit"}</button>
      </form>

      <p>{msg}</p>

      <table border="1" cellPadding="8" style={{ borderCollapse: "collapse", width: "100%" }}>
        <thead>
          <tr>
            <th>Name</th><th>Email</th><th>Batch</th><th>Section</th><th>URN</th><th>Feedback</th><th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item._id}>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.batch}</td>
              <td>{item.section}</td>
              <td>{item.urn}</td>
              <td>{item.feedback}</td>
              <td>
                <button onClick={() => handleEdit(item)}>Edit</button>{"       "}
                <button onClick={() => handleDelete(item._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Feedback;