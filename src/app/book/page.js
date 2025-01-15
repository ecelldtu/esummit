'use client'
// components/BookingForm.js
import { useState } from "react";
import axios from "axios";
import Script from "next/script";
const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    college: "",
    city: "",
    gender: "",
    contact: "",
    email: "",
    confirmEmail: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    // e.preventDefault();
    if (formData.email !== formData.confirmEmail) {
      alert("Emails do not match. Please try again.");
      return;
    }
     try {
      // Post request to create a task
      const response = await axios.post('https://ecell-orcin.vercel.app/visitor/',formData);
      console.log('Task created:', response.data);
      alert('Your accomodation is booked');
      // // Reset form
      // setTask({ title: '', description: '', points: '' });
    } catch (error) {
      console.error('Error creating task:', error);
      alert('something went wrong');
    }
    console.log("Form Data Submitted:", formData);
  };
   const paymentHandler = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    const currency = "INR";

    // Step 1: Create an order in your backend
    const response = await axios.post("https://ecell-orcin.vercel.app/payment/", {
      amount: 10 * 100, // Convert to subunits
      receipt: 'AAyu9414',
      currency,
    });

    const { id: orderId, amount } = response.data; // Extract order ID and amount from backend response

    // Step 2: Configure Razorpay options
    const options = {
      key: "rzp_live_JjN6EJ23Qrir9N", // Replace with your Razorpay Key ID
      amount,
      currency,
      name: "ecell", // Your business name
      description: "Test Transaction",
      image: "https://example.com/your_logo", // Replace with your logo URL
      order_id: orderId, // Order ID generated in Step 1
      handler: async function (response) {
        // Step 3: Verify the payment in your backend
        const verificationResponse = await axios.post(
          "https://ecell-orcin.vercel.app/payment/verification",
          {
            paymentResponse: response, // Pass the entire Razorpay response
          }
        );
        if (verificationResponse.data.msg === "success") {
          alert("Payment Successful");
          await handleSubmit();
          setTimeout(() => {
            window.location.href = "/";
          }, 3000);
        } else {
          alert("Payment Verification Failed");
        }
      },

      prefill: {
        name: formData.username, // Use entered username
        email: "webdevmatrix@example.com", // Default email
        contact: formData.contact, // Use entered contact
      },

      notes: {
        address: formData.address, // Use entered address
      },

      theme: {
        color: "#3399cc",
      },
    };

    // Step 4: Open Razorpay payment gateway
    const rzp1 = new window.Razorpay(options);

    // Handle payment failures
    rzp1.on("payment.failed", function (response) {
      alert("Payment Failed");
      console.error("Payment Failed:", response.error);
    });
    rzp1.open();
  };

  return (
    <div className="max-w-md  mx-auto p-4 border rounded shadow">
      <h1 className="text-2xl font-bold mb-4">Booking Form</h1>
      <form onSubmit={paymentHandler}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium mb-1">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border rounded p-2"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="college" className="block text-sm font-medium mb-1">
            College
          </label>
          <input
            type="text"
            id="college"
            name="college"
            value={formData.college}
            onChange={handleChange}
            className="w-full border rounded p-2"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="city" className="block text-sm font-medium mb-1">
            City
          </label>
          <input
            type="text"
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
            className="w-full border rounded p-2"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="gender" className="block text-sm font-medium mb-1">
            Gender
          </label>

          <select
            id="gender"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="w-full border rounded p-2"
            required
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
         <div className="mb-4">
          <label htmlFor="contact" className="block text-sm font-medium mb-1">
            Contact
          </label>
          <input
            type="text"
            id="contact"
            name="contact"
            value={formData.contact}
            onChange={handleChange}
            className="w-full border rounded p-2"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border rounded p-2"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="confirmEmail" className="block text-sm font-medium mb-1">
            Confirm Email
          </label>
          <input
            type="email"
            id="confirmEmail"
            name="confirmEmail"
            value={formData.confirmEmail}
            onChange={handleChange}
            className="w-full border rounded p-2"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
      <Script
        src="https://checkout.razorpay.com/v1/checkout.js"
        strategy="afterInteractive" // Ensures the script loads after the page is interactive
      />
    </div>
  );
};

export default BookingForm;
