function validatePassword(s1,s2)
{
    var s1l = s1.length;
    var s2l = s2.length;
    var hasUpperCase = false;
    var hasLowerCase = false;
    var hasNumber = false;

    var lowercaseAlpha = ['a','b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    var uppercaseAlpha = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    var numbers = ['0','1', '2', '3', '4', '5', '6', '7', '8', '9'];

    for(let i = 0; i < s1l; i++)
    {
        for(let j = 0; j < lowercaseAlpha.length; j++)
        {
            if(s1[i] == lowercaseAlpha[j])
            {
                hasLowerCase = true;
            }
        }
    }

    for(let i = 0; i < s1l; i++)
    {
        for(let j = 0; j < uppercaseAlpha.length; j++)
        {
            if(s1[i] == uppercaseAlpha[j])
            {
                hasUpperCase = true;
            }
        }
    }
    

    for(let i = 0; i < s1l; i++)
    {
        for(let j = 0; j < numbers.length; j++)
        {
            if(s1[i] == numbers[j])
            {
                hasNumber = true;
            }
        }
    }

    if(s1 == s2 && s1l >= 8 &&  s2l >= 8 && hasLowerCase && hasUpperCase && hasNumber)
    {
        console.log("TRUE");
        return true;
    }

    console.log("FALSE");
    return false;
}

validatePassword("helloworld", "hello");
validatePassword("hello", "hello");
validatePassword("hello1234", "hello1234");
validatePassword("Hello1234", "Hello1234");
validatePassword("HELLO12234","HELLO1234");

function reversedPassword(s)
{

    let reversedPassword = "";

    for(let i = s.length - 1; i >= 0; i--)
    {
        reversedPassword += s[i];
    }

    console.log(reversedPassword);
    return reversedPassword;
}

reversedPassword("hello");

function storePassword(n, s1, s2)
{
    if(validatePassword(s1,s2))
    {
        const obj = {
            name: n,
            newpassword: reversedPassword(s1)
        }

        return obj;
    }

    const obj = {
        name: n,
        newpassword: s1
    }
    return obj;
}

console.log(storePassword("Jason", "Jason2028", "Jason2028"))
