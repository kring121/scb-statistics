import React, { Fragment, useEffect, useState } from 'react';

// imported components
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

// Redux
import { connect } from 'react-redux';
import { getCounties, getPopulation } from '../../actions/charts';

const Sidebar = ({ getCounties, getPopulation, countyList }) => {
  useEffect(() => {
    getCounties();
  }, [getCounties]);

  const [formData, setFormData] = useState({
    county: ['1440'],
    sex: ['1', '2'],
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
    getPopulation(county, sex, year);
  };
  return (
    <Fragment>
      <h1 className='mb-3'>Filter Results</h1>
      <Form onSubmit={e => onSubmit(e)}>
        <FormGroup>
          <Label for='county'>County</Label>
          <Input type='select' name='county' onChange={e => onChange(e)}>
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
            <option value={['1', '2']}>Both</option>
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
          <small className='d-block mt-2'>
            Hold command to select multiple
          </small>
        </FormGroup>
        <Button className='mt-4' color='dark' block>
          Apply Filter
        </Button>
      </Form>
    </Fragment>
  );
};

const mapStateToProps = state => ({
  countyList: state.charts.countyList
});

export default connect(
  mapStateToProps,
  { getCounties, getPopulation }
)(Sidebar);
