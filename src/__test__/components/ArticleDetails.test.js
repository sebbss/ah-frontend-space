import React from 'react';
import { shallow } from 'enzyme';
import { HomeDetails, Interest } from '../../components/HomePage/articleDetails';

const props2 = {
  article: {
    author: {
      username: 'james',
    },
    created_at: '',
    body: '',
    read_time: '',
    likes_count: '',
    dislikes_count: '',
    title: '',
    image: 'http://myimage.jpg',
  },
  rate: jest.fn(),
};

describe('App', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<HomeDetails {...props2} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('it should render interest', () => {
    const props = {
      klass: 'likes',
      alternative: 'likes',
      src: 'http://myimage.jpg',
      value: '5',
    };
    const wrapper = shallow(<Interest {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('it should render interest', () => {
    const props = {
      klass: 'dislikes',
      alternative: 'likes',
      src: 'http://myimage.jpg',
      value: '5',
    };
    const wrapper = shallow(<Interest {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should match snapshot', () => {
    const props3 = {
      article: {
        author: {
          username: 'james',
        },
        created_at: '',
        body: '',
        read_time: '',
        likes_count: '',
        dislikes_count: '',
        title: '',
        image: null,
      },
    };
    const wrapper = shallow(<HomeDetails {...props3} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should match snapshot', () => {
    sessionStorage.setItem('username', 'james');
    const wrapper = shallow(<HomeDetails {...props2} />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should turn showpopup to true when toggle is called', () => {
    const wrapper = shallow(<HomeDetails {...props2} />);
    jest.spyOn(wrapper, 'setState');
    wrapper.instance().togglePopup();
    expect(wrapper.state().showPopup).toBe(true);
  });
  it('should rate an article on click event', () => {
    const wrapper = shallow(<HomeDetails {...props2} />);
    const wrapperInstance = wrapper.instance();
    const event = 2;
    jest.spyOn(wrapperInstance, 'changeRating');
    wrapperInstance.changeRating(event);
    expect(wrapperInstance.state.rating).toEqual(2);
  });
});
