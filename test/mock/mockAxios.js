const axios = require("axios");
const testAlbumData1 = '../../testData/testAlbumData1';

function readTestData(filePath)
{
    var fs =require('fs');
    return fs.readFileSync(filePath,'utf8');
}

function mockAlbums()
{
    axios.get.mockResolvedValue(
        readTestData(testAlbumData1)
    )
}

module.exports = mockAlbums

