import AppWrapper from './shared/AppWrapper';
import { HeaderSections } from './shared/globalTypes';
import '../assets/WestwoodSans-Regular.ttf';

function App(): JSX.Element {
  return (
    <div>
      <AppWrapper section={HeaderSections.DEFAULT_SECTION}>
        🥔!
      </AppWrapper>
    </div>
  );
}

export default App;
