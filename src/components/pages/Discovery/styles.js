import { styled } from "@mui/system";

export const Wrapper = styled("div")`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  grid-auto-rows: 1fr;
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;
`;
