import React, { useState } from "react";

const faqs = [
  {
    question: "How long does delivery take?",
    answer: "Delivery usually takes 3-7 business days depending on your location."
  },
  {
    question: "Are your snacks healthy?",
    answer: "Yes, our snacks are made using natural ingredients and healthy recipes."
  },
  {
    question: "Can I cancel my order?",
    answer: "Yes, you can cancel your order before it is shipped."
  },
  {
    question: "Do you offer cash on delivery?",
    answer: "Currently we support online payments only."
  }
];

function Faqs() {

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-14">

      <h1 className="text-3xl sm:text-4xl font-bold text-center mb-10">
        Frequently Asked Questions
      </h1>

      <div className="space-y-4">

        {faqs.map((faq, index) => (

          <div
            key={index}
            className="border rounded-xl p-5 shadow-sm"
          >

            <button
              onClick={() => toggleFAQ(index)}
              className="flex justify-between items-center w-full text-left font-semibold text-lg"
            >
              {faq.question}
              <span>
                {openIndex === index ? "−" : "+"}
              </span>
            </button>

            {openIndex === index && (
              <p className="text-gray-600 mt-3">
                {faq.answer}
              </p>
            )}

          </div>

        ))}

      </div>

    </div>
  );
}

export default Faqs;