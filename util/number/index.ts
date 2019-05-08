export const _isNaN=(oldValue?:string|number|boolean)=>{
    if(typeof oldValue =='boolean' ||!oldValue){return true}
    const newValue=Number(oldValue);
    return newValue !==newValue;
  }