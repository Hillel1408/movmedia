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

        default:
            return <div></div>;
    }
}
