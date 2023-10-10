function formatCurrency(value: number, currencyCode: string = "USD"): string {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currencyCode,
  });

  return formatter.format(value);
}

export default formatCurrency;
