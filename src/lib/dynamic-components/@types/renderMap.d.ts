import { FlexProps } from '../Flex';
import { ImageProps } from '../Image';
import { TextProps } from '../Text';

interface renderTextProps extends TextProps {
    id: string;
}

interface renderImageProps extends ImageProps {
    id: string;
}

interface renderFlexProps extends FlexProps {
    id: string;
}
