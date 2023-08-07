/**
 * Write a program that prints all the numbers of base 16 in lowercase, followed by a new line.
 */
for (let alpnum = 0; alpnum < 16; alpnum++)
{
    const alphanum = alpnum.toString(16);
    process.stdout.write(alphanum);
}
console.log("\n")