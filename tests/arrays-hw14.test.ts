import {test, expect} from '@playwright/test';

test.describe('Arrays', () => {
    test('1. Массив с 3 целыми числами', async () => {
        const numbers: number[] = [1, 3, 7];

        console.log('Array:', numbers);
        console.log('Array length:', numbers.length);

        expect(numbers.length).toBe(3);
        expect(numbers).toEqual([1, 3, 7]);
    });

    test('2. Массив с 2 строками + push', async () => {
        const words: string[] = ['first', 'second'];
        console.log('Before push:', words, 'length:', words.length);

        words.push('third');

        console.log('After push:', words, 'length:', words.length);

        expect(words.length).toBe(3);
        expect(words).toEqual(['first', 'second', 'third']);
    });

    test('3. Массив с 3 строками + pop', async () => {
        const colors: string[] = ['red', 'green', 'blue'];
        const removed = colors.pop();

        console.log('Array after pop:', colors);
        console.log('Removed element:', removed);
        console.log('Array length:', colors.length);

        expect(colors.length).toBe(2);
        expect(colors).toEqual(['red', 'green']);
        expect(removed).toBe('blue');
    });

    test('4. Пустой массив чисел + добавление', async () => {
        const numbers: number[] = [];

        numbers.push(10);
        console.log('Array after 1st push:', numbers, 'length:', numbers.length);
        expect(numbers.length).toBe(1);

        numbers.push(20);
        console.log('Array after 2nd push:', numbers, 'length:', numbers.length);
        expect(numbers.length).toBe(2);

        expect(numbers).toEqual([10, 20]);
    });
});

test.describe('Loops', () => {
    test('1. Вывести каждый элемент массива (for)', async () => {
        const numbers: number[] = [1, 2, 3, 4, 5];

        for (let i = 0; i < numbers.length; i++) {
            console.log('Element:', numbers[i]);
        }

        expect(numbers.length).toBe(5);
    });

    test('2. Сумма всех элементов массива (for)', async () => {
        const numbers: number[] = [3, 10, 30, -4, 2];
        let sum = 0;

        for (let i = 0; i < numbers.length; i++) {
            sum += numbers[i];
        }

        console.log('Sum:', sum);
        expect(sum).toBe(41);
    });

    test('3. Новый массив: каждый элемент * 2', async () => {
        const numbers: number[] = [1, 2, 3];
        const multiplied: number[] = [];

        for (let i = 0; i < numbers.length; i++) {
            multiplied.push(numbers[i] * 2);
        }

        console.log('Source array:', numbers);
        console.log('Multiplied array:', multiplied);

        expect(multiplied).toEqual([2, 4, 6]);
    });

    test('4. Вывести элементы массива в обратном порядке', async () => {
        const numbers: number[] = [3, 4, 5];
        const reversed: number[] = [];

        for (let i = numbers.length - 1; i >= 0; i--) {
            console.log('Reversed element:', numbers[i]);
            reversed.push(numbers[i]);
        }

        expect(reversed).toEqual([5, 4, 3]);
    });
});

test.describe('Interview tasks', () => {
    test('1. Найти максимальное число в массиве', async () => {
        const numbers: number[] = [3, 6, 9, 2, 5];
        let max = numbers[0];

        for (let i = 1; i < numbers.length; i++) {
            if (numbers[i] > max) {
                max = numbers[i];
            }
        }

        console.log('Max number:', max);
        expect(max).toBe(9);
    });

    test('2. Найти минимальное число в массиве', async () => {
        const numbers: number[] = [3, 6, -2, 9, 0];
        let min = numbers[0];

        for (let i = 1; i < numbers.length; i++) {
            if (numbers[i] < min) {
                min = numbers[i];
            }
        }

        console.log('Min number:', min);
        expect(min).toBe(-2);
    });

    test('3. Посчитать количество чётных чисел в массиве', async () => {
        const numbers: number[] = [3, 6, 9, 10, 12];
        let evenCount = 0;

        for (let i = 0; i < numbers.length; i++) {
            if (numbers[i] % 2 === 0) {
                evenCount++;
            }
        }

        console.log('Even numbers count:', evenCount);
        expect(evenCount).toBe(3); // 6, 10, 12
    });

    test('4. Новый массив из положительных чисел', async () => {
        const numbers: number[] = [1, -2, 3, 0, -5, 10];
        const positiveNumbers: number[] = [];

        for (let i = 0; i < numbers.length; i++) {
            if (numbers[i] > 0) {
                positiveNumbers.push(numbers[i]);
            }
        }

        console.log('Positive numbers:', positiveNumbers);
        expect(positiveNumbers).toEqual([1, 3, 10]);
    });
});
