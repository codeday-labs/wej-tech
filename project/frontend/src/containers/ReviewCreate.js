import React, { Fragment } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { connect }  from 'react-redux';
import { login } from '../actions/auth';
import axios from 'axios';
import { FaBold, FaItalic, FaStrikethrough, FaCode, FaParagraph, FaFileCode, FaQuoteLeft, FaUndo, FaRedo } from 'react-icons/fa';

import {
  Heading, Input, Button, Text, Flex, Box,
  FormControl, FormLabel, FormErrorMessage, FormHelperText, Textarea, VStack, HStack,
} from '@chakra-ui/react'

import { EditorContent, useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'

export const ReviewCreate = ({ editor }) => {
  if (!editor) {
    return null
  }

  return (
    <>
      <Button
        onClick={() => editor.chain().focus().toggleBold().run()}
        className={editor.isActive('bold') ? 'is-active' : ''}
      >
        <FaBold />
      </Button>
      <Button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        className={editor.isActive('italic') ? 'is-active' : ''}
      >
        <FaItalic />
      </Button>
      <Button
        onClick={() => editor.chain().focus().toggleStrike().run()}
        className={editor.isActive('strike') ? 'is-active' : ''}
      >
        <FaStrikethrough />
      </Button>
      <Button
        onClick={() => editor.chain().focus().toggleCode().run()}
        className={editor.isActive('code') ? 'is-active' : ''}
      >
        <FaCode />
      </Button>
      {/* <Button onClick={() => editor.chain().focus().unsetAllMarks().run()}>
        clear marks
      </Button> */}
      {/* <Button onClick={() => editor.chain().focus().clearNodes().run()}>
        clear nodes
      </Button> */}
      <Button
        onClick={() => editor.chain().focus().setParagraph().run()}
        className={editor.isActive('paragraph') ? 'is-active' : ''}
      >
        <FaParagraph />
      </Button>
      {/* <Button
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        className={editor.isActive('heading', { level: 1 }) ? 'is-active' : ''}
      >
        h1
      </Button>
      <Button
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        className={editor.isActive('heading', { level: 2 }) ? 'is-active' : ''}
      >
        h2
      </Button>
      <Button
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
        className={editor.isActive('heading', { level: 3 }) ? 'is-active' : ''}
      >
        h3
      </Button>
      <Button
        onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}
        className={editor.isActive('heading', { level: 4 }) ? 'is-active' : ''}
      >
        h4
      </Button>
      <Button
        onClick={() => editor.chain().focus().toggleHeading({ level: 5 }).run()}
        className={editor.isActive('heading', { level: 5 }) ? 'is-active' : ''}
      >
        h5
      </Button>
      <Button
        onClick={() => editor.chain().focus().toggleHeading({ level: 6 }).run()}
        className={editor.isActive('heading', { level: 6 }) ? 'is-active' : ''}
      >
        h6
      </Button> */}
      {/* <Button
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={editor.isActive('bulletList') ? 'is-active' : ''}
      >
        bullet list
      </Button>
      <Button
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={editor.isActive('orderedList') ? 'is-active' : ''}
      >
        ordered list
      </Button> */}
      <Button
        onClick={() => editor.chain().focus().toggleCodeBlock().run()}
        className={editor.isActive('codeBlock') ? 'is-active' : ''}
      >
        <FaFileCode />
      </Button>
      <Button
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        className={editor.isActive('blockquote') ? 'is-active' : ''}
      >
        <FaQuoteLeft />
      </Button>
      {/* <Button onClick={() => editor.chain().focus().setHorizontalRule().run()}>
        horizontal rule
      </Button>
      <Button onClick={() => editor.chain().focus().setHardBreak().run()}>
        hard break
      </Button> */}
      <Button onClick={() => editor.chain().focus().undo().run()}>
        <FaUndo />
      </Button>
      <Button onClick={() => editor.chain().focus().redo().run()}>
        <FaRedo />
      </Button>

      <Button colorScheme='teal'>Submit</Button>

    </>
  )
}

export default () => {
  const editor = useEditor({
    extensions: [
      StarterKit,
    ],
    content: ``,
  })

  // return (
  //   <Flex
  //       height='100vh'
  //       alignItems='center'
  //       justifyContent='center'
  //       bgImage="url(https://i.redd.it/5oxq3tjlfo821.jpg)"
  //       bgPosition="center"
  //       bgRepeat="no-repeat"
  //       >
  //           <Flex direction='column' background='#EDF2F7' p={12} rounded={6}>
  //               <ReviewCreate editor={editor} />
  //               <EditorContent editor={editor} />
  //           </Flex>
  //       </Flex>
  // )
  return (
    <Box
      borderRadius='5px'
      border='1px solid white'
    >
      <ReviewCreate editor={editor} />
      <Box 
        bgColor='white'
        border='1px solid black'
        borderRadius='10px'
        margin='2rem'
      >
        <Box
          margin='1.5rem'
        >
          <EditorContent editor={editor} />
        </Box>
      </Box>
    </Box>
  )
}