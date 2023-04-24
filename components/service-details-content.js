import React from "react";
import serviceS1 from "@/images/s1.jpg";
import serviceS2 from "@/images/s2.jpg";
const ServiceDetailsContent = ({title,content}) => {
  return (
    <div className="serviceArea">
      <img src={serviceS1} alt="" />
      <h2 className="text-right">{title}</h2>
      <p className="text-right">
       {content}
      </p>
    
    </div>
  );
};

export default ServiceDetailsContent;
