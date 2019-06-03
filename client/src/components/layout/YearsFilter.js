import React, { useState } from 'react';

// imported components
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

// Redux
import { connect } from 'react-redux';
import { getPopulation, getBirths } from '../../actions/charts';

const YearsFilter = ({ getPopulation, getBirths, category, countyList }) => {
  const [formData, setFormData] = useState({
    county: ['1440'],
    sex: ['3'],
    year: ['2013', '2014', '2015', '2016', '2017']
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
    const bothArray = ['1', '2'];
    let validSex = sex;
    sex[0] === '3' ? (validSex = bothArray) : (validSex = sex);
    category === 'population'
      ? getPopulation(county, validSex, year)
      : getBirths(county, validSex, year);
  };
  return (
    <Form onSubmit={onSubmit}>
      <FormGroup>
        <Label for='county'>County</Label>
        <Input type='select' name='county' onChange={onChange}>
          {countyList.map((county, i) => (
            <option key={i} value={county._id}>
              {county.name}
            </option>
          ))}
        </Input>
      </FormGroup>
      <FormGroup>
        <Label for='sex'>Sex</Label>
        <Input type='select' name='sex' onChange={e => onChange(e)}>
          <option value={['3']}>Both</option>
          <option value={['1']}>Men</option>
          <option value={['2']}>Women</option>
        </Input>
      </FormGroup>
      <FormGroup>
        <Label for='year'>Years</Label>
        <Input type='select' name='year' multiple onChange={e => onChange(e)}>
          <option value='2013'>2013</option>
          <option value='2014'>2014</option>
          <option value='2015'>2015</option>
          <option value='2016'>2016</option>
          <option value='2017'>2017</option>
        </Input>
        <small className='d-block mt-2'>Hold command to select multiple</small>
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
)(YearsFilter);
