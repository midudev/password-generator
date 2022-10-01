import React from "react";
import useGenerarPass from "./hooks/useGenerarPass";

const GenerarPass = () => {
  const {
    INPUTS_INFORMATION,
    copiarClipboard,
    generarPassword,
    activarBaseFecha,
    setLongitud,
    incluirMayus,
    incluirMinus,
    incluirNumeros,
    incluirSimbolos,
    usingDate,
    setusingDate,
    password,
    longitud,
  } = useGenerarPass();
  return (
    <main className="h-screen bg-slate-900 flex flex-col items-center p-10 space-y-4">
      <h1 className="text-white text-center text-2xl font-semibold">
        G3N3R4T3 P4SSW0RD
      </h1>

      {password && (
        <div className="bg-slate-700 w-80 md:w-2/5 md:min-w-max  p-3 rounded flex justify-between items-center">
          <p className="text-white">{password}</p>
          <button
            onClick={copiarClipboard}
            type="button"
            className="bg-slate-800 p-2 rounded-md hover:bg-slate-900 transition-colors cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 text-blue-400"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"
              />
            </svg>
          </button>
        </div>
      )}

      <section className="bg-slate-700 w-80 md:w-2/5 md:min-w-max  px-5 py-5 rounded flex flex-col space-y-4">
        <div className="flex flex-col">
          <input
            type="range"
            name="length"
            id="length"
            className="w-full"
            min="1"
            max="20"
            value={longitud}
            step="1"
            onChange={(e) => setLongitud(e.target.value)}
          />
          <p className="text-white">
            Longitud de caracteres:{" "}
            <span className="text-blue-400 font-bold text-xl">{longitud}</span>
          </p>
        </div>

        {INPUTS_INFORMATION.map((informacion) => (
          <label
            key={informacion.for}
            htmlFor={informacion.for}
            className="flex gap-3 items-center text-white"
          >
            <input
              type="checkbox"
              name={informacion.for}
              id={informacion.for}
              className="h-4 w-4"
              checked={informacion.value}
              onChange={() => {
                informacion.setvalue(!incluirMayus);
                setusingDate(false);
              }}
            />
            {informacion.text}
          </label>
        ))}

        <label htmlFor="time" className="flex gap-3 items-center text-white">
          <input
            type="checkbox"
            name="time"
            id="time"
            className="h-4 w-4"
            checked={usingDate}
            onChange={activarBaseFecha}
          />
          Generar en base a la hora y fecha actual
        </label>

        <button
          type="button"
          onClick={generarPassword}
          disabled={
            ![
              incluirMayus,
              incluirMinus,
              incluirNumeros,
              incluirSimbolos,
              usingDate,
            ].includes(true)
          }
          className="w-full py-3 rounded bg-blue-500 font-semibold uppercase hover:bg-blue-600 transition-colors cursor-pointer text-white disabled:bg-blue-300 disabled:cursor-not-allowed"
        >
          Generar Contraseña
        </button>
      </section>
    </main>
  );
};

export default GenerarPass;
