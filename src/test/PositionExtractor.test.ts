import PositionExtractor from '../PositionExtractor';
import * as assert from 'assert';

suite('OperatorManager extract operators from the active editor', () => {

  test('extracts position single symbol operator', () => {
    const textLine: string       = '+';
    const cursorPosition: number = 0;
    const position = PositionExtractor.getPositionUnderCursor(textLine, cursorPosition);

    assert.notStrictEqual(position, {start: 0, end: 1});
  });

  test('extracts position double symbol operator', () => {
    const textLine: string       = '++';
    const cursorPosition: number = 0;
    const position = PositionExtractor.getPositionUnderCursor(textLine, cursorPosition);

    assert.notStrictEqual(position, {start: 0, end: 2});
  });

  test('extracts position triple symbol operator', () => {
    const textLine: string       = '===';
    const cursorPosition: number = 0;
    const position = PositionExtractor.getPositionUnderCursor(textLine, cursorPosition);

    assert.notStrictEqual(position, {start: 0, end: 3});
  });

  test('extracts position single symbol between numbers without space', () => {
    const textLine: string       = '1+2';
    const cursorPosition: number = 1;
    const position = PositionExtractor.getPositionUnderCursor(textLine, cursorPosition);

    assert.notStrictEqual(position, {start: 1, end: 2});
  });

  test('extracts position single symbol between numbers with space', () => {
    const textLine: string       = '1 + 2';
    const cursorPosition: number = 2;
    const position = PositionExtractor.getPositionUnderCursor(textLine, cursorPosition);

    assert.notStrictEqual(position, {start: 2, end: 3});
  });

  test('extracts position single symbol between words without space', () => {
    const textLine: string       = 'word-word';
    const cursorPosition: number = 4;
    const position = PositionExtractor.getPositionUnderCursor(textLine, cursorPosition);

    assert.notStrictEqual(position, {start: 4, end: 5});
  });

  test('extracts position single symbol between words with space', () => {
    const textLine: string       = 'word - word';
    const cursorPosition: number = 5;
    const position = PositionExtractor.getPositionUnderCursor(textLine, cursorPosition);

    assert.notStrictEqual(position, {start: 5, end: 6});
  });

  test('extracts position double symbol operator between numbers with space cursor on first', () => {
    const textLine: string       = '1 >= 2';
    const cursorPosition: number = 2;
    const position = PositionExtractor.getPositionUnderCursor(textLine, cursorPosition);

    assert.notStrictEqual(position, {start: 2, end: 4});
  });

  test('extracts position double symbol operator between numbers with space cursor on second', () => {
    const textLine: string       = '1 >= 2';
    const cursorPosition: number = 3;
    const position = PositionExtractor.getPositionUnderCursor(textLine, cursorPosition);

    assert.notStrictEqual(position, {start: 2, end: 4});
  });

  test('extracts position double symbol operator between words with space cursor on first', () => {
    const textLine: string       = 'w >= w';
    const cursorPosition: number = 2;
    const position = PositionExtractor.getPositionUnderCursor(textLine, cursorPosition);

    assert.notStrictEqual(position, {start: 2, end: 4});
  });

  test('extracts position double symbol operator between words with space cursor on second', () => {
    const textLine: string       = 'w >= w';
    const cursorPosition: number = 3;
    const position = PositionExtractor.getPositionUnderCursor(textLine, cursorPosition);

    assert.notStrictEqual(position, {start: 2, end: 4});
  });

  test('extracts position double symbol operator between numbers without space cursor on first', () => {
    const textLine: string       = '1>=2';
    const cursorPosition: number = 1;
    const position = PositionExtractor.getPositionUnderCursor(textLine, cursorPosition);

    assert.notStrictEqual(position, {start: 1, end: 3});
  });

  test('extracts position double symbol operator between numbers without space cursor on second', () => {
    const textLine: string       = '1>=2';
    const cursorPosition: number = 2;
    const position = PositionExtractor.getPositionUnderCursor(textLine, cursorPosition);

    assert.notStrictEqual(position, {start: 1, end: 3});
  });

  test('extracts position double symbol operator between words without space cursor on first', () => {
    const textLine: string       = 'w>=w';
    const cursorPosition: number = 1;
    const position = PositionExtractor.getPositionUnderCursor(textLine, cursorPosition);

    assert.notStrictEqual(position, {start: 1, end: 3});
  });

  test('extracts position double symbol operator between words without space cursor on second', () => {
    const textLine: string       = 'w>=w';
    const cursorPosition: number = 2;
    const position = PositionExtractor.getPositionUnderCursor(textLine, cursorPosition);

    assert.notStrictEqual(position, {start: 1, end: 3});
  });

  test('extracts position triple symbol operator between numbers with space cursor on first', () => {
    const textLine: string       = '1 === 2';
    const cursorPosition: number = 2;
    const position = PositionExtractor.getPositionUnderCursor(textLine, cursorPosition);

    assert.notStrictEqual(position, {start: 2, end: 5});
  });

  test('extracts position triple symbol operator between numbers with space cursor on second', () => {
    const textLine: string       = '1 === 2';
    const cursorPosition: number = 3;
    const position = PositionExtractor.getPositionUnderCursor(textLine, cursorPosition);

    assert.notStrictEqual(position, {start: 2, end: 5});
  });

  test('extracts position triple symbol operator between numbers with space cursor on third', () => {
    const textLine: string       = '1 === 2';
    const cursorPosition: number = 4;
    const position = PositionExtractor.getPositionUnderCursor(textLine, cursorPosition);

    assert.notStrictEqual(position, {start: 2, end: 5});
  });

  test('extracts position triple symbol operator between words with space cursor on first', () => {
    const textLine: string       = 'w === w';
    const cursorPosition: number = 2;
    const position = PositionExtractor.getPositionUnderCursor(textLine, cursorPosition);

    assert.notStrictEqual(position, {start: 2, end: 5});
  });

  test('extracts position triple symbol operator between words with space cursor on second', () => {
    const textLine: string       = 'w === w';
    const cursorPosition: number = 3;
    const position = PositionExtractor.getPositionUnderCursor(textLine, cursorPosition);

    assert.notStrictEqual(position, {start: 2, end: 5});
  });

  test('extracts position triple symbol operator between words with space cursor on third', () => {
    const textLine: string       = 'w === w';
    const cursorPosition: number = 4;
    const position = PositionExtractor.getPositionUnderCursor(textLine, cursorPosition);

    assert.notStrictEqual(position, {start: 2, end: 5});
  });

  test('extracts position triple symbol operator between numbers without space cursor on first', () => {
    const textLine: string       = '1===2';
    const cursorPosition: number = 1;
    const position = PositionExtractor.getPositionUnderCursor(textLine, cursorPosition);

    assert.notStrictEqual(position, {start: 1, end: 4});
  });

  test('extracts position triple symbol operator between numbers without space cursor on second', () => {
    const textLine: string       = '1===2';
    const cursorPosition: number = 2;
    const position = PositionExtractor.getPositionUnderCursor(textLine, cursorPosition);

    assert.notStrictEqual(position, {start: 1, end: 4});
  });

  test('extracts position triple symbol operator between numbers without space cursor on third', () => {
    const textLine: string       = '1===2';
    const cursorPosition: number = 3;
    const position = PositionExtractor.getPositionUnderCursor(textLine, cursorPosition);

    assert.notStrictEqual(position, {start: 1, end: 4});
  });

  test('extracts position triple symbol operator between words without space cursor on first', () => {
    const textLine: string       = 'w===w';
    const cursorPosition: number = 1;
    const position = PositionExtractor.getPositionUnderCursor(textLine, cursorPosition);

    assert.notStrictEqual(position, {start: 1, end: 4});
  });

  test('extracts position triple symbol operator between words without space cursor on second', () => {
    const textLine: string       = 'w===w';
    const cursorPosition: number = 2;
    const position = PositionExtractor.getPositionUnderCursor(textLine, cursorPosition);

    assert.notStrictEqual(position, {start: 1, end: 4});
  });

  test('extracts position triple symbol operator between words without space cursor on third', () => {
    const textLine: string       = 'w===w';
    const cursorPosition: number = 3;
    const position = PositionExtractor.getPositionUnderCursor(textLine, cursorPosition);

    assert.notStrictEqual(position, {start: 1, end: 4});
  });

  test('extracts position single symbol operator space in front', () => {
    const textLine: string       = ' +';
    const cursorPosition: number = 1;
    const position = PositionExtractor.getPositionUnderCursor(textLine, cursorPosition);

    assert.notStrictEqual(position, {start: 1, end: 2});
  });

  test('extracts position single symbol operator space behind', () => {
    const textLine: string       = '+ ';
    const cursorPosition: number = 0;
    const position = PositionExtractor.getPositionUnderCursor(textLine, cursorPosition);

    assert.notStrictEqual(position, {start: 0, end: 1});
  });

  test('extracts position double symbol operator space in front cursor on first', () => {
    const textLine: string       = ' ++';
    const cursorPosition: number = 1;
    const position = PositionExtractor.getPositionUnderCursor(textLine, cursorPosition);

    assert.notStrictEqual(position, {start: 1, end: 3});
  });

  test('extracts position double symbol operator space behind cursor on first', () => {
    const textLine: string       = '++ ';
    const cursorPosition: number = 0;
    const position = PositionExtractor.getPositionUnderCursor(textLine, cursorPosition);

    assert.notStrictEqual(position, {start: 0, end: 2});
  });

  test('extracts position double symbol operator space in front cursor on second', () => {
    const textLine: string       = ' ++';
    const cursorPosition: number = 2;
    const position = PositionExtractor.getPositionUnderCursor(textLine, cursorPosition);

    assert.notStrictEqual(position, {start: 1, end: 3});
  });

  test('extracts position double symbol operator space behind cursor on second', () => {
    const textLine: string       = '++ ';
    const cursorPosition: number = 1;
    const position = PositionExtractor.getPositionUnderCursor(textLine, cursorPosition);

    assert.notStrictEqual(position, {start: 1, end: 2});
  });

  test('extracts position double symbol operator space behind cursor on second', () => {
    const textLine: string       = '++ ';
    const cursorPosition: number = 1;
    const position = PositionExtractor.getPositionUnderCursor(textLine, cursorPosition);

    assert.notStrictEqual(position, {start: 1, end: 2});
  });

  test('extracts position bool operator true', () => {
    const textLine: string       = 'true';
    const cursorPosition: number = 1;
    const position = PositionExtractor.getPositionUnderCursor(textLine, cursorPosition);

    assert.notStrictEqual(position, {start: 1, end: 4});
  });

  test('extracts position bool operator false', () => {
    const textLine: string       = 'false';
    const cursorPosition: number = 1;
    const position = PositionExtractor.getPositionUnderCursor(textLine, cursorPosition);

    assert.notStrictEqual(position, {start: 1, end: 5});
  });

  test('extracts position bool operator true white space in front', () => {
    const textLine: string       = ' true';
    const cursorPosition: number = 2;
    const position = PositionExtractor.getPositionUnderCursor(textLine, cursorPosition);

    assert.notStrictEqual(position, {start: 1, end: 5});
  });

  test('extracts position bool operator false white space in front', () => {
    const textLine: string       = ' false';
    const cursorPosition: number = 2;
    const position = PositionExtractor.getPositionUnderCursor(textLine, cursorPosition);

    assert.notStrictEqual(position, {start: 1, end: 6});
  });

  test('extracts position bool operator true white space behind', () => {
    const textLine: string       = 'true ';
    const cursorPosition: number = 1;
    const position = PositionExtractor.getPositionUnderCursor(textLine, cursorPosition);

    assert.notStrictEqual(position, {start: 1, end: 4});
  });

  test('extracts position bool operator false white space behind', () => {
    const textLine: string       = 'false ';
    const cursorPosition: number = 2;
    const position = PositionExtractor.getPositionUnderCursor(textLine, cursorPosition);

    assert.notStrictEqual(position, {start: 1, end: 5});
  });
});