import {Dimensions} from 'react-native'
const { width, height } = Dimensions.get("window");

//Guideline sizes are based on standard ~5" screen mobile device
const guidelineBaseWidth = 350;
const guidelineBaseHeight = 680;

const scale = size => {
    var baselineWidth = width;
    if (width > height) {
        baselineWidth = height;
    }

    return Math.trunc((baselineWidth / guidelineBaseWidth) * size);
};

export {scale};