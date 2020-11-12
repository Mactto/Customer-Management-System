import React from "react";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";

function Customer({ id, image, name, birthday, gender, job }) {
  return (
      <TableRow key={id}>
        <TableCell>{id}</TableCell>
        <TableCell>
          <img src={image} />
        </TableCell>
        <TableCell>{name}</TableCell>
        <TableCell>{birthday}</TableCell>
        <TableCell>{gender}</TableCell>
        <TableCell>{job}</TableCell>
      </TableRow>
  );
}

export default Customer;
