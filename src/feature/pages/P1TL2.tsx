import FormPersonalData from "../components/c3-form-personal-data";
import FormHomeAddress from "../components/c4-form-home-address";
import FormFuncionalData from "../components/c5-form-funcional-data";
import FormMonthlyContribution from "../components/c6-form-monthly-contribution";
import FormOptionTaxRegime from "../components/c7-form-option-tax-regime";
import TableApplicationForm from "../components/c8-table-application-form";

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