import { Link } from "react-router-dom";

import Button from "../../common/button/Button";
import FadeInOnView from "../../animations/FadeInOnView";

function BottomSection() {
  return (
    <section className="lg:mt-20 bg-base-300 py-20 w-full">
      <FadeInOnView className="flex flex-col items-center text-center gap-5">
        <h2 className="text-5xl lg:text-6xl">
          Ready to Create Your <span className="text-primary">Legacy?</span>
        </h2>
        <p className="text-xl lg:text-2xl opacity-93">
          Create an account to get started.
        </p>
        <Link to="/register">
          <Button bgColor="secondary" textColor="black">
            Create Account
          </Button>
        </Link>
      </FadeInOnView>
    </section>
  );
}
export default BottomSection;
