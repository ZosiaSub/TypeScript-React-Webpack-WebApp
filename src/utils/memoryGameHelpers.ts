
interface MemoryImage {
    img: {
        contentType: string;
        data: string;
    };
    title: string;
    _id: string;
    src: string;
}
//`data:${imgType};base64, ${imageString}`
interface GeneratedImage {
    img: {
        contentType: string;
        data: string;
    };
    src: string;
    _id: string;
    newId: string;
}

const shuffle = (array: GeneratedImage[]): GeneratedImage[] => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
}
         

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const generateData = (images: MemoryImage[]): GeneratedImage[] => {
    let imagesArray: GeneratedImage[] = [];
    images.forEach((imgData) => {
        imagesArray = [...imagesArray, { newId: `${imgData._id}_1`, ...imgData }];
        imagesArray = [...imagesArray, { newId: `${imgData._id}_2`, ...imgData }];
    });
    return imagesArray;
}


export const prepareRandomCards = (images : MemoryImage[]): GeneratedImage[] => {
    const dataArray = generateData(images);
    return shuffle(dataArray)
}

export const checkIfPair = (selectedCards: string[]): boolean => {
    const firstImgId = selectedCards[0].slice(0, -2);
    console.log(firstImgId)
    const secondImgId = selectedCards[1].slice(0,-2);
    console.log(secondImgId)
    console.log(firstImgId === secondImgId)
    return firstImgId === secondImgId;
}

 