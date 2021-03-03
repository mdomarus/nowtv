import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router';
import { Link } from 'react-router-dom';
import Message from '../components/Message/Message';

const UserPage = () => {
  const { userId } = useParams();
  const history = useHistory();

  const member = useSelector(({ members }) => members.find((member) => member.id === userId));
  if (!member) history.push('/');

  const messages = useSelector((state) => state.messages.filter((message) => message.userId === userId));
  const { firstName, lastName } = member;

  return (
    <main>
      <Link to="/">Go back</Link>
      <h2>{`${firstName} ${lastName}`}</h2>
      {messages.map((message) => (
        <Message message={message} key={message.id} asShort />
      ))}
    </main>
  );
};

export default UserPage;
