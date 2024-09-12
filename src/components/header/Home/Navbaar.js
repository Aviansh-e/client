import { navData } from "../../Constant/Data";
import { Box, Typography, styled } from "@mui/material";

const Components = styled(Box)`
  margin-top: 126px;
  display: flex;
  justify-content: space-between;
`;

const Containerj = styled(Box)`
  padding: 10px 5px;
  text-align: center;
`;

const Image = styled('img')`
  width: 110px; /* Set your desired width */
  height: 80px; /* Set your desired height */
  object-fit: cover; /* Ensures image retains aspect ratio */
`;

const Text = styled(Typography)`
  font-size: 14px;
  font-weight: 600;
  font-family: inherit;
`;

const Navbaar = () => {
    let count = 0;
    return (
        <Components>
            {
                navData.map(data => (
                    <Containerj key={count += 1}>
                        <Image src={data.url} alt="No_image" />
                        <Text>{data.text}</Text>
                    </Containerj>
                ))
            }
        </Components>
    );
}
export default Navbaar;
