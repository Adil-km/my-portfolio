import { useCallback, useEffect, useRef, useState } from 'react';
import { Button } from "../Button"
import '../../App.css';

import api from '../axiosConfig'; 
import { useNavigate } from 'react-router-dom';

export default function AddBlog () {
  
  const url = "/admin/add"
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [coverImg, setCoverImg] = useState(undefined);
  const [body, setBody] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const textareaRef = useRef(null);

  // Ref to track and restore cursor position after state update (critical for UX)
  const cursorPositionRef = useRef(null); 

  const checkAuthStatus = useCallback(async () => {
    try {
      await api.get(url);
    } catch (error) {
      console.log(error);
      navigate('/admin/auth'); 
    }
  }, [navigate]);
  
  useEffect(() => {
    checkAuthStatus();
  }, [checkAuthStatus]); 

  // --- RESTORE CURSOR EFFECT ---
  // Runs after 'body' state changes to put the cursor back where it should be
  useEffect(() => {
      const position = cursorPositionRef.current;
      const textarea = textareaRef.current;
      
      if (textarea && position !== null) {
          // The timeout is necessary to ensure the DOM is fully updated
          // before trying to set the selection range.
          setTimeout(() => {
              textarea.focus();
              textarea.setSelectionRange(position, position);
              cursorPositionRef.current = null; // Reset the ref
          }, 0);
      }
  }, [body]);

  const authFetch = async()=>{
    setIsSubmitting(true);
    try {
      const response = await api.post(url, {title:title, body:body, coverImg:coverImg})
      console.log(response);
      navigate('/admin/posts')
    } catch (error) {
      console.log("Login Error: ", error.response);
      navigate('/admin/auth'); 
    } finally {
      setIsSubmitting(false);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    authFetch()
  };

  const addTag = (tag, closingTag = true) => {
    const textarea = textareaRef.current;
    if (!textarea) return;
    
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const currentText = body;
    const selectedText = currentText.substring(start, end);

    let fullTag = "";
    let newText = ""
    if(closingTag){
      fullTag = `<${tag}>${selectedText}</${tag}>`
      newText = currentText.substring(0, start) +    
      fullTag +
      currentText.substring(end);
    }else{
      fullTag = `<${tag}/>`
      newText = currentText.substring(0, start) + fullTag + currentText.substring(end);
      console.log(tag);
      
      
    }
    
    // Calculate new cursor position BEFORE setting state
    if (start === end) {
        // If nothing selected, cursor goes between opening and closing tag
        cursorPositionRef.current = start + tag.length + (closingTag ? 2 : 3); // +2 accounts for '<' and '>'
    } else {
        // If text was selected, cursor goes to the end of the new tagged section
        cursorPositionRef.current = start + fullTag.length;
    }
    
    setBody(newText);
  };

const shortcutMap = {
    'b': 'strong',
    'i': 'em',
    'q': 'blockquote',
};

const keyDown = (event) => {
    const textarea = textareaRef.current;
    if (!textarea) return;

    // Enter Key (Line Break)
    if (event.key === "Enter" && !event.shiftKey) {
        event.preventDefault();
        addTag('br', false);
        return;
    }

    // Ctrl/Cmd Shortcuts
    if (event.ctrlKey || event.metaKey) {
        const key = event.key.toLowerCase();
        
        // Heading tags (1-6)
        if (key >= '1' && key <= '6') {
            event.preventDefault();
            addTag(`h${key}`);
            return;
        }
        // Semantic/other Tags
        const tag = shortcutMap[key];
        if (tag) {
            event.preventDefault();
            addTag(tag);
            return;
        }
    }
    
}
  
  return (
    <>
      <div className="form-container">
        <div className="form-back-btn">
          <Button className="btn" text="Go back" link="/" />
        </div>
        <h1>Add post</h1>

          <div className="toolBar">
            <Button text="Paragraph" onMouseDown={(e) => { e.preventDefault(); addTag('p'); }} />
            <Button text="Bold" onMouseDown={(e) => { e.preventDefault(); addTag('strong'); }} />
            <Button text="Italic" onMouseDown={(e) => { e.preventDefault(); addTag('em'); }} />
            <Button text="H1" onMouseDown={(e) => { e.preventDefault(); addTag('h1'); }} />
            <Button text="Blockquote" onMouseDown={(e) => { e.preventDefault(); addTag('blockquote'); }} />
          </div>

        <form onSubmit={handleSubmit}>
          <input type="text" name="title" className="formInput" placeholder="Enter the title for the blog post" required value={title} onChange={(e)=>setTitle(e.target.value)} />
          <input type="text" name="title" className="formInput" placeholder="Enter the url for the cover image"  value={coverImg} onChange={(e)=>setCoverImg(e.target.value)} />

          <textarea 
            ref={textareaRef} 
            onKeyDown={keyDown} 
            rows={4} 
            name="body" 
            className="formInput" 
            placeholder="Enter your blog content" 
            required 
            value={body} 
            onChange={(e)=>setBody(e.target.value)} 
          />

          <div className="formBtnDiv">
            <input 
              type="submit" 
              className="btn-glow" 
              value={isSubmitting ? "Posting..." : "Post blog"} 
              disabled={isSubmitting} 
            />
          </div>
        </form>
      </div>
    </>
  );
};