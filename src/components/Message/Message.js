import React, { memo } from 'react';
import PropTypes from 'prop-types';
import styles from './Message.module.css';
import { Link } from 'react-router-dom';

const Message = ({ message: { message, timestamp }, member, asShort = false }) => {
  const date = new Date(timestamp).toLocaleString();

  const fullName = member ? `${member.firstName} ${member.lastName}` : '';
  const dummyImage = 'http://dummyimage.com/100x100.jpg/000000/ffffff';
  const avatarSrc = member ? member.avatar || dummyImage : dummyImage;

  const link = `/user/${member ? member.id : '#'}`;

  return (
    <li className={styles.container}>
      {!asShort && <img className={styles.avatar} src={avatarSrc} alt={fullName} loading="lazy" />}
      <div className={styles.data}>
        <div className={styles.message}>{message}</div>
        <time dateTime={timestamp} className={styles.timestamp}>
          {date}
        </time>

        {!asShort && (
          <>
            <Link to={link} className={styles.link}>
              {fullName}
            </Link>
            {member && <span className={styles.email}>{member.email}</span>}
          </>
        )}
      </div>
    </li>
  );
};

export default memo(Message);

Message.propTypes = {
  message: PropTypes.shape({
    message: PropTypes.string,
    timestamp: PropTypes.string,
    userId: PropTypes.string,
  }),
  member: PropTypes.shape({
    avatar: PropTypes.string,
    email: PropTypes.string,
    firstName: PropTypes.string,
    id: PropTypes.string,
    lastName: PropTypes.string,
  }),
  asShort: PropTypes.bool,
};
