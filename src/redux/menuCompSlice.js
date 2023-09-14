
const TYPE = 'changeMenuComp'

export const menuComp = [
    {id : 0,src : './images/menuImg1.png',imgType : 'snack'},
    {id : 1,src : './images/menuImg1.png',imgType : 'snack'},
    {id : 2,src : './images/menuImg1.png',imgType : 'salads'},
    {id : 3,src : './images/menuImg1.png',imgType : 'salads'},
    {id : 4,src : './images/menuImg1.png',imgType : 'pasta'},
    {id : 5,src : './images/menuImg1.png',imgType : 'pasta'},
    {id : 6,src : './images/menuImg1.png',imgType : 'pizza'},
    {id : 7,src : './images/menuImg1.png',imgType : 'pizza'},
    {id : 8,src : './images/menuImg1.png',imgType : 'sandwich burger'},
    {id : 9,src : './images/menuImg1.png',imgType : 'sandwich burger'},
    {id : 10,src : './images/menuImg1.png',imgType : 'hot dishes'},
    {id : 11,src : './images/menuImg1.png',imgType : 'hot dishes'},
    {id : 12,src : './images/menuImg1.png',imgType : 'dessert'},
    {id : 13,src : './images/menuImg1.png',imgType : 'dessert'},
    {id : 14,src : './images/menuImg1.png',imgType : 'drinks'},
    {id : 15,src : './images/menuImg1.png',imgType : 'drinks'},
    {id : 16,src : './images/menuImg1.png',imgType : 'coffee tea'},
    {id : 17,src : './images/menuImg1.png',imgType : 'coffee tea'},
    {id : 18,src : './images/menuImg1.png',imgType : 'bar'},
    {id : 19,src : './images/menuImg1.png',imgType : 'bar'},
    {id : 20,src : './images/menuImg1.png',imgType : 'bar'},
    {id : 21,src : './images/menuImg1.png',imgType : 'hookah'},
    {id : 22,src : './images/menuImg1.png',imgType : 'hookah'},
   
]

export function menuCompSlicer(state=[],action){
  if(action.type === TYPE){
    return  action.payload.menuComp    
   
  }
  return state
}

export function selectMenuComp(state){
   return state.menuComp
}

export function changeMenuComp(newValue){
   return {
      type : TYPE,
      payload : {
        menuComp : newValue
      }
   }
}