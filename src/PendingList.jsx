const { config, sender, chainId } = props;

State.init({
  pendingList: [],
});

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
            chainId,
          }}
        />
      ))}
    </tbody>
  </Table>
);
