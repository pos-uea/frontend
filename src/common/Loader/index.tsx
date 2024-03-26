const Loader = () => {
  return (
    <div  style={{
      padding: "100px",
      display: "flex",
      flexFlow: "row nowrap",
      justifyContent: "center",
      alignItems: "center",
    }}>
      <div className="h-16 w-16 animate-spin rounded-full border-4 border-solid border-primary border-t-transparent"></div>
    </div>

  );
};

export default Loader;
