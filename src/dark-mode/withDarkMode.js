import { compose, withState, withHandlers } from 'recompose';

const withDarkMode = compose(
    withState('theme', 'setTheme', 'light'),
    withHandlers({
        toggleTheme: ({ setTheme }) => targetTheme => {
            setTheme(targetTheme);
        }
    })
)

export default withDarkMode;
