import type {Preview} from '@storybook/nextjs-vite'
import {useEffect} from "react";
import {inter} from "@repo/ui/lib/fonts";

const withBodyClass = (Story) => {
    useEffect(() => document.body.classList.add(inter.className), []);

    return <Story/>;
};

const preview: Preview = {
    decorators: [withBodyClass],
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },

        a11y: {
            // 'todo' - show a11y violations in the test UI only
            // 'error' - fail CI on a11y violations
            // 'off' - skip a11y checks entirely
            test: 'todo'
        }
    },
};

export default preview;
