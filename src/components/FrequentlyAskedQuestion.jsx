import { useState } from "react";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export default function FrequentlyAskedQuestion() {
  const faqs = [
    {
      id: 1,
      title: 'What is Pemasokita',
      content:
        'Pemasokita is suppliers are companies engaged in the sale of plants to SMEs and can scan the quality of the plants',
    },
    {
      id: 2,
      title: 'What new products are here?',
      content:
        'Currently there is only coffee as our product and in the future there will be many other products',
    },
    {
      id: 3,
      title: 'How do you ensure the quality and health of the plants you supply?',
      content:
        'Maintaining the quality and health of our plants is our top priority. We have a team of experienced horticulturists who carefully inspect and care for each plant before it is shipped. We follow strict quality control measures to ensure that only healthy and vibrant plants are delivered to our customers.',
    },
    {
      id: 4,
      title: 'Do you offer any discounts or special pricing for bulk orders?',
      content:
        'Yes, we offer competitive pricing for bulk orders. We understand the needs of SMEs and are willing to work with you to provide the best possible pricing based on the volume of your order. Contact our sales team to discuss your requirements and negotiate pricing options.',
    },
  ];

  const Accordion = ({ id, title, content }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
      setIsOpen(!isOpen );
    };

    return (
      <div className="rounded-md transition-all duration-200 border-solid border-2 border-gray-200 cursor-pointer hover:bg-gray-50">
        <button
          className="flex items-center justify-between w-full px-4 py-5 sm:p-6"
          onClick={toggleAccordion}
        >
          <span className="flex text-lg font-semibold text-black">{title}</span>
          <KeyboardArrowDownIcon className={`text-gray-400`} />
        </button>
        {isOpen && (
          <div className="px-4 pb-5 sm:px-6 sm:pb-6">
            <p>{content}</p>
          </div>
        )}
      </div>
    );
  };

  return (
    <section className={`w-[80%] mx-auto flex-col sm:py-16 py-6`} id="fqa">
      <div className="mx-auto">
        <h1 className="font-poppins font-bold xs:text-[48px] text-[40px] text-gray-800 xs:leading-[76.8px] leading-[66.8px] w-full text-center">Frequently Asked Questions </h1>
      </div>
      <div className="grid gap-4">
        <div className="mx-auto mt-8 grid gap-4 w-full">
          {faqs.map((faq) => (
            <Accordion key={faq.id} {...faq} />
          ))}
        </div>
      </div>
    </section>
  )
}
