import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { InputBase, Box, styled, List, ListItem } from '@mui/material';
import { getProducts } from '../../Redux/action/ProductAction.js';
import { Link } from 'react-router-dom';

const SearchContainer = styled(Box)`
  background: #fff;
  border-radius: 4px;
  width: 28%;
  margin-left: 1%;
`;

const InputSearchBase = styled(InputBase)`
  padding-left: 20px;
  width: 100%;
  border: 1px solid #ccc;
`;

const ListWrapper = styled(List)`
  position: absolute;
  background: #FFFFFF;
  color: #000;
  margin-top: 10px;
`;

const Search = () => {
    const [text, setText] = useState('');

    const getText = (text) => {
        setText(text);
    };

    const { products } = useSelector(state => state.getProducts);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch]);

    return (
        <>
            <SearchContainer>
                <InputSearchBase
                    placeholder='Search what you want'
                    onChange={(e) => getText(e.target.value)}
                    value={text}
                />
                {text && (
                    <ListWrapper>
                        {products
                            .filter(product =>
                                product.title.longTitle.toLowerCase().includes(text.toLowerCase())
                            )
                            .map(product => (
                                <ListItem key={product.id}>
                                    <Link to={`/product/${product.id}`} onClick={() => setText('')}>
                                        {product.title.longTitle}
                                    </Link>
                                </ListItem>
                            ))}
                    </ListWrapper>
                )}
            </SearchContainer>
        </>
    );
};

export default Search;
