import Photo from '../Photo';

describe('Photo', () => {
  it('should set public properties passed to the constructor', () => {
    const props = {
      id: '1',
      description: '',
      color: '#444',
      width: '150',
      height: '216',
      links: {
        html: 'example.com',
      },
      urls: {
        small: '',
        regular: '',
      },
      user: {
        id: '3',
        name: 'test',
        username: 'test',
      },
    };

    const photo = new Photo(props);
    expect(photo).toHaveProperty('id', props.id);
    expect(photo).toHaveProperty('description', props.description);
    expect(photo).toHaveProperty('color', props.color);
    expect(photo).toHaveProperty('width', props.width);
    expect(photo).toHaveProperty('height', props.height);
    expect(photo).toHaveProperty('fullsrc', props.urls.regular);
    expect(photo).toHaveProperty('src', props.urls.small);
    expect(photo).toHaveProperty('url', props.links.html);
    expect(photo).toHaveProperty('user', props.user);
  });
});
