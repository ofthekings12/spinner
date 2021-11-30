const spinner = "\r|\r/\r-\r\\\r|\r/\r-\r\\\r|\r/\r-\r\\\r|\r/\r-\r\\\r|\n";
let delay = 0;
const increment = 80;

for (const char of spinner) {
  setTimeout(() => {
    process.stdout.write(char)
  }, delay);
  delay += increment;
  
}