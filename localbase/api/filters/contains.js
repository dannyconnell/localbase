export default function contains(property,value){
  if(!property || typeof property !== 'string'){
    this.userErrors.push('Propiedad no valida')
    return this
  }else if(typeof value !== 'boolean' && typeof value !== 'string' && typeof value !== 'number'){
    this.userErrors.push('Valor a buscar no es valido')
  }else{
    this.containsProperty = property
    this.containsValue = value
    return this
  }
}