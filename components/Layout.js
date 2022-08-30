import { Content } from './Content.js'
import { Box } from './Box.js';

export const Layout = ({ children }) => (
    <Box
        css={{
            maxW: '100%',
            position: 'relative',
        }}
    >
        {children}
        <Content />
    </Box>
);
