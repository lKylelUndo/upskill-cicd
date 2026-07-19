import { describe, it, expect } from 'vitest';
import { add, greet, isEven } from './utils';

describe('Utils', () => {
  describe('add', () => {
    it('should add two positive numbers', () => {
      expect(add(2, 3)).toBe(5);
    });

    it('should add negative numbers', () => {
      expect(add(-1, -2)).toBe(-3);
    });

    it('should return correct sum with zero', () => {
      expect(add(0, 5)).toBe(5);
    });
  });

  describe('greet', () => {
    it('should return greeting with name', () => {
      expect(greet('Alice')).toBe('Hello, Alice!');
    });

    it('should work with empty string', () => {
      expect(greet('')).toBe('Hello, !');
    });
  });

  describe('isEven', () => {
    it('should return true for even numbers', () => {
      expect(isEven(2)).toBe(true);
      expect(isEven(100)).toBe(true);
    });

    it('should return false for odd numbers', () => {
      expect(isEven(3)).toBe(false);
      expect(isEven(99)).toBe(false);
    });

    it('should return true for zero', () => {
      expect(isEven(0)).toBe(true);
    });
  });
});
