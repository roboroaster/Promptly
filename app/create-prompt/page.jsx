"use client"
import { useState } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import Form from '@components/Form';
const CreatePrompt = () => {
    const router = useRouter();
    const {data: session} = useSession();
    const [submitting, setsubmitting] = useState(false);
    const [post, setPost] = useState({
        prompt: '',
        tag: ''
    });

    const createPrompt = async(e) =>{
        e.preventDefault(); // this is used to prevent the degfault behaviour of the form i.e refresh the page
        setsubmitting(true);

        try {
            const response = await fetch('/api/prompt/new',
            {
                method: 'POST',
                body: JSON.stringify({
                    prompt: post.prompt,
                    userId: session?.user.id,
                    tag: post.tag
                })
                })
                if(response.ok) {
                    router.push("/");
                    console.log('success')
            }
        } catch (error) {
            console.log(error);

        }
        finally{
            setsubmitting(false);
        }

    }
  return (
   <Form
   type='Create'
   post = {post}
   setPost={setPost}
   submitting={submitting}
   handleSubmit={createPrompt}

   />
  )
}

export default CreatePrompt

