import { useEffect, useRef } from "react"
import { createPortal } from "react-dom"

const Modal = ({children}) =>{
    const elRef = useRef(null) 

    // step 0
    if (!elRef.current) {
        elRef.current = document.createElement("div")
    }

    useEffect(() =>{
        // step 1 mengambil lokasi dom dari element dengan ID modal
        const modalRoot = document.getElementById("modal")
        // step 2 appendChild, menambahkan children yang diisi dengan elRef
        modalRoot.appendChild(elRef.current)
        return () => modalRoot.removeChild(elRef.current)
    }, [])

    return createPortal(<div>{children}</div>, elRef.current)
}

export default Modal