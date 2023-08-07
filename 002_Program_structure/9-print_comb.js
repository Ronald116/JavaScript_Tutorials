/**
 * Write a program that prints all possible combinations of single-digit numbers.

Numbers must be separated by ,, followed by a space
Numbers should be printed in ascending order
 */

for (let num = 0; num <= 9; num++)
{
    process.stdout.write(num.toString());
    if ( num < 9)
    {
        process.stdout.write(", ");
    }
}
console.log("\n");