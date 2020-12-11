import React from "react";
import styled from "styled-components";
import DetailsData from "./Details";
import ImageData from "./Image";

export default function ContentData(props) {
    return (
        <StyledContent>
            < DetailsData nasaData={props.nasaData}/>
            < ImageData nasaData={props.nasaData}/>
        </StyledContent>

    )
}
const StyledContent = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: row;
`;
