'use client';
import { useState } from "react";
import axios from "axios";
import Script from "next/script";
import HyperText from '../../components/magicui/hyper-text'

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
    if (formData.email !== formData.confirmEmail) {
      alert("Emails do not match. Please try again.");
      return;
    }
    try {
      const response = await axios.post("https://ecell-orcin.vercel.app/visitor/", formData);
      console.log("Task created:", response.data);
      alert("Your accommodation is booked");
    } catch (error) {
      console.error("Error creating task:", error);
      alert("Something went wrong");
    }
  };

  const paymentHandler = async (e) => {
    e.preventDefault();
    const currency = "INR";

    const response = await axios.post("https://ecell-orcin.vercel.app/payment/", {
      amount: 2 * 100,
      receipt: "AAyu9414",
      currency,
    });

    const { id: orderId, amount } = response.data;

    const options = {
      key: "rzp_live_Kz0ka8aJYIo4Fc",
      amount,
      currency,
      name: "E-Cell DTU",
      description: "Test Transaction",
      image: "https://example.com/your_logo",
      order_id: orderId,
      handler: async function (response) {
        const verificationResponse = await axios.post(
          "https://ecell-orcin.vercel.app/payment/verification",
          {
            paymentResponse: response,
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
        name: formData.name,
        email: formData.email,
        contact: formData.contact,
      },
      notes: {
        address: formData.city,
      },
      theme: {
        color: "#1f2937",
      },
    };

    const rzp1 = new window.Razorpay(options);
    rzp1.on("payment.failed", function (response) {
      alert("Payment Failed");
      console.error("Payment Failed:", response.error);
    });
    rzp1.open();
  };

  return (
    <>
      <div className="max-w-3xl mx-auto p-6 shadow-lg text-white">
        <HyperText
          className="text-2xl text-white md:text-5xl mt-24 md:my-12 font-bold font-Nova uppercase"
          text="Accommodation"
        />
        <form onSubmit={paymentHandler}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { label: "Name", id: "name", type: "text" },
              { label: "College", id: "college", type: "text" },
              { label: "City", id: "city", type: "text" },
              { label: "Contact", id: "contact", type: "text" },
              { label: "Email", id: "email", type: "email" },
              { label: "Confirm Email", id: "confirmEmail", type: "email" },
            ].map(({ label, id, type }) => (
              <div key={id}>
                <label htmlFor={id} className="block text-lg font-DarkerBold font-medium mb-2">
                  {label}
                </label>
                <input
                  type={type}
                  id={id}
                  name={id}
                  value={formData[id]}
                  onChange={handleChange}
                  className="w-full p-2 bg-gray-900/60 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
                  required
                />
              </div>
            ))}
          </div>
          <div className="mt-4">
            <label htmlFor="gender" className="block text-lg font-DarkerBold font-medium mb-2">
              Gender
            </label>
            <select
              id="gender"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="w-full p-3 bg-gray-900/60 h-full text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
              required
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full py-3 mt-6 bg-violet-600 hover:bg-gray00 text-white font-DarkerBold text-lg font-bold transition-all"
          >
            Submit
          </button>
        </form>
        <Script
          src="https://checkout.razorpay.com/v1/checkout.js"
          strategy="afterInteractive"
        />
      </div>
      <div className="min-h-screen bg-black text-white/80 flex font-DarkerBold flex-col items-start py-10 px-4 sm:px-8 lg:px-16">
        <h1 className="text-3xl font-bold mb-6 font-DarkerBold">
          Terms and Conditions for Accommodation
        </h1>

        <p className="mb-4">
          Welcome to the E-Summit DTU 2025 accommodation services. By proceeding with
          the booking, you agree to the following terms and conditions:
        </p>

        <p className="font-semibold">1. Payment Policy</p>
        <p className="mb-4">
          All payments made for accommodation during E-Summit DTU 2025 are strictly
          non-refundable. No requests for refunds will be entertained under any
          circumstances, including but not limited to cancellations, changes in
          schedule, or personal reasons.
        </p>

        <p className="font-semibold">2. Booking Confirmation</p>
        <p className="mb-4">
          Your booking will only be confirmed upon full payment. Ensure that you
          retain the payment receipt for verification purposes.
        </p>

        <p className="font-semibold">3. Code of Conduct</p>
        <p className="mb-4">
          Attendees are expected to maintain decorum and abide by the rules set by
          the organizers. Any inappropriate behavior may lead to immediate removal
          from the premises without any refund.
        </p>

        <p className="font-semibold">4. Liability</p>
        <p className="mb-4">
          The organizers are not responsible for any personal belongings lost,
          damaged, or stolen during your stay. Attendees are advised to take care
          of their valuables.
        </p>

        <p className="font-semibold">5. Amendments to Terms</p>
        <p className="mb-4">
          The organizers reserve the right to amend these terms and conditions at
          any time without prior notice. It is the attendee's responsibility to
          stay updated with the latest terms.
        </p>

        <p className="font-semibold">6. Health and Safety</p>
        <p className="mb-4">
          Attendees must comply with all health and safety protocols in place at
          the venue. Failure to adhere to these protocols may result in penalties
          or removal from the premises.
        </p>

        <p className="font-semibold">7. Contact Information</p>
        <p>
          For any queries or assistance, please contact our support team at
          <a href="mailto:ecelldtu@gmail.com" className="text-blue-400 hover:underline ml-1">
            ecelldtu@gmail.com
          </a>.
        </p>
      </div>
    </>

  );
};

export default BookingForm;
