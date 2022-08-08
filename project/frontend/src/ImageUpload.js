import React, { useState } from 'react';
import { Input, Button, Box, FormControl, Flex, Heading, FormLabel, Text } from '@chakra-ui/react';
import axios from 'axios';
//import CalculateView from './views";

export const ImageUpload = () => {
  const [formData, setFormData] = useState({
    uploader: '',
    title:'',

  })
  const [postImage, setPostImage] = useState(null);

  const {uploader, title} = formData;


  const handleChange = e => setFormData ({ ...formData, [e.target.name]: e.target.value})

  const handleImageChange = e => {
    if ([e.target.name] == 'image') {  
      setPostImage(e.target.files[0]);
      // console.log(e.target.files);
    };
  }

  const handleSubmit = e => {
    
    e.preventDefault();
    // console.log(this.state);
    let newFormData = new FormData();
    newFormData.append('title', formData.title);
    newFormData.append('image_file', postImage);
    newFormData.append('uploader', formData.uploader);
    
    let url = 'http://127.0.0.1:8000/appexample/upload';  //work for all types of urls
    // let url = 'http://localhost:8000/appexample/calculate';
    // axios.post(url, newFormData, { headers: {'Content-Type': 'multipart/form-data'}})
    axios.post(url, newFormData, { headers: {'Content-Type': 'multipart/form-data'}})
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        })
    
    alert("Your file is being uploaded!")
  };

  // render() {
  return (
    <Flex
    
      height='100vh'
      alignItems='center'
      justifyContent='center'
      bgImage="url(https://i.redd.it/5oxq3tjlfo821.jpg)"
      bgPosition="center"
      bgRepeat="no-repeat"
    >
      <Flex direction='column' background='#EDF2F7' p={12} rounded={6}>
        <Heading>Image Upload</Heading>
        <Text mb={3}>Upload Your Image Here</Text>
        <form onSubmit={e => handleSubmit(e)}> 
          <FormControl>
            <FormLabel mb={3}>Uploader</FormLabel>
            <Input

              type='text'
              name='uploader'
              value={uploader}
              placeholder='Uploader'
              onChange={e => handleChange(e)}
              required
              mb={3}
              variant='filled'
              
            />
          </FormControl>
          <FormControl>
            <FormLabel mb={3}>Title</FormLabel>
              <Input
                type='text'
                name='title'
                value={title}
                placeholder='Title'
                onChange={e => handleChange(e)}
                required
                mb={3}
                variant='filled'
                />
          </FormControl>
          <FormControl>
            <FormLabel mb={3}>Image</FormLabel>
              <Input
                accept="image/*"
                id="image"
                onChange={e => handleImageChange(e)}
                name="image"
                type="file"
              />
          </FormControl>
          <Button
            type='submit'
            colorScheme='whatsapp'
             mb={6}
          >
          Submit
          </Button>
        </form>
      </Flex> 
    </Flex>              
    
  );
};

export default ImageUpload