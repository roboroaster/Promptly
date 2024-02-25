import PromptCard from "./PromptCard"
import PromptCardAlt from "./PromptCard2"

const Profile = ({ name, desc , data, handleEdit,handleDelete}) => {
  return (
    <section className="w-full">
      <h1 className="head_text text-left"><span className='blue_gradient'>{name} Profile</span></h1>
      <p className="desc text-left">{desc}</p>

      <div className='mt-10 prompt_layout'>
        {data.map((post)=> (
          <PromptCardAlt
            key = {post._id}
            post = {post}
            handleEdit = {()=> handleEdit && handleEdit(post)}
            handleDelete = {()=> handleDelete && handleDelete(post)}
          />
          // <p>{post.creator.username}</p>
        ))}
      </div>

    </section>
  )
}

export default Profile
