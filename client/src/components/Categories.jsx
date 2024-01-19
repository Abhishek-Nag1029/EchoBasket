import styled from "styled-components";
import { categories } from "../data";
import CategoryItem from "./CategoryItem";
import { mobile } from "../responsive";

const Wrapper=styled.div`
`
const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  ${mobile({padding:"0px",flexDirection:"column"})}
`;

const Text=styled.h1`
text-align:center;
color: red;
font-weight: bold;
  ${mobile({ fontSize: "24px" })}
`

const Categories = () => {
  return (
    <Wrapper>
    <Text>
        Explore our Top Picks
    </Text>
     <Container>
      {categories.map((item) => (
        <CategoryItem item={item} key={item.id} />
      ))}
      
    </Container>
    </Wrapper>
    
  );
};

export default Categories;
