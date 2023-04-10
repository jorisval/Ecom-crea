const multer = require('multer');

const MIME_TYPES = {
    'image/jpg': 'jpg',
    'image/jpeg': 'jpg',
    'image/png': 'png'
};

const VIDEO_MIME_TYPES = {
    'video/mp4': 'mp4'
};

const storageProductImage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, 'images/products');
    },
    filename: (req, file, callback) => {
        const extension = MIME_TYPES[file.mimetype];
        const name = file.originalname.split(' ').join('_').split('.' + extension)[0];
        callback(null, name + Date.now() + '.' + extension);
    }
});
const storageClientResultImage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, 'images/client-results');
    },
    filename: (req, file, callback) => {
        const extension = MIME_TYPES[file.mimetype];
        const name = file.originalname.split(' ').join('_').split('.' + extension)[0];
        callback(null, name + Date.now() + '.' + extension);
    }
});
const storagePortfolioShop = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, 'images/portfolio-shops');
    },
    filename: (req, file, callback) => {
        const extension = MIME_TYPES[file.mimetype];
        const name = file.originalname.split(' ').join('_').split('.' + extension)[0];
        callback(null, name + Date.now() + '.' + extension);
    }
});
const storagePortfolioVideo = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, 'videos/portfolio-videos');
    },
    filename: (req, file, callback) => {
        const extension = VIDEO_MIME_TYPES[file.mimetype];
        const name = file.originalname.split(' ').join('_').split('.' + extension)[0];
        callback(null, name + Date.now() + '.' + extension);
    }
});
const storagePostImage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, 'images/posts');
    },
    filename: (req, file, callback) => {
        const extension = MIME_TYPES[file.mimetype];
        const name = file.originalname.split(' ').join('_').split('.' + extension)[0];
        callback(null, name + Date.now() + '.' + extension);
    }
});

const multerProductImage = multer({ storage: storageProductImage }).array('images');
const multerClientResultImage = multer({ storage: storageClientResultImage }).array('clientResultImage');
const multerPortfolioShop = multer({ storage: storagePortfolioShop }).array('portfolioShop');
const multerPortfolioVideo = multer({ storage: storagePortfolioVideo }).array('portfolioVideo');
const multerPostImage = multer({ storage: storagePostImage }).single('postImage');

module.exports = {
    multerProductImage,
    multerClientResultImage,
    multerPortfolioShop,
    multerPortfolioVideo,
    multerPostImage
};