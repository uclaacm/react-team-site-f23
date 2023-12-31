import { HeaderSections } from '../globalTypes';

/**
 * We can use our enum as the specified type that our HeaderProps recieves
 * Type our React Element with an interface
 */
export interface HeaderProps {
  section: HeaderSections;
}

export default function Header(props: HeaderProps): JSX.Element {
  return (
    <div id="header">
      <nav>
        <div>Welcome to the Fall 2023 React Team page! </div>
        {/* <div>
          Text Displayed is:
          {props.section}
        </div> */}
        {/* This is an example of using interfaces and enums! */}
      </nav>
    </div>
  );
}
