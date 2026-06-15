import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "../../components/AnimatedSection.jsx";
import ProSectionHeading from "../../components/ProSectionHeading.jsx";
import { enterpriseServices } from "../../data/enterpriseServices.js";
import { Icon } from "../../utils/icons.jsx";
import ErpServiceDetail from "./ErpServiceDetail.jsx";
import TalentAcquisitionServiceDetail from "./TalentAcquisitionServiceDetail.jsx";
import EnterpriseSolutionServiceDetail from "./EnterpriseSolutionServiceDetail.jsx";
import CrmServiceDetail from "./CrmServiceDetail.jsx";
import ThirdPartyPayrollServiceDetail from "./ThirdPartyPayrollServiceDetail.jsx";

const serviceComponents = {
  erp: ErpServiceDetail,
  "talent-acquisition": TalentAcquisitionServiceDetail,
  "enterprise-solution": EnterpriseSolutionServiceDetail,
  crm: CrmServiceDetail,
  "third-party-payroll": ThirdPartyPayrollServiceDetail,
};

export default function EnterpriseServicesHub() {
  const [activeId, setActiveId] = useState(enterpriseServices[0].id);
  const ActiveDetail = serviceComponents[activeId];

  const handleSelect = (id) => {
    setActiveId(id);
    const target = document.getElementById(`service-${id}`);
    target?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <AnimatedSection id="services" className="pro-section enterprise-services-hub">
        <div className="container">
          <ProSectionHeading
            eyebrow="Enterprise offerings"
            title="Choose a service to explore the full delivery blueprint."
            center
          >
            Select ERP, Talent Acquisition, Enterprise Solution, CRM, or Third Party Payroll to
            view the dedicated component, hero, and delivery details.
          </ProSectionHeading>

          <div className="enterprise-service-card-grid" role="tablist" aria-label="Enterprise services">
            {enterpriseServices.map((service, index) => {
              const isActive = service.id === activeId;
              return (
                <motion.button
                  className={`enterprise-service-card ${isActive ? "active" : ""}`}
                  key={service.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => handleSelect(service.id)}
                  whileHover={{ y: -6, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.4, delay: index * 0.06 }}
                >
                  <span className={`enterprise-service-card-icon gradient-tile gradient-tile--${service.variant}`}>
                    <Icon name={service.icon} size={22} />
                  </span>
                  <h3>{service.cardTitle}</h3>
                  <p>{service.description}</p>
                  <span className="enterprise-service-card-cta">
                    {isActive ? "Currently viewing" : "View details"}
                  </span>
                </motion.button>
              );
            })}
          </div>
        </div>
      </AnimatedSection>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeId}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <ActiveDetail />
        </motion.div>
      </AnimatePresence>
    </>
  );
}
