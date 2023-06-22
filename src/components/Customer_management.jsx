import '../css/Customer_management.css';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'

import ListCustomerComponent from './ListCustomerComponent'
import AddCustomerComponent from './AddCustomerComponent';

function Customer_management() {
  return (
   <div>
    <Router>


   <Routes>
      <Route path = "/" element = {<ListCustomerComponent/>}></Route>
      <Route path = "/customers" element = {<ListCustomerComponent/>}></Route>
      <Route path = "/add-customer" element = {<AddCustomerComponent/>} ></Route>
      <Route path="/edit-customer/:id" element={<AddCustomerComponent/>}></Route>
      </Routes>
    
 
  
    </Router>
   </div>
  );
}

export default Customer_management;
