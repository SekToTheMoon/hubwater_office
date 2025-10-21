"use client";
import { useState } from "react";
import emailjs from "emailjs-com";
import Swal from "sweetalert2"; // Import SweetAlert2

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await emailjs.send(
        "service_e3y4lmf", // Service ID
        "template_9gb15gm", // Template ID
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        "jmI6lZUPPKtChrbzI" // Public Key
      );

      setSubmitted(true);
      setFormData({ ...formData, message: "" }); // เคลียร์เฉพาะ message

      // แสดง SweetAlert2 แจ้งเตือนลูกค้า
      Swal.fire({
        icon: "success",
        title: "ส่งอีเมลสำเร็จ!",
        text: "ขอบคุณสำหรับอีเมลของคุณ เราจะตอบกลับให้เร็วที่สุด.",
        confirmButtonColor: "#3085d6",
      });
    } catch (error) {
      console.error("Error sending email:", error);

      // แจ้งเตือนกรณีส่งไม่สำเร็จ
      Swal.fire({
        icon: "error",
        title: "ส่งอีเมลไม่สำเร็จ!",
        text: "มีบางอย่างผิดพลาดในการส่งอีเมล กรุณาลองใหม่อีกครั้ง.",
        confirmButtonColor: "#d33",
      });
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-xl">ฝากอีเมลของคุณให้เรา 📧</h1>
      <form onSubmit={handleSubmit} className="space-y-4 py-4">
        <input
          type="text"
          placeholder="👨🏻‍💻 ชื่อ - นามสกุล"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="border-b border-gray-700 p-2 w-full focus:outline-none focus:border-b focus:border-blue-500"
          required
        />
        <input
          type="email"
          placeholder="✉️ อีเมล"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="border-b border-gray-700 p-2 w-full focus:outline-none focus:border-b focus:border-blue-500"
          required
        />
        <textarea
          placeholder="🗨️ ข้อความ"
          value={formData.message}
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
          className="border-b border-gray-700 pt-2 px-2 w-full focus:outline-none focus:border-b focus:border-blue-500"
          required
        />
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded-lg w-full hover:bg-blue-600 "
        >
          <span className="text-center">ส่งข้อความ</span>
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
