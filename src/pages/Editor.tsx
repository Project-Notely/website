import '../App.css'

import Highlight from '@tiptap/extension-highlight'
import Typography from '@tiptap/extension-typography'
import { EditorContent, useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'

import React from 'react'

export default () => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Highlight,
      Typography,
    ],
    content: `
    <p>
      hawwo
    </p>
    `,
  })

  return (
    <EditorContent editor={editor} />
  )
}
