import React from "react";
import styled from "styled-components";

export default function ImageData(props) {
    const {nasaData} = props;
    return (
        <StyledImage>
            <img src= {nasaData.hdurl} alt = "" />
        </StyledImage>
    )
}

const StyledImage = styled.div`
    max-width: 45%;
    margin: 2%;
    border-radius: 50%;
`;
