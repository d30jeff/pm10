type ConfigOptions = {
  showTitle: boolean;
};

export const pm10 = (args?: ConfigOptions) => {
  let title = '';
  const name = 'Anwar bin Ibrahim';
  if (args?.showTitle) {
    title = `Yang Amat Berhormat Dato' Seri Haji`;
  }

  return [title, name].filter((n) => n).join(' ');
};
