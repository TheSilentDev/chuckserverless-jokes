import React from "react";
import styled from "styled-components";
import CategoryItem from "./CategoryItem";
import { Query } from "react-apollo";
import { GET_CATEGORIES } from "../GraphQL/Queries/GetCategories";

const CategoryContainer = styled.div`
  width: 100%;
`;
const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

function CategoryList() {
  return (
    <CategoryContainer>
      <Query query={GET_CATEGORIES}>
        {({ loading, error, data }) => {
          if (loading) return <div>Fetching</div>;
          if (error) return <div>Error</div>;

          const categories = data.categories;
          return (
            <List>
              {categories.map(categoryName => (
                <CategoryItem key={categoryName} name={categoryName} />
              ))}
            </List>
          );
        }}
      </Query>
    </CategoryContainer>
  );
}

export default CategoryList;
