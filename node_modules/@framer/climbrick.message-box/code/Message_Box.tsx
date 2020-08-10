import * as React from "react";
import { PropertyControls, ControlType, Frame } from "framer";

// Define type of property
interface Props {
    messageBoxState: string;
    title: string;
    fontFamilyTitle: string;
    fontWeightTitle: number;
    fontSizeTitle: number;
    colorTitle: string;
    titleBottomMargin: number;
    message: string;
    fontFamilyMessage: string;
    fontWeightMessage: number;
    fontSizeMessage: number;
    colorMessage: string;
    width: number;
    height: number;
    padding: number;
    paddingPerSide: boolean;
    paddingTop: number;
    paddingRight: number;
    paddingBottom: number;
    paddingLeft: number;
    border: number;
    borderPerSide: boolean;
    borderTop: number;
    borderRight: number;
    borderBottom: number;
    borderLeft: number;
    radius: number;
    radiusPerSide: boolean;
    radiusTopLeft: number;
    radiusTopRight: number;
    radiusBottomRight: number;
    radiusBottomLeft: number;
    shadowX: number;
    shadowY: number;
    shadowBlur: number;
    shadowSpread: number;
    shadowColor: string;
    stateDefaultBackground: string;
    stateDefaultBorderColor: string;
    stateDefaultBorderWidth: number;
    stateInfoBackground: string;
    stateInfoBorderColor: string;
    stateInfoBorderWidth: number;
    stateSuccessBackground: string;
    stateSuccessBorderColor: string;
    stateSuccessBorderWidth: number;
    stateWarningBackground: string;
    stateWarningBorderColor: string;
    stateWarningBorderWidth: number;
    stateErrorBackground: string;
    stateErrorBorderColor: string;
    stateErrorBorderWidth: number;
}

export class Message_Box extends React.Component<Props> {

    // Set default properties
    static defaultProps = {
        messageBoxState: "typeDefault",
        title: "Title",
        fontFamilyTitle: "Noto Sans",
        fontWeightTitle: 800,
        fontSizeTitle: 15,
        colorTitle: "#3b393d",
        titleBottomMargin: 4,
        message: "Display your message here...",
        fontFamilyMessage: "Noto Sans",
        fontWeightMessage: 400,
        fontSizeMessage: 13,
        colorMessage: "#3b393d",
        height: 80,
        width: 400,
        padding: 16,
        paddingPerSide: false,
        paddingTop: 0,
        paddingRight: 0,
        paddingBottom: 0,
        paddingLeft: 0,
        border: 0,
        borderPerSide: true,
        borderTop: 0,
        borderRight: 0,
        borderBottom: 0,
        borderLeft: 4,
        radius: 0,
        radiusPerSide: false,
        radiusTopLeft: 0,
        radiusTopRight: 0,
        radiusBottomRight: 0,
        radiusBottomLeft: 0,
        shadowX: 0,
        shadowY: 1,
        shadowBlur: 4,
        shadowSpread:0,
        shadowColor: "rgba(0,0,0,.3)",
        stateDefaultBackground: "#eaeaea",
        stateDefaultBorderColor: "#777677",
        stateInfoBackground: "#e1ebf7",
        stateInfoBorderColor: "#2d74da",
        stateSuccessBackground: "#CEF3D1",
        stateSuccessBorderColor: "#00884b",
        stateWarningBackground: "#fbeaae",
        stateWarningBorderColor: "#fed500",
        stateErrorBackground: "#f7e6e6",
        stateErrorBorderColor: "#e62325",
    }

