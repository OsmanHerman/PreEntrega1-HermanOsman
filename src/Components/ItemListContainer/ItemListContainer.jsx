const ItemListContainer = ({ greeting }) => {
  return (
    <div
      style={{
        width: "100vw",
        height: "90vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgb(206, 206, 206)",
      }}
    >
      <h1>{greeting}</h1>
    </div>
  );
};

export default ItemListContainer;