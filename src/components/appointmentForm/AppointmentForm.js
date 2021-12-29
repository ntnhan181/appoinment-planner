import React from 'react';
import { ContactPicker } from '../contactPicker/ContactPicker';
export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit,
}) => {
  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString('en-US')
      .split('/');
    return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Select a contact:
        <ContactPicker
          contacts={contacts}
          value={contact}
          onChange={({ target }) => setContact(target.value)}
        />
      </label>

      <label>
        Title:
        <input
          type="text"
          value={title}
          onChange={({ target }) => setTitle(target.value)}
          placeholder="Title"
        />
      </label>

      <label>
        Date:
        <input
          type="date"
          value={date}
          min={getTodayString()}
          onChange={({ target }) => setDate(target.value)}
        />
      </label>

      <label>
        Time:
        <input
          type="time"
          value={time}
          onChange={({ target }) => setTime(target.value)}
        />
      </label>

      <input type="submit" />
    </form>
  );
};
