"use client"
import { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter,useSearchParams } from 'next/navigation'

import Form from '@components/Form';

const EditPrompt = () => {
    const router = useRouter();
    const {data: session} = useSession();
    const searchParams = useSearchParams();
    const promptId = searchParams.get('id')
    const [submitting, setsubmitting] = useState(false);
    const [post, setPost] = useState({
        prompt: '',
        tag: ''
    });


    useEffect(()=>{
        const getPromptDetails = async()=> {
            const response = await fetch(`/api/prompt/${promptId}`);
            const data = await response.json();

            setPost({
                prompt: data.prompt,
                tag: data.tag
            })
        }
        if(promptId) getPromptDetails();

    },[promptId])


    const updatePrompt = async(e) =>{
        e.preventDefault(); // this is used to prevent the degfault behaviour of the form i.e refresh the page
        setsubmitting(true);
        if(!promptId) return alert('PromptId not found');
        try {
            const response = await fetch(`/api/prompt/${promptId}`,
            {
                method: 'PATCH',
                body: JSON.stringify({
                    prompt: post.prompt,
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
   type='Edit'
   post = {post}
   setPost={setPost}
   submitting={submitting}
   handleSubmit={updatePrompt}

   />
  )
}

export default EditPrompt

