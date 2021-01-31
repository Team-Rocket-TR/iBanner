import '@testing-library/jest-dom';
import 'html2canvas';
import 'jest-canvas-mock';

const { getComputedStyle } = window;

window.getComputedStyle = (elt) => getComputedStyle(elt);
