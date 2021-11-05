int minStartValue(int* nums, int numsSize) {
  int startValue = 1;
  int stepSum = startValue;

  for (int i = 0; i < numsSize; i++) {
     stepSum += nums[i];
     if (stepSum < 1) {
       int difference = 1 - stepSum;
       startValue += difference;
       stepSum += difference;
     }
  }

  return startValue;
}