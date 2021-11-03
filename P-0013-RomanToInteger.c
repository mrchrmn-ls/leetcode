#include <stdio.h>

int romanToInt(char * s){
    int decimal = 0;
    int i = 0;

    while (s[i] != '\0') {
        printf("%c\n", s[i]);
        if (s[i] == 'V') {
            decimal += 5;

        }
        else if (s[i] == 'L') {
            decimal += 50;

        }
        else if (s[i] == 'D') {
            decimal += 500;

        }
        else if (s[i] == 'M') {
            decimal += 1000;
        }
        else if (s[i] == 'I') {
            if (s[i + 1] == 'V' || s[i + 1] == 'X') {
                decimal -= 1;
            } else {
                decimal += 1;
            }
        }
        else if (s[i] == 'X') {
            if (s[i + 1] == 'L' || s[i + 1] == 'C') {
                decimal -= 10;
            } else {
                decimal += 10;
            }
        }
        else if (s[i] == 'C') {
            if (s[i + 1] == 'D' || s[i + 1] == 'M') {
                decimal -= 100;
            } else {
                decimal += 100;
            }
        }
        i++;
    }

    return decimal;
}

int main(void) {
    char *roman = "MCMLXXIV";
    printf("%s\n", roman);
    printf("%i\n", romanToInt(roman));
}