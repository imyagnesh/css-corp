import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class SetUnits extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { value: 'celcius' };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    const { value } = this.state;
    const { changeUnits, currentUnit } = this.props;
    return (
      <div className="pt-6 w-1/4 inline-block">
        <div className="border border-3">
          <div className="justify-center my-2 inline-block">
            <div>
              <label className="uppercase w-full pl-3 font-bold">Units:</label>
            </div>
            <select value={currentUnit} onChange={(event) => changeUnits(event)}>
              <option value="celcius">Celcius</option>
              <option value="farenheit">Farenheit</option>
            </select>
          </div>
        </div>
      </div>
    );
  }
}

SetUnits.propTypes = {
  changeUnits: PropTypes.func.isRequired,
  currentUnit: PropTypes.string.isRequired,
};
