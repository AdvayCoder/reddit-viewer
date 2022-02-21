import checkFileType from '../checkFileType';

describe('checkFileType', () => {
    it('returns image file type', () => {
        const fileType = checkFileType('test.png');
        const expected = 'image';

        expect(fileType).toEqual(expected);
    })

    it('returns video file type', () => {
        const fileType = checkFileType('test.mp4');
        const expected = 'video';

        expect(fileType).toEqual(expected);
    })

    it('returns image file type', () => {
        const fileType = checkFileType('test.invalid');
        const expected = 'invalid file type';

        expect(fileType).toEqual(expected);
    })

    it('deals with undefined inputs', () => {
        const fileType = checkFileType(undefined);
        const expected = null;

        expect(fileType).toEqual(expected);
    })
})