import React, {useState} from 'react'
import "./Accordion.css"
import { SIDEBAR_CONFIG } from '../data';
import AccordionItem from './AccordionItem';

const Accordion = () => {
  const [label, setLabel] = useState("");
  

    const handleAccordionItemClick = (clickedItem) => {
        if(label === clickedItem?.label){
          setLabel("")
        }else{
          setLabel(clickedItem?.label);
        }

    };

  return (
    <div>
    <div className="accordion">
      {SIDEBAR_CONFIG.map((item, index) => (
        <AccordionItem key={item.label}  onClick={handleAccordionItemClick} isActive={label === item.label}  {...item} />
      ))}
    </div>
  </div> 
  )
}

export default Accordion