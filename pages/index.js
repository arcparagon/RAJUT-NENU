import Header from '../components/Header';
import ProductGrid from '../components/ProductGrid';
import Footer from '../components/Footer';
import products from '../data/products';

export default function Home(){
  return (
    <>
      <Header />
      <section className="hero">
        <div className="hero-inner">
          <h2>Koleksi Rajut Handmade</h2>
          <p>Produk lembut, hangat, dan dibuat dengan cinta.</p>
        </div>
      </section>
      <section className="container">
        <h3 className="section-title">Produk Unggulan</h3>
        <ProductGrid items={products} />
      </section>
      <Footer />
    </>
  )
}
