const slugifi = (text, options) => {
  const slug = text;
  let separator = '-';

  if (!text) throw new Error('Please provide a string!');
  if (options?.separator) separator = options.separator;

  if (options?.capitalize) {
    const capitalizedSlug = slug
      .split(' ')
      .map((el) => {
        let capitalizeEl = el.toLowerCase();
        capitalizeEl = capitalizeEl.charAt(0).toUpperCase() + capitalizeEl.substr(1);
        return capitalizeEl;
      })
      .join(separator);

    return capitalizedSlug;
  }

  return slug.replace(/ /g, separator).toLowerCase();
};

module.exports = slugifi;
