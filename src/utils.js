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

// Color RGB to HEX
export function rgb2hex({ r, g, b }) {
  const rHex = parseInt(r, 10).toString(16).padStart(2, '0');
  const gHex = parseInt(g, 10).toString(16).padStart(2, '0');
  const bHex = parseInt(b, 10).toString(16).padStart(2, '0');

  if (rHex.length > 2 || gHex.length > 2 || bHex.length > 2) {
    return false;
  }

  return `#${rHex}${gHex}${bHex}`;
}

// Color HEX to RGB
export function hex2rgb(hex) {
  const validHexValue = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (!validHexValue) {
    return false;
  }

  return {
    r: parseInt(validHexValue[1], 16),
    g: parseInt(validHexValue[2], 16),
    b: parseInt(validHexValue[3], 16),
  };
}

export function choiceColorByBackgroundColor({ hexColor, lightHexColor, darkHexColor }) {
  const { r, g, b } = hex2rgb(hexColor);
  const luma = 0.2126 * r + 0.7152 * g + 0.0722 * b; // per ITU-R BT.709
  return luma < 127.5 ? lightHexColor : darkHexColor;
}
