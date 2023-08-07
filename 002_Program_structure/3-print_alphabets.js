/**
 * Write a program that prints the alphabet in lowercase, and then in uppercase, followed by a new line.
 */

/*let alpha;
for (alpha = 97; alpha <= 122; alpha++)
{
    console.log(String.fromCharCode(alpha));
}
for (alpha = 65; alpha <= 90; alpha++)
{
    console.log(String.fromCharCode(alpha));
}
console.log("\n");*/

for (let charCode = 97; charCode <= 122; charCode++) {
    const lowercaseLetter = String.fromCharCode(charCode);
    process.stdout.write(lowercaseLetter);
  }
  
  for (let charCode = 65; charCode <= 90; charCode++) {
    const uppercaseLetter = String.fromCharCode(charCode);
    process.stdout.write(uppercaseLetter);
  }
  
  console.log(); // Output a newline
  