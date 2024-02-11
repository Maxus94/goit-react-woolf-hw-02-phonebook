import { Component } from 'react';
import { nanoid } from 'nanoid';

// style={{
//   height: '100vh',
//   display: 'flex',
//   justifyContent: 'center',
//   alignItems: 'center',
//   fontSize: 40,
//   color: '#010101',
// }}

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
    name: '',
    number: '',
  };

  handleSubmit = evt => {
    evt.preventDefault();
    this.state.contacts.some(({ name }) => name === this.state.name)
      ? alert('exist')
      : this.createContact(this.state.name, this.state.number);
  };
  handleChange = evt => {
    this.setState({ [evt.target.name]: evt.target.value });
  };

  createContact = (name, number) => {
    const id = nanoid();
    this.setState(prev => ({
      contacts: [...prev.contacts, { name, number, id }],
    }));
  };

  handleDelete = id => {
    this.setState(prev => ({
      contacts: prev.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <form action="" onSubmit={this.handleSubmit}>
          <label htmlFor="">
            Name
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              onChange={this.handleChange}
            />
          </label>
          <label htmlFor="">
            Number
            <input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              onChange={this.handleChange}
            />
          </label>
          <button type="submit">Add contact</button>
        </form>
        <h2>Contacts</h2>
        <label htmlFor="">
          Find contact by name
          <input
            type="text"
            name="filter"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            onChange={this.handleChange}
          />
        </label>
        {this.state.filter !== ''
          ? this.state.contacts
              .filter(contact => {
                let compare = contact.name;
                return compare.includes(this.state.filter);
              })
              .map(contact => (
                <li key={contact.id}>
                  {contact.name} {contact.number}
                  <button
                    type="button"
                    onClick={() => this.handleDelete(contact.id)}
                  >
                    Delete
                  </button>
                </li>
              ))
          : this.state.contacts.map(contact => (
              <li key={contact.id}>
                {contact.name} {contact.number}
                <button
                  type="button"
                  onClick={() => this.handleDelete(contact.id)}
                >
                  Delete
                </button>
              </li>
            ))}
      </div>
    );
  }
}
