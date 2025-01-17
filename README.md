# Node.js Server Hang on Delayed Response

This repository demonstrates a subtle bug in Node.js where a server can hang indefinitely if a response is not ended promptly.  The issue is particularly difficult to diagnose because it only surfaces when there's a delay before sending the response back to the client.

## Bug Description

The `bug.js` file contains a simple HTTP server.  If the `res.end()` method isn't called immediately after receiving a request, the server will hang. This occurs because the server doesn't close the connection until the response is fully sent.

## Solution

The `bugSolution.js` file presents the corrected code.  By ensuring `res.end()` is called within the `setTimeout` callback, the response is sent, allowing the connection to close and the server to continue processing requests normally.