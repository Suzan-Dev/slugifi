"use strict";
var slugifi = function (text, options) {
    var slug = text;
    var separator = '-';
    if (!text)
        throw new Error('Please provide a string!');
    if (options === null || options === void 0 ? void 0 : options.separator)
        separator = options.separator;
    if (options === null || options === void 0 ? void 0 : options.capitalize) {
        var capitalizedSlug = slug
            .split(' ')
            .map(function (el) {
            var capitalizeEl = el.toLowerCase();
            capitalizeEl = capitalizeEl.charAt(0).toUpperCase() + capitalizeEl.substr(1);
            return capitalizeEl;
        })
            .join(separator);
        return capitalizedSlug;
    }
    return slug.replace(/ /g, separator).toLowerCase();
};
module.exports = slugifi;
//# sourceMappingURL=index.js.map