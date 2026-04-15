import API from "../services/api";
import { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await API.post("/contact", form)
    alert("Message Sent");
  }

  return (
    <form id="Contact" onSubmit={handleSubmit} className="p-6">
      <input
        placeholder="Name"
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />
      <input
        placeholder="Email"
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />
      <textarea
        placeholder="Message"
        onChange={(e) => setForm({ ...form, message: e.target.value })}
      />
      <button type="submit">Send</button>
    </form>
  );
};

export default Contact;