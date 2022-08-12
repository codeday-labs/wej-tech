import React, { useState, useEffect, useRef } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { Input, Button, Box, FormControl, Flex, Heading, FormLabel, Text, Progress } from '@chakra-ui/react';
import axios from 'axios';
//import CalculateView from './views";

// Truc's Image Upload:
// https://github.com/codeday-labs/wej-tech/blob/community-edit-1/project/frontend/src/ImageUpload.js

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
   let ca = decodedCookie.split(';');
   for(let i = 0; i <ca.length; i++) {
    let c = ca[i];
   while (c.charAt(0) == ' ') {
      c = c.substring(1);
      }
    if (c.indexOf(name) == 0) {
     return c.substring(name.length, c.length);
     }
   }
  return "";
 }

export const ImageUpload = () => {

  let navigate = useNavigate();

  const [formData, setFormData] = useState({
      uploader: '',
      title:'',
    })
  const [postImage, setPostImage] = useState(null);
  const [isCalculated, setIsCalculated] = useState("false");
  const [isProgressing, setIsProgressing] = useState(false);

  const {uploader, title} = formData;

  const [imgDir, setImgDir] = useState("default_dir")
  const [dataJSON, setDataJSON] = useState({
    "resOxygen" : 1,
    "resCarbon" : 2,
    "milesDriven" : 3,
    "oxygenPerPerson" : 4,
    "waterNeeded" : 5,
    "waterSaved" : 6,
    "pollutantsAbsorbed" : 7,
    "cooling" : 8,
    "homeValue" : 9,

    "imageDirectory" : "default"
  })

  const didMount = useRef(false);

  useEffect (() => {
    // if true that it has been initialized already
    if (didMount.current) {
      console.log("dataJSON has been changed")
      setIsProgressing(false);
      navigate("/analysis", {state: { 
        resOxygen: dataJSON.resOxygen,
        resCarbon: dataJSON.resCarbon,
        milesDriven: dataJSON.milesDriven,
        oxygenPerPerson: dataJSON.oxygenPerPerson,
        waterNeeded: dataJSON.waterNeeded,
        waterSaved: dataJSON.waterSaved,
        pollutantsAbsorbed: dataJSON.pollutantsAbsorbed,
        cooling: dataJSON.cooling,
        homeValue: dataJSON.homeValue,
        imageDirectory: imgDir
      }})
    }
    // if that it's initialized as false (first time)
    else {
      console.log("dataJSON has been initialized")
      didMount.current = true
    }
  }, [dataJSON])

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
    
    //let url = 'http://127.0.0.1:8000/appexample/upload';  //work for all types of urls
    let urlCalculate = 'http://localhost:8000/appexample/calculate';
    let urlUpload = 'http://localhost:8000/appexample/upload';

    axios.post(urlUpload, newFormData, { headers: {'Content-Type': 'multipart/form-data'}})
      .then((res) => {
        console.log(res.data)
        setImgDir(res.data.image_file)
      })

    axios.post(urlCalculate, newFormData, { headers: {'Content-Type': 'multipart/form-data'}})
      .then((res) => {
        const json = res.data
        const parsed_json = JSON.parse(json)
        setDataJSON(parsed_json)
        // setResOxygen(dataJSON.resOxygen)
        // setResCarbon(dataJSON.resCarbon)
        // setMilesDriven(dataJSON.milesDriven)
        // console.log(resOxygen)
      })
      .catch((err) => {
        console.log(err);
      })
    // alert("Your file is being uploaded!")
  };

  // if (isPosted) {
  //   return <Navigate to='/gettestpage' />
  // }

  // if (dataJSON.resOxygen != 1) {
  //   setIsCalculated("true")
  // }

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
        <Box bgColor='gray.400'>
          <Text>{isCalculated}</Text>
          <Heading>Analysis</Heading>
          <Heading size='md'>Oxygen</Heading>
          <Text>{dataJSON.resOxygen}</Text>
          <Heading size='md'>Carbon</Heading>
          <Text>{dataJSON.resCarbon}</Text> 
          <Heading size='md'>Equiv Miles Driven</Heading>
          <Text>{dataJSON.milesDriven}</Text>
          <Heading size='md'>Oxygen Generated Per Person Per Year</Heading>
          <Text>{dataJSON.oxygenPerPerson}</Text>
          <Heading size='md'>Water Needed in Gallons Weekly</Heading>
          <Text>{dataJSON.waterNeeded}</Text>
          <Heading size='md'>Water Saved Daily in Gallons</Heading>
          <Text>{dataJSON.waterSaved}</Text>
          <Heading size='md'>Pollutants Absorbed by Vegetation</Heading>
          <Text>{dataJSON.pollutantsAbsorbed}</Text>
          <Heading size='md'>Amount of Cooling Provided</Heading>
          <Text>{dataJSON.cooling}</Text>
          <Heading size='md'>Home Value Increase in Percentage</Heading>
          <Text>{dataJSON.homeValue}</Text>
          <Progress size ='lg' isIndeterminate={isProgressing} />
        </Box>
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
              onClick={() => setIsProgressing(true)}  
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