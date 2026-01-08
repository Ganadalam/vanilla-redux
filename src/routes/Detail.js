import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

function Detail() {
  const { id } = useParams();
  const toDo = useSelector((state) =>
    state.find((toDo) => toDo.id === parseInt(id))
  );

  return (
    <>
      <h1>{toDo?.text}</h1>
      <h5>Created at: {toDo?.id}</h5>
    </>
  );
}

export default Detail;

// import React from "react";
// import { connect } from "react-redux";
// import { useParams } from "react-router-dom";

// function Detail({ toDo }) {
//   const { id } = useParams();

//   if (!toDo) return null;

//   return (
//     <>
//       <h1>{toDo.text}</h1>
//       <h5>Created at: {toDo.id}</h5>
//     </>
//   );
// }

// function mapStateToProps(state, ownProps) {
//   const id = ownProps.id;
//   return {
//     toDo: state.find((toDo) => toDo.id === parseInt(id)),
//   };
// }

// // params를 props로 직접 넘김
// function DetailContainer(props) {
//   const { id } = useParams();
//   return <ConnectedDetail {...props} id={id} />;
// }

// const ConnectedDetail = connect(mapStateToProps)(Detail);
// export default DetailContainer;
