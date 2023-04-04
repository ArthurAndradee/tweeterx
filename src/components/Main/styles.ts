import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    width: min(601px, 100%);

    @media (min-width: 500px) {
        border-left: 1px solid var(--gray);
        border-right: 1px solid var(--gray);
    }
`;

export const Header = styled.div``;

export const BackIcon = styled.div``;

export const ProfileInfo = styled.div``;