import { Container } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import './Inputs.css';

function Salesdata() {
  return (
    <Container>
        <div className="search-container">
      <InputGroup className="search-input">
        <InputGroup.Text id="basic-addon1">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
          </svg>
        </InputGroup.Text>
        <Form.Control
          placeholder="Search"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
    </div>
    <div className='no-butt' >
      <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center">
              <button id="butt"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bell" viewBox="0 0 16 16">
  <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z"/>
</svg> </button>
                    </div>
             </div>
             </div>
         
          
          <h3 className='h'>Sales Informetion</h3>

<form>
<div class="form-container">
  <div class="form-group">
    <label for="input1">Customer :</label>
    <input type="text" id="input1" name="input1" placeholder="Enter Customer name" />
  </div>
  <div class="form-group">
    <label for="input2">Invoice ID:</label>
    <input type="text" id="input2" name="input2" placeholder="Invoice ID" />
  </div>
  <div class="form-group">
    <label for="input3">Start Date:</label>
    <input type="date" id="input3" name="input3" placeholder="Enter input 3" />
  </div>
  <div class="form-group">
    <label for="input4">End Date:</label>
    <input type="date" id="input4" name="input4" placeholder="Enter input 4" />
  </div>
</div>
</form>
    </Container> 
    
  );
}

export default  Salesdata;