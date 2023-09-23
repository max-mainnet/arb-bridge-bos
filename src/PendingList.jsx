const { config, sender } = props;

const l2NodeUrl = "https://arb1.arbitrum.io/rpc";

const l1NodeUrl = "https://rpc.ankr.com/eth";

const l2Provider = new ethers.providers.JsonRpcProvider(l2NodeUrl);

const l1Provider = new ethers.providers.JsonRpcProvider(l1NodeUrl);

State.init({
  pendingList: [],
});

if (!state.l1BlockNumber) {
  l1Provider.getBlockNumber().then((blockNumber) => {
    State.update({
      l1BlockNumber: blockNumber,
    });
  });
}

if (!state.l2BlockNumber) {
  l2Provider.getBlockNumber().then((blockNumber) => {
    State.update({
      l2BlockNumber: blockNumber,
    });
  });
}

const pendingList = Storage.get(
  "arb-bridge-pending-list-withdraw",
  "weige.near/widget/transfer-action"
);

if (pendingList) {
  State.update({
    pendingList,
  });
}

const Table = styled.table`
  width: 700px;
`;

return (
  <Table>
    <thead>
      <tr>
        <th>From</th>
        <th>To</th>
        <th>Amount</th>
        <th>Symbol</th>
        <th>Tx</th>
        <th>Status</th>
      </tr>
    </thead>

    <tbody>
      {state.pendingList.map((item) => (
        <Widget
          src="weige.near/widget/PendingWithdrawItem"
          props={{
            ...props,
            item,
            config,
          }}
        />
      ))}
    </tbody>
  </Table>
);
