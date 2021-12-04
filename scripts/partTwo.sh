#!/bin/bash
echo "import { data } from './day$1.data';

export const func = (array: number[]) => {
  return $1;
};

export const day$1part2 = (input: number[]) => func(data);" >> src/day$1/day$1.part2.ts

echo "import { logAnswer } from '../utils/logging';
import { data } from './day$1.data';
import { func, day$1part2 } from './day$1.part2';

test('Provided test cases', () => {
    expect(func(data)).toBe($1);
});

test('Returns an answer', () => {
    logAnswer(day$1part2(data));
    expect(typeof day$1part2(data)).toBe('number');
    expect(day$1part2(data)).toBeGreaterThan(0);
});
" >> src/day$1/day$1.part2.test.ts
