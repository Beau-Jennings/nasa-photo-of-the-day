import React from "react";
import styled from "styled-components";

export default function DetailsData(props) {
    const {nasaData} = props;
    return (
        <StyledDetails>
            <h2>{nasaData.title}</h2>
            <p>{nasaData.date}</p>
            <p>{nasaData.explanation}</p>
        </StyledDetails>

    )
}


const StyledDetails = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    max-width: 45%;
    margin: 2%;
    padding: 2%;
`;