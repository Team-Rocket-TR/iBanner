import {
  downloadURI,
  get,
  equal,
  isBlank,
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

describe('isBlank', () => {
  context('if empty or whitespace characters', () => {
    it('returns true', () => {
      const nvl = null;
      const empty = '';
      const whitespace = ' ';

      expect(isBlank(nvl)).toBeTruthy();
      expect(isBlank(empty)).toBeTruthy();
      expect(isBlank(whitespace)).toBeTruthy();
    });
  });

  context('if not empty and whitespace characters', () => {
    it('returns true', () => {
      const characters = '테스트 문자열';
      const numbers = 12345;
      const arrays = [];

      expect(isBlank(characters)).toBeFalsy();
      expect(isBlank(numbers)).toBeFalsy();
      expect(isBlank(arrays)).toBeFalsy();
    });
  });
});
