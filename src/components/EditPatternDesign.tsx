import '../styles/EditForm.css'
import { useRef, useState } from 'react'
import { PatternDesigns } from '../types'
import { deletePatternDesign, putPatternDesign} from '../api'
import Cookies from 'universal-cookie'


export default function EditPatternDesign(patterndesign: PatternDesigns) {
  
  const [editingState, setEditingState] = useState(false)

  const cookies = new Cookies();

  let nameInput = useRef(null)
  let imageInput = useRef(null)

  async function updatePatternDesign() {
    await putPatternDesign({
        id: patterndesign.id,
        name: nameInput.current.value,
        image: imageInput.current.value
    },cookies.get("jwt")
  );
    window.location.reload()
  }

  async function removePatternDesign() {
    await deletePatternDesign(
        patterndesign, 
        cookies.get("jwt")
    );
    window.location.reload()
  }

  return (
    <>
      <p onClick={() => setEditingState(true)}>
        Edit
      </p>

      {editingState ? (
        <form>
          <div className="edit-form">
            <h1 className="edit-form-title">Update pattern design information</h1>

            <div className="edit-form-inputs">
              <div className="edit-form-label">Name</div>
              <input className="edit-form-input" ref={nameInput} defaultValue={patterndesign.name} />
            </div>

            <div className="edit-form-inputs">
              <div className="edit-form-label">Image</div>
              <input className="edit-form-input" ref={imageInput} defaultValue={patterndesign.image} />
            </div>

            <div className="edit-form-btns">
            <div onClick={() => setEditingState(false)}>
                <button>Cancel</button>
              </div>
              <div onClick={updatePatternDesign}>
                <button>Update</button>
              </div>
              <div onClick={removePatternDesign}>
                <button>Delete</button>
              </div>
            </div>
          </div>
          <div onClick={() => setEditingState(false)} className="edit-form-block" />
        </form>
      ) : null}
    </>
  )
}
