import FormPersonalData from "../../components/C003-Form-Personal-Data";
import FormHomeAddress from "../../components/C004-Form-Home-Address";
import FormFuncionalData from "../../components/C005-Form-Funcional-Data";
import FormMonthlyContribution from "../../components/C006-Form-Monthly-Contribution";
import FormOptionTaxRegime from "../../components/C007-Form-Option-Tax-Regime";
import TableApplicationForm from "../../components/C008-Table-Application-Form";

function P1TL2() {
    return(
    <>
      <FormPersonalData></FormPersonalData>
      <FormHomeAddress></FormHomeAddress>
      <FormFuncionalData></FormFuncionalData>
      <FormMonthlyContribution></FormMonthlyContribution>
      <FormOptionTaxRegime></FormOptionTaxRegime>
      <TableApplicationForm></TableApplicationForm>
    </>
    )
}

export default P1TL2;