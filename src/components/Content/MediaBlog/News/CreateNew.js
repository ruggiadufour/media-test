import React, { useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import Breadcrumb from "../../Breadcrumb";

import { EditorState, convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
// import { draftToMarkdown } from "markdown-draft-js";
// draftToMarkdown(convertToRaw(editorState.getCurrentContent()))

export default function CreateNew() {
  console.log("hola");
  const breadcrumb_items = [
    {
      text: "MediaBlog®",
    },
    {
      text: "Novedades",
    },
    {
      text: "Nueva novedad",
    },
  ];

  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const onEditorStateChange = (editorState) => {
    setEditorState(editorState);
  };

  return (
    <div className="content new-ticket">
      <div>
        <Breadcrumb items={breadcrumb_items} />

        <div className="d-flex flex-wrap justify-content-between">
          <h1 className="title-1 font-2 m-0">Nueva novedad</h1>
        </div>
      </div>

      <div className="my-data new-ticket-inputs-1">
        <div className="billing-input-grid">
          <div className="d-flex flex-column ">
            <label>Título</label>
            <input
              onChange={() => {}}
              type="text"
              name="title"
              placeholder="Título"
            />
          </div>
          <div className="d-flex flex-column ">
            <label>Subtítulo</label>
            <input
              onChange={() => {}}
              type="text"
              name="subtitle"
              placeholder="Subtítulo"
            />
          </div>
          <div className="d-flex flex-column ">
            <label>Fecha de la nota</label>
            <input onChange={() => {}} type="date" name="date" />
          </div>
          <div className="d-flex flex-column">
            <label>Imagen de portada</label>
            <input onChange={() => {}} type="file" name="image" />
          </div>
          <div className="d-flex flex-column ">
            <label>Pié de imagen principal</label>
            <input onChange={() => {}} type="text" name="image_footh" />
          </div>
          <div className="d-flex flex-column">
            <label>Filtros</label>
            <div className="grid-checkboxes">
              <div className="d-flex">
                <input type="checkbox" className="checkbox me-1" />
                <label>Arquitectura sustentable</label>
              </div>
              <div className="d-flex">
                <input type="checkbox" className="checkbox me-1" />
                <label>Apto Crédito</label>
              </div>
              <div className="d-flex">
                <input type="checkbox" className="checkbox me-1" />
                <label>Departamentos</label>
              </div>
              <div className="d-flex">
                <input type="checkbox" className="checkbox me-1" />
                <label>Desarrollos</label>
              </div>
              <div className="d-flex">
                <input type="checkbox" className="checkbox me-1" />
                <label>Emprendimientos</label>
              </div>
              <div className="d-flex">
                <input type="checkbox" className="checkbox me-1" />
                <label>Multiuso</label>
              </div>
            </div>
          </div>
          <div className="d-flex flex-column">
            <label>Categoría</label>
            <select name="category" value="" onChange={() => {}}>
              <option value="">Consulta sobre plan hosting</option>
            </select>
          </div>
        </div>

        <div className="new-ticket-inputs-2">
          <div className="d-flex flex-column mt-3 mb-4">
            <label>Mensaje</label>
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
                editorClassName="common-input mb-2"
                toolbarClassName="mb-2"
                onEditorStateChange={onEditorStateChange}
                editorState={editorState}
              />
            </div>
          </div>

          <label>Activo</label>
          <div>
            <span>Si</span>
            <span>No</span>
          </div>

          <button className="blue-button mt-3">Guardar</button>
        </div>
      </div>
    </div>
  );
}
