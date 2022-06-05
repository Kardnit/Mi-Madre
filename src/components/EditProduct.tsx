import '../styles/EditForm.css'
import { useRef, useState } from 'react'
import { Products } from '../types'
import { deleteProduct, putProduct} from '../api'
import Cookies from 'universal-cookie'


export default function EditProduct(product: Products) {
  
  const [editingState, setEditingState] = useState(false)

  const cookies = new Cookies();

  let nameInput = useRef(null)
  let imageInput = useRef(null)

  async function updateProduct() {
    await putProduct({
        id: product.id,
        name: nameInput.current.value,
        image: imageInput.current.value
    },cookies.get("jwt")
  );
    window.location.reload()
  }

  async function removeProduct() {
    await deleteProduct(
        product, 
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
            <h1 className="edit-form-title">Update product information</h1>

            <div className="edit-form-inputs">
              <div className="edit-form-label">Name</div>
              <input className="edit-form-input" ref={nameInput} defaultValue={product.name} />
            </div>

            <div className="edit-form-inputs">
              <div className="edit-form-label">Image</div>
              <input className="edit-form-input" ref={imageInput} defaultValue={product.image} />
            </div>

            <div className="edit-form-btns">
            <div onClick={() => setEditingState(false)}>
                <button type='button'>Cancel</button>
              </div>
              <div onClick={updateProduct}>
                <button type='button'>Update</button>
              </div>
              <div onClick={removeProduct}>
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
