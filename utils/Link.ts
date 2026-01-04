type NavBarLinks = {
    name :string ;
    href :string ;

}
export const dropDownMenuLinks : NavBarLinks[] =[
    {href:'/', name:'Home'},
    {href:'/about', name:'About'},
    {href:'/prodectes', name:'Prodectes'},
    {href:'/favorites', name:'Favorites'},
    {href:'/cart', name:'Cart'},
    {href:'/orders', name:'Orders'},
]
  
export let Links  = {
    HOME :  {href:'/', name:'Home'},
    ABOUT : {href:'/about', name:'About'},
    CART : {href:'/cart', name:'Cart'},
    PRODUCTS : {href:'/prodectes', name:'Prodcuts'},
} as const ;