import 'styled-components';
import appTheme from '@/theme';

type AppThemeInterface = typeof appTheme;

declare module 'styled-components' {
    export interface DefaultTheme extends AppThemeInterface {}
}
