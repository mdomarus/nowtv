import React from 'react';
import PropTypes from 'prop-types';
import styles from './Message.module.css';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Message = ({ message: { message, timestamp, userId }, asShort = false }) => {
  const member = useSelector(({ members = [] }) => members.find(({ id }) => id === userId));

  const date = new Date(timestamp).toLocaleString();

  const fullName = member ? `${member.firstName} ${member.lastName}` : '';
  const dummyImage = 'http://dummyimage.com/100x100.jpg/000000/ffffff';
  const avatarSrc = member ? member.avatar || dummyImage : dummyImage;

  const link = `/user/${member ? member.id : '#'}`;

  return (
    <li className={styles.container}>
      {!asShort && <img className={styles.avatar} src={avatarSrc} alt={fullName} />}
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

export default Message;

Message.propTypes = {
  message: PropTypes.shape({
    message: PropTypes.string,
    timestamp: PropTypes.string,
    userId: PropTypes.string,
  }),
  asShort: PropTypes.bool,
};
