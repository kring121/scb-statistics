import React, { useState } from 'react';

// imported components
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

// Redux
import { connect } from 'react-redux';
import { getPopulation, getBirths } from '../../actions/charts';

const CountiesFilter = ({ getPopulation, getBirths, category, countyList }) => {
  const [formData, setFormData] = useState({
    county: ['1480', '0180', '1280'],
    sex: ['1'],
    year: ['2013']
  });

  const { county, sex, year } = formData;
  const onChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: [...e.target.options]
        .filter(option => option.selected)
        .map(selectedOption => selectedOption.value)
    });
  };
  const onSubmit = e => {
    e.preventDefault();
    category === 'population'
      ? getPopulation(county, sex, year)
      : getBirths(county, sex, year);
  };
  return (
    <Form onSubmit={onSubmit}>
      <FormGroup>
        <Label for='county'>County</Label>
        <Input type='select' name='county' multiple onChange={onChange}>
          {countyList.map((county, i) => (
            <option key={i} value={county._id}>
              {county.name}
            </option>
          ))}
        </Input>
        <small className='d-block mt-2'>Hold command to select multiple</small>
      </FormGroup>
      <FormGroup>
        <Label for='sex'>Sex</Label>
        <Input type='select' name='sex' onChange={e => onChange(e)}>
          <option value={['1']}>Men</option>
          <option value={['2']}>Women</option>
        </Input>
      </FormGroup>
      <FormGroup>
        <Label for='year'>Year</Label>
        <Input type='select' name='year' onChange={e => onChange(e)}>
          <option value='2013'>2013</option>
          <option value='2014'>2014</option>
          <option value='2015'>2015</option>
          <option value='2016'>2016</option>
          <option value='2017'>2017</option>
        </Input>
      </FormGroup>
      <Button className='mt-4' color='dark' block>
        Apply Filter
      </Button>
    </Form>
  );
};

const mapStateToProps = state => ({
  category: state.charts.category
});

export default connect(
  mapStateToProps,
  { getPopulation, getBirths }
)(CountiesFilter);