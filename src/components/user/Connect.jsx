import React from 'react';
import { GiStarsStack } from 'react-icons/gi';
import { FaPhone, FaComments, FaArrowRight, FaRegSun } from 'react-icons/fa';
import '../../styles/Connect.css'; // Import the CSS file'

const options = [
  { icon: <FaPhone />, label: 'Talk' },
  { icon: <FaComments />, label: 'Chat' }
];

function Connect() {
  return (
    <>
      {/*------------------ small card components--------------------*/}
      <div className="container py-4">
        <div className="row justify-content-center g-4">
          {options.map((item, idx) => (
            <div key={idx} className="col-md-3">
              <div className="card service-card p-3 d-flex flex-row align-items-center justify-content-between shadow-sm border-0 rounded-4">
                <div className="d-flex align-items-center gap-3">
                  <div className="icon-circle bg-indigo text-white d-flex align-items-center justify-content-center rounded-circle">
                    {item.icon}
                  </div>
                  <h6 className="mb-0">{item.label}</h6>
                </div>
                <FaArrowRight className="text-muted" />
              </div>
              
              
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Connect;