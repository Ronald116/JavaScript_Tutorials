/**
 * Write a program that prints the lowercase alphabet in reverse, followed by a new line.
 */

for (let alpha = 122; alpha >= 97; alpha--)
{
    process.stdout.write(String.fromCharCode(alpha));
}
console.log("\n");