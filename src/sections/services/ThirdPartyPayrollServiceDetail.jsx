import ServiceDetailLayout from "./ServiceDetailLayout.jsx";
import { enterpriseServiceMap } from "../../data/enterpriseServices.js";

export default function ThirdPartyPayrollServiceDetail() {
  return <ServiceDetailLayout service={enterpriseServiceMap["third-party-payroll"]} />;
}
