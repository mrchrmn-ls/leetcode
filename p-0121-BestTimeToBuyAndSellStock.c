int maxProfit(int* prices, int pricesSize){
  int maxProfit = 0;
  int min = prices[0];
  int current, currentProfit;

  for (int i = 1; i < pricesSize; i++) {
    current = prices[i];
    if (current < min) min = current;
    currentProfit = current - min;
    if (currentProfit > maxProfit) maxProfit = currentProfit;
  }

  return maxProfit;
}