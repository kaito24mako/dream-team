import { useState } from "react";
import Button from "../../components/common/button/Button";

function AddPlayerPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    position: "",
    rarity: "",
    offensiveRating: "",
    defensiveRating: "",
    overallRating: "",
    image: "",
    errors: {},
  });

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setIsSubmitting(true);
  }

  // function resetForm() {
  //   setFormData({
  //     fullName: user.name || "",
  //     teamName: user.teamName || "",
  //     email: user.email || "",
  //   });
  // }

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <p className="font-semibold">Full Name</p>
          <input
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className="input focus-within:outline-none focus-within:ring-0"
          />
        </div>

        <div className="flex flex-col gap-1">
          <p className="font-semibold">Team Name</p>
          <input
            name="teamName"
            value={formData.teamName}
            onChange={handleChange}
            className="input focus-within:outline-none focus-within:ring-0"
          />
        </div>

        <div className="flex flex-col gap-1">
          <p className="font-semibold">E-mail</p>
          <input
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            className="input focus-within:outline-none focus-within:ring-0"
          />
        </div>

        <div className="flex gap-3">
          <Button
            bgColor="primary"
            textColor="black"
            size="small"
            type="submit"
            className="p-4"
          >
            Save
          </Button>

          <Button
            className="bg-neutral-700 p-4"
            size="small"
            onClick={() => {
              // resetForm();
              setIsSubmitting(false);
            }}
          >
            Cancel
          </Button>
        </div>
      </form>
    </div>
  );
}
export default AddPlayerPage;
