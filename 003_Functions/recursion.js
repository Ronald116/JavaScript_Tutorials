/**
 * We’ve seen that % (the remainder operator) can be used to test whether a
number is even or odd by using % 2 to see whether it’s divisible by two
 * Define a recursive function isEven corresponding to this description.
The function should accept a single parameter (a positive, whole
number) and return a Boolean.
 */

function isEven(n)
{
    if (n === 0)
    {
        return true;
    }
    else if (n === 1)
    {
        return false;
    }
    else if (n < 0)
    {
        return isEven(-n);
    }
    else
    {
        return isEven(n - 2);
    }
}

console.log(isEven(-3));