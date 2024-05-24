import { RiDeleteBin5Fill } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import { GrStatusGood } from "react-icons/gr";
import { FaRegCalendar } from "react-icons/fa6";
import { CiStickyNote, CiUser, CiNoWaitingSign } from "react-icons/ci";
import { IoSendSharp } from "react-icons/io5";
import { MdEdit } from "react-icons/md";
import { useState } from "react";
import usersData from "./data";

const Card = () => {
  const [status, setStatus] = useState(false);
  const [users, setUsers] = useState(usersData);
  const [currentUser, setCurrentUser] = useState(users[0]);
  const [currentUserId, setCurrentUserId] = useState(users[0].id);
  const [commentInput, setCommentInput] = useState("");
  const [commentEditInput, setCommentEditInput] = useState("");
  const [comments, setComments] = useState([]);
  const [editComment, setEditComment] = useState({ id: "", isEdit: false });

  const handleUserSelect = (e) => {
    const id = e.target.value;
    setCurrentUserId(id);
    const user = users.filter((e) => e.id == id);
    setCurrentUser(user[0]);
  };

  const handleAddComment = () => {
    if (commentInput === "") return;
    const user = users.find((e) => e.id == currentUserId);
    const newComment = {
      id: Math.floor(Math.random() * 99999),
      userId: currentUserId,
      name: user.name,
      profile: user.profile,
      text: commentInput,
    };
    setComments([...comments, newComment]);
    setCommentInput("");
    setEditComment({ id: "", isEdit: false });
  };

  const handleDelete = (id) => {
    setComments(comments.filter((item) => item.id !== id));
  };

  const handleEdit = (id) => {
    setEditComment({ id: id, isEdit: true });
  };

  const handleSaveComment = (id) => {
    const comment = comments.find((e) => e.id === id);
    comment.text = commentEditInput;
    setEditComment({ id: "", isEdit: false });
  };

  const currentDate = new Date();
  const options = {
    month: "long",
    day: "numeric",
    year: "numeric",
  };
  const formattedDate = currentDate.toLocaleString("en-US", options);

  return (
    <div
      className="max-w-[340px] mx-auto border-gray-300 border-2
     rounded-2xl  py-4 px-5 bg-white"
    >
      <div className="flex justify-between text-md my-2 px-2">
        {status ? (
          <GrStatusGood color="#ed7876" className="cursor-pointer" />
        ) : (
          <CiNoWaitingSign color="#ed7876" className="cursor-pointer" />
        )}
        <div className="flex gap-3">
          <RiDeleteBin5Fill color="#ed7876" className="cursor-pointer" />
          <RxCross2 color="#f49796" className="cursor-pointer" />
        </div>
      </div>
      <div className="flex flex-col gap-[5px] mt-4 ">
        <input
          type="text"
          className="border-gray-300 border-2 rounded-full text-[#ea4d4d] text-xl outline-none px-3 py-2 font-bold placeholder:text-2xl"
          placeholder="assignment name..."
        />
        <div className="flex items-center gap-3 border-gray-300 border-2 rounded-full text-sm outline-none px-5 py-2 font-bold">
          <FaRegCalendar color="#c8c8c8" className="cursor-pointer" />
          <span>{formattedDate} at 8:00-10:00 AM</span>
        </div>
      </div>
      <div className="mt-5 border-b-2">
        {/* assign user */}
        <div className="text-gray-600 italic flex justify-between items-center">
          <div className="flex items-center text-lg gap-2 font-semibold">
            <CiUser color="#ed7876" />
            <span>Assign to:</span>
          </div>
          <div className="flex border-gray-300 border-2 rounded-full px-2 py-1">
            <img
              src={currentUser.profile}
              className="w-8 h-8 rounded-full mr-1"
            />
            <select
              name="ashutosh"
              className="cursor-pointer outline-none text-green-700 font-bold"
              onChange={handleUserSelect}
            >
              {users.map((user) => {
                return (
                  <option key={user.id} value={user.id}>
                    {user.name}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
        {/* note */}
        <div className="text-gray-600 italic flex justify-between items-center my-4 ">
          <div className="flex items-center text-lg gap-2 font-semibold">
            <CiStickyNote color="#ed7876" className="" />
            <span>Note:</span>
          </div>
          <textarea
            cols="22"
            rows="2"
            className="border-gray-300 border-2 rounded-lg text-lg px-2 outline-none"
          ></textarea>
        </div>
        <button
          className="w-full bg-red-500 rounded-lg text-white hover:bg-red-700 py-1 uppercase mb-3"
          onClick={() => setStatus(!status)}
        >
          {status ? "Remove" : "Assign"}
        </button>
      </div>
      {/* Comments */}
      <div className="my-4">
        <h3 className="text-gray-500 italic font-bold text-2xl">Comments</h3>
        <div className="">
          {/* initial comments */}

          {comments.map((comment) => {
            return (
              <div className="flex justify-between gap-2 mt-3" key={comment.id}>
                <img
                  src={comment.profile}
                  className="w-8 h-8 rounded-full mr-1 mt-1"
                />
                <div className="flex-1">
                  <h4 className="text-green-700 text-sm font-bold">
                    {comment.name}
                  </h4>
                  {editComment.isEdit && editComment.id === comment.id ? (
                    <div className="flex flex-col ">
                      <textarea
                        cols="22"
                        rows="1"
                        className="border-gray-300 border-2 rounded-lg text-lg px-2 outline-none"
                        onChange={(e) => setCommentEditInput(e.target.value)}
                      ></textarea>
                      <div>
                        <button
                          className="bg-red-500 text-white py-1 px-2 rounded-md mt-[3px] text-sm hover:bg-red-600 mr-1"
                          onClick={() => handleSaveComment(editComment.id)}
                        >
                          Save
                        </button>
                        <button
                          className="bg-red-500 text-white py-1 px-2 rounded-md mt-[3px] text-sm hover:bg-red-600"
                          onClick={() =>
                            setEditComment({ id: "", isEdit: false })
                          }
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  ) : (
                    <>
                      <p className="text-gray-600 text-sm">{comment.text}</p>
                      <div className="flex text-lg items-center gap-2 mt-[2px]">
                        {}
                        {comment.userId == currentUserId && (
                          <>
                            <RiDeleteBin5Fill
                              color="#ed7876"
                              className="cursor-pointer"
                              onClick={() => handleDelete(comment.id)}
                            />
                            <MdEdit
                              color="#ed7876"
                              className="cursor-pointer"
                              onClick={() => handleEdit(comment.id)}
                            />
                          </>
                        )}
                      </div>
                    </>
                  )}
                </div>
              </div>
            );
          })}

          <div className="flex justify-between items-center gap-2 mt-4">
            <img
              src={currentUser.profile}
              className="w-8 h-8 rounded-full mr-1"
            />
            <div className="flex justify-between items-center border-gray-300 border-2 rounded-full py-1 px-2 flex-1">
              <input
                type="text"
                className="outline-none w-[80%] text-gray-700"
                placeholder="Write comment..."
                value={commentInput}
                onChange={(e) => setCommentInput(e.target.value)}
              />
              <IoSendSharp
                color="#ed7876 "
                className="cursor-pointer"
                onClick={handleAddComment}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
