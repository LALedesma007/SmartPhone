
const expressionsProducts ={
  title: /^[a-zA-ZÀ-ÿ\s]{3,40}$/,
  model: /^[a-zA-Z0-9_-]{3,40}$/,
  description: /^[a-zA-ZÀ-ÿ\s]{3,500}$/,
  price: /^\$?\d+(\.\d{3,4})?$/,

}
export default expressionsProducts

/*Ejemplos de precios que cumplen con esta expresión regular:

10
$10
9.99
$9.99
0.50
$0.50
100
$100
Ejemplos de precios que no cumplen con esta expresión regular:

$100,000 (contiene una coma para separación de miles)
$9.999 (más de dos dígitos decimales)
100,000 (contiene una coma para separación de miles) 

*/