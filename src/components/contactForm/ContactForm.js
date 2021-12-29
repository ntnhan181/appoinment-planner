import React from 'react';

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Contact name:{' '}
        <input
          type="text"
          value={name}
          onChange={({ target }) => {
            setName(target.value);
          }}
          required
          placeholder="Contact name"
        />
      </label>

      <label>
        Phone:
        <input
          type="tel"
          value={phone}
          pattern="(84|0[3|5|7|8|9])+([0-9]{8})\b"
          onChange={({ target }) => {
            setPhone(target.value);
          }}
          required
          placeholder="Phone"
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={({ target }) => {
            setEmail(target.value);
          }}
          required
          placeholder="Email"
        />
        <input type="submit" />
      </label>
    </form>
  );
};
