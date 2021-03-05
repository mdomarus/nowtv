import React from 'react';
import { useSelector } from 'react-redux';
import { fetchMembers, fetchMessages } from '../actions';
import { useDispatch } from 'react-redux';
import Message from '../components/Message/Message';

const HomePage = () => {
  const dispatch = useDispatch();

  const { messages, members } = useSelector(({ messages, members }) => ({
    messages,
    members,
  }));

  // should they be fetched/refreshed on every load (useEffect)?
  if (messages.length === 0) dispatch(fetchMessages());
  if (members.length === 0) dispatch(fetchMembers());

  if (messages.length < 1) return <main>Loading...</main>;

  return (
    <main>
      <h1>Home page</h1>
      <ul>
        {messages.map((message) => (
          <Message message={message} key={message.id} />
        ))}
      </ul>
    </main>
  );
};

export default HomePage;
