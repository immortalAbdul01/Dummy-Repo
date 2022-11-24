const http=require('http')

// this is how request and response works and http module

const server=http.createServer((req,res)=>{
   if(req.url==='/'){

    res.end(`<h1>Hey Hey welcome to referral.com we welcome you from the bottom of our heart</h1>
    <img src='https://www.bollywoodshaadis.com/img/article-l-2022113229554135741000.jpg' />`)

   }
   else 
     res.end(`<h1> OOPs you entered something wrong </h1>
     <h2> Enjoy these response now </h2>
     <img src='https://www.giantfreakinrobot.com/wp-content/uploads/2021/02/emma-stone-easy-a.jpg'
      />
     `)
})
server.listen(5000) 