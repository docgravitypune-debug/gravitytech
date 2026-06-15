import ServiceDetailLayout from "./ServiceDetailLayout.jsx";
import { enterpriseServiceMap } from "../../data/enterpriseServices.js";

export default function EnterpriseSolutionServiceDetail() {
  return <ServiceDetailLayout service={enterpriseServiceMap["enterprise-solution"]} />;
}
