import React, { Component } from 'react';
import { Input, Button, Box } from '@chakra-ui/react';
import axios from 'axios';
import { isNull } from '@chakra-ui/utils';
import { signup } from '../actions/auth';

class ImageUpload extends Component {

  state = {
    uploader: '',
    //content: '',
    title:'',
    image: null
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  };

  handleImageChange = (e) => {
    if ([e.target.name] == "image") {
      this.setState({
        image: e.target.files[0]
    });
      console.log(e.target.files[0]);
  };
}

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    let form_data = new FormData();
    form_data.append('image', this.state.image, this.state.image.name);
    form_data.append('uploader', this.state.uploader);
    form_data.append('title', this.state.title);
    //form_data.append('content', this.state.content);
    let url = '/appexample/image/add';  //work for all types of urls
    //let url = 'http://localhost:8000/appexample/calculate';
    axios.post(url, form_data, {
      headers: {
        'content-type': 'multipart/form-data'
      }
    })
        .then(res => {
          console.log(res.data);
        })
        .catch(err => {
          console.log(err);
        })
  };

  render() {
    return (
      <div className='ImageUpload'>
      <Box borderWidth={1} p={4} m={4} maxW="container.lg">
        <form onSubmit={this.handleSubmit}>
          <p>
            <Input type="text" placeholder='Uploader' id='uploader' value={this.state.username} onChange={this.handleChange} required/>
          </p>
          <p>
            <Input type="text" placeholder='Title' id='title' value={this.state.title} onChange={this.handleChange} required/>

          </p>
          <p>
            <Input type="file"
                   name="image"
                   id="post-image"
                   accept="image/png, image/jpeg"  onChange={this.handleImageChange} required/>
          </p>
          <Button colorScheme="red" mt={4} onClick={this.handleSubmit}>Submit</Button>
        </form>
      </Box>
      </div>
    );
  }
}

export {ImageUpload};
//export default ImageUpload; // 2 ways to export a file



// import { Flex, Heading, Input, Button, Box, Text, Spacer, Stack, HStack, VStack, Center, Container } from '@chakra-ui/react';
// import React, { Component } from 'react';
// import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';

// const UploadImage = () => {
//     return (
//         <div>
//             <Heading>this is the calculate page, yahoooo</Heading>
//         </div>
//     )
// }

// export default UploadImage

// import { Input, FormControl, FormLabel, InputGroup, InputLeftElement, FormErrorMessage, Icon } from "@chakra-ui/react";
// import { FiFile } from "react-icons/fi";
// import { useController } from "react-hook-form";
// import { useRef } from "react";

// export const ImageUpload = ({ name, placeholder, acceptedFileTypes, control, children, isRequired = false }) => {
// 	const inputRef = useRef();
// 	const {
// 		field: { ref, onChange, value, ...inputProps },
// 		fieldState: { invalid, isTouched, isDirty },
// 	} = useController({
// 		name,
// 		control,
// 		rules: { required: isRequired },
// 	});

// 	return (
// 		<FormControl isInvalid={invalid} isRequired>
// 			<FormLabel htmlFor="writeUpFile">{children}</FormLabel>
// 			<InputGroup>
// 				<InputLeftElement
// 					pointerEvents="none">
// 					<Icon as={FiFile} />
// 				</InputLeftElement>
// 				<input type='file'
// 					   onChange={(e) => onChange(e.target.files[0])}
// 					   accept={acceptedFileTypes}
// 					   name={name}
// 					   ref={inputRef}
// 					   {...inputProps}
// 					   style={{display: 'none'}} />
// 				<Input
// 					placeholder={placeholder || "Your file ..."}
// 					onClick={() => inputRef.current.click()}
// 					// onChange={(e) => {}}
// 					readOnly={true}
// 					value={value && value.name || ''}
// 				/>
// 			</InputGroup>
// 			<FormErrorMessage>
// 				{invalid}
// 			</FormErrorMessage>
// 		</FormControl>
// 	);
// }

// ImageUpload.defaultProps = {
// 	acceptedFileTypes: '',
// 	allowMultipleFiles: false,
// };

// export default ImageUpload;

// class ImageUpload extends Component{

//   state = {
//   selectedFile: null
//   };

//   onFileChange = event => {
//     this.setState({selectedFile: event.target.files[0]});
//   };

//   onFileUpload = () => {

//   const formData = new FormData();

//   formData.append(
//     "myFile",
//     this.state.selectedFile,
//     this.state.selectedFile.name
//   );

//   console.log(this.state.selectedFile);

//   axios.post("appexample/calculate", formData);

//   };

//   fileData = () => {
//     if (this.state.selectedFile) {
//       return (
//         <div>
//           <h2> File Details: </h2>
//           <p>File Name: {this.state.selectedFile.name}</p>

//           <p>File Type: {this.state.selectedFile.type}</p>

//           <p> Last Modified:{" "}{this.state.selectedFile.lastModifiedDate.toDateString()}</p>

//         </div>
//       );
//     } else {
//       return (
//         <div>
//           <br />
//           <h4>Choose before Pressing the Upload Button</h4>
//         </div>
//       );
//     }
//   };

//   render() {
//     return (
//       <div>
//         <h1>File Upload Using React!</h1>
//         <div>
//           <input type = "file" onChange={this.onFileChange} />
//           <button onClick={this.onFileUpload}> Upload!</button>
//         </div>
//         {this.fileData()}
//       </div>
//     );
//   }

// }

// export default ImageUpload;