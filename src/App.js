import React from 'react';
import './App.scss';

function App() {
  return (
    <div className="App">
      <div className="table-container" role="table">
        <div role="rowgroup">
          <div className="flex-row" role="row">
            <div className="flex-cell" role="columnheader">Date</div>
            <div className="flex-cell" role="columnheader"># Ticket</div>
            <div className="flex-cell" role="columnheader">Name</div>
            <div className="flex-cell" role="columnheader">Number</div>
          </div>
        </div>
        <div role="rowgroup">
          <div className="flex-row" role="row">
            <div className="flex-cell" role="cell">2019-01-01</div>
            <div className="flex-cell" role="cell">1</div>
            <div className="flex-cell" role="cell">Maria</div>
            <div className="flex-cell" role="cell">0455667899</div>
          </div>
          <div className="flex-row" role="row">
            <div className="flex-cell" role="cell">2019-01-02</div>
            <div className="flex-cell" role="cell">1</div>
            <div className="flex-cell" role="cell">Carlos</div>
            <div className="flex-cell" role="cell">0455787856</div>
          </div>
          <div className="flex-row" role="row">
            <div className="flex-cell">2019-01-03</div>
            <div className="flex-rowspan">
              <div className="flex-row" role="row">
                <div className="flex-cell" role="cell">1</div>
                <div className="flex-cell" role="cell">Raul</div>
                <div className="flex-cell" role="cell">0455787856</div>
              </div>
              <div className="flex-row" role="row">
                <div className="flex-cell" role="cell">2</div>
                <div className="flex-cell" role="cell">Eva</div>
                <div className="flex-cell" role="cell">0455787856</div>
              </div>
              <div className="flex-row" role="row">
                <div className="flex-cell" role="cell">3</div>
                <div className="flex-cell" role="cell">Pedro</div>
                <div className="flex-cell" role="cell">0455787856</div>
              </div>
            </div>
          </div>
          <div className="flex-row" role="row">
            <div className="flex-cell" role="cell">2019-01-04</div>
            <div className="flex-cell" role="cell">1</div>
            <div className="flex-cell" role="cell">Sandra</div>
            <div className="flex-cell" role="cell">0455787856</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
