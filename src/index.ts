type ConfigOptions = {
  prefix: boolean;
};

export const pm10 = (args?: ConfigOptions) => {
  let namePrefix = '';
  const name = 'Anwar bin Ibrahim';
  if (args?.prefix) {
    namePrefix = `Dato' Seri Haji`;
  }

  return [namePrefix, name].filter((n) => n).join(' ');
};
