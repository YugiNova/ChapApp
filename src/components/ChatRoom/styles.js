import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-columns: auto auto 1fr;
    grid-template-rows: 100vh;
`

export const SideBarWrapper = styled.div`
    grid-column: 1/2;
    grid-row: 1/2;
`

export const OutletWrapper = styled.div`
    grid-column: 2/3;
    grid-row: 1/2;
`

export const ChatViewWrapper = styled.div`
    grid-column: 3/4;
    grid-row: 1/2;
`