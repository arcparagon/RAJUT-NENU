export default function ProductCard({item}){
  return (<div className="card"><div className="product-name">{item.name}</div><div>{item.price}</div></div>);
}
