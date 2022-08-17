import React from 'react';

import addIcon from '../../Assets/icon/icon-add-circle.svg';
import { addNewPresentaionTemplateHook } from './hooks';
import { PresentaionTemplateForm } from './presentaionTemplateForm';
import { PresentationTemplateTable } from './presentationTemplateTable';

const PresentationComponent = () => {
  const { showPresentaionTemplate, setShowpresentaionTemplate } =
    addNewPresentaionTemplateHook();

  return (
    <>
      <div className="page-container">
        <div className="page-content">
          <div id="LoadPage">
            <a
              className="btn btn-sm btn-default pull-right"
              onClick={() =>
                setShowpresentaionTemplate(!showPresentaionTemplate)
              }
            >
              <img src={addIcon} className="icon-svg" /> Add
            </a>
            <h2 style={{ margin: '0px' }}>Presentaion Template</h2>
          </div>
          {showPresentaionTemplate && <PresentaionTemplateForm />}

          {!showPresentaionTemplate && <PresentationTemplateTable />}
        </div>
      </div>
    </>
  );
};

export default PresentationComponent;
