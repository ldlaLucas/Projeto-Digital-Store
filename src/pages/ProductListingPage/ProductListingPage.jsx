import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./styles.css";
import Layout from "../../components/Layout/Layout";
import ProductCard from "../../components/ProductCard/ProductCard";
import FilterGroup from "../../components/FilterGroup/FilterGroup";
import products from "../../components/ProductData/ProductData";

const ProductListingPage = () => {
  const [selectedFilters, setSelectedFilters] = useState({
    price: "all",
    size: "all",
    color: "all",
    category: "all",
  });

  const [sortOrder, setSortOrder] = useState(" ");
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const filter = params.get("filter");
    if (filter) {
      setSelectedFilters((prevFilters) => ({
        ...prevFilters,
        category: filter,
      }));
    }
  }, [location.search]);

  const handleFilterChange = (filterType, value) => {
    setSelectedFilters({
      ...selectedFilters,
      [filterType]: value,
    });
  };

  const handleClearFilters = () => {
    setSelectedFilters({
      price: "all",
      size: "all",
      color: "all",
      category: "all",
    });
    navigate("/products");
  };

  const handleSortChange = (event) => {
    setSortOrder(event.target.value);
  };

  const handleApplyFilters = () => {
    const filterParams = new URLSearchParams();
    Object.keys(selectedFilters).forEach((key) => {
      if (selectedFilters[key] !== "all") {
        filterParams.append(key, selectedFilters[key]);
      }
    });
    navigate(`/products?${filterParams.toString()}`);
  };

  const filteredProducts = products.filter((product) => {
    return (
      (selectedFilters.price === "all" ||
        product.price <= parseFloat(selectedFilters.price)) &&
      (selectedFilters.size === "all" ||
        product.size === selectedFilters.size) &&
      (selectedFilters.color === "all" ||
        product.color === selectedFilters.color) &&
      (selectedFilters.category === "all" ||
        product.category.toLowerCase().includes(selectedFilters.category.toLowerCase()))
    );
  });

  const sortedProducts = filteredProducts.sort((a, b) => {
    if (sortOrder === "price-asc") {
      return a.price - b.price;
    } else if (sortOrder === "price-desc") {
      return b.price - a.price;
    }
    return 0;
  });

  const priceOptions = [
    { text: "Até R$50", value: "50" },
    { text: "Até R$100", value: "100" },
    { text: "Até R$200", value: "200" },
  ];

  const sizeOptions = [
    { text: "P", value: "P" },
    { text: "M", value: "M" },
    { text: "G", value: "G" },
  ];

  const colorOptions = [
    { text: "Vermelho", value: "Vermelho" },
    { text: "Azul", value: "Azul" },
    { text: "Verde", value: "Verde" },
  ];

  const categoryOptions = [
    { text: "Camisetas", value: "Camisetas" },
    { text: "Calças", value: "Calças" },
    { text: "Bonés", value: "Bonés" },
    { text: "Headphones", value: "Headphones" },
    { text: "Tênis", value: "Tênis" },
  ];

  return (
    <Layout>
      <div className="product-listing-page">
        <div className="sorting-dropdown">
          <label htmlFor="sort">Ordenar por:</label>
          <select
            id="sort"
            name="sort"
            value={sortOrder}
            onChange={handleSortChange}
          >
            <option value=" ">Nenhum</option>
            <option value="price-asc">Menor Preço</option>
            <option value="price-desc">Maior Preço</option>
          </select>
        </div>
        <div className="product-listing-content">
          <aside className="filters">
            <FilterGroup
              nameTitle="Preço"
              title="filter"
              inputType="radio"
              options={priceOptions}
              selectedFilters={selectedFilters}
              onFilterChange={handleFilterChange}
            />
            <FilterGroup
              nameTitle="Tamanho"
              title="filter"
              inputType="checkbox"
              options={sizeOptions}
              selectedFilters={selectedFilters}
              onFilterChange={handleFilterChange}
            />
            <FilterGroup
              nameTitle="Cor"
              title="filter"
              inputType="checkbox"
              options={colorOptions}
              selectedFilters={selectedFilters}
              onFilterChange={handleFilterChange}
            />
            <FilterGroup
              nameTitle="Categoria"
              title="filter"
              inputType="radio"
              options={categoryOptions}
              selectedFilters={selectedFilters}
              onFilterChange={handleFilterChange}
            />
            <button
              className="bt apply-filters"
              onClick={handleApplyFilters}
            >
              Aplicar
            </button>
            <button className="bt clear-filters" onClick={handleClearFilters}>
              Limpar Filtros
            </button>
          </aside>

          <section className="product-listing">
            {sortedProducts.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                image={product.image}
                name={product.name}
                price={product.price}
                priceDiscount={product.priceDiscount}
              />
            ))}
          </section>
        </div>
        <div className="pagination"></div>
      </div>
    </Layout>
  );
};

export default ProductListingPage;
