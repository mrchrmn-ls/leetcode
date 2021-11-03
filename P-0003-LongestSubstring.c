int lengthOfLongestSubstring(char * s)
{
    int i = 0;
    int longest = 0;

    while (s[i] != '\0')
    {
        int table[96] = {0};
        table[(int)s[i]-32] = 1;

        int j = 1;
        int count = 1;

        while (s[i + j] != '\0')
        {
            if (table[(int)s[i+j]-32] == 0)
            {
                count++;
                table[(int)s[i+j]-32] = 1;
                j++;
            }
            else
            {
                break;
            }
        }

        if (count > longest)
        {
            longest = count;
        }

        i++;
    }

    return longest;
}
