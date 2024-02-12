import { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';

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
        <ContactForm contacts={this.state.contacts} createContact={this.createContact}/>
        <h2>Contacts</h2>
        <Filter handleChange={this.handleChange}/>
        <ContactList contacts = {this.state.contacts}/>
        {/* <label htmlFor="">
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
            ))} */}
      </div>
    );
  }
}
