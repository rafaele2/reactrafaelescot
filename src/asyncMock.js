const products = [
    { 
        id: '1', 
        name: 'ryzen 5 5600X', 
        price: 42.000, 
        category: 'cpu', 
        img: 'https://www.bing.com/images/search?view=detailV2&ccid=6t61RC0O&id=A6B88E27EDF8FED9D3E694C0DABBE268BA792D18&thid=OIP.6t61RC0OGqF80IvmPnlRxwHaEK&mediaurl=https%3a%2f%2fassets.rockpapershotgun.com%2fimages%2f2020%2f11%2fAMD-Ryzen-5-5600X-with-cooler.jpg&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.eadeb5442d0e1aa17cd08be63e7951c7%3frik%3dGC15umjiu9rAlA%26pid%3dImgRaw%26r%3d0&exph=2176&expw=3872&q=ryzen+5+5600+x&simid=608010246743489271&FORM=IRPRST&ck=9361D98AF3CD4344BB5D565C74865B5C&selectedIndex=0&ajaxhist=0&ajaxserp=0' , 
        stock: 25, 
        description:'Cpu Ryzen 5 5600 X'
    },
    { id: '2', name: 'samsung s21', price: 800, category: 'celular', img:'ttps://cdn.pocket-lint.com/r/s/1200x630/assets/images/155378-phones-review-hands-on-samsung-galaxy-s21-ultra-image1-luae09ici4.JPG', stock: 16, description:'Descripcion de Samsung s21'},
    { id: '3', name: 'Ipad 8va generacion', price: 1200, category: 'tablet', img:'https://medias.musimundo.com/medias/00406046-143516-143516-01-143516-01.jpg-size515?context=bWFzdGVyfGltYWdlc3w1MjI1MnxpbWFnZS9qcGVnfGhjMC9oYWMvMTAyODM0OTc0NTU2NDYvMDA0MDYwNDYtMTQzNTE2LTE0MzUxNl8wMS0xNDM1MTZfMDEuanBnX3NpemU1MTV8MzA0NmMzNGFhZjUwMDY2YjY5MjU0MjlkMGJlYWMxODAxZjE5ODJhZmJlOTczZThmZjE2NTQxMjU5NjE2OTA4Yw', stock: 10, description:'Descripcion de Ipad'}
]

export const getProductsDeAlfredo = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 3000)
    })
}
export const getProductsById = (id) => {
    return new Promise ((resolve) => {
        setTimeout (()=> {
            resolve (products.find (prod => prod.id === id))
        }, 500)
    })
}