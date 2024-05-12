import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
// import Typography from '@mui/material/Typography';

type Props = {
  rate: number;
};

const StarRating = ({ rate }: Props) => {
  return (
    <Box
      sx={{
        "& > legend": { mt: 2 },
      }}
    >
      {/* <Typography component="legend">Controlled</Typography> */}
      <Rating name="read-only" value={rate} readOnly />
    </Box>
  );
};
export default StarRating;
