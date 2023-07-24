import React, { useState } from "react";
import { Grid } from "@mui/material";
import { Container } from "@mui/system";
// import Result from "./components/loan/Result";
import Result from "../loan/Result";
// import SliderSelect from "./components/loan/SliderSelect";
import SliderSelect from "../loan/SliderSelect";
// import TenureSelect from "./components/loan/TenureSelect";
import TenureSelect from "../loan/TenureSelect";

function Homeloan() {
  const [data, setData] = useState({
    homeValue: 100000,
    downPayment: 0 * 0.2,
    loanAmount: 0 * 0.8,
    loanTerm: 5,
    interestRate: 8,
  });
  return (
    <div className="Homeloan">
      <Container maxWidth="xl" sx={{ marginTop: 4 }}>
        <Grid container spacing={5} alignItems="center">
          <Grid item xs={12} md={6}>
            <SliderSelect data={data} setData={setData} />
            <TenureSelect data={data} setData={setData} />
          </Grid>
          <Grid item xs={12} md={6}>
            {/* this is where we write the code  👇 */}
            <Result
             data={data} />
           

          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Homeloan;
