 import axios from "axios";
 import * as cheerio from 'cheerio';


 const urls = [
    {
        url: 'https://www.falabella.com/falabella-cl/product/prod60647349/Apple-iPhone-14-Pro-Max-128-GB/16563316'
    },
    {
        url: 'https://www.falabella.com/falabella-cl/product/prod60647998/Apple-iPhone-14-Pro-Max-256-GB/16563323'
    },
 ]
 const product = { name : '', price : 'price', url : ''}
const handle = setInterval(scrape, 100000)


async function scrape (){
    const promises = urls.map(async ({url}) => {
        const {data} = await axios.get(url)
        const $ = cheerio.load(data)
        product.name = $('h1.jsx-1442607798').text().trim()
        product.price = $('span.copy12').text().trim()
        product.price = product.price.split('$')[1]
        product.url = url
        console.log(product);
    })
}
