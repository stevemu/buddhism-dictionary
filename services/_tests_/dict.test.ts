import { generateProximateRegex } from '@/services/dict';

describe('generateProximateRegex', () => {
  test('normal charater match', () => {
    const regex = generateProximateRegex('ab');
    expect('abc').toMatch(regex);
  });

  test('match approximate', () => {
    const regex = generateProximateRegex('ab');
    expect('ābc').toMatch(regex);
  });
});
