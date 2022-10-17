import textStyles from "./TextStyles";
import TextView, { TextViewProps } from "./_base";

namespace Label {
    export const Large = (props: TextViewProps) => <TextView style={textStyles.labelLarge} {...props}></TextView>
    export const Medium = (props: TextViewProps) => <TextView style={textStyles.labelMedium} {...props}></TextView>
    export const Small = (props: TextViewProps) => <TextView style={textStyles.labelSmall} {...props}></TextView>
}

export default Label;