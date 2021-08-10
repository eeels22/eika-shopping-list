// Project files
import WelcomeImage from "../assets/images/wall-decorations.jpg";

// Interface
interface WelcomeProps {
  newUser: boolean;
}

export const Welcome: React.FC<WelcomeProps> = ({ newUser }) => {
  // Components
  const newUserText = (
    <p>
      Welcome to EIKA! Keep track of your shopping list with this handy app.
      <br />
      Get started by adding a desired item to your list. You can then sort your
      shopping list by ascending name or price and mark items as bought.
    </p>
  );

  const returningUserText = (
    <p>
      Welcome back to EIKA's shopping list app!
      <br />
      Add a new item or view your bought items.
    </p>
  );

  const welcomeParagraph = newUser ? newUserText : returningUserText;

  return (
    <section className="welcome-container">
      <img
        src={WelcomeImage}
        alt="A selection of wall decorations"
        className="img-welcome"
      />
      <h1>Shopping list</h1>
      {welcomeParagraph}
    </section>
  );
};
