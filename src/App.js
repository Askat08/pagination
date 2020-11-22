import React, { useEffect, useState } from 'react';
import Container from '@material-ui/core/Container';
import MenuAppBar from './components/NavBar';
import PaginationSquare from './components/Pagination';
import GridPics from './components/GridPics';
import './App.css';

function App() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [isLoading, setIsLoading] = React.useState(true);
  useEffect(() => {
    fetchData(page);
  }, []);

  const fetchData = (page) => {
    setIsLoading(true);
    fetch(
      `https://api.themoviedb.org/3/person/popular?api_key=df8b08ecb436696fee41a00f8d87a540&language=en&page=${page}`
    )
      .then((res) => res.json())
      .then((data) => {
        setData(data.results);
        setTotalPages(data.total_pages);
      });
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  const handlePageChange = (event, value) => {
    setPage(value);
    fetchData(value);
  };

  return (
    <Container>
      <MenuAppBar />
      <PaginationSquare
        handlePageChange={handlePageChange}
        totalPages={totalPages}
        page={page}
      />
      <GridPics
        data={data}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
        overflow='visible'
      />
    </Container>
  );
}

export default App;
