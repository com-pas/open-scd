/**
 * @deprecated
 */
export function newPendingStateEvent(promise, eventInitDict) {
    return new CustomEvent('pending-state', {
        bubbles: true,
        composed: true,
        ...eventInitDict,
        detail: { promise, ...eventInitDict?.detail },
    });
}
//# sourceMappingURL=waiter.js.map