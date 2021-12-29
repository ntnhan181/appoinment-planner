import React from 'react';

export const ContactPicker = (props) => {
  const contacts = props.contacts;
  const onChange = props.onChange;

  return (
    <select onChange={onChange}>
      <option value="default">No contact selected</option>
      {contacts.map((contact) => (
        <option value={contact.name}>{contact.name}</option>
      ))}
    </select>
  );
};
