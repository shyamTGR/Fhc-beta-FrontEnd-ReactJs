require('@babel/register'); // 1.

const router = require('./router').default;
const Sitemap = require('react-router-sitemap').default;

(
    new Sitemap(router)
        .build('https://familyharvestchurch.in')
        .save('./public/sitemap.xml')
); // 2.

console.log("The sitemap was built.");