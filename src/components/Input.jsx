export default function Input({ title, textArea, ...props }) {
  let cssClasses =
    "w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600";
  if (textArea) cssClasses += " h-5.25";
  return (
    <p className="flex flex-col my-4 gap-1">
      <label className="text-sm uppercase text-stone-500 font-bold">
        {title}
      </label>

      {!textArea ? (
        <input className={cssClasses} {...props} />
      ) : (
        <textarea className={cssClasses} {...props} />
      )}
    </p>
  );
}
