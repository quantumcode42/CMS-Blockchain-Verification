import React from 'react';

const App = () => {
    const blockchainUrl = process.env.REACT_APP_BLOCKCHAIN_NETWORK_URL;
    console.log('Blockchain URL:', blockchainUrl);

    return (
        <div>
            <h1>Environment Variable Test</h1>
            <p>Blockchain URL: {blockchainUrl}</p>
        </div>
    );
};

export default App;
