import * as React from 'react';
import Table from 'react-bootstrap/Table';

export const PresentationTemplateTable = () => {
    return <div>
          <Table striped bordered hover>
      <thead>
        <tr>
          <th>Id</th>
          <th>Description</th>
          <th>Date</th>
          <th>Active</th>
          <th>No of slides</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>true</td>
          <td>10</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>false</td>
          <td>20</td>
        </tr>
        <tr>
          <td>3</td>
          <td colSpan={2}>Larry the Bird</td>
          <td>true</td>
          <td>15</td>
        </tr>
      </tbody>
    </Table>
    </div>
}