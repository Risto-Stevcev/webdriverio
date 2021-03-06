/**
 *
 * Click on an element.
 *
 * @param {String} ID ID of a WebElement JSON object to route the command to
 *
 * @see  https://code.google.com/p/selenium/wiki/JsonWireProtocol#/session/:sessionId/element/:id/click
 * @type protocol
 *
 */

import { ProtocolError } from '../utils/ErrorHandler'

let elementIdClick = function (id) {
    if (typeof id !== 'string' && typeof id !== 'number') {
        throw new ProtocolError('number or type of arguments don\'t agree with elementIdClick protocol command')
    }

    return this.requestHandler.create({
        path: `/session/:sessionId/element/${id}/click`,
        method: 'POST'
    })
}

export default elementIdClick
