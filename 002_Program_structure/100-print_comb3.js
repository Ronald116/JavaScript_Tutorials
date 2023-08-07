/**
 * Write a program that prints all possible different combinations of two digits.

Numbers must be separated by ,, followed by a space
The two digits must be different
01 and 10 are considered the same combination of the two digits 0 and 1
Print only the smallest combination of two digits
Numbers should be printed in ascending order, with two digits
 */

for (let num = 0; num <= 8; num++)
{
    for (let numm = num + 1; numm <= 9; numm++)
    {
        process.stdout.write(num.toString() + numm.toString())
        if (num < 8)
        {
            process.stdout.write(", ");
        }
    }
}
console.log("\n");