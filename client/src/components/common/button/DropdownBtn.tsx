type Props = {
  buttonText: string;
  dropdownItems: string[];
};

function DropdownBtn({ buttonText, dropdownItems }: Props) {
  return (
    <div className="dropdown dropdown-end">
      <div
        tabIndex={0}
        role="button"
        className="btn btn-xs sm:btn-sm btn-outline btn-primary m-1"
      >
        {buttonText}
      </div>
      <ul
        tabIndex={-1}
        className="dropdown-content menu bg-primary rounded-box z-1 w-52 p-2 shadow-sm"
      >
        {dropdownItems.map((item) => (
          <li key={item}>
            <a>{item}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default DropdownBtn;
