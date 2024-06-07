const express = require('express')
const app = express()
const port = 3000

// function callback(req, res) {
//     const items = [{
//         photo: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/d8f71b82-4ebb-4485-8a90-ff518a357aae/ja-1-basketball-shoes-LBlTVt.png",
//         name:" Ja 1",
//         category: "traction",
//         price: "120 $",
//         discription: "Ja Morant became the superstar he is today by repeatedly sinking jumpers on crooked rims, jumping on tractor tyres and dribbling through traffic cones in steamy South Carolina summers. TheJa 1 is a testament to his rise. With an Air Zoom unit, it supports bunny hops and hyper speed without sacrificing comfort so that you can control your own destiny on the court, Ja-style."
//     },{
//         photo: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/4c13de7a-dfd4-43f8-8b06-5a9c4ed4af2b/ja-1-vacation-basketball-shoes-R6knfK.png",
//         name: "Ja 2",
//         category: "traction",
//         price: "150 $",
//         discription: "Ja Morant became the superstar he is today by repeatedly sinking jumpers on crooked rims, jumping on tractor tyres and dribbling through traffic cones in steamy South Carolina summers. TheJa 1 is a testament to his rise. With an Air Zoom unit, it supports bunny hops and hyper speed without sacrificing comfort so that you can control your own destiny on the court, Ja-style."
//     },{
//         photo: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/fb798d11-34c3-4712-981d-9ab0db8e6c78/ja-1-basketball-shoes-bCx2W3.png",
//         name: "Book 1",
//         category: "desyne",
//         price: "130 $",
//         discription: "Ja Morant became the superstar he is today by repeatedly sinking jumpers on crooked rims, jumping on tractor tyres and dribbling through traffic cones in steamy South Carolina summers. TheJa 1 is a testament to his rise. With an Air Zoom unit, it supports bunny hops and hyper speed without sacrificing comfort so that you can control your own destiny on the court, Ja-style."
//     }]


//     res.send(items)
// }
// jdskbkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk


app.get('/api/article', (req, res) => {
    const items = [{
        photo: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/d8f71b82-4ebb-4485-8a90-ff518a357aae/ja-1-basketball-shoes-LBlTVt.png",
        name:" Ja 1",
        category: "traction",
        price: "120 $",
        discription: "Ja Morant became the superstar he is today by repeatedly sinking jumpers on crooked rims, jumping on tractor tyres and dribbling through traffic cones in steamy South Carolina summers. TheJa 1 is a testament to his rise. With an Air Zoom unit, it supports bunny hops and hyper speed without sacrificing comfort so that you can control your own destiny on the court, Ja-style."
    },{
        photo: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/4c13de7a-dfd4-43f8-8b06-5a9c4ed4af2b/ja-1-vacation-basketball-shoes-R6knfK.png",
        name: "Ja 2",
        category: "traction",
        price: "150 $",
        discription: "Ja Morant became the superstar he is today by repeatedly sinking jumpers on crooked rims, jumping on tractor tyres and dribbling through traffic cones in steamy South Carolina summers. TheJa 1 is a testament to his rise. With an Air Zoom unit, it supports bunny hops and hyper speed without sacrificing comfort so that you can control your own destiny on the court, Ja-style."
    },{
        photo: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/fb798d11-34c3-4712-981d-9ab0db8e6c78/ja-1-basketball-shoes-bCx2W3.png",
        name: "Book 1",
        category: "desyne",
        price: "130 $",
        discription: "Ja Morant became the superstar he is today by repeatedly sinking jumpers on crooked rims, jumping on tractor tyres and dribbling through traffic cones in steamy South Carolina summers. TheJa 1 is a testament to his rise. With an Air Zoom unit, it supports bunny hops and hyper speed without sacrificing comfort so that you can control your own destiny on the court, Ja-style."
    }]


    res.send(items)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})