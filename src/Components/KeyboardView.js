import React from 'react';
import { Animated, Keyboard, UIManager, Platform} from 'react-native'
import {currentlyFocusedField} from 'react-native/Libraries/Components/TextInput/TextInputState'


const MAX_BOTTOM_MARGIN = 10
const IS_ANDROID = Platform.OS === 'android';


class KeyboardView extends React.PureComponent{

    constructor(props){
        super(props);
        this.state={
          translateY: new Animated.Value(0)
        }

        this.keyboardDidShowListener = null;
        this.keyboardDidHideListener = null;
        this.didKeyboardHidden = true;
        this.prevAnimatedValue = 0;
        this.prevFoucsField = null;
    }

    componentDidMount(){
        this.setKeyboardListner();
    }

    componentWillUnmount(){
        this.removeKeyboardListner();
    }


    setKeyboardListner = () => {
        this.keyboardDidShowListener = Keyboard.addListener(
            'keyboardDidShow',
            this.onKeyboardDidShow,
          );
          this.keyboardDidHideListener = Keyboard.addListener(
            'keyboardDidHide',
            this.onKeyboardDidHide,
          );
    }

    removeKeyboardListner = () => {
        this.keyboardDidShowListener.remove();
        this.keyboardDidHideListener.remove();
    }

    onKeyboardDidShow =  (event) => {

        if(IS_ANDROID) {
            return;
        }

        const {endCoordinates} = event;

        const keyboardHeight = endCoordinates.height;
        const keyboardX= endCoordinates.screenX;
        const KeyboardY = endCoordinates.screenY;

        const currentFocusedInputNode =  currentlyFocusedField();


        
        UIManager.measureInWindow(currentFocusedInputNode, (x, y, width, height) => {
            const isInputBelowKeyboard = (y+height) >= KeyboardY;

            const isDifferentNode = this.prevFoucsField !== currentFocusedInputNode;
            this.prevFoucsField = currentFocusedInputNode;

            const isNoTransition = isDifferentNode && !this.didKeyboardHidden;
            const setAnimationValue = this.didKeyboardHidden ? 0: this.prevAnimatedValue;
            this.didKeyboardHidden = false;

            if(!isInputBelowKeyboard) {
                this.prevAnimatedValue = setAnimationValue;
                return;
            }

            const x1= x;
            const y1 = y;

            const x2 = x;
            const y2 = KeyboardY;

            const distance =  Math.sqrt(Math.pow(x2-x1, 2) +  Math.pow(y2-y1, 2));

            const marginBottom = typeof this.props.spaceBottom  === 'number' ? this.props.spaceBottom : MAX_BOTTOM_MARGIN
            this.animateViewUp(distance + height + marginBottom, isNoTransition);

        })

      

    }

    onKeyboardDidHide = () => {
        this.didKeyboardHidden = true;
        this.animateViewDown();
    }


    animateViewUp = (value, isFocusChangedWithoutDismissing) => {
        
        Animated.timing(this.state.translateY, {
            toValue: isFocusChangedWithoutDismissing ? -(this.prevAnimatedValue + value) : -value,
            duration: 100,
            useNativeDriver: true
        }).start(() => {
            this.prevAnimatedValue = isFocusChangedWithoutDismissing ? (this.prevAnimatedValue + value) : value;
        });
      
    }

    animateViewDown = () => {
        Animated.timing(this.state.translateY, {
            toValue: 0,
            duration: 100,
            useNativeDriver: true
        }).start();
    }


    render(){
        const { children,style={}, ...otherProps} = this.props;
        const {translateY} = this.state;
        return(

            <Animated.View 
            {...otherProps} 
            style={{
                ...style,
                transform: [
                    {
                        translateY
                    }
                ]
            }}
            >
             {children}
            </Animated.View>

        )
    }
}

export default KeyboardView;