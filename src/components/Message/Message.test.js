import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import Message from './Message';
import React from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { createStore } from 'redux';
import { createBrowserHistory } from 'history';
import { createRootReducer } from '../../reducers';

const history = createBrowserHistory();

const member = {
  id: '16373df5-da0a-4074-8295-f916b94269f4',
  firstName: 'Larry',
  lastName: 'Owens',
  email: 'lowensm@earthlink.net',
  avatar: 'http://dummyimage.com/100x100.bmp/5fa2dd/ffffff',
  ip: '168.43.167.194',
};

const store = createStore(createRootReducer(history), {
  members: [member],
});

const message = {
  id: 'b03569ae-ccbf-4975-8040-4daba638b407',
  userId: '16373df5-da0a-4074-8295-f916b94269f4',
  message: 'Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus.',
  timestamp: '2016-11-09T05:04:58Z',
};

const getWrapper = (asShort = false) =>
  mount(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Message message={message} member={member} asShort={asShort} />
      </ConnectedRouter>
    </Provider>
  );

describe('Message', () => {
  it('should render', () => {
    getWrapper();
  });

  it('should render image', () => {
    const wrapper = getWrapper();
    expect(wrapper.find('img')).toHaveLength(1);
  });

  it('should render message', () => {
    const wrapper = getWrapper();
    expect(wrapper.find('.message').text()).toEqual(message.message);
  });

  it('should render timestamp', () => {
    const wrapper = getWrapper();
    expect(wrapper.find('.timestamp').text()).toEqual('09/11/2016, 05:04:58');
  });

  it('should render email', () => {
    const wrapper = getWrapper();
    expect(wrapper.find('.email').text()).toEqual(member.email);
  });

  it('should render full name', () => {
    const wrapper = getWrapper();
    expect(wrapper.find('a.link').text()).toEqual(`${member.firstName} ${member.lastName}`);
  });

  it('should render correct link', () => {
    const wrapper = getWrapper();
    expect(wrapper.find(`a[href="/user/${member.id}"]`)).toHaveLength(1);
  });

  it('should omit image and name in short mode', () => {
    const wrapper = getWrapper(true);
    expect(wrapper.find('.link')).toHaveLength(0);
    expect(wrapper.find('img')).toHaveLength(0);
  });
});
