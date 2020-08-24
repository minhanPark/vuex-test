function decimalPoint(number) {
  //   const value = Number(number);
  //   if (Number.isNaN(value)) {
  //     return "Not a Number";
  //   }
  //   if (value !== number) {
  //     return "Value is not valid";
  //   }

  //   if (Number.isInteger(value)) {
  //     // 정수일때는 바로 00을 붙여서 보낸다.
  //     return `${value}.00`;
  //   } else {
  //     // 정수가 아닐 때는
  //     const [integer, decimalPoint] = value.split(".");
  //     if (decimalPoint.length === 1) {
  //       return `${integer}.${decimalPoint}0`;
  //     } else if (decimalPoint.length === 2) {
  //       return `${integer}.${decimalPoint}`;
  //     } else {
  //       return `${integer}.${decimalPoint.substr(0, 2)}`;
  //     }
  //   }

  // 들어오는 값의 형태
  // 7, 7.1, 7,12, 7.182
  const value = Number(number);
  const stringValue = String(number);
  if (Number.isInteger(value)) {
    return `${value.toLocaleString()}.00`;
  } else {
    const [integer, decimalPoint] = stringValue.split(".");
    const integerNumCheck = Number(integer);
    if (decimalPoint.length === 1) {
      return `${integerNumCheck.toLocaleString()}.${decimalPoint}0`;
    } else if (decimalPoint.length === 2) {
      return `${integerNumCheck.toLocaleString()}.${decimalPoint}`;
    } else {
      return `${integerNumCheck.toLocaleString()}.${decimalPoint.substr(0, 2)}`;
    }
  }
}
