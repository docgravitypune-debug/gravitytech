import ServiceDetailLayout from "./ServiceDetailLayout.jsx";
import { enterpriseServiceMap } from "../../data/enterpriseServices.js";

export default function ErpServiceDetail() {
  return <ServiceDetailLayout service={enterpriseServiceMap.erp} />;
}
