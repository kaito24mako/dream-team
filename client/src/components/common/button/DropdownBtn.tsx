type Props = {
  buttonText: string;
  dropdownItems: string[];
  onClick?: (item: string) => void;
};

function DropdownBtn({ buttonText, dropdownItems, onClick }: Props) {
  return (
    <div className="dropdown dropdown-end">
      <button
        tabIndex={0}
        role="button"
        className="btn btn-xs sm:btn-sm btn-outline btn-primary m-1"
      >
        {buttonText}
      </button>
      <ul
        tabIndex={-1}
        className="dropdown-content menu bg-primary rounded-box z-1 w-52 p-2 shadow-sm"
      >
        {dropdownItems.map((item) => (
          <li key={item}>
            <button type="button" onClick={() => onClick(item)}>
              {item}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default DropdownBtn;
