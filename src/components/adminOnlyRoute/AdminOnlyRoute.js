
import { useSelector } from "react-redux";
import { selectEmail } from "../../redux/slice/authSlice";

const AdminOnlyRoute = ({ children }) => {
  const userEmail = useSelector(selectEmail);

  if (userEmail === "test@gmail.com") {
    return children;
  }
  return null;
};
//   (
//     <section style={{ height: "80vh" }}>
//       <div className="container">
//         <h2>Permission Denied.</h2>
//         <p>This page can only be view by an Admin user.</p>
//         <br />
//         <Link to="/">
//           <button className="--btn">&larr; Back To Home</button>
//         </Link>
//       </div>
//     </section>
//   );


// export const AdminOnlyLink = ({ children }) => {
//   const userEmail = useSelector(selectEmail);

//   if (userEmail === "test@gmail.com") {
//     return children;
//   }
//   return null;
// };

export default AdminOnlyRoute;