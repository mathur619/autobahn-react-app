import React from "react";
import MemoDeleteSVG from "../SVGIcons/DeleteSVG";
import MemoEditSVG from "../SVGIcons/EditSVG";
import * as S from "./styles";
import { toast } from "react-toastify";

export interface IActionBar {
  id: number;
  handleLoading: (bool: boolean) => void;
  handleShowUpdateOverlay: (bool: boolean) => void;
}

enum ActionTypes {
  delete = "DELETE",
  edit = "EDIT",
}

const handleDeletePost = async (id: number) => {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`,
      {
        method: "DELETE",
      }
    );
    if (!response.ok) {
      throw new Error(
        `This is an HTTP error: The status is ${response.status}`
      );
    }
    const actualData = await response.json();
    toast.success(`Post number - ${id} deleted!`);
  } catch (err) {
    if (err instanceof Error) {
      toast.error(err.message);
    }
  }
};

const handleEditPost = async (
  id: number,
  handleShowUpdateOverlay: (bool: boolean) => void
) => {
  handleShowUpdateOverlay(true);
};

const handleActionClick = async (
  e: any,
  id: number,
  handleLoading: (bool: boolean) => void,
  handleShowUpdateOverlay: (bool: boolean) => void
) => {
  if (e?.target?.attributes?.["data-action"]?.value) {
    handleLoading(true);

    switch (e.target.attributes["data-action"].value) {
      case ActionTypes.delete: {
        await handleDeletePost(id);
        break;
      }
      case ActionTypes.edit: {
        await handleEditPost(id, handleShowUpdateOverlay);
        break;
      }
      default:
        console.log("default");
    }

    handleLoading(false);
  }
};

const ActionBar: React.FC<IActionBar> = ({
  id,
  handleLoading,
  handleShowUpdateOverlay,
}) => {
  return (
    <S.ActionBarContainer
      onClick={(e) =>
        handleActionClick(e, id, handleLoading, handleShowUpdateOverlay)
      }
    >
      <MemoDeleteSVG data-action={ActionTypes.delete} fontSize="1.5rem" />
      <MemoEditSVG data-action={ActionTypes.edit} fontSize="1.5rem" />
    </S.ActionBarContainer>
  );
};

export default ActionBar;
