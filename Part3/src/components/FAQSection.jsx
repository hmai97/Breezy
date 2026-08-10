import { useState } from "react";
//create an array of questions and answers for the FAQ section
const questions = [
  {
    question: "Isn't air already free?",
    answer:
      "Technically, yes. But is free air really the air you want to be breathing? Our air comes with a receipt, and that's called peace of mind.",
  },
  {
    question: "What if I forget to breathe?",
    answer:
      "That's actually a medical concern and not something we can help with. But our Power Inhaler plan does include breathing reminders via push notification every 4 seconds.",
  },
  {
    question: "Can I cancel anytime?",
    answer:
      "You can cancel your subscription anytime! You'll just need to fill out a 23-page form, attend an exit interview with our Air Retention Specialist, and solve a CAPTCHA that's actually a lung capacity test.",
  },
  {
    question: "Is this a real product?",
    answer:
      "This is a test site for A/B testing and other experiments. But honestly, at this point in tech, would you really be surprised if someone funded this?",
  },
  {
    question: "Do you have an API?",
    answer:
      "Yes! Our REST API supports GET /air and POST /exhale endpoints. Rate limited to 12 breaths per minute.",
  },
];


function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq" id="faq">
      <div className="container" style={{ textAlign: "center" }}>
        <div className="section-label">FAQ</div>
        <div className="section-title">
          Questions we made up
        </div>
        <p className="section-sub" style={{ margin: "0 auto" }}>
          Transparent answers to the questions literally nobody asked.
        </p>
        <div className="faq-list" style={{ textAlign: "left" }}>
          {questions.map((item, index) => (
            <div className="faq-item" key={item.question}>
              <button className={`faq-q ${  openIndex === index ? "open" : "" }`}onClick={() => toggleFaq(index)}>
                {item.question}
              </button>
              <div className={`faq-a ${ openIndex === index ? "open" : ""  }`}> {item.answer} </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default FAQSection;