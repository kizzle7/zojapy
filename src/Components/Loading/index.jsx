import Logo from "../../Assets/loadstatee.png";
import "animate.css";
export const Loader = () => {
  return (
    <div className="w-100 animate__animated animate__pulse">
      <div class="pulseWrapper">
        <div class="pulse">
          <img src={Logo} width={70} />
        </div>
      </div>
    </div>
  );
};
