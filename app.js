const hasDuplicate = (given) => new Set(given).size > given.length;

const vowels = "aeiou";

function vowelCount(given)
{
    given = given.toLowerCase();
    const givenVowls = new Map();
    for (let letter of given)
    {
        if (vowels.includes(letter))
        {
            if (givenVowls.has(letter))
            {
                givenVowls.set(letter, givenVowls.get(letter) + 1);
            }
            else
            {
                givenVowls.set(letter, 1);
            }
        }
    }
    return givenVowls;
}