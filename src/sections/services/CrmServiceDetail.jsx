import ServiceDetailLayout from "./ServiceDetailLayout.jsx";
import { enterpriseServiceMap } from "../../data/enterpriseServices.js";

export default function CrmServiceDetail() {
  return <ServiceDetailLayout service={enterpriseServiceMap.crm} />;
}
