### Arbitrum Bridge on BOS

#### UI Components

- ArbitrumBridge.jsx
  - main component of arbitrum bridge
- PendingList.jsx

  - UI component for displaying pending withdraws

- PendingWithdrawItem.jsx

  - we will claim the withdraw here

- TokenItem.jsx

- TokenList.jsx

- TransferButton.jsx

  - button component to trigger actions

#### Action Components

- gen-claim-action.jsx
  - check withdraw status and generate claim action
- get-balance.jsx
  - get balance for ETH and ERC20 tokens
- get-l1-token-gateway.jsx
  - Get ERC20 tokens gateway address
- transfer-action.jsx
  - contains basic actions (deposit ETH, deposit ERC20, withdraw ETH, withdraw ERC20)
