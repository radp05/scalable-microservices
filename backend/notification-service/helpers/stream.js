
function sseMiddleware(req, res, next) {
    res.writeHead(200, {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive'
    });
    next();
}
exports.sseMiddleware = sseMiddleware;
