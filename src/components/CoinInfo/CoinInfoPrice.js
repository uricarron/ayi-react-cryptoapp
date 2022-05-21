import { Typography, Grid } from "@mui/material";

const CoinInfoPrice = ({ price }) => {
  const ARS_CCL = 200;

  return (
    <>
      <Typography variant="h5">Price</Typography>
      <Grid container item alignItems="baseline" justifyContent="flex-end">
        <Typography variant="h6" component="p" color="gray" mr={1}>
          USD
        </Typography>
        <Typography variant="h1" component="h2">
          {price.toFixed(2)}
        </Typography>
      </Grid>
      <Grid container item alignItems="baseline" justifyContent="flex-end">
        <Typography variant="h6" component="p" color="gray" mr={1}>
          ARS
        </Typography>
        <Typography variant="h1" component="h2" mb={4}>
          {(price * ARS_CCL).toFixed(2)}
        </Typography>
      </Grid>
    </>
  );
};

export default CoinInfoPrice;