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

  const dataFetched = messages.length > 0 && members.length > 0;

  return (
    <main>
      <h1>Home page</h1>
      {!dataFetched && 'Loading...'}
      {dataFetched && (
        <ul>
          {messages.map((message) => (
            <Message message={message} member={members.find(({ id }) => id === message.userId)} key={message.id} />
          ))}
        </ul>
      )}
    </main>
  );
};

export default HomePage;
