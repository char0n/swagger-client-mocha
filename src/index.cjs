const SwaggerClient = require('swagger-client');

const resolve = async () => {
    return SwaggerClient.resolve({ url: "https://gist.githubusercontent.com/char0n/ef5ed5a2acfae0c97a238a43f75e138e/raw/4521d6f3f540e638f117241c26b4260c260a35df/openapi.json" });
}

module.exports = {
    resolve,
};
