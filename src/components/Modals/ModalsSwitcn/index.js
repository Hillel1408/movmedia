import React from "react";
import { NormativeBase, InformationSystems, ListOfParticipants, PlanningElements, WorkingWithContracts, ResponsibleASEZEIS } from "../../index";

export default function ModalsSwitcn({ modal }) {
    console.log(modal);
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

        default:
            return <div></div>;
    }
}
