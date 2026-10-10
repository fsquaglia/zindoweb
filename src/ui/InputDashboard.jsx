/**
 * Input de texto simple o multilínea según el límite de caracteres.
 * Si `limitCharacters` supera 60, renderiza un `<textarea>`; de lo contrario, un `<input>`.
 *
 * @param {Object}   props
 * @param {string}   [props.textLabel="Sin etiqueta"] - Etiqueta visible sobre el campo.
 * @param {string}   [props.value=""]                 - Valor controlado del campo.
 * @param {string|boolean} [props.value=""] - Valor controlado. Si es booleano, renderiza un toggle.
 * @param {number}   [props.limitCharacters=30]        - Máximo de caracteres permitidos. Si es >60, usa textarea.
 * @param {function} [props.onChange]                  - Callback que recibe el nuevo valor como string.
 * @param {boolean}  [props.allowsNull=false]          - Si es false, marca el campo como inválido cuando está vacío.
 */

export default function InputDashboard({
  textLabel = "Sin etiqueta",
  value = "",
  limitCharacters = 30,
  onChange = () => {},
  allowsNull = false,
}) {
  if (typeof value === "boolean") {
    // renderizar un toggle switch para valores booleanos
    return (
      <div className="flex items-center gap-2">
        <label className="text-sm font-medium">{textLabel}</label>
        <input
          type="checkbox"
          checked={value}
          onChange={(e) => onChange(e.target.checked)}
          className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
        />
      </div>
    );
  } else if (typeof value === "string") {
    const characterCount = value?.length || 0;
    const isEmpty = !value || value.trim() === "";
    const isInvalid = !allowsNull && isEmpty;
    const isMultiline = limitCharacters > 60;

    const sharedProps = {
      value,
      maxLength: limitCharacters,
      className: `w-full px-3 py-2 border rounded-md bg-gray-50 text-sm sm:text-base ${
        isInvalid ? "border-red-500" : "border-gray-300"
      }`,
      onChange: (e) => onChange(e.target.value),
    };

    return (
      <>
        <div className="flex justify-between items-center mb-2">
          <label className="text-xs sm:text-sm font-medium">{textLabel}</label>
          {limitCharacters && (
            <span className="text-xs text-gray-600">
              {characterCount} de {limitCharacters}
            </span>
          )}
        </div>
        {isMultiline ? (
          <textarea
            {...sharedProps}
            rows={4}
            className={`${sharedProps.className} resize-none`}
          />
        ) : (
          <input type="text" {...sharedProps} />
        )}
      </>
    );
  }
}
