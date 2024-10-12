import styled from "styled-components";
import { popularProducts } from "../data";
import Product from "./Product";
import { useEffect, useState } from "react";
import axios from "axios";
import { mobile } from "../responsive";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Wrapper = styled.div``;
const Text = styled.h1`
  text-align: center;
  color: red;
  font-weight: bold;
  ${mobile({ fontSize: "24px" })}
`;

const Products = ({ cat, filters, sort }) => {
  // console.log(cat,filters,sort);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    console.log("Category:", cat);
    console.log("Products:", products); 
    const getProducts = async () => {
      try {
        const res = await axios.get(
          cat
            ? `https://echobasket-api.vercel.app/api/products?category=${cat}`
            : "https://echobasket-api.vercel.app/api/products"
        );
        console.log("API Response:", res.data);
        setProducts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getProducts();
  }, [cat]);

  useEffect(() => {
    cat &&
      setFilteredProducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [products, cat, filters]);

  useEffect(() => {
    if (sort === "newest") {
      setFilteredProducts((prev) => {
        const sorted = [...prev].sort((a, b) => {
          // console.log("Comparing dates:", a.createdAt, b.createdAt);
          return new Date(b.createdAt) - new Date(a.createdAt);
        });
        // console.log("Sorted array:", sorted);
        return sorted;
      });
    } else if (sort === "asc") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [sort]);

  return (
    <Wrapper>
      <Text>Explore Our Top Products</Text>
      <Container>
        {cat
          ? filteredProducts.map((item) => (
              <Product item={item} key={item.id} />
            ))
          : products
              .slice(0, 8)
              .map((item) => <Product item={item} key={item.id} />)}
      </Container>
    </Wrapper>
  );
};

export default Products;
