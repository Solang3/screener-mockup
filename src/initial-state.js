
  export const dataSource = [
    {
      period: '15 mts',
      open: '10.205',
      high: '10.300',
      low: '10.200',
      last: '10.290'
    },
    {
      period: '1 hr',
      open: '10.205',
      high: '10.300',
      low: '10.200',
      last: '10.290'
    },
    {
      period: '4 hrs',
      open: '10.300',
      high: '10.300',
      low: '10.200',
      last: '10.290'
    },
    {
      period: '1 D',
      open: '10.305',
      high: '10.300',
      low: '10.200',
      last: '10.290'
    },
  ];
  export const initialState = {
    pair: "BTC/USDT",
    candles: dataSource
  }