    // Items shown in property panel
    static propertyControls: PropertyControls = {
        title: { type: ControlType.String, title: "Title" },
        fontFamilyTitle: { type: ControlType.String, title: "Title Font" },
        fontWeightTitle: { type: ControlType.Enum,
            options: ['100', '200', '300', '400', '500', 
            '600', '700', '800'],
            optionTitles: ['100', '200', '300', '400', '500', 
            '600', '700', '800'],
            title: 'Title Weight'
        },
        fontSizeTitle: { type: ControlType.Number, title: "Title Size" },
        colorTitle: { type: ControlType.Color, title: "Title Color" },
        titleBottomMargin: { type: ControlType.Number, title: "Title Margin" },
        message: { type: ControlType.String, title: "Message" },
        fontFamilyMessage: { type: ControlType.String, title: "Msg Font" },
        fontWeightMessage: { type: ControlType.Enum,
            options: ['100', '200', '300', '400', '500', 
            '600', '700', '800'],
            optionTitles: ['100', '200', '300', '400', '500', 
            '600', '700', '800'],
            title: 'Msg Weight'
        },
        fontSizeMessage: { type: ControlType.Number, title: "Msg Size" },
        colorMessage: { type: ControlType.Color, title: "Msg Color" },
        padding: {
            type: ControlType.FusedNumber,
            toggleKey: "paddingPerSide",
            toggleTitles: ["Padding", "Padding per Side"],
            valueKeys: ["paddingTop", "paddingRight", "paddingBottom", "paddingLeft"],
            valueLabels: ["T", "R", "B", "L"],
            min: 0,
            title: "Padding"
        },
        radius: {
            type: ControlType.FusedNumber,
            toggleKey: "radiusPerSide",
            toggleTitles: ["Radius", "Radius per Side"],
            valueKeys: ["radiusTopLeft", "radiusTopRight", "radiusBottomRight", "radiusBottomLeft"],
            valueLabels: ["TL", "TR", "BR", "BL"],
            min: 0,
            title: "Radius"
        },
        border: {
            type: ControlType.FusedNumber,
            toggleKey: "borderPerSide",
            toggleTitles: ["Border", "Border per Side"],
            valueKeys: ["borderTop", "borderRight", "borderBottom", "borderLeft"],
            valueLabels: ["T", "R", "B", "L"],
            min: 0,
            title: "Border"
        },
        messageBoxState: {
            type: ControlType.Enum,
            options: ["typeDefault", "typeInfo", "typeSuccess", "typeWarning", "typeError"],
            optionTitles: ["Default", "Info", "Success", "Warning", "Error"],
            title: "Type"
        },
        stateDefaultBackground: { 
            type: ControlType.Color, 
            title: "Background",
            hidden(props) {
                if(props.messageBoxState == "typeDefault") {
                    return false
                } else {
                    return true
                }
            } 
        },
        stateDefaultBorderColor: { 
            type: ControlType.Color, 
            title: "Border Color",
            hidden(props) {
                if(props.messageBoxState == "typeDefault") {
                    return false
                } else {
                    return true
                }
            } 
        },
        stateInfoBackground: { 
            type: ControlType.Color, 
            title: "Background",
            hidden(props) {
                if(props.messageBoxState == "typeInfo") {
                    return false
                } else {
                    return true
                }
            } 
        },
        stateInfoBorderColor: { 
            type: ControlType.Color, 
            title: "Border Color",
            hidden(props) {
                if(props.messageBoxState == "typeInfo") {
                    return false
                } else {
                    return true
                }
            } 
        },
        stateSuccessBackground: { 
            type: ControlType.Color, 
            title: "Background",
            hidden(props) {
                if(props.messageBoxState == "typeSuccess") {
                    return false
                } else {
                    return true
                }
            } 
        },
        stateSuccessBorderColor: { 
            type: ControlType.Color, 
            title: "Border Color",
            hidden(props) {
                if(props.messageBoxState == "typeSuccess") {
                    return false
                } else {
                    return true
                }
            } 
        },
        stateWarningBackground: { 
            type: ControlType.Color, 
            title: "Background",
            hidden(props) {
                if(props.messageBoxState == "typeWarning") {
                    return false
                } else {
                    return true
                }
            } 
        },
        stateWarningBorderColor: { 
            type: ControlType.Color, 
            title: "Border Color",
            hidden(props) {
                if(props.messageBoxState == "typeWarning") {
                    return false
                } else {
                    return true
                }
            } 
        },
        stateErrorBackground: { 
            type: ControlType.Color, 
            title: "Background",
            hidden(props) {
                if(props.messageBoxState == "typeError") {
                    return false
                } else {
                    return true
                }
            } 
        },
        stateErrorBorderColor: { 
            type: ControlType.Color, 
            title: "Border Color",
            hidden(props) {
                if(props.messageBoxState == "typeError") {
                    return false
                } else {
                    return true
                }
            } 
        }
    }
    render() { 
        // Saving props as variables
        const {
            messageBoxState,
            title,
            titleBottomMargin,
            message,
            fontFamilyTitle,
            fontSizeTitle,
            fontWeightTitle,
            fontFamilyMessage,
            fontSizeMessage,
            fontWeightMessage,
            width,
            height,
            padding,
            paddingPerSide,
            paddingTop,
            paddingRight,
            paddingBottom,
            paddingLeft,
            colorTitle,
            colorMessage,
            border,
            borderPerSide,
            borderTop,
            borderRight,
            borderBottom,
            borderLeft,
            radius,
            radiusPerSide,
            radiusTopLeft,
            radiusTopRight,
            radiusBottomRight,
            radiusBottomLeft,
            shadowX,
            shadowY,
            shadowBlur,
            shadowSpread,
            shadowColor,
            stateDefaultBackground,
            stateDefaultBorderColor,
            stateInfoBackground,
            stateInfoBorderColor,
            stateSuccessBackground,
            stateSuccessBorderColor,
            stateWarningBackground,
            stateWarningBorderColor,
            stateErrorBackground,
            stateErrorBorderColor
        } = this.props

        // Variables
        let messageBoxBackground = stateDefaultBackground
        let messageBoxBorderColor = stateDefaultBorderColor 
        
        // Switch statement to determine state
        switch (messageBoxState) {
            case "typeDefault":
                messageBoxBackground = stateDefaultBackground
                messageBoxBorderColor = stateDefaultBorderColor
                break
            case "typeInfo":
                messageBoxBackground = stateInfoBackground
                messageBoxBorderColor = stateInfoBorderColor
                break
            case "typeSuccess":
                messageBoxBackground = stateSuccessBackground
                messageBoxBorderColor = stateSuccessBorderColor
                break
            case "typeWarning":
                messageBoxBackground = stateWarningBackground
                messageBoxBorderColor = stateWarningBorderColor
                break
            case "typeError":
                messageBoxBackground = stateErrorBackground
                messageBoxBorderColor = stateErrorBorderColor
                break
        }
        
        // Styling for component
        const style: React.CSSProperties = {
            backgroundColor: "rgba(255,255,255,0)",
        }

        const messageBoxStyle: React.CSSProperties = {
            height: height,
            width: width,
            padding: paddingPerSide ? paddingTop + "px " + paddingRight + "px " + paddingBottom + "px " + paddingLeft + "px" : padding,
            display: "flex",
            flexDirection: "column",
            justifyContent: "left",
            textAlign: "left",
            background: messageBoxBackground,
            // boxShadow: shadowX + "px " + shadowY + "px " + shadowBlur + "px " + shadowSpread + "px " + shadowColor,
            overflow: "hidden",
            borderWidth: borderPerSide ? borderTop + "px " + borderRight + "px " + borderBottom + "px " + borderLeft + "px" : border,
            borderColor: messageBoxBorderColor,
            borderStyle: "solid",
            borderRadius: radiusPerSide ? radiusTopLeft + "% " + radiusTopRight + "px " + radiusBottomRight + "px " + radiusBottomLeft + "px" : radius,
        }

        const titleStyle: React.CSSProperties = {
            fontFamily: fontFamilyTitle,
            fontSize: fontSizeTitle,
            fontWeight: fontWeightTitle,
            lineHeight: (fontSizeTitle * 1.5) + 'px',
            marginBottom: titleBottomMargin,
            color: colorTitle
        }

        const messageStyle: React.CSSProperties = {
            fontFamily: fontFamilyMessage,
            fontSize: fontSizeMessage,
            fontWeight: fontWeightMessage,
            lineHeight: (fontSizeMessage * 1.5) + 'px',
            color: colorMessage
        }

        return (
            <Frame width={width} height={height} style={style}>
                <div style={messageBoxStyle}>
                    <div style={titleStyle}>{title}</div>
                    <div style={messageStyle}>{message}</div>
                </div>
            </Frame>
        )
    }
}
