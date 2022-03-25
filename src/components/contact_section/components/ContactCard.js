import React from 'react';
import '../scss/contact_card.scss';

const validateEmail = (email) => {
  const re = /\S+@\S+\.\S+/;
  return re.test(String(email).toLowerCase());
};

const formatPhoneNumber = (string) => {
  const cleaned = ('' + string).replace(/\D/g, '');
  const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
  if (match) {
    return `${match[1]}-${match[2]}-${match[3]}`;
  }
  return null;
};


function ContactCard({ icon, title, value }) {
  return (
    <div className="contact-card">
      <i className={`${icon} contact-card__icon`}></i>
      <h4>{title}</h4>
      <span>
        {validateEmail(value)
          ? <a href={`mailto:${value}`}>{value}</a>
          : <a href={`tel:${value}`}>{formatPhoneNumber(value)}</a>
        }
      </span>
    </div>
  );
}

export default ContactCard;
