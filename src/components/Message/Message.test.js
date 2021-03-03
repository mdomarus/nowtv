import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import Message from './Message';
import React from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { store, history } from '../../store';

describe('Message', () => {
  it('should render', () => {
    const sampleMessage = {
      id: 'b03569ae-ccbf-4975-8040-4daba638b407',
      userId: '16373df5-da0a-4074-8295-f916b94269f4',
      message: 'Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus.',
      timestamp: '2016-11-09T05:04:58Z',
    };
    mount(
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Message message={sampleMessage} />
        </ConnectedRouter>
      </Provider>
    );
  });
});
