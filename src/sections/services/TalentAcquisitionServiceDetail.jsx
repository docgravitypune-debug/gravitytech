import ServiceDetailLayout from "./ServiceDetailLayout.jsx";
import { enterpriseServiceMap } from "../../data/enterpriseServices.js";

export default function TalentAcquisitionServiceDetail() {
  return <ServiceDetailLayout service={enterpriseServiceMap["talent-acquisition"]} />;
}
