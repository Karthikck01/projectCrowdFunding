import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { ethers } from 'ethers';
import { useStateContext } from '../context';
import { CustomButton, FormField, Loader } from '../components';
import { checkIfImage } from '../utils';

const CreateCampaign = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const { createCampaign } = useStateContext();
  const [form, setForm] = useState({
    ownername: '',
    title: '',
    description: '',
    doclink: '',
    target: '',
    deadline: '',
    image: ''
  });

  const handleFormFieldChange = (fieldName, e) => {
    setForm({ ...form, [fieldName]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    checkIfImage(form.image, async (exists) => {
      if(exists) {
        setIsLoading(true)
        await createCampaign({ ...form, target: ethers.utils.parseUnits(form.target, 18)})
        setIsLoading(false);
        navigate('/home');
      } else {
        alert('Provide valid image URL')
        setForm({ ...form, image: '' });
      }
    })
  }

  return (
    <div>
      {isLoading && <Loader />}
      <form onSubmit={handleSubmit} >
        <h1 className="heading">Start a Campaign</h1>
          <FormField
            labelName="Your Name *"
            placeholder="yourname"
            inputType="text"
            value={form.ownername}
            handleChange={(e) => handleFormFieldChange('ownername', e)}
          />
          <FormField
            labelName="Campaign Title *"
            placeholder="Write a title"
            inputType="text"
            value={form.title}
            handleChange={(e) => handleFormFieldChange('title', e)}
          />
          <FormField
            isTextArea
            labelName="Story *"
            placeholder="Write your story"
            value={form.description}
            handleChange={(e) => handleFormFieldChange('description', e)}
          />
          <FormField
            labelName="Documents Web Link *"
            placeholder="link of document"
            inputType="text"
            value={form.doclink}
            handleChange={(e) => handleFormFieldChange('doclink', e)}
          />
          <FormField
            labelName="Goal *"
            placeholder="ETH 0.50"
            inputType="text"
            value={form.target}
            handleChange={(e) => handleFormFieldChange('target', e)}
          />
          <FormField
            labelName="End Date *"
            placeholder="End Date"
            inputType="date"
            value={form.deadline}
            handleChange={(e) => handleFormFieldChange('deadline', e)}
          />
        <FormField
            labelName="Campaign image *"
            placeholder="Place image URL of your campaign"
            inputType="url"
            value={form.image}
            handleChange={(e) => handleFormFieldChange('image', e)}
          />
          <div className="justify-evenly">
            <CustomButton
              btnType="submit"
              title="Submit new campaign"
              styles="bt-bg"
            />
          </div>
      </form>
      {console.log(form)}
    </div>
  )
}
export default CreateCampaign
