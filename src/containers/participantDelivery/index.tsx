import React from "react";
import { useParticipantDelivery } from "./hooks";
const ParticipantsDelivery = () => {
  const { renderHTML, participantScreen } = useParticipantDelivery();

  return (
    <div id="LoadPage">
      <div className="PageShown amRemove">
        <div className="portlet" style={{ marginBottom: "0 " }}>
          <div className="participant-screen">
            {participantScreen && renderHTML(participantScreen.html)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParticipantsDelivery;
