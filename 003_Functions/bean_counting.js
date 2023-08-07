/**
 * You can get the Nth character, or letter, from a string by writing "string"
[N]. The returned value will be a string containing only one character
(for example, "b"). The first character has position 0, which causes the
last one to be found at position string.length - 1. In other words, a twocharacter string has length 2, and its characters have positions 0 and 1.
Write a function countBs that takes a string as its only argument and
returns a number that indicates how many uppercase “B” characters
there are in the string.
Next, write a function called countChar that behaves like countBs, except
it takes a second argument that indicates the character that is to be
counted (rather than counting only uppercase “B” characters). Rewrite
countBs to make use of this new function
 */

function countBs(string)
{
    let count = 0;
    let idx;
    for (idx = 0; idx <= string.length; idx++)
    {
        if (string[idx] === "B")
        {
            count += 1;
        }
    }
    return count;
}

function countChar(string, char)
{
    let count = 0;
    let idx = 0;
    for (idx = 0; idx <= string.length; idx++)
    {
        if (string[idx] === char)
        {
            count++;
        }
    }
    return count;
}

console.log(countBs("BBBbrothersnaija"));
console.log(countChar("Halleluja", "l"));