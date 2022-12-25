import React from 'react';
import { Button,FormControl, InputGroup } from 'react-bootstrap';
// import { MDBInputGroup, MDBInput, MDBIcon, MDBBtn } from 'mdb-react-ui-kit';
import './Search.css';
const Search = () => {
    return (
      <div className="App SearchBar">
        <div class="container h-100">
          <div class="row h-100 justify-content-center align-items-center"></div>
          <InputGroup className="col-6">
            <FormControl
              placeholder="Search"
              aria-label="Search"
              aria-describedby="basic-addon2"
            />
            <Button variant="outline-success" id="button-addon2">
              Search
            </Button>
          </InputGroup>
        </div>
      </div>
    );
};

export default Search;