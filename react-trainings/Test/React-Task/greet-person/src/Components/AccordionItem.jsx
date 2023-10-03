import React from 'react'

  const AccordionItem = ({  onClick, isActive,  ...item }) => {
    
    const handleAccordionItemClick = () => {
      onClick(item);
    };

  return (
    <div className="accordion-item">
      <button className="accordion-label" onClick={handleAccordionItemClick}>
      {item.label}
    </button>
    {isActive && <div className="accordion-details">{item.details}</div>}
  </div>
  )
}

export default AccordionItem