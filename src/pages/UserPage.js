import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router';
import { Link } from 'react-router-dom';
import Message from '../components/Message/Message';

const UserPage = () => {
  const { userId } = useParams();
  const history = useHistory();

  const member = useSelector(({ members }) => members.find((member) => member.id === userId));

  if (!member) {
    history.push('/');
    return null;
  }

  const messages = useSelector((state) => state.messages.filter((message) => message.userId === userId));
  const { firstName, lastName } = member;

  return (
    <main>
      <Link to="/">Go back</Link>
      <h1>{`${firstName} ${lastName}`}</h1>
      <ul>
        {messages.map((message) => (
          <Message message={message} key={message.id} asShort />
        ))}
      </ul>
    </main>
  );
};

export default UserPage;
