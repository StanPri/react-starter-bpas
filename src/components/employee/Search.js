import React from 'react';
import Form from 'react-bootstrap/lib/Form';
import InputGroup from 'react-bootstrap/lib/InputGroup';
import FormControl from 'react-bootstrap/lib/FormControl';
import Button from 'react-bootstrap/lib/Button';
import FormGroup from 'react-bootstrap/lib/FormGroup';

class Search extends React.Component {
  render() {
    return (
      <Form horizontal className="search-box">
      <FormGroup>
        <InputGroup bsSize="lg">
          <FormControl type="text"></FormControl>
          <InputGroup.Button>
            <Button>Search</Button>
          </InputGroup.Button>
        </InputGroup>
      </FormGroup>
    </Form>
    );
  }
}

export default Search;
