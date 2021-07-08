import React, { useState, useRef } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import Breadcrumb from "../../Breadcrumb";
import Wrapper_1 from "../../Wrapper_1";
import { EditorState, convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
// import { draftToMarkdown } from "markdown-draft-js";
// draftToMarkdown(convertToRaw(editorState.getCurrentContent()))

const breadcrumbItems = [
  {
    text: "MediaBlog®",
  },
  {
    text: "Novedades",
    route: "/media-blog/novedades",
  },
  {
    text: "Nueva novedad",
  },
];

// Mock data
const filters = [
  "Arquitectura sustentable",
  "Apto Crédito",
  "Departamentos",
  "Desarrollos",
  "Emprendimientos",
  "Multiuso",
];
export default function CreateNew() {
  const inputImage = useRef(null);
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const onEditorStateChange = (editorState) => {
    setEditorState(editorState);
  };
  const [active, setActive] = useState(false);

  function getImageFile() {
    inputImage.current.click();
  }

  return (
    <Wrapper_1 breadcrumbItems={breadcrumbItems} title="Nueva novedad">
      <div className="content-mobile-padding">
        <div className="mb-input-grid">
          <div className="d-flex flex-column ">
            <label className="font-1">Título</label>
            <input
              className="common-input"
              onChange={() => {}}
              type="text"
              name="title"
              placeholder="Título"
            />
          </div>
          <div className="d-flex flex-column ">
            <label className="font-1">Subtítulo</label>
            <input
              className="common-input"
              onChange={() => {}}
              type="text"
              name="subtitle"
              placeholder="Subtítulo"
            />
          </div>
          <div className="d-flex flex-column ">
            <label className="font-1">Fecha de la nota</label>
            <input
              className="common-input w-100p"
              onChange={() => {}}
              type="date"
              name="date"
            />
          </div>
          <div className="d-flex flex-column">
            <label className="font-1">Imagen de portada</label>
            <button
              className="image-picker-button small-font"
              onClick={getImageFile}
            >
              AGREGAR IMAGEN (JPG, PNG 1200x900)
            </button>
            <input type="file" ref={inputImage} className="d-none" />
          </div>
          <div className="d-flex flex-column ">
            <label className="font-1">Pié de imagen principal</label>
            <input
              className="common-input"
              onChange={() => {}}
              type="text"
              name="image_footh"
            />
          </div>
          <div className="d-flex flex-column">
            <label className="font-1">Filtros</label>
            <div className="grid-checkboxes">
              {filters.map((filter, i) => (
                <Checkbox key={i} text={filter} />
              ))}
            </div>
          </div>

          <div className="d-flex flex-column mt-3 mb-4">
            <label className="font-1">Mensaje</label>
            <div>
              {/* <CKEditor
                editor={ClassicEditor}
                data=""
                onReady={(editor) => {}}
                onChange={(event, editor) => {
                  const data = editor.getData();
                }}
              /> */}

              <Editor
                wrapperClassName="common-input pt-3"
                editorClassName="common-input mb-2 mh-200"
                toolbarClassName="mb-2"
                onEditorStateChange={onEditorStateChange}
                editorState={editorState}
              />
            </div>
          </div>
        </div>

        <div className="new-ticket-inputs-2">
          <label className="font-1">Activo</label>
          <div className="mt-2 mb-4 d-flex">
            <span
              className={`font-1 small-font active-button-${active ? "black" : "gray"}`}
              onClick={() => {
                setActive((a) => true);
              }}
            >
              Si
            </span>
            <span
              className={`font-1 small-font active-button-${active ? "gray" : "black"}`}
              onClick={() => {
                setActive((a) => false);
              }}
            >
              No
            </span>
          </div>

          <button className="blue-button mt-3">Guardar</button>
        </div>
      </div>
    </Wrapper_1>
  );
}

function Checkbox({ is = false, text }) {
  const [checked, setChecked] = useState(is);

  return (
    <div className="d-flex">
      <input
        type="checkbox"
        defaultChecked={checked}
        onChange={() => setChecked(!checked)}
        className="checkbox me-1"
      />
      <label className={`small-font  ${checked ? "font-0" : "font-1"}`}>
        {text}
      </label>
    </div>
  );
}
