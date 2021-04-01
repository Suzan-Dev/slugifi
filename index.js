const slugifi = (text, options) => {
  let slug = text;
  let separator = '-';

  if (!text) throw new Error('Please provide a string!');
  if (options?.separator) separator = options.separator;

  if (options?.capitalize) {
    let capitalizedSlug = slug
      .split(' ')
      .map((el) => {
        let capitalizeEl = el.toLowerCase();
        capitalizeEl = capitalizeEl.charAt(0).toUpperCase() + capitalizeEl.substr(1);
        return capitalizeEl;
      })
      .join(separator);

    if (options?.specialChars === false) {
      capitalizedSlug = capitalizedSlug.replace(new RegExp('[^a-zA-Z0-9.' + separator + ']', 'g'), '');
    }

    return capitalizedSlug;
  }

  slug = slug.replace(/ /g, separator).toLowerCase();
  if (options?.specialChars === false) {
    return slug.replace(new RegExp('[^a-zA-Z0-9.' + separator + ']', 'g'), '');
  }
  return slug;
};

module.exports = slugifi;
