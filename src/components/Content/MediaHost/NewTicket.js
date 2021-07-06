import React, { useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import Breadcrumb from "../Breadcrumb";

import { EditorState, convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
// import { draftToMarkdown } from "markdown-draft-js";
// draftToMarkdown(convertToRaw(editorState.getCurrentContent()))

export default function NewTicket() {
  const breadcrumb_items = [
    {
      text: "MediaHost®",
      route: "/media-host/acerca",
    },
    {
      text: "Soporte",
      route: "/media-host/soporte",
    },
    {
      text: "Crear nuevo Ticket",
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
          <h1 className="title-1 font-2 m-0">Crear nuevo Ticket</h1>
        </div>
      </div>

      <div className="my-data new-ticket-inputs-1">
        <div className="billing-input-grid">
          <div className="d-flex flex-column ">
            <label>Creado por</label>
            <input
              onChange={() => {}}
              type="text"
              name="created_by"
              className="common-input"
            />
          </div>
          <div className="d-flex flex-column">
            <label>Departamento</label>
            <select
              className="common-input"
              name="department"
              value=""
              onChange={() => {}}
            >
              <option value="">Soporte Técnico</option>
            </select>
          </div>
          <div className="d-flex flex-column">
            <label>Prioridad</label>
            <select
              className="common-input"
              name="priority"
              value=""
              onChange={() => {}}
            >
              <option value="">Urgente</option>
            </select>
          </div>
          <div className="d-flex flex-column">
            <label>Categoría</label>
            <select
              className="common-input"
              name="category"
              value=""
              onChange={() => {}}
            >
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
                editorClassName="common-input mb-2 mh-200"
                toolbarClassName="mb-2"
                onEditorStateChange={onEditorStateChange}
                editorState={editorState}
              />
            </div>
          </div>

          <button className="blue-button mt-3"> Crear Ticket</button>
          <button className="bluelight-button ms-4"> Limpiar</button>
        </div>
      </div>
    </div>
  );
}
