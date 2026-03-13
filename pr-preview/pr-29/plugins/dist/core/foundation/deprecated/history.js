export function newLogEvent(detail, eventInitDict) {
    return new CustomEvent('log', {
        bubbles: true,
        composed: true,
        ...eventInitDict,
        detail: { ...detail, ...eventInitDict?.detail },
    });
}
export function newIssueEvent(detail, eventInitDict) {
    return new CustomEvent('issue', {
        bubbles: true,
        composed: true,
        ...eventInitDict,
        detail: { ...detail, ...eventInitDict?.detail },
    });
}
//# sourceMappingURL=history.js.map