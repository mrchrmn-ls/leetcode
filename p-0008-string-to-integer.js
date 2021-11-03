const NUMS = "0123456789";
const MIN = -(2**31);
const MAX = 2**31 - 1;

// function myAtoi(string) {
//     let numString = "";
//     let expectDigit = false;
//     for (let index = 0; index < string.length; index += 1) {
//         if (string[index] === " " && !NUMS.includes(numString[numString.length - 1]) && !expectDigit) continue;

//         if (string[index] === "+" && !expectDigit) {
//             expectDigit = true;
//             continue;
//         }

//         if (string[index] === "-" && !expectDigit) {
//             expectDigit = true;
//             numString += "-";
//             continue;
//         }

//         if (NUMS.includes(string[index])) {
//             expectDigit = true;
//             numString += string[index];
//             continue;
//         }
//         break;
//     }

//     if (numString === "-") return 0;

//     return Math.min(Math.max(MIN, Number(numString)), MAX);
// }

function myAtoi(s) {
    let str = "";
    let expectDigit = false;
    for (let index = 0; index < s.length; index += 1) {
        if (s[index] === " " && !"0123456789".includes(str[str.length - 1]) && !expectDigit) continue;

        if (s[index] === "+" && !expectDigit) {
            expectDigit = true;
            continue;
        }

        if (s[index] === "-" && !expectDigit) {
            expectDigit = true;
            str += "-";
            continue;
        }

        if ("0123456789".includes(s[index])) {
            expectDigit = true;
            str += s[index];
            continue;
        }
        break;
    }

    if (str === "-") return 0;

    let res = Number(str);

    if (res < 0) return res < -(2**31) ? -(2**31) : res;

    return res > 2**31 - 1 ? 2**31 - 1 : res;
}



myAtoi("++12");
myAtoi("--32  1");
myAtoi("    -321");
myAtoi("+321 cx cxccc");
myAtoi("   +0 123");