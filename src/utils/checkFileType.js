const checkFileType = (resourceStr) => {

    if(resourceStr === null || resourceStr === undefined || resourceStr === NaN) {
        return null;
    }

    const resourceLinkType = resourceStr.split('/')[2];
    //example link: https://i.redd.it/z8cg4fh5n5j81.png
    //split by '/': ['https:', '', 'i.redd.it', 'z8cg4fh5n5j81.png']

    if(resourceLinkType === 'i.redd.it') {
        return 'image';
    } else if(resourceLinkType === 'v.redd.it') {
        return 'video';
    } else {
        return 'invalid file type';
    }
}

export default checkFileType;