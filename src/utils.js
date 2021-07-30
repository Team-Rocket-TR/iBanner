/*
 * 공통적으로 사용하는 유틸성 함수를 모아두는 곳.
 */
// <a> 태그를 통한 이미지 다운로드
export function downloadURI({ uri, name }) {
  const link = document.createElement('a');
  link.download = name;
  link.href = uri;

  document.body.appendChild(link);

  link.click();

  document.body.removeChild(link);
}

// Object[key] 값 가져오기
export function get(key) {
  return (obj) => obj[key];
}

// Object[key] === value 비교
export function equal(key, value) {
  return (obj) => obj[key] === value;
}

// 빈 문자열 체크, null, '', ' '
export function isBlank(characters) {
  return !characters
    || ((typeof (characters) === 'string' && characters.trim()) === '');
}
