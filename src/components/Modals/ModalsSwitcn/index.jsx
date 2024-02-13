import React from "react";
import {
    NormativeBase,
    InformationSystems,
    ListOfParticipants,
    PlanningElements,
    WorkingWithContracts,
    ResponsibleASEZEIS,
    Asez,
    Etpgpb,
    Iusmtr,
    Purasbu,
    Eis,
    Vzl,
    PurchaseOfGoods,
    RegulatorDocuments,
    ProcurementOrganizer,
    PurchasingDivision,
    PurchasingCommission,
    ListOfVzl,
    FormationOfNeed,
    ProcurementRegulations,
    Smsp,
} from "../../index";

export default function ModalsSwitcn({ modal }) {
    switch (modal) {
        case "normative-base":
            return <NormativeBase />;
        case "information-systems":
            return <InformationSystems />;
        case "list-of-participants":
            return <ListOfParticipants />;
        case "planning-elements":
            return <PlanningElements />;
        case "working-with-contracts":
            return <WorkingWithContracts />;
        case "responsible-ASEZEIS":
            return <ResponsibleASEZEIS />;
        case "asez":
            return <Asez />;
        case "etpgpb":
            return <Etpgpb />;
        case "iusmtr":
            return <Iusmtr />;
        case "purasbu":
            return <Purasbu />;
        case "eis":
            return <Eis />;
        case "vzl":
            return <Vzl />;
        case "purchase-of-goods":
            return <PurchaseOfGoods />;
        case "regulator-documents":
            return <RegulatorDocuments />;
        case "procurement-organizer":
            return <ProcurementOrganizer />;
        case "purchasing-division":
            return <PurchasingDivision />;
        case "purchasing-commission":
            return <PurchasingCommission />;
        case "list-of-vzl":
            return <ListOfVzl />;
        case "formation-of-need":
            return <FormationOfNeed />;
        case "procurement-regulations":
            return <ProcurementRegulations />;
        case "smsp":
            return <Smsp />;

        default:
            return <div></div>;
    }
}
