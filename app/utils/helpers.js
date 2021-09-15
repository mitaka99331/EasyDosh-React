export const toFixed = (num, fixed = 2) => {
  const re = new RegExp(`^-?\\d+(?:.\\d{0,' + (${fixed} || -1) + '})?`);
  return num.toString().match(re)[0];
};

export const renameKeyInObject = (object, key, newKey) => {
  const clonedObj = { ...object };
  const targetKey = clonedObj[key];

  delete clonedObj[key];
  clonedObj[newKey] = targetKey;

  return clonedObj;
};

export const formatDate = date => {
  const ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(date);
  const mo = new Intl.DateTimeFormat('en', { month: '2-digit' }).format(date);
  const da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(date);
  return `${ye}-${mo}-${da}`;
};
