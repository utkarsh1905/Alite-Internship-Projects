/* eslint-disable no-unreachable */
import { redirect } from "react-router-dom";
import { deleteContact } from "../contacts";

export async function action({ params }) {
  await deleteContact(params.contactId);
  return redirect("/");
  throw new Error("oh dang!");
}
