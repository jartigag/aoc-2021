import { logAnswer } from '../utils/logging';
import { data } from './day2.data';
import { day2part2, func } from './day2.part2';

test('Provided test cases', () => {
    expect(func(0, 0, 0, ['forward 5', 'down 5', 'forward 8', 'up 3', 'down 8', 'forward 2'])).toBe(900);
});

test('Returns an answer', () => {
    logAnswer(day2part2(data));
    expect(typeof day2part2(data)).toBe('number');
    expect(day2part2(data)).toBeGreaterThan(0);
});
