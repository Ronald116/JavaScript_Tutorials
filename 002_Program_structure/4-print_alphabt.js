/**
 * Write a program that prints the alphabet in lowercase, followed by a new line.

Print all the letters except q and e
 */

let alpha;
for (alpha = 97; alpha < 123; alpha++)
{
    const alphabet = String.fromCharCode(alpha);
    if (alphabet !== 'e' && alphabet !== 'q')
    {
        process.stdout.write(alphabet);
    }
}
console.log("\n");