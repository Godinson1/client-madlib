export const useTableStyles = {
  genCodeContainer: {
    marginBottom: "4rem",
    height: "calc(100vh - 270px - 12rem)",
    overflow: "auto",
    boxShadow: "rgba(79, 79, 79, 0.1) 0px 6px 14px",
    border: "1px solid rgba(0,0,0,0.2)",

    "& table": {
      width: "100%",
      borderCollapse: "collapse",
      tableLayout: "fixed",
      position: "relative",

      "& thead": {
        fontWeight: 600,

        "& tr": {
          "& td": {
            position: "sticky",
            top: 0,
            backgroundColor: "green",
          },
        },
      },

      "& tbody": {},

      "& tr": {
        fontSize: "1.2rem",
        borderBottom: "1px solid rgba(0,0,0,0.2)",
        textAlign: "center",

        "&:nth-child(2n)": {
          backgroundColor: "green",
        },

        "& td": {
          borderRight: "1px solid rgba(0,0,0,0.2)",
          padding: "1rem",

          "&:nth-child(1)": {
            width: "40px",
          },
          "&:nth-child(2)": {
            width: "45%",
          },
          "&:nth-child(3)": {
            width: "45%",
          },
        },
      },
    },
  },
};
