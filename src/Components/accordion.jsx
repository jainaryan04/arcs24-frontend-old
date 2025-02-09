import { useState } from "react";

const AccordionItem = ({ title, content }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="mb-2">
      <button
        type="button"
        className={`mb-2 flex w-full items-center justify-between gap-4 ${!isExpanded && "rounded-xl border-b border-white"} bg-transparent p-4 text-left`}
        aria-expanded={isExpanded}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {title}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          strokeWidth="2"
          stroke="currentColor"
          className={`size-5 shrink-0 transition ${isExpanded ? "rotate-180" : ""}`}
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
          />
        </svg>
      </button>
      {isExpanded && (
        <div
          className={`mb-2 text-pretty ${isExpanded && "rounded-xl border-b border-white"} p-4 text-sm sm:text-base`}
        >
          {content}
        </div>
      )}
    </div>
  );
};

const Accordion = ({ items }) => {
  return (
    <div className="w-[60%] overflow-hidden">
      {items.map((item, index) => (
        <AccordionItem key={index} title={item.title} content={item.content} />
      ))}
    </div>
  );
};

export default Accordion;
