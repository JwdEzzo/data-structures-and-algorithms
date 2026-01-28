function iterativeFibonacci(n: number): number {
  const result: number[] = [0, 1];
  for (let i = 2; i <= n; i++) {
    const a = result[i - 2] + result[i - 1];
    result.push(a);
  }
  return result[n];
}

function slowFibonacci(n: number): number {
  if (n < 2) {
    return n;
  }
  return slowFibonacci(n - 1) + slowFibonacci(n - 2);
}

// <T extends (...args: any[]) => any> - T is any function type
// Parameters<T> - Gets the parameter types of function T
// ReturnType<T> - Gets the return type of function T
// { [key: string]: ReturnType<T> } - Cache object with string keys

function memoize<T extends (...args: any[]) => any>(
  fn: T,
): (...args: Parameters<T>) => ReturnType<T> {
  const cache: Map<string, ReturnType<T>> = new Map();

  return function (...args: Parameters<T>): ReturnType<T> {
    const key = JSON.stringify(args);

    if (cache.has(key)) {
      return cache.get(key)!;
    }

    const result = fn.apply(this, args);
    cache.set(key, result);

    return result;
  };
}

function memoize2(fn) {
  const cache = {};
  return function (...args) {
    if (cache[args]) {
      return cache[args];
    }

    const result = fn.apply(this, args);
    cache[args] = result;

    return result;
  };
}

function fastFibonacci(n: number): number {
  if (n < 2) {
    return n;
  }
  return memoizedFibonacci(n - 1) + memoizedFibonacci(n - 2);
}

const memoizedFibonacci = memoize(slowFibonacci);

console.log(fastFibonacci(8));

function Fibonacci() {
  return <div>Fibonacci</div>;
}

export default Fibonacci;
