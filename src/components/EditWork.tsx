import '../styles/EditForm.css'
import { useRef, useState } from 'react'
import { Works } from '../types'
import { deleteWork, putWork} from '../api'
import Cookies from 'universal-cookie'


export default function EditWork(work: Works) {
  
  const [editingState, setEditingState] = useState(false)

  const cookies = new Cookies();

  let nameInput = useRef(null)
  let imageInput = useRef(null)

  async function updateWork() {
    await putWork({
        id: work.id,
        name: nameInput.current.value,
        image: imageInput.current.value
    },cookies.get("jwt")
  );
    window.location.reload()
  }

  async function removeWork() {
    await deleteWork(
        work, 
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
            <h1 className="edit-form-title">Update work information</h1>

            <div className="edit-form-inputs">
              <div className="edit-form-label">Name</div>
              <input className="edit-form-input" ref={nameInput} defaultValue={work.name} />
            </div>

            <div className="edit-form-inputs">
              <div className="edit-form-label">Image</div>
              <input className="edit-form-input" ref={imageInput} defaultValue={work.image} />
            </div>

            <div className="edit-form-btns">
            <div onClick={() => setEditingState(false)}>
                <button type='button'>Cancel</button>
              </div>
              <div onClick={updateWork}>
                <button type='button'>Update</button>
              </div>
              <div onClick={removeWork}>
                <button type='button'>Delete</button>
              </div>
            </div>
          </div>
          <div onClick={() => setEditingState(false)} className="edit-form-block" />
        </form>
      ) : null}
    </>
  )
}
