function greet(name: string, greeting: string = "Hello"): string {
  return `${greeting}, ${name}`;
}

console.log(greet("baekki"));

console.log(greet("baekki", "Hi"));
