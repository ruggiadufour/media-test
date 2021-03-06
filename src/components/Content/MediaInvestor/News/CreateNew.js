import React, { useState, useRef } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import Breadcrumb from "../../Breadcrumb";
import Wrapper_2 from "../../Wrapper_2";
import { EditorState, convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
// import { draftToMarkdown } from "markdown-draft-js";
// draftToMarkdown(convertToRaw(editorState.getCurrentContent()))
import H2 from "../../../Globals/H2";
import FileInput from "../../../Globals/FileInput";
import InputDateTime from "../../../Globals/DateTimeInput";
import SearchInput from "../../../Globals/SearchInput";
import { routes } from "../../../../static_data/routes";

const breadcrumbItems = [
  {
    text: "MediaInvestorĀ®",
    route: routes.base,
  },
  {
    text: "Novedades",
    route: routes.mediaInvestor.news,
  },
  {
    text: "Alta nueva novedad",
    route: routes.mediaInvestor.createNew,
  },
];
// Mock data
const investor_group = [
  "Media Haus 1",
  "Media Haus 2",
  "Media Haus 3",
  "Media Haus 4",
  "Media Haus 5",
  "Media Haus 6",
  "Media Haus 7",
  "Media Haus 8",
  "Media Haus 9",
  "Media Haus 10",
  "Media Haus 11",
  "Media Haus 12",
];
const investors = [
  "Alvarez, Gabriel 29884321",
  "Alvarez, Gabriel 29884321",
  "Alvarez, Gabriel 29884321",
  "Alvarez, Gabriel 29884321",
  "Alvarez, Gabriel 29884321",
  "Alvarez, Gabriel 29884321",
  "Alvarez, Gabriel 29884321",
  "Alvarez, Gabriel 29884321",
  "Alvarez, Gabriel 29884321",
];

export default function CreateNew() {
  const [inputDate, setInputDate] = useState(new Date());
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const onEditorStateChange = (editorState) => {
    setEditorState(editorState);
  };
  const [active, setActive] = useState(false);

  return (
    <Wrapper_2 breadcrumbItems={breadcrumbItems} title="Alta nueva novedad">
      <div className="content-mobile-padding">
        <div className="grid-3-bigbreak">
          <div className="mi-create-new-step">
            <H2
              font="font-1"
              color="text-black-1"
              className="text-center"
              text={
                <>
                  <strong>PASO 1</strong> - InformaciĆ³n principal
                </>
              }
            />
            <hr />
            <div className="d-flex flex-column ">
              <label className="font-1">TĆ­tulo</label>
              <input
                className="common-input"
                onChange={() => {}}
                type="text"
                placeholder="SubtĆ­tulo"
              />
            </div>
            <div className="d-flex flex-column mt-1r">
              <label className="font-1">SubtĆ­tulo</label>
              <input
                className="common-input"
                onChange={() => {}}
                type="text"
                placeholder="SubtĆ­tulo"
              />
            </div>

            <FileInput
              label="Agregar imagen de portada"
              containerClassName="mt-1r"
              className="py-3"
            />

            <div className="d-flex flex-column mt-1r">
              <label className="font-1">PiĆ© de portada</label>
              <input
                className="common-input"
                onChange={() => {}}
                type="text"
                placeholder="PiĆ© de portada"
              />
            </div>

            <div className="d-flex flex-column mt-1r">
              <label className="font-1">Fecha*</label>
              <InputDateTime dateTime={inputDate} setDateTime={setInputDate} />
            </div>
          </div>

          <div className="mi-create-new-step d-flex flex-column align-items-start ">
            <H2
              font="font-1"
              color="text-black-1"
              className="text-center w-100p mb-0"
              text={
                <>
                  <strong>PASO 2</strong> - Contenido de la novedad
                </>
              }
            />
            <hr className="w-100 mt-1r mb-1r" />

            <div className="d-flex flex-column h-100">
              <div className="common-input py-3 h-100 d-flex flex-column">
                <Editor
                  wrapperClassName="w-100 flex-1 d-flex flex-column"
                  toolbarClassName="mb-2"
                  editorClassName="common-input mh-200 mt-1 flex-1 h-auto"
                  onEditorStateChange={onEditorStateChange}
                  editorState={editorState}
                />
                <FileInput
                  label=""
                  buttonText="AGREGAR ARCHIVO"
                  containerClassName="mt-1r"
                  className="py-3"
                />
              </div>
            </div>
          </div>

          <div className="mi-create-new-step">
            <H2
              font="font-1"
              color="text-black-1"
              className="text-center"
              text={
                <>
                  <strong>PASO 3</strong> - Tipo de novedad
                </>
              }
            />

            <hr />

            <div className="w-100p">
              <div className="d-flex flex-column">
                <label className="font-1">Novedad para grupo inversor</label>
                <div className="grid-3-col-min-2-col w-100p mt-1r">
                  {investor_group.map((group, i) => (
                    <Checkbox key={i} text={group} />
                  ))}
                </div>
              </div>

              <hr className="mb-1r" />

              <div className="d-flex flex-column">
                <label className="font-1">
                  Novedad exclusiva para todos los inversores
                </label>
                <div className="grid-3-col mt-1r">
                  {["Oportunidades"].map((group, i) => (
                    <Checkbox key={i} text={group} />
                  ))}
                </div>
              </div>

              <hr className="mb-1r" />

              <div className="d-flex flex-column">
                <label className="font-1">
                  Novedad exclusiva para un inversor
                </label>
                <SearchInput className="mt-1r" />
                <div className="mi-investor-checkboxes grid-2-col mt-1r">
                  {investors.map((investor, i) => (
                    <Checkbox key={i} text={investor} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mi-create-new-step mt-1r">
          <H2
            font="font-1"
            color="text-black-1"
            className="text-center"
            text={
              <>
                <strong>PASO 4</strong> - Finalizar alta de novedad
              </>
            }
          />
          <div className="w-50p m-auto">
            <hr />
            <div className="d-flex flex-row justify-content-center align-items-center gap-4">
              <button className="blue-button px-4">Publicar</button>
              <button className="blue-button px-4">Borrador</button>
            </div>
          </div>
        </div>
      </div>
    </Wrapper_2>
  );
}

function Checkbox({ is = false, text }) {
  const [checked, setChecked] = useState(is);

  return (
    <div className="d-flex align-items-center">
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
