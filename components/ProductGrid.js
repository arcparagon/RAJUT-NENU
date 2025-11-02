import ProductCard from './ProductCard';
export default function ProductGrid({items}){return <div className="grid">{items.map(i=><ProductCard key={i.id} item={i} />)}</div>}
