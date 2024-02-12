import { Component } from 'react';

export class Filter extends Component{
    render() {
        return(
        <label htmlFor="">
        Find contact by name
        <input
          type="text"
          name="filter"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          onChange={this.props.handleChange}
        />
      </label>)
    }
}