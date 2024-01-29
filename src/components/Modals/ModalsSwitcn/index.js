import React from "react";
import { NormativeBase, InformationSystems, ListOfParticipants } from "../../index";

export default function ModalsSwitcn({ modal }) {
    switch (modal) {
        case "normative-base":
            return <NormativeBase />;
        case "information-systems":
            return <InformationSystems />;
        case "list-of-participants":
            return <ListOfParticipants />;

        default:
            return <div>Error: ...</div>;
    }
}
