import React from "react";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import CustomerDelete from "./CustomerDelete";

function Customer(props) {
  return (
      <TableRow key={props.id}>
        <TableCell>{props.id}</TableCell>
        <TableCell>
          <img src={props.image} />
        </TableCell>
        <TableCell>{props.name}</TableCell>
        <TableCell>{props.birthday}</TableCell>
        <TableCell>{props.gender}</TableCell>
        <TableCell>{props.job}</TableCell>
        <TableCell><CustomerDelete stateRefresh={props.stateRefresh} id={props.id}/></TableCell>
      </TableRow>
  );
}

export default Customer;
