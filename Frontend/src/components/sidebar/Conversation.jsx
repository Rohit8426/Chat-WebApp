import React from 'react'
import useConversation from '../../zustand/useConversation';

const Conversation = ({Conversation , lastIdx , emoji}) => {
  const {selectedConversation , setSelectedConversation} = useConversation();

  const isSelected =selectedConversation?._id === Conversation._id;
  return (
    <>
    <div className={`flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer ${isSelected ? "bg-sky-500" : ""}`} 
     onClick={() =>setSelectedConversation(Conversation)}></div>
    <div className="avatar online">
  <div className="w-24 rounded-full">
    <img src={Conversation.profilePic} 
    alt='user avatar'/>
  </div>
</div>
<div className='flex flex-col flex-1'>
    <div className='flex gap-3 justify-between'>
        <p className='font-bold text-green-200'>{Conversation.fullName}</p>
        <span className='text-xl'>{emoji}</span>
    </div>
</div>
    {!lastIdx && <div className='divider my-0 py-0 h-1'></div>}
    </>
  )
}

export default Conversation;