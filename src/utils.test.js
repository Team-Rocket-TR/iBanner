import {
  downloadURI,
  get,
  equal,
} from './utils';

describe('Test for downloads', () => {
  context('image download', () => {
    const image = {
      uri: 'https://sample.image.com',
      name: 'banner.png',
    };

    const aLink = {
      href: '',
      download: '',
      click: jest.fn(),
    };

    it('downloadURI', () => {
      const createElementSpy = jest.spyOn(document, 'createElement').mockReturnValueOnce(aLink);
      document.body.appendChild = jest.fn();
      document.body.removeChild = jest.fn();

      downloadURI(image);

      expect(createElementSpy).toBeCalledWith('a');
      expect(aLink.href).toEqual(image.uri);
      expect(aLink.download).toEqual(image.name);

      expect(document.body.appendChild).toBeCalledWith(aLink);

      expect(aLink.click).toBeCalled();

      expect(document.body.removeChild).toBeCalledWith(aLink);
    });
  });
});

test('get', () => {
  const state = {
    name: '홍길동',
  };

  const f = get('name');
  const g = get('age');

  expect(f(state)).toBe('홍길동');
  expect(g(state)).toBeUndefined();
});

test('equal', () => {
  const state = {
    name: '홍길동',
  };

  const f = equal('name', '홍길동');
  const g = equal('name', '임꺽정');

  expect(f(state)).toBeTruthy();
  expect(g(state)).toBeFalsy();
});
