import React from 'react';
import Customer_management from './Customer_management';
import ListCustomerComponent from './ListCustomerComponent';
import {Link} from 'react-router-dom';

const AdminMainPage = () => {
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', width: '700px' }}>
        
      
        <Button component={<Component1 />} />
          <Button component={<Component2 />} />
        </div>
      </div>
      
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', width: '700px' }}>
          <Button component={<Component3 />} />
          <Button component={<Component4/>} />
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', width: '700px' }}>
          <Button component={<Component5 />} />
          <Button component={<Component6 />} />
        </div>
      </div>
    </div>
  );
};

const Button = ({ component }) => {
  return (
    <button
      style={{
        width: '400px',
        height: '150px',
        backgroundColor: '#CEACE6',
        color: 'black',
        borderRadius: '5px',
        margin: '35px',
        fontWeight: 'bold',
      }}
    >
      {component}
    </button>
  );
};

const Component1 = () => {
  return <div> customer mang</div>;
};

const Component2 = () => {
  return <div> device mang</div>;
};

const Component3 = () => {
  return <div>Employee Management</div>;
};

const Component4 = () => {
  return <div>Repair Management</div>;
};

const Component5 = () => {
  return <div>Customer Booking Data</div>;
};

const Component6 = () => {
  return <div>Employee's Assigned</div>;
};

export default AdminMainPage;
