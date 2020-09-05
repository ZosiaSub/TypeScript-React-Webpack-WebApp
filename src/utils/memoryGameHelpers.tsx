
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
    src: string;
    _id: string;
    newId: string;
}
       

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const generateMomoryCardsData = function(images: MemoryImage[]): GeneratedImage[] {
    let imagesArray: GeneratedImage[] = [];
    images.forEach((imgData) => {
        imagesArray = [...imagesArray, { newId: `${imgData._id}_1`, ...imgData }];
        imagesArray = [...imagesArray, { newId: `${imgData._id}_2`, ...imgData }];
    });
    return imagesArray;
}