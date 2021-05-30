const today = new Date();
const lang = "en-US";

exports.getDate = function() {
    const options = {
        day: "numeric",
        weekday: "long",
        month: "long",
        year: "numeric"
    };
    return today.toLocaleDateString(lang, options);
};

exports.getDay = function() {
    const options = {
        weekday: "long",
    };
    return today.toLocaleDateString(lang, options);

}