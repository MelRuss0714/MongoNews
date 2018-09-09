var request = require("request");
var cheerio = require("cheerio");

var scrape = function (cb) {
    request("http://www.nytimes.com", function (error, response, html) {
        
    var $ = cheerio.load(html);

        var articles = [];
        $("div.css-6p6lnl").each(function (i, element) {
            var result = {};
            result.title = $(this).find("h2").text();
            result.link = $(this).find("a").attr("href");

            if (result.title !== "" && result.link !== "") {
                articles.push(result);
            }
        });
        cb(articles);
    });
};
module.exports = scrape;